import * as Injector from "../../src/injector"; 
import * as db from "../../src/db";
import * as chai from "chai";

export default function(): void{

    describe("Injector", function(){

        let createdTeams = [];

        before("populate the database with test data", function(){
            let promises = [
                db.query("team").insert({gitlab_id:1},"*"),
                db.query("team").insert({gitlab_id:2},"*"),
                db.query("team").insert({gitlab_id:3},"*")
            ]
            return Promise.all(promises)
                .then(results=>results.map(rows=>rows[0]))
                .then(teams=>{
                    console.log(JSON.stringify(teams));
                    teams.forEach(team=>createdTeams.push(team))
                })
        })

        describe("Inject", function(){
            it("should inject a game", function(){
                return Injector.inject(createdTeams[0].id, createdTeams[1].id)
                    .then(()=>{
                        db.query("game")
                            .then((games)=>{
                                console.log(JSON.stringify(games));
                                chai.expect(games.length).is.equal(1);
                            })
                    })
            })

        })

    })

}