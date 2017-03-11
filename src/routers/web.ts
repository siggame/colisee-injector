import * as express from "express";
import * as path from "path";
import * as qs from "querystring";
import * as rp from "request-promise";

import * as vars from "../vars";

const router: express.Router = express.Router();

router.use("/lib", express.static(path.join(__dirname, "../../bower_components")));
router.use("/", express.static(path.join(__dirname, "../../client")));

export {
    router as WebRouter
};