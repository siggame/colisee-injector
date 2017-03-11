import * as express from "express";
import * as apiHandler from "../api";

const router: express.Router = express.Router();

router.post('/inject', (req, res, next) => {
    const comps: number[] = req.body.competitors

    apiHandler.inject(comps)
        .then(() => res.send())
        .catch(next);
});

router.get("/teams", (req, res, next) => {
    apiHandler.getShortTeams()
        .then(teams=>res.send(teams))
        .catch(next);
});

export { router as ApiRouter };