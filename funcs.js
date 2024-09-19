function capitalize(str) {
  if (str == undefined) {
    throw "no argument provided";
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  if (str == undefined) {
    throw "no argument provided";
  }
  let tempArr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    tempArr.push(str[i]);
  }
  return tempArr.join("");
}

const calculator = {
  add(a, b) {
    if (a == undefined || b == undefined) throw "undefined arguments";
    console.log(`a, b: ${a}, ${b}`);
    return Number(a) + Number(b);
  },
  subtract(a, b) {
    if (a == undefined || b == undefined) throw "undefined arguments";
    return Number(a) - Number(b);
  },
  multiply(a, b) {
    if (a == undefined || b == undefined) throw "undefined arguments";
    return Number(a) * Number(b);
  },
  divide(a, b) {
    if (a == undefined || b == undefined) throw "undefined arguments";
    if (b == 0) throw "cannot divide by 0";
    return Number(a) / Number(b);
  },
};

function caesarCipher(str, shift) {
  if (str == undefined || shift == undefined) throw "undefined arguments";
  if (!Number.isInteger(shift)) throw "shift must be an integer";
  let retval = "";
  for (let char of str) {
    retval += String.fromCharCode(getShiftedChar(char.charCodeAt(0), shift));
  }
  return retval;
}

function getShiftedChar(charCode, shift) {
  if (charCode >= 65 && charCode <= 90) {
    let asciiBase = 65;
    return ((charCode - asciiBase + shift) % 26) + asciiBase;
  } else if (charCode >= 97 && charCode <= 122) {
    let asciiBase = 97;
    return ((charCode - asciiBase + shift) % 26) + asciiBase;
  }
  return charCode;
}

function analyzeArray(arr) {
  if (arr == undefined) throw "undefined argument";
  if (!Array.isArray(arr)) throw "analyzeArray only accepts valid arrays";
  let retval = {
    min: 0,
    max: 0,
    average: 0,
    length: arr.length,
  };
  if (arr.length == 0) return retval;
  retval.min = arr[0];
  retval.max = arr[0];
  let runningTotal = 0;
  for (let i = 0; i < arr.length; i++) {
    let currNum = arr[i];
    if (isNaN(currNum)) throw "array must contain only numbers";
    if (currNum < retval.min) retval.min = currNum;
    if (currNum > retval.max) retval.max = currNum;
    runningTotal += currNum;
  }
  retval.average = runningTotal / arr.length;
  return retval;
}
export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
