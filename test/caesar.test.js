// Write your tests here!
var {expect} = require('chai')
const caesar = require("../src/caesar");
  ///error handling///
  describe("caesar", () => {
  it('should return false if the shift amount is 0', ()=>{
    const expect = false;
    const actual = caesar("thinkful", 3);
    expect(actual).to.equal(expect)
  })
  it('should return false if the shift amount is above 25', ()=>{
    const expect = false
    const actual = caesar('thinkful', 26)
    expect(actual).to.equal(expect)
  })
  it('should return false if the shift amount is less than -25', ()=>{
    const expect = false
    const actual = caesar('thinkful', -26)
    expect(actual).to.equal(expect)
  })


///encoding a message///
  it('should encode a message by shifting the letters', ()=>{
    const expect = 'wklqnixo'
    const actual = caesar('thinkful', 3)
    expect(actual).to.equal(expect)
  })
  it('should leaves spaces and other symbols as is', ()=>{
    const expect = 4
  })
});
