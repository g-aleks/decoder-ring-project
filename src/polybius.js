// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    let key = {
      "11": "a",
      "21": "b",
      "31": "c",
      "41": "d",
      "51": "e",
      "12": "f",
      "22" :"g",
      "32": "h",
      "42": "i/j",
      "52": "k",
      "13": "l",
      "23": "m",
      "33": "n",
      "43": "0",
      "53": "p",
      "14": "q",
      "24": "r",
      "34": "s",
      "44": "t",
      "54": "u",
      "15": "v",
      "25": "w",
      "35": "x",
      "45": "y",
      "55": "z",
    }
  //this should create an array of each number (hi (2242) would be [22,42])  
    // for let index in input
      // if index = 0 || if index is odd {
        // concat input[index] and input[index] + 1 and push as a string to newArray
      //newArray.reduce((acc, letter)=>{
        //acc.push(key[letter])
      //},[])
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
