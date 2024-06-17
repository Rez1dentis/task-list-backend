const { Pool } = require('pg');
require('dotenv').config();

export const pool = new Pool({
  connectionString:
    'postgres://default:qUpnNFs29OAt@ep-winter-bar-a4xljcon-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require?sslmode=require',
});

pool.connect((err) => {
  if (err) throw err;
  console.log('Connected to PostgresSQL successfully!');
});

export default pool;
