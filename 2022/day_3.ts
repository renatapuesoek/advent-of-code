// a-z: 1-26
// A-Z: 27-52
export const getSumOfPriorities = (rucksacks) => {
    const score = "0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let sum = 0;

    for (const rucksack of rucksacks) {
        const firstPart = rucksack.slice(0, rucksack.length / 2);
        const secondPart = rucksack.slice(rucksack.length / 2);

        const duplicates = new Set<string>()

        for (const item of firstPart) {
            if (secondPart.includes(item)) {
                duplicates.add(item)
            }
        }
        for (const duplicate of duplicates) {
            sum += score.indexOf(duplicate)
        }
    } return sum
}

export const getSumOfPriorities2 = (rucksacks) => {
    const score = "0abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    let sum = 0;

    for (let i = 0; i < rucksacks.length; i+=3) {
        for (const item of rucksacks[i]) {
            if (rucksacks[i+1].indexOf(item) > -1 && rucksacks[i+2].indexOf(item) > -1) {
                sum += score.indexOf(item)
                break
            }
        }
    } return sum
}