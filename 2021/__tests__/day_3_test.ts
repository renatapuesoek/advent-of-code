import * as fs from "fs";
import * as path from "path";
import { calculatePowerConsumption, getLifeSupportRating } from "../day_3";

const input = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`;

describe("Advent of Code Day 3 2021", () => {
  it("returns power consumption in decimal", () => {
    const actual = calculatePowerConsumption(input);
    expect(actual).toBe(198);
  });

  it("returns power consumption in decimal file", () => {
    const myInput = fs.readFileSync(path.resolve(__dirname, "../day_3.txt"), {
      encoding: "utf-8",
      flag: "r",
    });
    const actual = calculatePowerConsumption(myInput);
    expect(actual).toBe(3374136);
  });

  it("returns life support rating in decimal", () => {
    const actual = getLifeSupportRating(input);
    expect(actual).toBe(230);
  });

  it("returns life support rating in decimal file", () => {
    const myInput = fs.readFileSync(path.resolve(__dirname, "../day_3.txt"), {
      encoding: "utf-8",
      flag: "r",
    });
    const actual = getLifeSupportRating(myInput);
    expect(actual).toBe(4432698);
  });
});
