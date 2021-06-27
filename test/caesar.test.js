var {expect} = require('chai')
const caesar = require("../src/caesar");

describe("caesar",()=>{
    it ("should exist",()=>{
        const actual = caesar()
        expect(actual).to.equal("hi");
    })
})