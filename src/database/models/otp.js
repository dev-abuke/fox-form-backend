import { DataTypes, Model } from 'sequelize';

export default function (sequelize) {
    class OTP extends Model {
        static associate(models) {
            OTP.belongsTo(models.user, { foreignKey: 'userId' });
        }
    }
    OTP.init({
        otp: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false,
        },
        userId: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        expiresAt: {
            type: DataTypes.DATE,
            allowNull: false,

        },
    }, {
        modelName: 'otp',
        sequelize,
    });

    OTP.afterCreate(async (otp) => {
        console.log('OTP db after created', otp.createdAt, otp.expiresAt, otp.createdAt.getTime());
        const createdAt = otp.createdAt;
        const expiresAt = new Date(createdAt.getTime() + 3 * 60000).toISOString(); 
        console.log("Expires at is: ", expiresAt) // 2 minutes in milliseconds
        otp.expiresAt = expiresAt;
    });

    return OTP;
}