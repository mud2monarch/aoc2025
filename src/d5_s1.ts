const response = await fetch("https://adventofcode.com/2025/day/5/input", {
  headers: {
    Cookie: `session=${process.env.AOC_SESSION}`,
  },
});
const input = await response.text();
const test = `3-5
10-14
16-20
12-18

1
5
8
11
17
32`;

const [freshStrings, availableStrings] = input.trim().split("\n\n");
const freshRanges = freshStrings
  .trim()
  .split("\n")
  .map((range) => range.split("-").map(Number));
const availableIngredients = availableStrings.trim().split("\n").map(Number);

let freshCounter = 0;
for (const id of availableIngredients) {
  for (const [start, end] of freshRanges) {
    if (id >= start && id <= end) {
      freshCounter++;
      break;
    }
  }
}
console.log(freshCounter);
