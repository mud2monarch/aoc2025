let cursor = 50;
let accumulator = 0;

const response = await fetch("https://adventofcode.com/2025/day/1/input", {
  headers: {
    Cookie: `session=53616c7465645f5f3d34245b0eb7c5abc84c6942a3488b68591d9a05f60d8a2c4fa691c07eb4828ec4eb3ee0d37f508f72d2da8b59bc5d0d02df7de81efd91fe`,
  },
});

const text = await response.text();
const lines: string[] = text.split("\n").filter(Boolean);

lines.forEach((line) => {
  const dir = line[0];

  if (dir === "R") {
    cursor += parseInt(line.slice(1));
  } else if (dir === "L") {
    cursor -= parseInt(line.slice(1));
  } else {
    throw new Error(`Invalid direction: ${dir}`);
  }

  while (cursor < 0) {
    cursor += 100;
  }

  if (cursor > 99) {
    cursor %= 100;
  }

  if (cursor === 0) {
    accumulator += 1;
  }
});

console.log(accumulator);
// bun run d1_s1.ts  0.02s user 0.02s system 31% cpu 0.141 total
