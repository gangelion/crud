import { createConnection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root@localhost',
        password: '',
        database: 'test',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/../database/migrations/*.{ts,js}'],
        cli: {
          migrationsDir: __dirname + '/../database/migrations',
        },
        synchronize: false,
      }),
  },
];
