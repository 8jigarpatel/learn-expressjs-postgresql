import { DataSource } from 'typeorm';
import 'dotenv/config';

const dataSource = new DataSource({
  type: 'postgres',
  database: process.env.DB_Name,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_Username,
  password: process.env.DB_Password,
  url: process.env.DB_URL,
  synchronize: false,
  migrationsRun: true,
  entities: [`${__dirname}/entity/*.{ts,js}`],
  migrations: [`${__dirname}/migrations/*.{ts,js}`],
});

export default dataSource;
