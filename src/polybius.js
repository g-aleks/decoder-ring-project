// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  let key = {
    11: "a",
    21: "b",
    31: "c",
    41: "d",
    51: "e",
    12: "f",
    22: "g",
    32: "h",
    42: "i/j",
    52: "k",
    13: "l",
    23: "m",
    33: "n",
    43: "o",
    53: "p",
    14: "q",
    24: "r",
    34: "s",
    44: "t",
    54: "u",
    15: "v",
    25: "w",
    35: "x",
    45: "y",
    55: "z",
  };

  
  function polybius(input, encode = true) {
    
    const inputArray = input.toLowerCase().split("");

    // if there is a space, this stores which index the space is at
    // the space will be removed from the string to allow us to check the length and easily group number pairs later on (this is why the index is split)
    let spaceIndex = [];
    if (inputArray.some((entry) => entry === " ")) {
      for (let index in inputArray) {
        if (inputArray[index] === " ") spaceIndex.push(index/2);
      }
    }
    // creates space-less string
    const noSpace = inputArray.reduce((acc, entry) => {
      if (entry != " ") acc.push(entry);
      return acc;
    }, []);
    // returns false if there is an odd number of characters
    if (encode === false && noSpace.length % 2 != 0) {
      return false;
    }
    // calls the respective encode or decode function
    return encode? _encode(inputArray): _decode(noSpace, spaceIndex)
  }
  
  function _encode(inputArray){
    // reduces through the array and returns its respective string of numbers according to the key
    return inputArray.reduce((acc, letter)=>{
      if (letter === " "){acc.push(letter)}
      else if (letter === "i" || letter === "j"){acc.push("42")}
      else {
        for (let number in key){
          if (key[number] === letter) acc.push(number)
        }
      }
      return acc;
    },[])
    .join("")
  }

  function _decode(noSpace, spaceIndex){
    // if the index is even, that index and the next are concatenated and pushed to the number array
    // [1,2,3,4] becomes [12,34]
    let numberArray = [];
    for (let indexStr in noSpace) {
      const index = Number(indexStr);
      if (index % 2 === 0) {
        numberArray.push(noSpace[index] + noSpace[index+1]);
      }
    }
    // reduces through the new number array and returns its respective string of letters according to the key
    let results = numberArray.reduce((acc, number) => {
      acc.push(key[number]);
      return acc;
    }, []);
    // if there was a space in the original message, the space is added back in the correct index
    if (spaceIndex.length > 0) {
      for (let number of spaceIndex) results.splice(number, 0, " ");
    }
    return results.join("");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
