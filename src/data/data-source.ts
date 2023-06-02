import { log } from 'console';
import { DataSource } from 'typeorm';

import { dataSourceConfig } from '../config';

export const dataSource = new DataSource({
  type: 'postgres',
  database: dataSourceConfig.database,
  host: dataSourceConfig.host,
  port: Number(dataSourceConfig.port),
  username: dataSourceConfig.username,
  password: dataSourceConfig.password,
  url: dataSourceConfig.url,
  synchronize: dataSourceConfig.synchronize,
  migrationsRun: dataSourceConfig.migrationsRun,
  entities: [`${__dirname}/entities/*.{ts,js}`],
  migrations: [`${__dirname}/migrations/*.{ts,js}`],
});

export function initDataSource() {
  dataSource
    .initialize()
    .then(() => {
      log('data source initialized');
    })
    .catch((error) => {
      log(`data source ERROR: ${error}`);
    });
}
