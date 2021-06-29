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
    43: "0",
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
    let spaceIndex = [];
    if (inputArray.some((entry) => entry === " ")) {
      for (let index in inputArray) {
        const splitIndex = index / 2;
        if (inputArray[index] === " ") spaceIndex.push(splitIndex);
      }
    }

    const noSpace = inputArray.reduce((acc, entry) => {
      if (entry != " ") acc.push(entry);
      return acc;
    }, []);

    if (encode === false && noSpace.length % 2 != 0) {
      return false;
    }
      
    if (!encode) return _decode(noSpace, spaceIndex)
    return _encode(inputArray)
  }
  
  function _encode(inputArray){
    let results = inputArray.reduce((acc, letter)=>{
      if (letter === " ") acc.push(letter)
      if (letter === "i" || letter === "j") acc.push("42")
      for (let number in key){
        if (key[number] === letter) acc.push(number)
      }
      return acc;
    },[])
    return results.join("")
  }

  function _decode(noSpace, spaceIndex){
    let numberArray = [];
    for (let indexStr in noSpace) {
      const index = Number(indexStr);
      if (index === 0 || index % 2 === 0) {
        const newIndex = index + 1;
        const concatNumber = noSpace[index] + noSpace[newIndex];
        numberArray.push(concatNumber);
      }
    }

    const preSpace = numberArray.reduce((acc, number) => {
      const letter = key[number];
      acc.push(letter);
      return acc;
    }, []);
    let results = preSpace;

    if (spaceIndex.length > 0) {
      for (let number of spaceIndex) {
        results.splice(number, 0, " ");
      }
    }
    return results.join("");
  }

  return {
    polybius,
  };

  //plans for later, write tests, move decode back into main polybius and only call encode if we're encoding since that's much simpler 
})();

module.exports = { polybius: polybiusModule.polybius };
