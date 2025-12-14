let cursor = 50;
let clicks = 0;

const response = await fetch("https://adventofcode.com/2025/day/1/input", {
  headers: {
    Cookie: `session=${process.env.AOC_SESSION}`,
  },
});

const text = await response.text();
const lines: string[] = text.split("\n").filter(Boolean);
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

lines.forEach((line) => {
  // Define a special case for starting at zero; avoids double-counting.
  const started_at_zero: boolean = cursor === 0;

  // Isolate direction from the instruction
  const dir = line[0];

  // Isolate distance and convert to hundreds and tens + ones
  const distance = parseInt(line.slice(1));
  const hundos = Math.floor(distance / 100);
  const tens = distance - hundos * 100;

  // console.log("Starting cursor: ", cursor, ". Line: ", line);

  // Hundreds are full rotations so we simply add them to the clicks
  clicks += hundos;

  if (dir === "L") {
    cursor -= tens;
    if (cursor < 0) {
      cursor += 100;
      if (!started_at_zero) {
        clicks++;
      }
    }
  } else if (dir === "R") {
    cursor += tens;

    if (cursor === 100) {
      cursor -= 100;
    } else if (cursor > 100) {
      cursor -= 100;
      clicks++;
    }
  } else {
    console.error("Invalid direction:", dir);
  }

  if (cursor % 100 === 0 && !started_at_zero) {
    clicks++;
  }

  // console.log("Clicks: ", clicks, ". Ending cursor: ", cursor);
});

console.log("Total clicks:", clicks);
