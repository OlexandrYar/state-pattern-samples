import { Ship } from "./Ship.ts";

// main.ts - a simple text menu for the ship, run in the terminal
//
//   deno run src/main.ts

const ship = new Ship(5);

function showMenu(): void {
  console.log("\n1 - left arrow key");
  console.log("2 - right arrow key");
  console.log("3 - space key (fire)");
  console.log("q - quit");
}

function isValidChoice(choice: string): boolean {
  return choice === "1" || choice === "2" || choice === "3" || choice === "q";
}

function showStatus(): void {
  console.log(`---------------------------`);
  console.log(`State: ${ship.getState()}`);
  console.log(`x: ${ship.getX()}`);
}

while (true) {
  showStatus();
  showMenu();
  const choice = (prompt(">") ?? "q").trim().toLowerCase();

  if (!isValidChoice(choice)) {
    console.log(`Invalid choice "${choice}" - please enter 1, 2, 3 or q`);
    continue;
  }

  if (choice === "q") {
    break;
  }

  if (choice === "1") {
    ship.leftArrowKeyPressed();
  } else if (choice === "2") {
    ship.rightArrowKeyPressed();
  } else if (choice === "3") {
    ship.spaceKeyPressed();
  }
}

console.log("Goodbye!");
