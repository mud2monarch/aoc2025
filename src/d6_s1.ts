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

const numbers: number[][] = problemArray
  .slice(0, -1)
  .map((line) => line.map(Number));

function doCephalopodMath(
  col: number,
  numbers: number[][],
  problems: string[],
): number {
  // Each row should have the same number of columns as problem types
  if (numbers[col]!.length !== problems.length) {
    throw new Error(
      "Mismatch between columns and problem types for column ${col}.",
    );
  }

  let sum = 0;
  if (problems[col] === "*") {
    sum = 1;
    for (let row = 0; row < numbers.length; row++) {
      sum *= numbers[row]![col]!;
    }
  } else if (problems[col] === "+") {
    for (let row = 0; row < numbers.length; row++) {
      sum += numbers[row]![col]!;
    }
  }

  return sum;
}

let total = 0;
for (let col = 0; col < numbers[0]!.length; col++) {
  total += doCephalopodMath(col, numbers, problemType);
}

console.log(total);
