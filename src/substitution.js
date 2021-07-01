// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length != 26 ) return false
    let realAlphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    let decoded = [];
    let duplicateChecker = [];
    for (let i=0; i<alphabet.length; i++){
      let fakeLetter = alphabet[i]
      if (duplicateChecker.includes(fakeLetter)){
        return false;
      }
      duplicateChecker.push(fakeLetter)
      let newObj = {[fakeLetter]: realAlphabet[i]}
      decoded.push(newObj)
    }
    let inputArray = input.toLowerCase().split("")
    if (!encode) return _decoder(inputArray, decoded)
    return _encoder(inputArray, decoded)
  }

  function _encoder(input, decoded){
    let results = input.reduce((acc, letter)=>{
      if (letter === " "){
        acc.push(letter)
        return acc
      }
      for (let object of decoded){
        let values = Object.values(object)
        if (values.includes(letter)){ 
          let test = Object.keys(object)
          acc.push(test[0])
        }
      }
      return acc
    }, [])
    return results.join("")
  }

  function _decoder(inputArray, decoded){
    let results = inputArray.reduce((acc, letter)=>{
      if (letter === " "){
        acc.push(letter)
        return acc;
      }
      for (let object of decoded){
        if (object[letter]){
          acc.push(object[letter])
        }
      }
      return acc;
    },[])
    return results.join("")
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
