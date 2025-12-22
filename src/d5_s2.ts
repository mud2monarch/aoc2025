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

const freshStrings = input.trim().split("\n\n").at(0)!;
const freshRanges = freshStrings
  .trim()
  .split("\n")
  .map((range) => range.split("-").map(Number))
  .sort((a, b) => a[0]! - b[0]!);

const deduplicatedRanges = freshRanges.reduce((acc, curr) => {
  if (acc.length === 0) {
    return [curr];
  } else {
    const lastRange = acc[acc.length - 1];
    if (curr[0] <= lastRange[1]) {
      lastRange[1] = Math.max(lastRange[1], curr[1]);
    } else {
      acc.push(curr);
    }
  }
  return acc;
}, [] as number[][]);

const availableCounter = deduplicatedRanges.reduce(
  (acc, [start, end]) => acc + end - start + 1,
  0,
);

console.log(availableCounter);
// bun run src/d5_s2.ts  0.02s user 0.02s system 28% cpu 0.140 total
