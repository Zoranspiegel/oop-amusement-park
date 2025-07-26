import Attraction from "./Attraction";

export default class RollerCoaster extends Attraction {
  private operativeCostPerHour: number;
  private hoursOperative: number;
  private _minHeight: number;

  constructor(name: string, baseEntryPrice: number, maxPeopleCapacity: number) {
    super(name, baseEntryPrice, maxPeopleCapacity);
    this.operativeCostPerHour = 300;
    this.hoursOperative = 14;
    this._minHeight = 1.3;
  }

  public enterPeople(height: number): string {
    if (this._state === "inactive") {
      return `\n❌ ${this._name} is currently inactive`;
    } else if (this.currentPeopleQuantity + 1 > this.maxPeopleCapacity) {
      return `\n❌ ${this.name}'s people limit reached. Only ${
        this.maxPeopleCapacity - this.currentPeopleQuantity
      } person(s) can enter`;
    } else if (height < this._minHeight) {
      return `\n✋ This person cannot enter. Min height required for this attraction is ${this._minHeight}`;
    } else {
      this.currentPeopleQuantity += 1;
      return `\n🚶 1 person entered to ${this.name}`;
    }
  }

  public calculateOperationCost(): string {
    const operativeCost = this.operativeCostPerHour * this.hoursOperative;
    return `💲 The operative cost of ${this.name} is ${operativeCost}`;
  }
}
