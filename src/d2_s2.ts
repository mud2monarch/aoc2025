const response = await fetch("https://adventofcode.com/2025/day/2/input", {
  headers: {
    Cookie: `session=${process.env.AOC_SESSION}`,
  },
});
const input = await response.text();
const test =
  "11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124";

function isRepeatedPattern(number: number): boolean {
  const str = number.toString();

  for (let i = 1; i <= str.length / 2; i++) {
    if (str.length % i === 0) {
      const numRepeats = str.length / i;
      const pattern = str.slice(0, i);
      if (pattern.repeat(numRepeats) === str) {
        return true;
      }
    }
  }
  return false;
}

function sumInvalidIdsInRange(start: number, end: number): number {
  let acc = 0;

  for (let i = start; i <= end; i++) {
    if (isRepeatedPattern(i)) {
      acc += i;
    }
  }
  return acc;
}

const answer = input
  .trim()
  .split(",")
  .map((range) => range.split("-").map((strs) => Number(strs)))
  .reduce((total, [start, end]) => total + sumInvalidIdsInRange(start, end), 0);

console.log(answer);
