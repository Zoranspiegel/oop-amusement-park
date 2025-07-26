import AmusementPark from "../classes/AmusementPark";
import HauntedHouse from "../classes/HauntedHouse";
import RollerCoaster from "../classes/RollerCoaster";

const oopsPark = new AmusementPark([
  new RollerCoaster("Ghost Train", 100, 666, 300),
  new HauntedHouse("Aldalome's Crypt", 30, 100, 40),
]);

export default oopsPark;