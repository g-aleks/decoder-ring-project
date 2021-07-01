// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length != 26 ) return false
    const realAlphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    // loops through the provided alphabet and checks for duplicates
    // it also assigns each letter of the fake alphabet to it's respective index in the real alphabet to create a key
    let key = [];
    let duplicateChecker = [];
    for (let i=0; i<alphabet.length; i++){
      const fakeLetter = alphabet[i]
      if (duplicateChecker.includes(fakeLetter)){
        return false;
      }
      duplicateChecker.push(fakeLetter)
      const newObj = {[fakeLetter]: realAlphabet[i]}
      key.push(newObj)
    }
    const inputArray = input.toLowerCase().split("")
    // calls the respective encode or decode function
    return encode? _encoder(inputArray, key): _decoder(inputArray, key)
  }

  function _encoder(input, key){
    // reduces through each letter in input to find the corresponding letter in the key
    // we need to access the letter object's key instead of value so the values and keys are separated
    let results = input.reduce((acc, letter)=>{
      if (letter === " "){
        acc.push(letter)
        return acc
      }
      for (let object of key){
        const values = Object.values(object)
        if (values.includes(letter)){ 
          const found = Object.keys(object)
          acc.push(found[0])
        }
      }
      return acc
    }, [])
    // returns the accumulator as a string
    return results.join("")
  }

  function _decoder(inputArray, decoded){
    // reduces through each letter in input to find the corresponding letter in the key
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
