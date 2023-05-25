import { DataSource } from 'typeorm';

import AppSetting from './entity/AppSetting';

const dataSource = new DataSource({
  type: 'postgres',
  database: process.env.DB_Name,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_Username,
  password: process.env.DB_Password,
  url: process.env.DB_URL,
  synchronize: true,
  migrationsRun: false,
  entities: [AppSetting],
  migrations: [],
});

export default dataSource;
