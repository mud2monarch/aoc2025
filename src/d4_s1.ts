const response = await fetch("https://adventofcode.com/2025/day/4/input", {
  headers: {
    Cookie: `session=${process.env.AOC_SESSION}`,
  },
});
const input = await response.text();
const test =
  "..@@.@@@@.\n@@@.@.@.@@\n@@@@@.@.@@\n@.@@@@..@.\n@@.@@@@.@@\n.@@@@@@@.@\n.@.@.@.@@@\n@.@@@.@@@@\n.@@@@@@@@.\n@.@.@@@.@.";

function mapLine(line: string): boolean[] {
  let result: boolean[] = [];

  for (let i = 0; i < line.length; i++) {
    if (line[i] === "@") {
      result.push(true);
    } else if (line[i] === ".") {
      result.push(false);
    } else {
      throw new Error(`Invalid character: ${line[i]}`);
    }
  }

  return result;
}

const parsedInput = input
  .trim()
  .split("\n")
  .map((line) => mapLine(line));

let numSpaces = 0;

for (let row = 0; row < parsedInput.length; row++) {
  for (let col = 0; col < parsedInput[row].length; col++) {
    let adjacentRolls = 0;

    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        if (i === row && j === col) continue;
        if (
          i < 0 ||
          i >= parsedInput.length ||
          j < 0 ||
          j >= parsedInput[i].length
        )
          continue;
        if (parsedInput[i][j]) {
          adjacentRolls++;
        }
      }
    }
    if (adjacentRolls < 4 && parsedInput[row][col]) {
      numSpaces++;
    }
  }
}
console.log(numSpaces);
// bun run src/d4_s1.ts  0.03s user 0.02s system 28% cpu 0.177 total
