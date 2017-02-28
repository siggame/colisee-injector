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

export default router;