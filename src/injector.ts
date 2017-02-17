import * as db from "./db";


// offload functionality to testable function
export function inject(compA: number, compB: number): Promise<void> {
  return new Promise<void>((resolve, reject) => {

    // insert the game
    db.query("game").insert({}, "*")
      .then((games) => {
        return games[0];
      })
      .then((game) => {
        // insert the teams playing the game
        const promises = [
          db.query("team_game").insert({ team_id: compA, game_id: game.id }),
          db.query("team_game").insert({ team_id: compB, game_id: game.id })
        ];
        return Promise.all(promises);
      })
      .then(() => {
        resolve();
      })
      .catch((err) => {
        reject(err);
      });
  });
}
