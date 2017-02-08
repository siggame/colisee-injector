import * as chai from "chai";

describe('Main Test', function(){

    it("should make sure I'm sane", function(done){
        chai.expect(true).is.true;
        chai.expect(false).is.false;
        done();
    });

});