module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root@localhost',
  password: '',
  database: 'test',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  cli: {
    migrationsDir: __dirname + '/database/migrations',
  },
  migrations: [__dirname + '/database/migrations/*.{ts,js}'],
  synchronize: false,
};
