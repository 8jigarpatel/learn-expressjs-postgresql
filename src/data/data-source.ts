import { DataSource } from 'typeorm';

import AppSetting from './entities/AppSetting';

const dataSource = new DataSource({
  type: 'postgres',
  database: 'VenzuTech',
  url: '',
  // host: '',
  // port: 0,
  // username: 'username',
  // password: 'password',
  synchronize: true,
  migrationsRun: true,
  entities: [AppSetting],
  migrations: [],
});

export default dataSource;
