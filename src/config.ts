import 'dotenv/config';

export const port = process.env.PORT || 5000;

export const dataSourceConfig = {
  database: process.env.DB_database,
  host: process.env.DB_host,
  port: process.env.DB_port,
  username: process.env.DB_username,
  password: process.env.DB_password,
  url: process.env.DB_url,
  synchronize: process.env.DB_synchronize === 'true',
  migrationsRun: process.env.DB_migrationsRun === 'true',
};

export const loggingConfig = {
  enable: process.env.LOG_Enable === 'true',
  format: process.env.LOG_Format,
  fileName: process.env.LOG_FileName,
  fileRotationDays: process.env.LOG_FileRotationDays,
};
