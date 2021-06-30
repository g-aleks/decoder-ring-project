// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

// For the Caesar shift (example: caesar("Zebra Magazine", 3) => "cheud pdjdclqh"), the tests that you write should test that the following is true:

//     It returns false if the shift value is equal to 0, less than -25, greater than 25, or not present.
//     It ignores capital letters. (For example, the results of A Message and a message should be the same.)
//     When encoding, it handles shifts that go past the end of the alphabet. (For example, shifting z to the right by 3 should cause the z to wrap around to the front of the alphabet, so that z becomes c.)
//     It maintains spaces and other nonalphabetic symbols in the message, before and after encoding or decoding.


describe("Caesar", () => {

    describe("Error Handling", ()=>{

        it("should return false if the shift value is equal to 0", () => {
        const expected = false;
        const actual = caesar("thinkful", 0);
        expect(actual).to.eql(expected);
        });

        it("it should return false if the shift value is less than -25", () => {
        const expected = false;
        const actual = caesar("thinkful", -26);
        expect(actual).to.eql(expected);
        });

        it("should resturn false if the shift value is greater than 25", () => {
        const expected = false;
        const actual = caesar("thinkful", 26);
        expect(actual).to.eql(expected);
        });

        it("it should return false if no shift value is given", () => {
        const expected = false;
        const actual = caesar("thinkful");
        expect(actual).to.eql(expected);
        });
    })
        
    describe("Special Cases", ()=>{

        it("should ignore capital letters", ()=>{
            const expected = "wklqnixo";
            const actual = caesar("ThInkfUl", 3)
            expect(actual).to.equal(expected)
        })

        it("should handle shifts that go past the end of the alphabet", ()=>{
            const expected = "iwxczuja";
            const actual = caesar("thinkful", 15);
            expect(actual).to.equal(expected);
        })

        it("should maintain spaces and special characters after encoding", ()=>{
            const expected = "k3oo0 z0u!g";
            const actual = caesar("h3ll0 w0r!d", 3)
            expect(actual).to.eql(expected)
        })

        it("should maintain spaces and special characters after decoding", () => {
            const expected = "h3ll0 w0r!d";
            const actual = caesar("k3oo0 z0u!g", -3);
            expect(actual).to.eql(expected);
        });
    })
});