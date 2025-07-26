import type { AttractionT } from "../../types";

export default class AmusementPark {
  attractions: AttractionT[];

  constructor(initialAttractions: AttractionT[]) {
    this.attractions = initialAttractions;
  }
}
