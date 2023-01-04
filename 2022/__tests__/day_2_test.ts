import {getScore, getScore2} from "../day_2";
import * as fs from "fs";
import * as path from "path";

const input = `A Y
B X
C Z`
describe("Advent of Code Day 2", () => {

    it("returns score", () => {
        const actual = getScore(input)
        expect(actual).toBe(15)
    });

    it("returns score file", () => {
        const myInput = fs.readFileSync(path.resolve(__dirname, '../day_2.txt'), {encoding: "utf-8", flag: "r"})
        const actual = getScore(myInput)
        expect(actual).toBe(13682)
    });

    it("returns score 2", () => {
        const actual = getScore2(input)
        expect(actual).toBe(12)
    });

    it("returns score file 2", () => {
        const myInput = fs.readFileSync(path.resolve(__dirname, '../day_2.txt'), {encoding: "utf-8", flag: "r"})
        const actual = getScore2(myInput)
        expect(actual).toBe(12881)
    });
});
