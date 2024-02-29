import { DataTypes, Model } from 'sequelize';

export default function (sequelize) {
    class RolePermission extends Model {

        static associate(models) {

        }
    }

    RolePermission.init({
        roleName: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        permissionName: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
    }, {
        modelName: 'rolePermission',
        sequelize,
    });

    // uncomment if new
    // (async () => {
    //     await sequelize.sync();
    // })();

    return RolePermission;
}
