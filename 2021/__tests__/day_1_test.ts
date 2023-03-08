import * as fs from "fs";
import * as path from "path";
import { countIcreases, countIcreasesThree } from "../day_1";

const input = `199
200
208
210
200
207
240
269
260
263`;

describe("Advent of Code Day 1 2021", () => {
  it("returns sum of increases", () => {
    const actual = countIcreases(input);
    expect(actual).toBe(7);
  });

  it("returns sum of increases file", () => {
    const myInput = fs.readFileSync(path.resolve(__dirname, "../day_1.txt"), {
      encoding: "utf-8",
      flag: "r",
    });
    const actual = countIcreases(myInput);
    expect(actual).toBe(1121);
  });

  it("returns the sum of increases sums", () => {
    const actual = countIcreasesThree(input);
    expect(actual).toBe(5);
  });

  it("returns the sum of increases sums file", () => {
    const myInput = fs.readFileSync(path.resolve(__dirname, "../day_1.txt"), {
      encoding: "utf-8",
      flag: "r",
    });
    const actual = countIcreasesThree(myInput);
    expect(actual).toBe(1065);
  });
});
