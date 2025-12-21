const response = await fetch("https://adventofcode.com/2025/day/3/input", {
  headers: {
    Cookie: `session=${process.env.AOC_SESSION}`,
  },
});
const input = await response.text();
const test =
  "987654321111111\n811111111111119\n234234234234278\n818181911112111";
const NUM_BATTERIES = 12;

function findLargestJoltage(bank: string): number {
  let joltage: string[] = [];
  let start = 0;
  for (let i = 1; i <= NUM_BATTERIES; i++) {
    const [digit, newIndex] = findLargestDigit(
      bank.slice(start, bank.length - (NUM_BATTERIES - i)),
    );
    joltage.push(digit);
    start += newIndex + 1;
  }
  return Number(joltage.join(""));
}

function findLargestDigit(subBank: string): [string, number] {
  const largestDigit = Math.max(...subBank.split("").map(Number));
  const largestIndex = subBank.indexOf(largestDigit.toString());
  return [largestDigit.toString(), largestIndex];
}

const answer = input
  .trim()
  .split("\n")
  .map((bank) => findLargestJoltage(bank))
  .reduce((sum, val) => sum + val, 0);

console.log(answer);
//bun run src/d3_s2.ts  0.02s user 0.01s system 21% cpu 0.160 total
