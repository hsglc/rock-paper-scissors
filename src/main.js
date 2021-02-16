import { updateScore } from "../src/score.js";

const choices = document.getElementById("choices");
const selection = document.querySelector(".selection");
const reset = document.getElementById("reset");
const userSelect = document.getElementById("user_select");
const computerSelect = document.getElementById("computer_select");


const closeRulesBtn = document.getElementById('close')
const modal = document.getElementById('modal')
const openRulesBtn = document.getElementById('open')


const pickRandomChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

const changeDisplay = (choicesDisplay, selectionDisplay) => {
  choices.style.display = choicesDisplay;
  selection.style.display = selectionDisplay;
};

const updateSelection = (selectionEl, choice) => {
  selectionEl.classList.remove("rock");
  selectionEl.classList.remove("paper");
  selectionEl.classList.remove("scissors");
  selectionEl.classList.add(choice);
  selectionEl.querySelector('img').src = `../images/icon-${choice}.svg`
};

const getWinner = (userChoice) => {
  const winner = document.getElementById('winner');
  const computerChoice = pickRandomChoice();

  updateSelection(userSelect,userChoice)
  updateSelection(computerSelect,computerChoice)
  if (userChoice === computerChoice) {
    winner.innerText = 'DRAW';
    console.log("It's a draw");
  } else if (
    (userChoice === "rock") & (computerChoice === "scissors") ||
    (userChoice === "paper") & (computerChoice === "rock") ||
    (userChoice === "scissors") & (computerChoice === "paper")
  ) {
    winner.innerText = 'WIN'
    updateScore(1);
  } else {
    winner.innerText = 'LOST'
    updateScore(-1);
  }
  changeDisplay("none", "flex");
};

const init = () => {
  const buttons = document.querySelectorAll(".pick");
  reset.addEventListener("click", () => {
    changeDisplay("flex", "none");
  });

  openRulesBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
  })
  closeRulesBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  })
  buttons.forEach((button) => {
    let userChoice = null;
    button.addEventListener("click", () => {
      userChoice = button.getAttribute("data-choices");

      getWinner(userChoice);
    });
  });
};

init();
