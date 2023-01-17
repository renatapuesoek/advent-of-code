import * as fs from "fs";
import * as path from "path";
import {getTopCrates, getTopCrates2} from "../day_5";

const stacks = [
    ['Z', 'N'],
    ['M', 'C', 'D'],
    ['P']
];

const stacks2 = [
    ['D', 'L', 'J', 'R', 'V', 'G', 'F'],
    ['T', 'P', 'M', 'B', 'V', 'H', 'J', 'S'],
    ['V', 'H', 'M', 'F', 'D', 'G', 'P', 'C'],
    ['M', 'D', 'P', 'N', 'G', 'Q'],
    ['J', 'L', 'H', 'N', 'F'],
    ['N', 'F', 'V', 'Q', 'D', 'G', 'T', 'Z'],
    ['F', 'D', 'B', 'L'],
    ['M', 'J', 'B', 'S', 'V', 'D', 'N'],
    ['G', 'L', 'D']
];

const instructions = `move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

describe("Advent of Code Day 5", () => {

    it("returns the top crates from the stacks", () => {
        const actual = getTopCrates(stacks, instructions)
        expect(actual).toBe("CMZ")
    });

    it("returns the top crates from the stacks file", () => {
        const instructionsInput = fs.readFileSync(path.resolve(__dirname, '../day_5.txt'), {encoding: "utf-8", flag: "r"})
        const actual = getTopCrates(stacks2, instructionsInput)
        expect(actual).toBe("QMBMJDFTD")
    });

    it("returns the top crates from the stacks 2", () => {
        const actual = getTopCrates2(stacks, instructions)
        expect(actual).toBe("MCD")
    });

    it("returns the top crates from the stacks file 2", () => {
        const instructionsInput = fs.readFileSync(path.resolve(__dirname, '../day_5.txt'), {encoding: "utf-8", flag: "r"})
        const actual = getTopCrates2(stacks2, instructionsInput)
        expect(actual).toBe("NBTVTJNFJ")
    });
});
