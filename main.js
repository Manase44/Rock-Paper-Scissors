const computerScore = document.getElementById("compscore");
const playerScore = document.getElementById("playscore");
const rockPad = document.getElementById("rock");
const paperPad = document.getElementById("paper");
const scissorPad = document.getElementById("scissor");
const message = document.getElementById("message");
const playerEmoji = document.getElementById("playerEmoji");
const computerEmoji = document.getElementById("compEmoji");

const winningMessages = {
  coputer: "computer wins",
  player: "player wins",
  draw: "draw",
};

const emojis = {
  rock : "✊",
  paper : "✋",
  scissor : "✌️"

}

const choices = ["Rock", "Paper", "Scissor"];

const randomNumberGenerator = () => {
  const num1 = Math.random();
  const num2 = Math.random();
  const num3 = Math.random();
  return Math.floor(num1 + num2 + num3);
};



const displayMessage = (mssg) => {
  message.textContent = `${mssg}`;

}

const scoreUpdate = (value) => {
  return  parseInt(value, 10) + 1;
}

const computerEmojiUpdate = (computer) => {
  if (computer == "Rock") {
    computerEmoji.textContent = emojis.rock;
  } else if (computer == "Paper") {
    computerEmoji.textContent = emojis.paper;
  } else if (computer == "Scissor") {
    computerEmoji.textContent = emojis.scissor
  };
};

const playingEngine = (player) => {
  let randomNumber = randomNumberGenerator();
  let computerChoice = choices[randomNumber];
  computerEmojiUpdate(computerChoice);

  if (computerChoice == player) {
    displayMessage(winningMessages.draw);
  } else if (computerChoice == "Rock" && player == "Scissor") {
    displayMessage(winningMessages.coputer);
    computerScore.textContent = `${scoreUpdate(computerScore.textContent)}`;
  } else if (computerChoice == "Scissor" && player == "Paper") {
    displayMessage(winningMessages.coputer);
    computerScore.textContent = `${scoreUpdate(computerScore.textContent)}`;
  } else if (computerChoice == "Paper" && player == "Rock") {
    displayMessage(winningMessages.coputer);
    computerScore.textContent = `${scoreUpdate(computerScore.textContent)}`;
  } else if (computerChoice == "Scissor" && player == "Rock") {
    displayMessage(winningMessages.player);
    playerScore.textContent = `${scoreUpdate( playerScore.textContent)}`;
  } else if (computerChoice == "Paper" && player == "Scissor") {
    displayMessage(winningMessages.player);
    playerScore.textContent = `${scoreUpdate( playerScore.textContent)}`;
  } else if (computerChoice == "Rock" && player == "Paper") {
    displayMessage(winningMessages.player);
    playerScore.textContent = `${scoreUpdate( playerScore.textContent)}`;
  }
};


const playerEmojiUpdate = (player) => {
  if (player == "Rock") {
    playerEmoji.textContent = emojis.rock;
  } else if (player == "Paper") {
    playerEmoji.textContent = emojis.paper;
  } else if (player == "Scissor") {
    playerEmoji.textContent = emojis.scissor;
  };
};



let playerChoice;


rockPad.addEventListener("click", () => {
  playerChoice = "Rock";
  playingEngine(playerChoice);
  playerEmojiUpdate(playerChoice);
});

paperPad.addEventListener("click", () => {
  playerChoice = "Paper";
  playingEngine(playerChoice);
  playerEmojiUpdate(playerChoice);
});

scissorPad.addEventListener("click", () => {
  playerChoice = "Scissor";
  playingEngine(playerChoice);
  playerEmojiUpdate(playerChoice);
});