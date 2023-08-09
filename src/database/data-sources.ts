import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: 'postgres://osmait:admin123@postgres:5432/my_store',
  synchronize: false,
  logging: false,
  entities: ['src/**/*.model.ts'],
  migrations: ['src/database/migrations/*.ts'],
  migrationsTableName: 'migrations',
});
