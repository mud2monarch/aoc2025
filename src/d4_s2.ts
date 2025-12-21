const response = await fetch("https://adventofcode.com/2025/day/4/input", {
  headers: {
    Cookie: `session=${process.env.AOC_SESSION}`,
  },
});
const input = await response.text();
const test =
  "..@@.@@@@.\n@@@.@.@.@@\n@@@@@.@.@@\n@.@@@@..@.\n@@.@@@@.@@\n.@@@@@@@.@\n.@.@.@.@@@\n@.@@@.@@@@\n.@@@@@@@@.\n@.@.@@@.@.";

function mapLine(line: string): boolean[] {
  const result = line.split("").map((char) => char === "@");

  return result;
}

const parsedInput = input
  .trim()
  .split("\n")
  .map((line) => mapLine(line));

function removeRolls(state: boolean[][]): number {
  let numRolls = 0;

  for (let row = 0; row < state.length; row++) {
    for (let col = 0; col < state[row].length; col++) {
      let adjacentRolls = 0;

      for (let i = row - 1; i <= row + 1; i++) {
        for (let j = col - 1; j <= col + 1; j++) {
          if (i === row && j === col) continue;
          if (i < 0 || i >= state.length || j < 0 || j >= state[i].length)
            continue;
          if (state[i][j]) {
            adjacentRolls++;
          }
        }
      }
      if (adjacentRolls < 4 && state[row][col]) {
        numRolls++;
        state[row][col] = false;
      }
    }
  }
  return numRolls;
}

let rollsRemain = true;
let rollsRemoved = 0;
while (rollsRemain) {
  const rollsThisPass = removeRolls(parsedInput);
  rollsRemain = rollsThisPass > 0;
  rollsRemoved += rollsThisPass;
}

console.log(rollsRemoved);
// bun run src/d4_s2.ts  0.07s user 0.02s system 73% cpu 0.129 total
