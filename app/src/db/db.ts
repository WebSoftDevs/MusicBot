import { dbHostname, dbLogin, dbName, dbPass } from '../config.json'; 
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(dbName, dbLogin, dbPass, {
    host: dbHostname,
    dialect: 'postgres',
    logging: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    dialectOptions: {
      application_name: 'postgres',
      useUTC: false,
      dateFirst: 1,
    },
    schema: 'public',
    define: {
      timestamps: false
    },
  });

(async () => {await sequelize.sync()})();

export { sequelize };