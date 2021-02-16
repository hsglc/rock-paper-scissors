const scoreEl = document.getElementById("score");

let score = 0;

export const updateScore = (value) => {
    score += value;
    scoreEl.innerText = score;
  };