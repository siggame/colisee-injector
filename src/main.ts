import * as dotenv from "dotenv";
dotenv.config();

import * as path from "path";
import * as express from "express";

import * as vars from "./vars";
import * as db from "./db";
import * as injector from "./injector";
let app = express()

/**
 * @api {get} / index.html
 * @apiDescription Retrieve the index.html
 * @apiGroup Web
 */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

/**
 * @api {post} /api/inject Inject
 * @apiDescription Inject teams who wish to battle each other into the database
 * @apiGroup API
 * 
 * @apiParam {Number[]} teams The teams to schedule to fight each other.
 */
app.post('/api/inject', (req, res) =>{

    const compA: number = req.query.competetorA; // id
    const compB: number = req.query.competetorB; // id

    injector.inject(compA, compB)
        .then(()=>{
            res.send();
        })
        .catch((err)=>{
            res.status(400).send();
        });
});

app.listen(vars.PORT, ()=>{
    console.log(`Listening on port ${vars.PORT}...`);
});
