import readlineSync from "readline-sync";
import oopsPark from "./objects/oopsPark";

const keyInSelectOptions = {
  guide: false,
  cancel: false,
};

const menu = [
  "Add new attraction",
  "View the status of all attractions",
  "Add people to an attraction",
  "Activate/Deactivate an attraction",
  "Calculate total operative cost",
  "Exit",
];

const attractionTypes = ["Roller Coaster", "Haunted House", "Carousel"];

let exit = false;

while (!exit) {
  console.clear();

  console.log("\n🏰 Welcome to Oops-Park");

  const index = readlineSync.keyInSelect(
    menu,
    "Select an option: ",
    keyInSelectOptions
  );

  switch (index + 1) {
    case 1:
      const attractionType = readlineSync.keyInSelect(
        attractionTypes,
        "Select the attraction type: ",
        keyInSelectOptions
      );

      switch (attractionType + 1) {
        case 1:
          const rollerCoasterName = readlineSync.question(
            "\nWhat will be the name of this Roller Coaster? "
          );

          const rollerCoasterEntryPrice = readlineSync.questionFloat(
            `\nWhat will be the entry price for ${rollerCoasterName}? `
          );

          const rollerCoasterMaxPeopleCapacity = readlineSync.questionInt(
            `\nWhat is the maximum people capacity of ${rollerCoasterName}? `
          );

          const rollerCoasterOperativeCostPerHour = readlineSync.questionFloat(
            `\nWhat will be the operative cost per hour of ${rollerCoasterName}? `
          );

          console.log(rollerCoasterName, rollerCoasterEntryPrice, rollerCoasterMaxPeopleCapacity, rollerCoasterOperativeCostPerHour);
          readlineSync.question("Press ENTER to continue...");
          break;
        case 2:
          break;
        case 3:
          break;
      }
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
