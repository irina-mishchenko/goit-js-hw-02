"use strict";

const formatString = function(string) {
  const newArray = string.split('');
    if (newArray.length < 40) {
      const sameString = newArray.join(' ');
        return sameString;
    } else {
      const newArray = string.split('');
      newArray.splice(40);
      const newString = newArray.join(' ');
      return newString;
      console.log(newArray);
    }
  };
  
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  console.log(formatString('Curabitur ligula sapien.'));
  console.log(formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',));
