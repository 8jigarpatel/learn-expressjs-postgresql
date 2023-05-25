import { DataSource } from 'typeorm';

import AppSetting from './entities/AppSetting';

const dataSource = new DataSource({
  type: 'postgres',
  database: 'VenzuTech',
  // url: '',
  host: 'host.docker.internal',
  port: 5432,
  username: 'postgres',
  password: 'pgadmin',
  synchronize: true,
  migrationsRun: true,
  entities: [AppSetting],
  migrations: [],
});

export default dataSource;
