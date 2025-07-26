import readlineSync from "readline-sync";

const menu = [
  "Add new attraction",
  "View the status of all attractions",
  "Add people to an attraction",
  "Activate/Deactivate an attraction",
  "Calculate total operatin cost",
  "Exit",
];

let exit = false;

while (!exit) {
  console.clear();

  console.log("\n🏰 Welcome to Oops-Park");

  const index = readlineSync.keyInSelect(menu, "Select an option: ", {
    guide: false,
    cancel: false,
  });

  switch (index + 1) {
    case 1:
      console.log("\nAdd new attraction under development");
      readlineSync.question("Press ENTER to continue...");
      break;
    case 2:
      console.log("\nView the status of all attractions under development");
      readlineSync.question("Press ENTER to continue...");
      break;
    case 3:
      console.log("\nAdd people to an attraction under development");
      readlineSync.question("Press ENTER to continue...");
      break;
    case 4:
      console.log("\nActivate/Deactivate an attraction under development");
      readlineSync.question("Press ENTER to continue...");
      break;
    case 5:
      console.log("\nCalculate total operatin cost under development");
      readlineSync.question("Press ENTER to continue...");
      break;
    case 6:
      console.log("\n👋 Bye");
      exit = true;
      break;
  }
}
