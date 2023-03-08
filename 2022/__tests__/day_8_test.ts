import * as fs from "fs";
import * as path from "path";
import { countVisibleTrees, findMaxScenicScore } from "../day_8";

const sampleData = `30373
25512
65332
33549
35390`;

describe("Advent of Code Day 8", () => {
  it("returns the sum of visible trees", () => {
    const actual = countVisibleTrees(sampleData);
    expect(actual).toBe(21);
  });

  it("returns the sum of visible trees file", () => {
    const myInput = fs.readFileSync(path.resolve(__dirname, "../day_8.txt"), {
      encoding: "utf-8",
      flag: "r",
    });
    const actual = countVisibleTrees(myInput);
    expect(actual).toBe(1854);
  });

  it("returns the highest scenic score", () => {
    const actual = findMaxScenicScore(sampleData);
    expect(actual).toBe(8);
  });

  it("returns the highest scenic score file", () => {
    const myInput = fs.readFileSync(path.resolve(__dirname, "../day_8.txt"), {
      encoding: "utf-8",
      flag: "r",
    });
    const actual = findMaxScenicScore(myInput);
    expect(actual).toBe(527340);
  });
});
