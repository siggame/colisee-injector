import * as path from "path";
import * as express from "express";

import { inject } from "./injector";

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

    let p1 = req.query.player1;
    let p2 = req.query.player2;

    if(p1 == null || p2 == null) {
        return res.status(400).send();
    }
    
    // promise to inject
    inject([p1, p2])
        .then(()=>{
            // is good
            res.status(201).send();
        })
        .catch((err)=>{
            // is bad
            return res.status(400).send(err);
        });
});

app.listen(3000, ()=>{
    console.log("Listening on port 3000...");
});
