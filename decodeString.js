/*
Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer.

For s = "4[ab]", the output should be decodeString(s) = "abababab"
For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"
*/

const decodeString = string => {
  let decoded = '';
  const matchArr = string.match(/\d.*?\]+/g)[0]; // need the first element of the array
  if (matchArr) {
    let substring = matchArr[0];
    const multiplier = +substring[0];
    const end = substring.length - 1;
    const newString = substring.slice(2, end);

    for (let i = 0; i < multiplier; i++) {
      decoded += decodeString(newString);
    }
  } else {
    decoded += string;
  }

  return decoded;
};

// console.log(decodeString('4[ab]'));
decodeString('2[b3[a]]');
