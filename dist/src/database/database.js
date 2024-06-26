// import { Sequelize, DataTypes, Model } from 'sequelize';
// import dotenv from 'dotenv';
// dotenv.config();
// const sequelize = new Sequelize(
//   process.env.DB_NAME!,
//   process.env.DB_USER!,
//   process.env.DB_PASSWORD!,
//   {
//     host: process.env.DB_HOST,
//     dialect: 'postgres',
//   },
// );
// class CTask extends Model {
//   public id!: string;
//   public name!: string;
//   public isCompleted!: boolean;
//   public date!: string;
//   public readonly createdAt!: Date;
//   public readonly updatedAt!: Date;
// }
// CTask.init(
//   {
//     id: {
//       type: DataTypes.UUID,
//       allowNull: false,
//       primaryKey: true,
//     },
//     name: {
//       type: new DataTypes.STRING(128),
//       allowNull: false,
//     },
//     isCompleted: {
//       type: DataTypes.BOOLEAN,
//       defaultValue: false,
//     },
//     date: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     tableName: 'tasks',
//     sequelize,
//   },
// );
// sequelize.sync().then(() => console.log('База данных и таблица созданы!'));
// export { CTask, sequelize };
const { Pool } = require('pg');
require('dotenv').config();
const pool = new Pool({
    connectionString: 'postgres://default:qUpnNFs29OAt@ep-winter-bar-a4xljcon-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require?sslmode=require',
});
pool.connect((err) => {
    if (err)
        throw err;
    console.log('Connected to PostgresSQL successfully!');
});
module.exports = pool;
//# sourceMappingURL=database.js.map