import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export default mysql.createPool({
  host: process.env.MYSQL_HOST,
  password: process.env.MYSQL_ROOT_PASSWORD,
  user: process.env.MYSQL_ROOT_USER,
  database: process.env.MYSQL_DATABASE,
});
