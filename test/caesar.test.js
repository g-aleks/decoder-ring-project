// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("Caesar Shift", () => {
    it("should appropriately encode a message with letters at the beginning of the alphabet with a negative shift", ()=>{
        const expected = "qeb nrfzh yoltk clu grjmp lsbo qeb ixwv ald."
        const actual = caesar("the quick brown fox jumps over the lazy dog.", -3)
        expect(actual).to.eql(expected)
    })

    it("should appropriately decode a message with letters at the beginning of the alphabet with a negative shift", ()=>{
        const expected = "the quick brown fox jumps over the lazy dog"
        const actual = caesar("qeb nrfzh yoltk clu grjmp lsbo qeb ixwv ald", -3, false)
        expect(actual).to.eql(expected)
    })

    it("should accurately decode a message with a shift number > 20", ()=>{
        const expected = "the quick brown fox jumps over the lazy dog"
        const actual = caesar("pda mqeyg xnksj bkt fqilo kran pda hwvu zkc", 22, false)
        expect(actual).to.eql(expected)
    })

    it("should accurately decode a message with a shift number < -20", ()=>{
        const expected = "the quick brown fox jumps over the lazy dog"
        const actual = caesar("xli uymgo fvsar jsb nyqtw sziv xli pedc hsk", -22, false)
        expect(actual).to.eql(expected)
    })

    it("should accurately decode a full sentence", ()=>{
        const expected = "the quick brown fox jumps over the lazy dog"
        const actual = caesar("ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl", 5, false)
        expect(actual).to.equal(expected)
    })

    it("should accurately encode a full sentence", ()=>{
        const expected = "ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl"
        const actual = caesar("the quick brown fox jumps over the lazy dog", 5)
        expect(actual).to.equal(expected)
    })

    it("should accurately encode a message with a shift number > 20", ()=>{
        const expected = "pda mqeyg xnksj bkt fqilo kran pda hwvu zkc"
        const actual = caesar("the quick brown fox jumps over the lazy dog", 22)
        expect(actual).to.eql(expected)
    })

    it("should accurately encode a message with a shift number < 20", ()=>{
        const expected = "xli uymgo fvsar jsb nyqtw sziv xli pedc hsk"
        const actual = caesar("the quick brown fox jumps over the lazy dog", -22)
        expect(actual).to.eql(expected)
    })

    it("should accurately decode a completely random message with a randomized shift number between -25 and 25", ()=>{
        expected = "uif rvjdl cspxo gpy kvnqt pwfs uif mbaz eph"
        const actual = caesar("znk waoiq hxuct lud pasvy ubkx znk rgfe jum", 5, false)
        expect(actual).to.eql(expected)
    })

    it("should accurately encode a completely random message with a randomized shift number between -25 and 25", ()=>{
        expected = "ocz lpdxf wmjri ajs ephkn jqzm ocz gvut yjb"
        const actual = caesar("znk waoiq hxuct lud pasvy ubkx znk rgfe jum", 15)
        expect(actual).to.eql(expected)
    })
  });