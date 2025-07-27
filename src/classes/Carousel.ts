import Attraction from "./Attraction";

export default class Carousel extends Attraction {
  private operativeCostPerHour: number;
  private hoursOperative: number;
  private inMaintenance: boolean;

  constructor(name: string, baseEntryPrice: number, maxPeopleCapacity: number) {
    super(name, baseEntryPrice, maxPeopleCapacity);
    this.operativeCostPerHour = 20;
    this.hoursOperative = 24;
    this.inMaintenance = false;
  }

  public activate(): string {
    if (this._state === "active") {
      return `\n❌ ${this.name} is already active`;
    } else if (this.inMaintenance) {
      return `\n🛠️ ${this.name} is in maintenance`;
    } else {
      this._state = "active";
      return `\n🟢 ${this.name} is now active`;
    }
  }

  public putInMaintenance() {
    if (this.inMaintenance) {
      return `\n❌ ${this.name} is already in maintenance`;
    } else {
      this.inMaintenance = true;
      return `\n🛠️ ${this.name} is now in maintenance`;
    }
  }

  public endMaintenance() {
    if (!this.inMaintenance) {
      return `\n❌ ${this.name} is not in maintenance`;
    } else {
      this.inMaintenance = false;
      return `\n🟢 ${this.name} is not in maintenance anymore`;
    }
  }

  public calculateOperationCost(): string {
    const operativeCost = this.operativeCostPerHour * this.hoursOperative;
    return `\n💲 The operative cost of ${this.name} is ${operativeCost}`;
  }

  public showAttractionStatus() {
    return `
      ${this.name} status:

      - 🧑‍🤝‍🧑 Maximum people capacity: ${this.maxPeopleCapacity}
      - 👨‍👧‍👦 Current people quantity: ${this.currentPeopleQuantity}
      - 💵 Base entry price: $${this.baseEntryPrice.toFixed(2)}
      - ${this._state === "active" ? "🟢" : "🔴"} The attraction is currently ${this._state}
      - 🛠️  Currently ${this.inMaintenance ? "" : "not"} in maintenance
    `;
  }
}
