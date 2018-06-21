/*
Question 3 -- changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time.

Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations.

Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations:

1¢, 1¢, 1¢, 1¢
1¢, 1¢, 2¢
1¢, 3¢
2¢, 2¢
*/

// memoize the possibilities
const memo = {};

function changePossibilities(target, denoms) {
  const sorted = denoms.sort((a, b) => a - b); // sorts in ascending order
  const key = `${target}:${sorted}`;

  if (memo[key]) return memo[key];
  else {
    let combinations = 0;

    for (let i = sorted.length - 1; i >= 0; i--) {
      const denom = sorted[i];

      if (denom === target) combinations++;
      else if (denom < target) {
        const diff = target - denom;
        combinations += changePossibilities(diff, sorted.slice(0, i + 1));
        // by slicing on `i + 1`, this ensures that array remains unchanged in the beginning of the recursive call, but get progressively smaller as we iterate through the array
      }
    }

    memo[key] = combinations;
    return combinations;
  }
}

// changePossibilities(4, [1, 2, 3]);
// changePossibilities(6, [1, 5]);
