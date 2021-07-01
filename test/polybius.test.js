const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("Polybius", () => {

    describe("Encoding", () => {

        it("should translate both i and j to 42", () => {
            const expected = "1121314151122232424252132333435314243444541525354555";
            const actual = polybius("abcdefghijklmnopqrstuvwxyz");
            expect(actual).to.eql(expected);
        });

        it("should ignore capital letters", () => {
            const expected = "23513434112251";
            const actual = polybius("mEsSaGe");
            expect(actual).to.eql(expected);
        });

        it("should maintain spaces when encoding", ()=>{
            const expected = "11 23513434112251";
            const actual = polybius("a message")
            expect(actual).to.eql(expected)
        })
    });

    describe("Decoding", ()=>{
        
        it("should decode a message with multiple spaces", () => {
            const expected = "chad decoders keep spaces";
            const actual = polybius("31321141 415131434151243452 51515334 5311315134",false);
            expect(actual).to.eql(expected);
        });

        it("should translate 42 to i/j", () => {
            const expected = "i/j";
            const actual = polybius("42",false);
            expect(actual).to.eql(expected);
        });

        it("should exclude any numbers that are not a part of the key", () => {
            const expected = "buemem";
            const actual = polybius("215498745123164879465123", false);
            expect(actual).to.eql(expected);
        });
    })
    
})
