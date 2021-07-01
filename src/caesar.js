// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (!shift || shift < -25 || shift > 25) return false;
    if (encode === false) shift*= -1; // if decoding, we just shift the opposite direction
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    const inputArray = input.toLowerCase().split("")
    let results = ""
    for (let letter of inputArray){ 
      if (!letter.match(/[a-z]/)) {results+= letter; continue;}; // if not a char a-z, it is a space or special character and can just be added to the results string
      const index = alphabet.indexOf(letter) 
      let newIndex = index + shift; // shifts the index of the letter to get the index of the encoded/decoded letter
      if (newIndex > 25) {newIndex-=26}; // accounts for shifts past the end or beginning of the alphabet
      if (newIndex < 0) {newIndex+=26}
      results+= alphabet[newIndex]; // adds the shifted letter to the results string
    }
    return results;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
