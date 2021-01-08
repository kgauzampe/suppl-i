function stringCheck(str1, str2) {
  let len = str2.length;
  let reverseStr2 = str2.split("").reverse().join("");
  let reverseStr1 = str1.split("").reverse().join("");
  str1.split("").reverse().join("");
  reverseStr1 = reverseStr1.slice(0, len);
  if (reverseStr1 == reverseStr2) {
    return true;
  } else {
    return false;
  }
}
console.log(stringCheck("nbv", "v"));
