export const getTopCrates = (stacks, instructions) => {
    const instructionsArray = instructions.split('\n');
    for (let i = 0; i < instructionsArray.length ; i++) {
        const [, amountS, fromS, toS] = instructionsArray[i].match(/move (\d+) from (\d+) to (\d+)/)
        const amount = parseInt(amountS)
        const from = parseInt(fromS)-1
        const to = parseInt(toS)-1

        for (let j = 0; j < amount; j++) {
            const crate = stacks[from].pop()
            stacks[to].push(crate)
        }
    }
    let result = ''
    for (let i = 0; i < stacks.length; i++) {
        result += stacks[i].pop()
    }
    return result
}

export const getTopCrates2 = (stacks, instructions) => {
    const instructionsArray = instructions.split('\n');
    for (let i = 0; i < instructionsArray.length ; i++) {
        const [, amountS, fromS, toS] = instructionsArray[i].match(/move (\d+) from (\d+) to (\d+)/)
        const amount = parseInt(amountS)
        const from = parseInt(fromS)-1
        const to = parseInt(toS)-1

        let tempStack = []
        for (let j = 0; j < amount; j++) {
            const crate = stacks[from].pop()
            tempStack.push(crate)
        }

        while (tempStack.length > 0) {
            const crate = tempStack.pop()
            stacks[to].push(crate)
        }
    }
    let result = ''
    for (let i = 0; i < stacks.length; i++) {
        result += stacks[i].pop()
    }
    return result
}

