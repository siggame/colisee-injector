import { RequestResponse } from "request";
import * as rp from "request-promise";

import * as vars from "./vars";

export function api(options: any, body: any={}): Promise<RequestResponse> {
    options.json = true;
    options.resolveWithFullResponse = true;
    options.baseUrl = `http://${vars.API_HOST}:${vars.API_PORT}/api/`;
    options.body = body;
    options.headers = {

    };
    return new Promise<RequestResponse>((resolve, reject)=>{
        rp(options)
            .then(resolve)
            .catch(reject);
    });
}