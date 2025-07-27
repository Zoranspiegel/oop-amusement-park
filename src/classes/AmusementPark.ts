import type { AttractionT } from "../../types";

export default class AmusementPark {
  private _name: string;
  private _attractions: AttractionT[];

  constructor(name: string, initialAttractions: AttractionT[]) {
    this._name = name;
    this._attractions = initialAttractions;
  }

  get name() {
    return this._name;
  }

  get attractions() {
    return this._attractions;
  }

  showAllAttractionsNames(): string[] {
    const allAttractions = this._attractions.map(
      (attraction) => attraction.name
    );
    return allAttractions;
  }

  addAttraction(newAttraction: AttractionT): string {
    this._attractions.push(newAttraction);
    return `\n${newAttraction.name} successfully added to ${this.name}`;
  }
}
