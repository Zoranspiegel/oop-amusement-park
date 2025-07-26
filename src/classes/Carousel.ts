import Attraction from "./Attraction";

export default class Carousel extends Attraction {
  constructor(
    name: string,
    baseEntryPrice: number,
    maxPeopleCapacity: number,
    operativeCostPerHour: number
  ) {
    super(name, baseEntryPrice, maxPeopleCapacity, operativeCostPerHour);
  }

  calculateOperationCost(): string {
    return "";
  }
}
