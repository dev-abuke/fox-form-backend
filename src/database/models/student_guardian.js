import { DataTypes, Model } from 'sequelize';

export default function (sequelize) {
    class StudentGuardian extends Model {
        static associate(models) {
            StudentGuardian.belongsTo(models.guardianType, { foreignKey: 'guardianTypeId' });
        }
    }
    StudentGuardian.init({
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
    }, {
        sequelize,
        modelName: 'studentGuardian',
    });

    return StudentGuardian;
}