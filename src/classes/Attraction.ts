export default abstract class Attraction {
  protected _name: string;
  protected baseEntryPrice: number;
  protected maxPeopleCapacity: number;
  protected currentPeopleQuantity: number;
  protected _state: "active" | "inactive";

  constructor(name: string, baseEntryPrice: number, maxPeopleCapacity: number) {
    this._name = name;
    this.baseEntryPrice = baseEntryPrice;
    this.maxPeopleCapacity = maxPeopleCapacity;
    this.currentPeopleQuantity = 0;
    this._state = "inactive";
  }

  get name() {
    return this._name;
  }

  get state() {
    return this._state;
  }

  abstract calculateOperationCost(): string;

  public activate(): string {
    if (this._state === "active") {
      return `\n❌ ${this.name} is already active`;
    } else {
      this._state = "active";
      return `\n🟢 ${this.name} is now active`;
    }
  }

  public deactivate(): string {
    if (this._state === "inactive") {
      return `\n❌ ${this.name} is already inactive`;
    } else {
      this._state = "inactive";
      return `\n🔴 ${this.name} is now inactive`;
    }
  }

  public enterPeople(_height: number): string {
    if (this._state === "inactive") {
      return `\n❌ ${this._name} is currently inactive`;
    } else if (this.currentPeopleQuantity + 1 > this.maxPeopleCapacity) {
      return `\n❌ ${this.name}'s people limit reached. Only ${
        this.maxPeopleCapacity - this.currentPeopleQuantity
      } person(s) can enter`;
    } else {
      this.currentPeopleQuantity += 1;
      return `\n🚶 1 person entered to ${this.name}`;
    }
  }

  public showAttractionStatus() {
    return `
      ${this.name} status:

      - 🧑‍🤝‍🧑 Maximum people capacity: ${this.maxPeopleCapacity}
      - 👨‍👧‍👦 Current people quantity: ${this.currentPeopleQuantity}
      - 💵 Base entry price: $${this.baseEntryPrice.toFixed(2)}
      - ${this._state === "active" ? "🟢" : "🔴"} The attraction is currently ${
      this._state
    }
    `;
  }
}
