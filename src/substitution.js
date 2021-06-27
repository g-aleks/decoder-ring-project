// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // let realAlphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    // let decoded = [],
    // for (let i = 0; i<alphabet.length; i++){
    //   let fakeLetter = alphabet[i]
    //   let newObj = {fakeLetter: realAlphabet[i]}
    //   decoded.push(newObj)
    // }
    // let results = input.reduce((acc, letter)=>{
    //   acc.push(decoded[letter])
    //   return acc;
    // },[])
    // return results.join("")
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
