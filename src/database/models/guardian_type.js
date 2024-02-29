import { DataTypes, Model } from 'sequelize';

export default function (sequelize) {
    class GuardianType extends Model {
        static associate(models) {
            GuardianType.hasOne(models.studentGuardian, { foreignKey: 'guardianTypeId' });
        }
    }

    GuardianType.init({
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING(50),
        },
    }, {
        sequelize,
        modelName: 'guardianType',
    });

    return GuardianType;
}