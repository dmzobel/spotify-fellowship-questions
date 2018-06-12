/*
Sort the letters in the string s by the order they occur in the string t. You can assume t will not have repetitive characters.

sortByString("weather", "therapyw") => "theeraw"
sortByString("good", "odg") => "oodg"
*/

const sortByString = (s, t) => {
  const letterCount = {};
  const sortedStrings = [];

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    if (letter in letterCount) {
      letterCount[letter]++;
    } else {
      letterCount[letter] = 1;
    }
  }

  for (let j = 0; j < t.length; j++) {
    const letter = t[j];
    if (letter in letterCount) {
      let letterStr = '';
      for (let k = 0; k < letterCount[letter]; k++) {
        letterStr += letter;
      }
      sortedStrings.push(letterStr);
    }
  }

  return sortedStrings.join('');
};
