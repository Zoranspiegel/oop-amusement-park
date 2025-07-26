import type { AttractionT } from "../../types";

export default class AmusementPark {
  private _name: string;
  private attractions: AttractionT[];

  constructor(name: string, initialAttractions: AttractionT[]) {
    this._name = name;
    this.attractions = initialAttractions;
  }

  get name() {
    return this._name;
  }

  addAttraction(newAttraction: AttractionT): string {
    this.attractions.push(newAttraction);
    return `${newAttraction.name} successfully added to ${this.name}`;
  }
}
