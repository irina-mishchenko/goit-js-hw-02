"use strict";

const findLongestWord = function(string) {
    let newArray = string.split(' ');
    let wordLength = 0;
    let theLongestWord;
  
    for (let i = 0; i < newArray.length; i += 1) {
      wordLength = newArray[1].length;
  
      if (newArray[i].length > wordLength) {
        theLongestWord = newArray[i];
  
        return theLongestWord;
      }
  
    }
  };

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); 
console.log(findLongestWord('Google do a roll')); 
console.log(findLongestWord('May the force be with you'));