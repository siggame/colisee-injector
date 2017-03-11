import * as _ from "lodash";
import * as rp from "request-promise";

import * as colisee from "./colisee";

export interface ShortTeam {
    name: string; 
    id: number;
};

export function inject(competitors: number[]): Promise<void> {
    return new Promise<void>((resolve, reject) => {
    colisee.api({uri: "games", method: "post"}, {teams: competitors})
        .then(_.noop)
        .then(resolve)
        .catch(reject);
    });
}

export function getShortTeams(): Promise<ShortTeam[]> {
    return new Promise<ShortTeam[]>((reject, resolve) => {
        colisee.api({uri: "teams", method: "get"})
            .then(response=>response.body)
            .then(teams => {
                return teams.map((team): ShortTeam=>{
                    return { id: team.id, name: team.name };
                });
            })
            .then(resolve)
            .catch(reject);
    });
}
