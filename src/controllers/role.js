import createError from 'http-errors';

import db from '@/database';

/**
 * POST /auth/role
 * Create role request
 */
export const createRole = async (req, res, next) => {

    try {
        const { name } = req.body;

        // Find role by name 
        const roleName = await db.models.role.findOne({ where: { name } });
        if (roleName) {
            return next(createError(400, 'Role name already exists!'));
        }

        const role = await db.models.role.create(req.body, {
            fields: ['name'],
        });

        return res.status(200).json({ msg: "Role created succesfully", RoleName: role.name });
    } catch (err) {
        return next(err);
    }
};