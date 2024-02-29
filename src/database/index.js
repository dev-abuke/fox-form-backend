import { Sequelize } from 'sequelize';

import * as config from '@/config/sequelize';

// import models
import userModel from './models/user';
import roleModel from './models/role';
import permissionModel from './models/permission';
import tutorModel from './models/tutor';
import studentModel from './models/student';
import guardianModel from './models/guardian';
import studentTutorModel from './models/student_tutor';
import studentTutorSessionsModel from './models/sudent_tutor_sessions';
import studentGuardianModel from './models/student_guardian';
import guardianTypeModel from './models/guardian_type';
import rolePermission from './models/role_permission';
import otp from './models/otp';

// Configuration
const env = process.env.NODE_ENV;
const sequelizeConfig = config[env];

// Create sequelize instance
const sequelize = new Sequelize(sequelizeConfig);
//  sequelize.sync();
// Import all model files
const modelDefiners = [
  userModel,
  roleModel,
  studentModel,
  permissionModel,
  rolePermission,
  otp,
  tutorModel,
  guardianModel,
  studentGuardianModel,
  guardianTypeModel,
  studentTutorModel,
  studentTutorSessionsModel,
];

// eslint-disable-next-line no-restricted-syntax
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

// Associations
Object.keys(sequelize.models)
  .forEach((modelName) => {
    if (sequelize.models[modelName].associate) {
      sequelize.models[modelName].associate(sequelize.models);
    }
  });

export default sequelize;
