import db from '@/database';
import createError from 'http-errors';
import { permissionHelper } from '@/helpers';


export default function hasPermission(permissionName) {
    // Get authorization header from request
    // permissionHelper.createPermissionsForAllModels();

    return async (req, res, next) => {
        // console.log("this is permission middleware", req.user.fullName);
        // const perm = await permissionHelper.createPermissionsForAllModels();
        // const blk = await db.models.permission.bulkCreate(perm);
        // if (blk) {
        //     console.log("the bulk isaaaaaa: ", blk);
        // }
        const ispermAvl = await db.models.rolePermission.findOne({
            where: {
                roleName: req.user.appRole,
                permissionName,
            }
        })

        console.log("fetched database here are results: ", ispermAvl)

        if (!ispermAvl) {
            return next(createError(401, 'You do not have permission to perform this action!'));
        }

        return next();
    }
}
