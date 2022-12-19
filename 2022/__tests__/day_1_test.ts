import {getMaxCalories, getTopThreeCalories} from "../day_1";
import * as fs from "fs";
import * as path from "path";

const input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`
describe("Advent of Code Day 1", () => {

    it("returns max calorie 1", () => {
        const actual = getMaxCalories(input)
        expect(actual).toBe(24000)
    });

    it("returns max calorie 2", () => {
        const myInput = fs.readFileSync(path.resolve(__dirname, '../day_1.txt'), {encoding: "utf-8", flag: "r"})
        const actual = getMaxCalories(myInput)
        expect(actual).toBe(70509)
    });

    it("returns sum of top 3 calorie 1", () => {
        const actual = getTopThreeCalories(input)
        expect(actual).toBe(45000)
    });

    it("returns sum of top 3 calorie 2", () => {
        const myInput = fs.readFileSync(path.resolve(__dirname, '../day_1.txt'), {encoding: "utf-8", flag: "r"})
        const actual = getTopThreeCalories(myInput)
        expect(actual).toBe(208567)
    });


});
