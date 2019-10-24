import { ConnectionOptions } from "typeorm";

const connectionOptions: ConnectionOptions = {
  type: 'mysql',
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: ["src/entity/*.ts"],
  host: process.env.DB_ENDPOINT,
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
};

export default connectionOptions;
