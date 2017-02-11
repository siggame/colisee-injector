import * as path from "path";
import * as express from "express";

import * as db from "./db";

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
  
  // make a new game
  const newGame = {};
  db.query("game").insert(newGame, "*")
   .then((games)=> {
  		return games[0];
  })
  .then((game)=>{
    	const stuff = [ 
        db.query("team_game").insert({team_id: compA, game_id: game.id}, "*"),
        db.query("team_game").insert({team_id: compB, game_id: game.id}, "*")
      ];
      return Promise.all(stuff);
      //game.id
  })
  .then(()=>{
    res.send();
  })
  .catch((err)=>{
  	res.status(400).send();
  });
});

app.listen(3000, ()=>{
    console.log("Listening on port 3000...");
});
