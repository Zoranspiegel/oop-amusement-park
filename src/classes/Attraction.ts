export default abstract class Attraction {
  protected name: string;
  protected baseEntryPrice: number;
  protected maxPeopleCapacity: number;
  protected currentPeopleQuantity: number;
  protected state: "active" | "inactive";
  protected operativeCostPerHour: number;

  constructor(
    name: string,
    baseEntryPrice: number,
    maxPeopleCapacity: number,
    operativeCostPerHour: number
  ) {
    this.name = name;
    this.baseEntryPrice = baseEntryPrice;
    this.maxPeopleCapacity = maxPeopleCapacity;
    this.operativeCostPerHour = operativeCostPerHour;
    this.currentPeopleQuantity = 0;
    this.state = "inactive";
  }

  abstract calculateOperationCost(): string;

  public activate(): string {
    if (this.state === "active") {
      return `❌ ${this.name} is already active`;
    } else {
      this.state = "active";
      return `🟢 ${this.name} is now active`;
    }
  }

  public deactivate(): string {
    if (this.state === "inactive") {
      return `❌ ${this.name} is already inactive`;
    } else {
      this.state = "inactive";
      return `🔴 ${this.name} is now inactive`;
    }
  }

  protected enterPeople(quantity: number): string {
    if (this.currentPeopleQuantity + quantity > this.maxPeopleCapacity) {
      return `❌ ${this.name}'s people limit reached. Only ${
        this.maxPeopleCapacity - this.currentPeopleQuantity
      } person(s) can enter`;
    } else {
      this.currentPeopleQuantity += 1;
      return `🚶${quantity} person(s) entered to ${this.name}`;
    }
  }

  showAttractionStatus() {
    return `
      ${this.name} status:

      - 🧑‍🤝‍🧑 Maximum people capacity: ${this.maxPeopleCapacity}
      - 👨‍👧‍👦 Current people quantity: ${this.currentPeopleQuantity}
      - 💵 Base entry price: $${this.baseEntryPrice.toFixed(2)}
      - ${this.state === "active" ? "🟢" : "🔴"} The attraction is currently ${this.state}
    `;
  }
}
