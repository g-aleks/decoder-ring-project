// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // if statement to check for !shift || <-25 || >25
    // if encode = false, shift = shift * -1
    // 
    // array of letters "abcdefghijklmnopqrstuvwxyz".split("")
    // input.toLowerCase.split("")
    // create empty string to add results to
    // for each letter of input
      // if (!letter.match/[a-z]/) add letter (do not shift)
      // get index of letter in alphabet
      // add shift to index
      // if > 25, newIndex -26 : <-25, newIndex + 26
      // add letter from alphabet at newIndex
    // return now populated string
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
