let cursor = 50;
let accumulator = 0;

const response = await fetch("https://adventofcode.com/2025/day/1/input", {
  headers: {
    Cookie: `session=53616c7465645f5f3d34245b0eb7c5abc84c6942a3488b68591d9a05f60d8a2c4fa691c07eb4828ec4eb3ee0d37f508f72d2da8b59bc5d0d02df7de81efd91fe`,
  },
});

const text = await response.text();
const lines: string[] = text.split("\n").filter(Boolean);
const slice: string[] = lines.slice(100, 120);
const test = [
  "L68",
  "L30",
  "R48",
  "L5",
  "R60",
  "L55",
  "L1",
  "L99",
  "R14",
  "L82",
  "R1000",
];

test.forEach((line) => {
  console.log("Line is ", line);
  const dir = line[0];
  let distance = parseInt(line.slice(1));

  if (dir === "L") {
    distance = distance * -1;
  }

  cursor += distance;

  if (cursor > 100 && cursor % 100 !== 0) {
    accumulator += Math.floor(cursor / 100);
    cursor %= 100;
  } else if (cursor > 100 && cursor % 100 === 0) {
    accumulator += Math.floor(cursor / 100) - 1;
    cursor %= 100;
  }
  // Issue: when cursor starts at 0 and moves L1 to 99.
  while (cursor <= -1) {
    accumulator += 1;
    cursor += 100;
  }

  if (cursor % 100 === 0) {
    accumulator += 1;
  }

  console.log("Cursor is ", cursor, "and new accumulator is ", accumulator);
});

console.log(accumulator);
