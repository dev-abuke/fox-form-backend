import createError from 'http-errors';

import db from '@/database';
// Get all permissions
export const getAllPermissions = async (req, res, next) => {
    try {
        const permissions = await db.find();
        res.status(200).json(permissions);
    } catch (err) {
        next(err)
    }
};

// Get a single permission by ID
export const getPermissionByName = async (req, res, next) => {
    try {
        const permission = await db.findById(req.params.name);
        if (!permission) {
            return next(createError(400, 'Permission not found'));
        }
        res.status(200).json(permission);
    } catch (err) {
        next(err)
    }
};

// Create a new permission
export const createPermission = async (req, res, next) => {
    try {
        const { name } = req.body;

        const permissionName = await db.models.permission.findOne({ where: { name } });

        if (permissionName) {
            return next(createError(400, 'Permission already exists!'));
        }

        const permission = await db.models.permission.create(req.body, {
            fields: ['name'],
        });

        res.status(200).json({ msg: "Permission created succesfully", Permission: permission.name });
    } catch (err) {
        next(err)
    }
};

// Update an existing permission
export const updatePermission = async (req, res, next) => {
    try {
        const { name } = req.body;

        const permissionName = await db.models.permission.findOne({ where: { name } });

        if (!permissionName) {
            return next(createError(400, 'Permission does not exist!'));
        }

        const permission = await db.models.permission.update(req.body, {
            fields: ['name'],
        });

        res.status(200).json({ msg: "Permission updated succesfully", Permission: permission.name });
    } catch (err) {
        next(err)
    }
};

// Delete a permission
export const deletePermission = async (req, res, next) => {
    try {
        const { name } = req.body;

        const permissionName = await db.models.permission.findOne({ where: { name } });

        if (!permissionName) {
            return next(createError(400, 'Permission Does Not exist!'));
        }

        const permission = await db.models.permission.destroy(req.body, {
            fields: ['name'],
        });

        res.status(200).json({ msg: "Permission removed succesfully", Permission: permission.name });
    } catch (err) {
        next(err)
    }
};
