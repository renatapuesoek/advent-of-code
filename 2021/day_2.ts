export const getPositionScore = (input) => {
  const data = input.split("\n");

  let horizontalPosition = 0;
  let depth = 0;

  for (const movement of data) {
    const parts = movement.split(" ");
    switch (parts[0]) {
      case "down":
        depth += Number(parts[1]);
        break;
      case "up":
        depth -= Number(parts[1]);
        break;
      default:
        horizontalPosition += Number(parts[1]);
    }
  }

  return horizontalPosition * depth;
};

export const getPositionScore2 = (input) => {
  const data = input.split("\n");

  let horizontalPosition = 0;
  let depth = 0;
  let aim = 0;

  for (const movement of data) {
    const parts = movement.split(" ");
    switch (parts[0]) {
      case "down":
        aim += Number(parts[1]);
        break;
      case "up":
        aim -= Number(parts[1]);
        break;
      default:
        horizontalPosition += Number(parts[1]);
        depth += aim * Number(parts[1]);
    }
  }

  return horizontalPosition * depth;
};
