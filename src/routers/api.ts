import * as express from "express";
import * as injector from "../injector";

const router: express.Router = express.Router();

router.post('/inject', (req, res) => {
  console.log(JSON.stringify(req.body));
  const compA: number = parseInt(req.body.competetorA); // id
  const compB: number = parseInt(req.body.competetorB); // id

  injector.inject(compA, compB)
    .then(() => {
      res.send();
    })
    .catch((err) => {
      res.status(400).send();
    });
});

interface ShortTeam{
  name: string; 
  id: number;
};

router.get("/teams", (req, res) => {
  const body: ShortTeam[] = [
    {name: "team1", id: 3},
    {name: "team2", id: 4},
    {name: "team3", id: 6},
    {name: "team4", id: 5},
    {name: "team6", id: 7},
    {name: "team7", id: 8}
    ];
    res.send(body)
});

export default router;