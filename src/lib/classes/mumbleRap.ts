import { handle } from "../handlers/mumbleRap";
import { Param } from "../types/parameters";
import { Text } from "./text";

export class MumbleRap {

  public readonly length: number;
  public readonly scheme: string[];

  constructor({
    length = 150, // Length of each quatrain & chorus
    scheme = "q-c-q-q-c", // Scheme of the mumble rap
  }: Param.MumbleRap) {
    // Handle whether parameters are acceptable or not
    handle({ length, scheme });

    this.length = length;
    this.scheme = scheme.split("-");
  }

  public generate() {
    let mumbleRap = [];
    const chorus = this.quatrain();

    for (let i = 0; i < this.scheme.length; i++) {
      if (this.scheme[i] === "q") mumbleRap.push(this.quatrain());
      else if (this.scheme[i] === "c") mumbleRap.push(chorus);
      else throw "Invalid scheme!";
    }

    return mumbleRap;
  }

  private quatrain() {
    const quatrain = [];

    const quatrainLineLength = Math.floor(this.length / 4);
    const quatrainLineInstance = new Text({ length: quatrainLineLength });
    for (let i = 0; i < 4; i++) {
      quatrain.push(quatrainLineInstance.generate().join(" "));
    }

    return quatrain;
  }
}
