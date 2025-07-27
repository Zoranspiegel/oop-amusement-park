import readlineSync from "readline-sync";
import oopsPark from "./objects/oopsPark";
import RollerCoaster from "./classes/RollerCoaster";
import HauntedHouse from "./classes/HauntedHouse";
import Carousel from "./classes/Carousel";

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

  console.log(`\n🏰 Welcome to ${oopsPark.name}`);

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

          const newRollerCoster = new RollerCoaster(
            rollerCoasterName,
            rollerCoasterEntryPrice,
            rollerCoasterMaxPeopleCapacity
          );

          oopsPark.addAttraction(newRollerCoster);

          console.log(
            `\n🎢 ${rollerCoasterName} is your new Roller Coaster. Congratulations!`
          );

          console.log(newRollerCoster.showAttractionStatus());

          readlineSync.question("\nPress ENTER to continue...");
          break;
        case 2:
          const hauntedHouseName = readlineSync.question(
            "\nWhat will be the name of this Haunted House? "
          );

          const hauntedHouseEntryPrice = readlineSync.questionFloat(
            `\nWhat will be the entry price for ${hauntedHouseName}? `
          );

          const hauntedHouseMaxPeopleCapacity = readlineSync.questionInt(
            `\nWhat is the maximum people capacity of ${hauntedHouseName}? `
          );

          const newHauntedHouse = new HauntedHouse(
            hauntedHouseName,
            hauntedHouseEntryPrice,
            hauntedHouseMaxPeopleCapacity
          );

          oopsPark.addAttraction(newHauntedHouse);

          console.log(
            `\n🧟🏨🧟 ${hauntedHouseName} is your new Haunted House. Congratulations!`
          );

          console.log(newHauntedHouse.showAttractionStatus());

          readlineSync.question("\nPress ENTER to continue...");
          break;
        case 3:
          const carouselName = readlineSync.question(
            "\nWhat will be the name of this Carousel? "
          );

          const carouselEntryPrice = readlineSync.questionFloat(
            `\nWhat will be the entry price for ${carouselName}? `
          );

          const carouselMaxPeopleCapacity = readlineSync.questionInt(
            `\nWhat is the maximum people capacity of ${carouselName}? `
          );

          const newCarousel = new Carousel(
            carouselName,
            carouselEntryPrice,
            carouselMaxPeopleCapacity
          );

          oopsPark.addAttraction(newCarousel);

          console.log(
            `\n🎠 ${carouselName} is your new Carousel. Congratulations!`
          );

          console.log(newCarousel.showAttractionStatus());

          readlineSync.question("\nPress ENTER to continue...");
          break;
      }
      break;
    case 2:
      console.log(`\n📖 These are all the attractions of ${oopsPark.name}:`);
      const statusAttractionIndex = readlineSync.keyInSelect(
        oopsPark.showAllAttractionsNames(),
        "Select an attraction: ",
        keyInSelectOptions
      );

      const statusSelectedAttraction =
        oopsPark.attractions[statusAttractionIndex];

      console.log(statusSelectedAttraction.showAttractionStatus());

      readlineSync.question("Press ENTER to continue...");
      break;
    case 3:
      console.log(`\n📖 These are all the attractions of ${oopsPark.name}:`);
      const enterPeopleAttractionIndex = readlineSync.keyInSelect(
        oopsPark.showAllAttractionsNames(),
        "Select an attraction: ",
        keyInSelectOptions
      );

      const enterPeopleSelectedAttraction =
        oopsPark.attractions[enterPeopleAttractionIndex];

      let continueEnteringPeople: boolean = true;

      while (continueEnteringPeople) {
        if (enterPeopleSelectedAttraction.state === "inactive") {
          continueEnteringPeople = false;
          console.log(
            `\n❌ ${enterPeopleSelectedAttraction.name} is currently inactive.`
          );
          readlineSync.question(`\nPress ENTER to continue...`);
        } else {
          const peopleHeight = readlineSync.questionFloat(
            "\nWhat's the min height of the person who want to enter? "
          );

          const res = enterPeopleSelectedAttraction.enterPeople(peopleHeight);

          console.log(res);

          continueEnteringPeople = readlineSync.keyInYN(
            `\nDo you want to enter another person to ${enterPeopleSelectedAttraction.name}? `
          ) as boolean;
        }
      }

      break;
    case 4:
      const toggleAttractionIndex = readlineSync.keyInSelect(
        oopsPark.showAllAttractionsNames(),
        "Select an attraction: ",
        keyInSelectOptions
      );

      const selectedToggleAttraction =
        oopsPark.attractions[toggleAttractionIndex];

      const selection = readlineSync.keyInSelect(
        ["Activate", "Deactivate"],
        "Select an option: ",
        keyInSelectOptions
      );

      if (selection === 0) {
        const res = selectedToggleAttraction.activate();
        console.log(res);
        readlineSync.question("\nPress ENTER to continue...");
      } else {
        const res = selectedToggleAttraction.deactivate();
        console.log(res);
        readlineSync.question("\nPress ENTER to continue...");
      }

      break;
    case 5:
      console.log("\nCalculate total operatin cost under development");
      readlineSync.question("\nPress ENTER to continue...");
      break;
    case 6:
      console.log("\n👋 Bye");
      exit = true;
      break;
  }
}
