const response = await fetch("https://adventofcode.com/2025/day/4/input", {
  headers: {
    Cookie: `session=${process.env.AOC_SESSION}`,
  },
});
const input = await response.text();
