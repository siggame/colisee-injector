import * as db from "../../src/db";
import injectorTests from "./injector";

export default function(): void{

    describe("Integration Tests", function(){
        it("should connect to the database", function(){
            this.retries(5);
            return new Promise((resolve, reject)=>{
                db.query.raw("SELECT 1+1")
                .then(resolve)
                .catch(reject)
            });
        });
        injectorTests();
    });
};