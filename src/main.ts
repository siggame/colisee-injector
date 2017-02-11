import * as path from "path";
import * as express from "express";

import { inject } from "./injector";

let app = express()

/**
 * @api GET / Home
 */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

/**
 * @api POST /api/inject Inject
 */

const compA: number = req.query.competetorA; // id
  const compB: number = req.query.competetorB; // id

  db.query("user").insert({name: "bob", age: 18}, "*")
  
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
