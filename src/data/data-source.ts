import { DataSource } from 'typeorm';
import { log } from 'console';

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
  entities: [`${__dirname}/entity/*.{ts,js}`],
  migrations: [`${__dirname}/migrations/*.{ts,js}`],
});

export function initDataSource() {
  dataSource
    .initialize()
    .then(() => {
      log('data source initialized');
    })
    .catch((error) => {
      error(error);
    });
}
