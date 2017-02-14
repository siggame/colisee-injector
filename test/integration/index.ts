import * as db from "../../src/db";

export default function(){
    describe("Integration Tests", function(){
        it("should connect to the database", function(){
            this.retries(5);
            return new Promise((resolve, reject)=>{
                db.query.raw("SELECT 1+1")
                .then(resolve)
                .catch(reject)
            });
        });
    });
};