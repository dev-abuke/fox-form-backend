import { compare, hash } from 'bcrypt';
import { DataTypes, Model } from 'sequelize';
import db from '@/database';

import { tokenHelper, mailHelper } from '@/helpers';

export default function (sequelize) {

  class User extends Model {
    isAdmin(){
      return this.appRole === 'admin';
    }
    isTutor(){
      return this.appRole === 'tutor';
    }
    isGuardian(){
      return this.appRole === 'guardian';
    }
    isStudent(){
      return this.appRole === 'student';
    }
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
    get id() {
      return `${this.id}`;
    }

    generateToken(expiresIn = '1h') {
      const data = { id: this.id, email: this.email, role: this.appRole };
      return tokenHelper.generateToken(data, expiresIn);
    }

    generateBotToken(expiresIn = '180d') {
      const data = { id: this.id, email: this.email, role: this.appRole };
      return tokenHelper.generateToken(data, expiresIn);
    }

    validatePassword(plainPassword) {
      return compare(plainPassword, this.password);
    }

    sendMail(mail) {
      const payload = { ...mail, to: `${this.fullName} <${this.email}>` };
      return mailHelper.sendMail(payload);
    }
    async generateOtp(){
        
    }

    static associate(models) {
      User.belongsTo(models.role, { foreignKey: 'appRole' });
      User.hasOne(models.tutor, { foreignKey: 'userId' });
      User.hasOne(models.guardian, { foreignKey: 'userId' });
      User.hasOne(models.student, { foreignKey: 'userId' });
      User.hasOne(models.otp, { foreignKey: 'userId' });
    }
  }

  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    isEmailVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isPhoneVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    appRole: {
      type: DataTypes.STRING
    },
    firstName: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    phoneNumber: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: true,
    },
    gender: DataTypes.STRING(10),//fix on code for male and female only
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    modelName: 'user',
    sequelize,
  });

  User.addHook('beforeSave', async (instance) => {
    if (instance.changed('password')) {
      // eslint-disable-next-line no-param-reassign
      instance.password = await hash(instance.password, 10);
    }
  });

  // User.addHook('afterCreate', async (instance) => {
  //   // Send welcome message to user.
  //   try {
  //     const otpgen = tokenHelper.generateOTP();
      
  //     console.log("the generated otp is: ", otpgen);
  //     // Create otp for user 
  //     const otp = await db.models.otp
  //       .create({otp: otpgen, userId: instance.id}, {
  //         fields: ['otp', 'userId'],
  //       });
        
  //     console.log("the otp in generate otp: ", otp);
      
  //   const payload = {
  //     subject: 'Welcome to Kelem Tutors!',
  //     html: `Your Account Has Been Created Successfully! 
  //     <br>Please verify your email address to get started. Your OTP is: 
  //     <b>${otp.getDataValue('otp')}<b/>.`,
  //   };
  //   instance.sendMail(payload);
  //   } catch (err) {
  //     console.log("the error in generate otp: ", err);
  //   }
  // });

  User.addHook('afterDestroy', (instance) => {
    // Send good by message to user.
    const payload = {
      subject: 'Sorry to see you go',
      html: 'Your account is destroyed successfully!',
    };
    instance.sendMail(payload);
  });
  // User.sycn({force: true});

  // (async () => {
  //   await sequelize.sync();
  // })();

  return User;
}
