const DISK_SIZE = 70000000;
const UPDATE_SIZE = 30000000;
const MAXIMUM_DIR_SIZE = 100000;

const isCd = (command) => command.startsWith('$ cd');

const isFile = (command) => /^\d+/.test(command)

const getFileSize = (file) => parseInt(file.split(' ')[0])

const getSizes = (command): Record<string, number> => {
    const stack=[]
    const sizes = {}
    for (let i = 0; i < command.length; i++) {
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
            for (let j = 0; j < stack.length; j++) {
                path += stack[j]
                if (!(path in sizes)) {
                    sizes[path] = 0
                }
                sizes[path] += getFileSize(command[i])
            }
        }
    }
    return sizes
};

export const getDirectoriesSizeSum = (data) => {
    const command=data.split('\n')
    const sizes = getSizes(command);

    return Object.values(sizes)
        .filter((n) => n < MAXIMUM_DIR_SIZE)
        .reduce((sum, n) => sum+n, 0)
}

export const getSmallestDirToDelete = (data): number => {
    const command=data.split('\n')
    const sizes = getSizes(command);

    const diskFree = DISK_SIZE - sizes['/'];
    if (diskFree < UPDATE_SIZE) {
        const neededSpace = UPDATE_SIZE - diskFree
        const sortSizes = Object.values(sizes).sort((a, b) => a-b)
        for (let i = 0; i < sortSizes.length ; i++) {
            if (sortSizes[i] > neededSpace) {
                return sortSizes[i]
            }
        }
    }
    return 0
}