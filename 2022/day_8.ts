export const countVisibleTrees = (data) => {
  let counter = 0;

  const rows = data
    .split("\n")
    .map((row) => row.split("").map((char) => parseInt(char, 10)));

  // Loop through each tree in the grid
  for (let y = 0; y < rows.length; y++) {
    for (let x = 0; x < rows[y].length; x++) {
      const currentTree = rows[y][x];
      let isVisible = true;

      // Check if the current tree is visible from the top
      if (y > 0) {
        for (let i = y - 1; i >= 0; i--) {
          if (rows[i][x] >= currentTree) {
            isVisible = false;
            break;
          }
        }
        if (isVisible) {
          counter++;
          continue;
        }
      } else {
        counter++;
        continue;
      }

      // Check if the current tree is visible from the bottom
      isVisible = true;
      if (y < rows.length - 1) {
        for (let i = y + 1; i < rows.length; i++) {
          if (rows[i][x] >= currentTree) {
            isVisible = false;
            break;
          }
        }
        if (isVisible) {
          counter++;
          continue;
        }
      } else {
        counter++;
        continue;
      }

      // Check if the current tree is visible from the left
      isVisible = true;
      if (x > 0) {
        for (let i = x - 1; i >= 0; i--) {
          if (rows[y][i] >= currentTree) {
            isVisible = false;
            break;
          }
        }
        if (isVisible) {
          counter++;
          continue;
        }
      } else {
        counter++;
        continue;
      }

      // Check if the current tree is visible from the right
      isVisible = true;
      if (x < rows[y].length - 1) {
        for (let i = x + 1; i < rows[y].length; i++) {
          if (rows[y][i] >= currentTree) {
            isVisible = false;
            break;
          }
        }
        if (isVisible) {
          counter++;
        }
      } else {
        counter++;
      }
    }
  }

  return counter;
};

export const findMaxScenicScore = (data) => {
  let maxScore = 0;

  const rows = data
    .split("\n")
    .map((row) => row.split("").map((char) => parseInt(char, 10)));

  for (let y = 0; y < rows.length; y++) {
    for (let x = 0; x < rows[y].length; x++) {
      const currentTree = rows[y][x];
      let score = 0;
      let scoreTop = 0;
      let scoreBottom = 0;
      let scoreRight = 0;
      let scoreLeft = 0;

      // Check the top direction
      for (let i = y - 1; i >= 0; i--) {
        scoreTop++;
        if (rows[i][x] >= currentTree) {
          break;
        }
      }

      // Check the bottom direction
      for (let i = y + 1; i < rows.length; i++) {
        scoreBottom++;
        if (rows[i][x] >= currentTree) {
          break;
        }
      }

      // Check the left direction
      for (let i = x - 1; i >= 0; i--) {
        scoreLeft++;
        if (rows[y][i] >= currentTree) {
          break;
        }
      }

      // Check the right direction
      for (let i = x + 1; i < rows[y].length; i++) {
        scoreRight++;
        if (rows[y][i] >= currentTree) {
          break;
        }
      }

      score = scoreRight * scoreTop * scoreLeft * scoreBottom;

      maxScore = Math.max(maxScore, score);
    }
  }

  return maxScore;
};
