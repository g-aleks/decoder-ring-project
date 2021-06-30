const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    it("should decode a message with multiple spaces", ()=>{
        const expected = "chad decoders keep spaces"
        const actual = polybius("31321141 415131434151243452 51515334 5311315134",false);
        expect(actual).to.eql(expected)
    })
    it('should decode each letter correctly',()=>{
        const expected = "abcdefghi/ji/jklmnopqrstuvwxyz";
        const actual = polybius("1121314151122232424252132333435314243444541525354555", false);
        expect(actual).to.eql(expected)
    })
    it('should encode each letter correctly', ()=>{
        const expected = "1121314151122232424252132333435314243444541525354555";
        const actual = polybius("abcdefghijklmnopqrstuvwxyz");
        expect(actual).to.eql(expected);
    })
    it('should decode a random set of numbers from the key', () =>{
        const expected = "wcymfuztfhsfkh";
        const actual = polybius("2531452312545544123234125232", false);
        expect(actual).to.eql(expected)
    })
    it('should decode a random set of numbers 1-4', ()=>{
        const expected = "zhluuhvopfu";
        const actual = polybius("5532135454321543531254", false);
        expect(actual).to.eql(expected);
    })
    it('should exclude any numbers that are not a part of the key', ()=>{
        const expected = "buemem";
        const actual = polybius("215498745123164879465123", false)
        expect(actual).to.eql(expected);
    })
})
