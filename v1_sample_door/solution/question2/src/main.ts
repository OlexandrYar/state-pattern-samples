import { Door } from "./Door.ts";

// main.ts - a simple text menu for the door, run in the terminal
//
//   deno run src/main.ts

const door = new Door();

function showMenu(): void {
  console.log("\n1 - open");
  console.log("2 - close");
  console.log("3 - lock");
  console.log("4 - unlock");
  console.log("5 - breakIn");
  console.log("q - quit");
}

function isValidChoice(choice: string): boolean {
  return choice === "1" || choice === "2" || choice === "3" || choice === "4" || choice === "5" || choice === "q";
}

function showStatus(): void {
  console.log(`---------------------------`);
  console.log(`State: ${door.getState()}`);
}

while (true) {
  showStatus();
  showMenu();
  const choice = (prompt(">") ?? "q").trim().toLowerCase();

  if (!isValidChoice(choice)) {
    console.log(`Invalid choice "${choice}" - please enter 1, 2, 3, 4, 5 or q`);
    continue;
  }

  if (choice === "q") {
    break;
  }

  if (choice === "1") {
    door.open();
  } else if (choice === "2") {
    door.close();
  } else if (choice === "3") {
    door.lock();
  } else if (choice === "4") {
    door.unlock();
  } else if (choice === "5") {
    door.breakIn();
  }
}

console.log("Goodbye!");
