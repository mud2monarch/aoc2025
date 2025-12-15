const response = await fetch("https://adventofcode.com/2025/day/3/input", {
  headers: {
    Cookie: `session=${process.env.AOC_SESSION}`,
  },
});
const input = await response.text();
const test =
  "987654321111111\n811111111111119\n234234234234278\n818181911112111";

function findLargestJoltage(input: string): number {
  let highest = Number(input[0]);
  let secondHighest: number | undefined = undefined;

  for (let i = 1; i < input.length - 1; i++) {
    const digit = Number(input[i]);
    if (digit > highest) {
      highest = digit;
      secondHighest = undefined;
    } else if (secondHighest === undefined || digit > secondHighest) {
      secondHighest = digit;
    }
  }

  if (secondHighest === undefined) {
    secondHighest = Number(input[input.length - 1]);
  } else if (Number(input[input.length - 1]) > secondHighest) {
    secondHighest = Number(input[input.length - 1]);
  }
  return highest * 10 + secondHighest;
}

const answer = input
  .trim()
  .split("\n")
  .map((bank) => findLargestJoltage(bank))
  .reduce((sum, val) => sum + val, 0);

console.log(answer);
// bun run src/d3_s1.ts  0.02s user 0.02s system 28% cpu 0.143 total
