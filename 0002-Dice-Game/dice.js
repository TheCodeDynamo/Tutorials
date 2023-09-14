const readline = require("readline");
require("colors");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("close", () => {
  console.log("Exiting the game.".bgRed.yellow);
  process.exit(0);
});

const rollDice = () => {
  // 1, 2, 3, 4, 5, 6
  return Math.floor(Math.random() * 6) + 1;
};

const getDotsRepresentation = (dice) => {
  switch (dice) {
    case 1:
      return ".".white;
    case 2:
      return ":".red;
    case 3:
      return "...".magenta;
    case 4:
      return "::".cyan;
    case 5:
      return ":.:".rainbow;
    case 6:
      return ":::".yellow;
    default:
      return "";
  }
};

const mainMenu = () => {
  console.log(`${"Dice Roll Game:".cyan}
    1. Press <Space> to roll the Dice
    2. Press <ESC> to Quit
    `);
};

mainMenu();

// Listen for spacebar and ESC key presses
process.stdin.setRawMode(true);
process.stdin.on("data", (key) => {
  if (key.toString() === " ") {
    const diceResult = rollDice();
    console.log(`You rolled a ${getDotsRepresentation(diceResult)}`.green);
  } else if (key.toString() === "\u001B") {
    // Check for ESC key
    rl.close();
  } else {
    console.clear();
    console.log("Invalid choice! Please try again.".bgRed.white);
    mainMenu();
  }
});
