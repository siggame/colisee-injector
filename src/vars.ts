import * as _ from "lodash";

export const API_HOST: string = _.defaultTo(process.env.API_HOST, "localhost");
export const API_PORT: number = _.defaultTo(process.env.API_HOST, 3000);
export const API_TOKEN: string = _.defaultTo(process.env.API_HOST, "API_TOKEN");

export const HOST: string = _.defaultTo(process.env.HOST, "localhost");
export const PORT: number = _.defaultTo(process.env.PORT, 3000);
