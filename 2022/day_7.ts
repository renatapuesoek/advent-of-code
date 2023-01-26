const MAXIMUM_DIR_SIZE = 100000;

const isCd = (command) => command.startsWith('$ cd');

const isFile = (command) => /^\d+/.test(command)

const getFileSize = (file) => parseInt(file.split(' ')[0])

export const getDirectoriesSizeSum = (data) => {
    const stack=[]
    const command=data.split('\n')
    const sizes = {}

    for (let i = 0; i < command.length ; i++) {
        if (isCd(command[i])) {
            const directory = command[i].split(' cd ')[1];
            if (directory === '..') {
                stack.pop()
            } else {
                stack.push(directory)
            }
        }
        if (isFile(command[i])) {
            let path = ''
            for (let j = 0; j < stack.length ; j++) {
                path += stack[j]
                if (!(path in sizes)) {
                    sizes[path] = 0
                }
                sizes[path] += getFileSize(command[i])
            }
        }
    }

    return Object.values(sizes)
        .filter((n) => n < MAXIMUM_DIR_SIZE)
        .reduce((sum: number, n: number) => sum+n, 0)
}