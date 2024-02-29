### Made With Love By Abuki

## Api Documentation
Api documentation of this project was created with [swagger](https://swagger.io/).  
You can access the swagger configuration file from [this link](https://app.swaggerhub.com/apis/mucahitnezir/express-starter/).  
You can also discover the interactive documentation by going to `/docs` when you run the application.

## Database
This project was made with my-sql as a databases and sequelize as a wrapper. You can change default dialect (postgres) in anytime.
To do this, firstly select your database from the table below.
Modify `dialect` property in `src/config/sequelize.js` and install required npm package(s) for this database.

For more info, visit [sequelize docs](https://sequelize.org/docs/v6/other-topics/dialect-specific-things/)

**Note:** The default and active database is postgresql.
If you want to use postgresql in your project, you don't need to make any changes.

| Database | Dialect | Required npm Package(s) |
| -------- | ------- | ----------------------- |
| MySQL    | mysql   | `yarn add mysql2`       |

### Usage of sequelize-cli
With sequelize-cli package, you can manage model, migration and seed files.
You can find more information with [document](https://sequelize.org/docs/v6/other-topics/migrations/). 

## Installation
1. Firstly, you have to install npm packages with ``yarn install`` command.
2. Create empty postgres database.
3. Create **.env** file by copying *.env.sample* file in **root directory**.
4. Modify .env file.
5. Use `yarn run db:migrate` command to create database tables.
6. Finally, your app will run successfully with ``yarn run start:dev`` command.

## Authentication Endpoints

| Route | HTTP Verb | Request Body | Description |
| --- | --- | --- | --- |
| /auth/register | `POST` | {"firstName": "John", "lastName": "Doe", "email": "john.doe@example.com", "password": "123456"} | Create new user. |
| /auth/login | `POST` | {"email": "john.doe@example.com", "password": "123456"} | Login endpoint. |
| /auth/me | `GET` | Empty | Fetch current user. |
| /auth/me | `PUT` | {"firstName": "John", "lastName": "Doe", "email": "john.doe@example.com"} | Update current user. |
| /auth/me | `DELETE` | Empty | Delete current user. |
| /auth/me/password | `PUT` | {"current": "current-password", "password": "new-password"} | Update password of current user. |

