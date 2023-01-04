import * as fs from "fs";
import * as path from "path";
import {getSumOfPriorities, getSumOfPriorities2} from "../day_3";

const rucksacks = [
    "vJrwpWtwJgWrhcsFMMfFFhFp",
    "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
    "PmmdzqPrVvPwwTWBwg",
    "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
    "ttgJtRGJQctTZtZT",
    "CrZsJsPPZsGzwwsLwLmpwMDw"
];

describe("Advent of Code Day 3", () => {

    it("returns score", () => {
        const actual = getSumOfPriorities(rucksacks)
        expect(actual).toBe(157)
    });

    it("returns score file", () => {
        const myInput = fs.readFileSync(path.resolve(__dirname, '../day_3.txt'), {encoding: "utf-8", flag: "r"})
        const actual = getSumOfPriorities(myInput.split("\n"))
        expect(actual).toBe(7980)
    });

    it("returns score 2", () => {
        const actual = getSumOfPriorities2(rucksacks)
        expect(actual).toBe(70)
    });

    it("returns score file 2", () => {
        const myInput = fs.readFileSync(path.resolve(__dirname, '../day_3.txt'), {encoding: "utf-8", flag: "r"})
        const actual = getSumOfPriorities2(myInput.split("\n"))
        expect(actual).toBe(2881)
    });
});
