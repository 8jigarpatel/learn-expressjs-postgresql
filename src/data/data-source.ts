import { DataSource } from 'typeorm';
import 'dotenv/config';

// import AppSetting from './entity/AppSetting';
// import { AddAppSettings1685065174702 } from './migrations/1685065174702-AddAppSettings';

const dataSource = new DataSource({
  type: 'postgres',
  database: process.env.DB_Name,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_Username,
  password: process.env.DB_Password,
  url: process.env.DB_URL,
  synchronize: Boolean(process.env.DB_Synchronize),
  migrationsRun: Boolean(process.env.DB_MigrationsRun),
  entities: [`${__dirname}/entity/*.{js,ts}`],
  migrations: [`${__dirname}/migrations/*.{js,ts}`],
});

export default dataSource;
