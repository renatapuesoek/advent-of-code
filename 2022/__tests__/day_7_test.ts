import * as fs from "fs";
import * as path from "path";
import {getMessageMarker, getPacketMarker} from "../day_6";
import {getDirectoriesSizeSum} from "../day_7";

const sampleData = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`

describe("Advent of Code Day 7", () => {

    it("returns the sum of directory sizes", () => {
        const actual = getDirectoriesSizeSum(sampleData)
        expect(actual).toBe(95437)
    });

    it("returns the sum of directory sizes file", () => {
        const myInput = fs.readFileSync(path.resolve(__dirname, '../day_7.txt'), {encoding: "utf-8", flag: "r"})
        const actual = getDirectoriesSizeSum(myInput)
        expect(actual).toBe(1989474)
    });
});
