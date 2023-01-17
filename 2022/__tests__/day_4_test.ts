import * as fs from "fs";
import * as path from "path";
import {getFullyOverlapping, getOverlapping} from "../day_4";

const pairs = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`

describe("Advent of Code Day 4", () => {

    it("returns number of fully overlapping pairs", () => {
        const actual = getFullyOverlapping(pairs)
        expect(actual).toBe(2)
    });

    it("returns number of fully overlapping pairs file", () => {
        const myInput = fs.readFileSync(path.resolve(__dirname, '../day_4.txt'), {encoding: "utf-8", flag: "r"})
        const actual = getFullyOverlapping(myInput)
        expect(actual).toBe(605)
    });

    it("returns number of fully overlapping pairs 2", () => {
        const actual = getOverlapping(pairs)
        expect(actual).toBe(4)
    });

    it("returns number of fully overlapping pairs file 2", () => {
        const myInput = fs.readFileSync(path.resolve(__dirname, '../day_4.txt'), {encoding: "utf-8", flag: "r"})
        const actual = getOverlapping(myInput)
        expect(actual).toBe(914)
    });
});
