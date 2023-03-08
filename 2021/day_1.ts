export const countIcreases = (input) => {
  const data = input.split("\n").map((s) => parseInt(s, 10));

  let counter = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i] < data[i + 1]) {
      counter++;
    }
  }
  return counter;
};

export const countIcreasesThree = (input) => {
  const data = input.split("\n").map((s) => parseInt(s, 10));

  let counter = 0;

  for (let i = 0; i < data.length - 3; i++) {
    const a = data[i] + data[i + 1] + data[i + 2];
    const b = data[i + 1] + data[i + 2] + data[i + 3];

    if (a < b) {
      counter++;
    }
  }
  return counter;
};
