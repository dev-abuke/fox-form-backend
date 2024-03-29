"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.production = exports.test = exports.development = void 0;

require("dotenv/config");

const {
  DB_HOST,
  DB_PORT = 5432,
  DB_NAME,
  DB_USER,
  DB_PASSWORD
} = process.env;
const defaultConfig = {
  dialect: 'mysql',
  timezone: '+03:00',
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  host: DB_HOST,
  port: Number(DB_PORT),
  define: {
    paranoid: true
  }
};
const development = { ...defaultConfig
};
exports.development = development;
const test = { ...defaultConfig,
  logging: false
};
exports.test = test;
const production = { ...defaultConfig,
  logging: false
};
exports.production = production;