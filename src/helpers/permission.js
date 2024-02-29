import db from '@/database';

export const createPermissionsForAllModels = async () => {
    const permissions = [];

    // Read all the files in the models directory

    // Iterate over each file (model)
    await Promise.all(Object.keys(db.models).map(async (model) => {
        // Get the model name by removing the file extension

        // Create permissions for each CRUD operation
        const operations = ['create', 'read', 'update', 'delete'];

        await Promise.all(operations.map(async (operation) => {
            const permissionName = `${operation}_${model}`;
            permissions.push({ name: permissionName });
        }));
    }));

    console.log("the permissions are: ", permissions);

    return permissions;
};

export const normalizeModel = (role) => {

    if(role == 'tutor'){
        return db.models.tutor

    }
    if(role == 'student'){
        return db.models.student
        
    }
    if(role == 'guardian'){
        return db.models.guardian
        
    }

};

