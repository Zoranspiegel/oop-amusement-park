import Attraction from "./Attraction";

export default class HauntedHouse extends Attraction {
  private operativeCostPerHour: number;
  private hoursOperative: number;

  constructor(
    name: string,
    baseEntryPrice: number,
    maxPeopleCapacity: number
  ) {
    super(name, baseEntryPrice, maxPeopleCapacity);
    this.operativeCostPerHour = 80;
    this.hoursOperative = 3;
  }

  public calculateOperationCost(): string {
    const operativeCost = this.operativeCostPerHour * this.hoursOperative;
    return `\n💲 The operative cost of ${this.name} is ${operativeCost}`;
  }
}
