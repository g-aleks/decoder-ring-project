const expect = require("chai").expect;
const { substitution } = require("../src/substitution");


describe("Substitution", ()=>{

    describe("Error Handling", ()=>{

        it("should return false if the given alphabet isn't exactly 26 characters long", ()=>{
            const expected = false
            const actual = substitution("message", "jinmklopuyfbsht")
            expect(actual).to.eql(expected);
        })
        it("should return false if there are any duplicate letters in the given alphabet", () => {
            const expected = false;
            const actual = substitution("message","abbcdefghijklmnopqrstuvwyx");
            expect(actual).to.eql(expected);
        });
        it("should return false if no alphabet is entered", ()=>{
            const expected = false;
            const actual = substitution("message")
            expect(actual).to.eql(expected)
        })
    })

    describe("Special Cases", ()=>{
        it("should correctly translate the given phrase, based on the alphabet given to the function", () => {
            const expected = "ykrrpik";
            const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
            expect(actual).to.eql(expected);
        });
        it("should maintain spaces when decoding", () => {
            const expected = "a message";
            const actual = substitution("p ykrrpik","plmoknijbuhvygctfxrdzeswaq",false);
            expect(actual).to.eql(expected);
        });
        it("should maintain spaces when encoding", () => {
            const expected = "p ykrrpik";
            const actual = substitution("a message", "plmoknijbuhvygctfxrdzeswaq");
            expect(actual).to.eql(expected);
        });
        it("should ignore capital letters", () => {
            const expected = "p ykrrpik";
            const actual = substitution("A meSsaGe", "plmoknijbuhvygctfxrdzeswaq");
            expect(actual).to.eql(expected);
        });
    })
    
})