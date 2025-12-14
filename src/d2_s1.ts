const response = await fetch("https://adventofcode.com/2025/day/2/input", {
  headers: {
    Cookie: `session=${process.env.AOC_SESSION}`,
  },
});
const input = await response.text();
const test =
  "11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124";

let accumulator = 0;

const strRanges: string[] = input.split(",");

const numRanges: [number | undefined, number | undefined][] = strRanges.map(
  (range) => {
    const [start, end] = range.split("-").map(Number);
    return [start, end];
  },
);
console.log(numRanges);

numRanges.forEach(([start, end]) => {
  if (start === undefined || end === undefined) {
    console.error("Invalid range: ", start, ",", end);
    return;
  }

  while (start <= end) {
    const numAsString = start.toString();
    const strLength = numAsString.length;

    if (strLength % 2 === 0) {
      const firstHalf = numAsString.substring(0, strLength / 2);
      const secondHalf = numAsString.substring(strLength / 2);
      if (firstHalf === secondHalf) {
        // console.log(start);
        accumulator += start;
      }
    }

    start++;
  }
});

console.log("Final answer:", accumulator);
