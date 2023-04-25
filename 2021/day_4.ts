class Board {
  marked: boolean[][] = [];

  won = false;

  constructor(public readonly nums: number[][]) {
    for (let y = 0; y < 5; y++) {
      this.marked[y] = [];
      for (let x = 0; x < 5; x++) {
        this.marked[y][x] = false;
      }
    }
  }

  mark(num: number) {
    for (let y = 0; y < 5; y++) {
      for (let x = 0; x < 5; x++) {
        if (this.nums[y][x] === num) {
          this.marked[y][x] = true;
        }
      }
    }
  }

  isWinner() {
    const rows = [0, 0, 0, 0, 0];
    const cols = [0, 0, 0, 0, 0];

    for (let y = 0; y < 5; y++) {
      for (let x = 0; x < 5; x++) {
        if (this.marked[y][x]) {
          rows[y]++;
          cols[x]++;
        }
        if (rows[y] === 5 || cols[x] === 5) {
          this.won = true;
          return true;
        }
      }
    }
    return false;
  }

  getScore(num) {
    let sum = 0;
    for (let y = 0; y < 5; y++) {
      for (let x = 0; x < 5; x++) {
        if (this.marked[y][x] === false) {
          sum += this.nums[y][x];
        }
      }
    }
    return num * sum;
  }
}

export const getFinalScore = (input) => {
  const [numbersLine, ...boardLines] = input.split("\n\n");
  const numbers = numbersLine.split(",").map(Number);
  const boards = boardLines
    .map((line) =>
      line
        .split("\n")
        .map((boardLine) => boardLine.trim().split(/\s+/).map(Number))
    )
    .map((b) => new Board(b));

  for (const num of numbers) {
    for (const board of boards) {
      board.mark(num);
      if (board.isWinner()) {
        return board.getScore(num);
      }
    }
  }

  return 0;
};

export const getFinalScoreOfLastWinnerBoard = (input) => {
  const [numbersLine, ...boardLines] = input.split("\n\n");
  const numbers = numbersLine.split(",").map(Number);
  let boards = boardLines
    .map((line) =>
      line
        .split("\n")
        .map((boardLine) => boardLine.trim().split(/\s+/).map(Number))
    )
    .map((b) => new Board(b));

  for (const num of numbers) {
    for (const board of boards) {
      board.mark(num);
      board.isWinner();
    }
    if (boards.length === 1 && boards[0].won) {
      return boards[0].getScore(num);
    }
    boards = boards.filter((b) => b.won === false);
  }

  return 0;
};
