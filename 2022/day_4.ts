export const getFullyOverlapping=(input) => {
    let count = 0;
    const lines = input.split("\n")

    for (let i = 0; i < lines.length; i++) {
        const left = lines[i].split(",")[0]
        const right = lines[i].split(",")[1]

        const leftStart = Number.parseInt(left.split("-")[0], 10)
        const leftEnd = Number.parseInt(left.split("-")[1], 10)

        const rightStart = Number.parseInt(right.split("-")[0], 10)
        const rightEnd = Number.parseInt(right.split("-")[1], 10)

        if(rightStart >= leftStart && rightEnd <= leftEnd) {
            count+=1
            continue
        }
        if(leftStart >= rightStart && leftEnd <= rightEnd) {
            count+=1
        }
    }
    return count
}

export const getOverlapping=(input) => {
    let count = 0;
    const lines = input.split("\n")
    // 2-4,6-8

    for (let i = 0; i < lines.length; i++) {
        const [,ls,le,rs,re] = lines[i].match(/(\d+)-(\d+),(\d+)-(\d+)/)
        const left = lines[i].split(",")[0]
        const right = lines[i].split(",")[1]

        const leftStart = Number.parseInt(left.split("-")[0], 10)
        const leftEnd = Number.parseInt(left.split("-")[1], 10)

        const rightStart = Number.parseInt(right.split("-")[0], 10)
        const rightEnd = Number.parseInt(right.split("-")[1], 10)

        if(rightStart >= leftStart && rightEnd <= leftEnd) {
            count+=1
            continue
        }
        if(leftStart >= rightStart && leftEnd <= rightEnd) {
            count+=1
            continue
        }
        if(rightEnd >= leftStart && rightStart <= leftStart) {
            count+=1
            continue
        }
        if(leftEnd >= rightStart && leftEnd <= rightStart) {
            count+=1
            continue
        }
        if(rightEnd >= leftStart && rightEnd <= leftEnd) {
            count+=1
            continue
        }
        if(rightStart >= leftStart && rightStart <= leftEnd) {
            count+=1
        }
    }
    return count
}