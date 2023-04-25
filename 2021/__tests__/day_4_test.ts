import * as fs from "fs";
import * as path from "path";
import { getFinalScore, getFinalScoreOfLastWinnerBoard } from "../day_4";

const input = `7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7`;

describe("Advent of Code Day 4 2021", () => {
  it("returns final score", () => {
    const actual = getFinalScore(input);
    expect(actual).toBe(4512);
  });

  it("returns final score file", () => {
    const myInput = fs.readFileSync(path.resolve(__dirname, "../day_4.txt"), {
      encoding: "utf-8",
      flag: "r",
    });
    const actual = getFinalScore(myInput);
    expect(actual).toBe(60368);
  });

  it("returns final score of the last winner board", () => {
    const actual = getFinalScoreOfLastWinnerBoard(input);
    expect(actual).toBe(1924);
  });

  it("returns final score of the last winner board file", () => {
    const myInput = fs.readFileSync(path.resolve(__dirname, "../day_4.txt"), {
      encoding: "utf-8",
      flag: "r",
    });
    const actual = getFinalScoreOfLastWinnerBoard(myInput);
    expect(actual).toBe(17435);
  });
});
