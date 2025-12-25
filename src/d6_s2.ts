const response = await fetch("https://adventofcode.com/2025/day/6/input", {
  headers: {
    Cookie: `session=${process.env.AOC_SESSION}`,
  },
});
const input = await response.text();
const test = `123 328  51 64
 45 64  387 23
  6 98  215 314
*   +   *   + `;

const problemArray: string[][] = input
  .trim()
  .split("\n")
  .map((line) => line.trim().split(/\s+/));

const problemType: string[] = problemArray[problemArray.length - 1];

function doCephalopodMath(
  col: number,
  numbers: string[],
  problems: string,
): number {
  let sum = 0;
  let longestLen = 0;
  for (const n of numbers) {
    if (n.length > longestLen) longestLen = n.length;
  }
  for (let i = longestLen; i >= 0; i--) {
    // iterate through each numbers[] and destructure
  }
  return sum;
}

let total = 0;
// We assume that each row should have the same number of columns as problem types.
if (numbers[col]!.length !== problems.length) {
  throw new Error(
    "Mismatch between columns and problem types for column ${col}.",
  );
}

for (let col = 0; col < numbers[0]!.length; col++) {
  let column: string[] = [];
  for (let row = 0; row < numbers.length; row++) {
    column.push(numbers[row]![col]);
  }
  total += doCephalopodMath(col, numbers, problemType[col]);
}

console.log(total);
// 1. Break the text into a grid of numbers [0, len-2][] and operators [len-2, len-1]
// 2. For each column (doesn't matter if we go left-to-right or right-to-left):
// - Iterate through all numbers in the column and find the max length of the number. Q: I think there are two ways to do this. First, I can convert all numbers to strings and measure their lengths. Or, I can keep them in numeric form and find the max. Then, I can do something like let pow = 0; while (max /10 > 1){ max/10; pow++;}; what do you think is better? more efficient?
// - Now that I have the max length, I can do a loop. I think I'll just accumulate everything into an array and map it into a number then reduce it.
// - Starting at i=max_length and i--, for a given row, if the number has fewer significant digits than the current i, then it's 0. otherwise, take the character at position i (okay, answering my own question, sounds like i should treat everything as strings and then convert to numbers in the following step). and store it in the accumulator array.
// - Lastly, depending on the operator for this column, reduce the array and return the value.
