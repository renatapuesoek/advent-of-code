// A: Rock, B: Paper, C: Scissors
// X: Rock 1, Y: Paper 2, Z: Scissors 3
// win: 6, draw: 3, lost: 0
/**
 * A X = 1+3
 * A Y = 2+6
 * A Z = 3+0
 * B X = 1+0
 * B Y = 2+3
 * B Z = 3+6
 * C X = 1+6
 * C Y = 2+0
 * C Z = 3+3
 */
const gameScores = {
    "A X": 1+3,
    "A Y": 2+6,
    "A Z": 3+0,
    "B X": 1+0,
    "B Y": 2+3,
    "B Z": 3+6,
    "C X": 1+6,
    "C Y": 2+0,
    "C Z": 3+3,
}
export const getScore = (input) => {
    const games = input.split('\n')
    let score = 0;

    for (let i = 0; i < games.length; i++) {
        let game = games[i];
        let currentScore = gameScores[game]
        score+=currentScore

    }
    return score
}

// A: Rock, B: Paper, C: Scissors
// X: lost 0, Y: draw 3, Z: win 6
// Rock: 1, Paper: 2, Scissors: 3
/**
 * A X = Rock Scissors = 0+3
 * A Y = Rock Rock = 3+1
 * A Z = Rock Paper = 6+2
 * B X = Paper Rock = 0+1
 * B Y = Paper Paper = 3+2
 * B Z = Paper Scissors = 6+3
 * C X = Scissors Paper = 0+2
 * C Y = Scissors Scissors = 3+3
 * C Z = Scissors Rock = 6+1
 */
const gameScores2 = {
    "A X": 0+3,
    "A Y": 3+1,
    "A Z": 6+2,
    "B X": 0+1,
    "B Y": 3+2,
    "B Z": 6+3,
    "C X": 0+2,
    "C Y": 3+3,
    "C Z": 6+1,
}
export const getScore2 = (input) => {
    const games = input.split('\n')
    let score = 0;

    for (let i = 0; i < games.length; i++) {
        let game = games[i];
        let currentScore = gameScores2[game]
        score+=currentScore

    }
    return score
}