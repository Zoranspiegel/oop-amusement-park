import Attraction from "./Attraction";

export default class RollerCoaster extends Attraction {
  private operativeCostPerHour: number;
  private hoursOperative: number;
  private minHeight: number;

  constructor(name: string, baseEntryPrice: number, maxPeopleCapacity: number) {
    super(name, baseEntryPrice, maxPeopleCapacity);
    this.operativeCostPerHour = 300;
    this.hoursOperative = 14;
    this.minHeight = 1.3;
  }

  enterPeople(quantity: number, height: number): string {
    if (this.currentPeopleQuantity + quantity > this.maxPeopleCapacity) {
      return `❌ ${this.name}'s people limit reached. Only ${
        this.maxPeopleCapacity - this.currentPeopleQuantity
      } person(s) can enter`;
    } else if (height < this.minHeight) {
      return `✋ This person cannot enter. Min height required for this attraction is ${this.minHeight}`;
    } else {
      this.currentPeopleQuantity += 1;
      return `🚶${quantity} person(s) entered to ${this.name}`;
    }
  }

  public calculateOperationCost(): string {
    const operativeCost = this.operativeCostPerHour * this.hoursOperative;
    return `💲 The operative cost of ${this.name} is ${operativeCost}`;
  }
}
