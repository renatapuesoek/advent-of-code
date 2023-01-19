import * as fs from "fs";
import * as path from "path";
import {getMessageMarker, getPacketMarker} from "../day_6";

const sampleData = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`

describe("Advent of Code Day 6", () => {

    it("returns the index of the first character after unique substring", () => {
        const actual = getPacketMarker(sampleData)
        expect(actual).toBe(7)
    });

    it("returns the index of the first character after unique substring file", () => {
        const myInput = fs.readFileSync(path.resolve(__dirname, '../day_6.txt'), {encoding: "utf-8", flag: "r"})
        const actual = getPacketMarker(myInput)
        expect(actual).toBe(1794)
    });

    it("returns the index of the message marker", () => {
        const actual = getMessageMarker(sampleData)
        expect(actual).toBe(19)
    });

    it("returns the index of the message marker file", () => {
        const myInput = fs.readFileSync(path.resolve(__dirname, '../day_6.txt'), {encoding: "utf-8", flag: "r"})
        const actual = getMessageMarker(myInput)
        expect(actual).toBe(2851)
    });
});
