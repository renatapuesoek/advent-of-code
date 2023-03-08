import * as fs from "fs";
import * as path from "path";
import { getPositionScore, getPositionScore2 } from "../day_2";

const input = `forward 5
down 5
forward 8
up 3
down 8
forward 2`;

describe("Advent of Code Day 2 2021", () => {
  it("returns position score", () => {
    const actual = getPositionScore(input);
    expect(actual).toBe(150);
  });

  it("returns position score file", () => {
    const myInput = fs.readFileSync(path.resolve(__dirname, "../day_2.txt"), {
      encoding: "utf-8",
      flag: "r",
    });
    const actual = getPositionScore(myInput);
    expect(actual).toBe(1804520);
  });

  it("returns position score 2", () => {
    const actual = getPositionScore2(input);
    expect(actual).toBe(900);
  });

  it("returns position score 2 file", () => {
    const myInput = fs.readFileSync(path.resolve(__dirname, "../day_2.txt"), {
      encoding: "utf-8",
      flag: "r",
    });
    const actual = getPositionScore2(myInput);
    expect(actual).toBe(1971095320);
  });
});
