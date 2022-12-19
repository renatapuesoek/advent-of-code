export const getMaxCalories = (input) => {
    const inputData = input.split('\n')
    let elfCalories = 0
    let maxCalorie = 0;

    inputData.forEach((item) => {
        if (item === "") {
            if (elfCalories > maxCalorie) {
                maxCalorie = elfCalories
            }
            elfCalories = 0;
            return;
        }
        elfCalories += Number.parseInt(item, 10)
    })

    return maxCalorie
}

export const getTopThreeCalories = (input) => {
    const inputData = input.split('\n')
    let elfCalories = [0]
    let index = 0;

    inputData.forEach((item) => {
        if (item === "") {
            index += 1
            elfCalories[index] = 0;
            return;
        }
        elfCalories[index] += Number.parseInt(item, 10)
    })

    elfCalories.sort((a, b) => {
        return b - a
    })
    return elfCalories[0] + elfCalories[1] + elfCalories[2]
}
