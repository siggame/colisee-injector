import * as _ from "lodash";

export const POSTGRES_HOST = _.defaultTo(process.env.POSTGRES_HOST, "localhost");
export const POSTGRES_PORT = _.defaultTo(process.env.POSTGRES_PORT, 5432);
export const POSTGRES_USER = _.defaultTo(process.env.POSTGRES_USER, "postgres");
export const POSTGRES_PASSWORD = _.defaultTo(process.env.POSTGRES_PASSWORD, "postgres");
export const POSTGRES_DB = _.defaultTo(process.env.POSTGRES_DB, "postgres");

export const PORT = _.defaultTo(process.env.PORT, 3000);