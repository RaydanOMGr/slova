import type { Param } from "../types/parameters";
import { handle } from "../handlers/mumbleRap";
import { Text } from "./text";

/**
 * MumbleRap class that generates an array of quatrains & chorus,
 * quatrains & chorus on the other hand consist of 4 strings in an array
 */
export class MumbleRap {
  /** Length of each quatrain & chorus */
  public readonly length: number;
  /** Scheme of the rap where q stands for quatrain, c stands for chorus */
  public readonly scheme: string;

  /**
   * An instance of MumbleRap to generate the rap
   * @param {number} param.length Length of each quatrain & chorus, is an optional parameter (default: 150)
   * @param {string} param.scheme Scheme of the rap where q stands for quatrain, c stands for chorus: a scheme is split by -, is an optional parameter (default: "q-c-q-q-c")
   */
  constructor({ length = 150, scheme = "q-c-q-q-c" }: Param.MumbleRap) {
    // Handle whether parameters are acceptable or not
    handle({ length, scheme });

    this.length = length;
    this.scheme = scheme;
  }

  /**
   * Generate the rap, the scheme is split & looped through
   * @returns {string[][]} an array of q/c arrays
   */
  public generate(): string[][] {
    let mumbleRap = [];

    const scheme = this.scheme.split("-");
    const chorus = this.quatrain();

    for (let i = 0; i < scheme.length; i++) {
      if (scheme[i] === "q") mumbleRap.push(this.quatrain());
      else if (scheme[i] === "c") mumbleRap.push(chorus);
      else throw "Invalid scheme!";
    }

    return mumbleRap;
  }

  /**
   * Quatrain/chorus generator
   * @returns {string[]} 4 strings in an array
   */
  private quatrain(): string[] {
    const quatrain = [];

    const quatrainLineLength = Math.floor(this.length / 4);
    const quatrainLineInstance = new Text({ length: quatrainLineLength });
    for (let i = 0; i < 4; i++) {
      quatrain.push(quatrainLineInstance.generate().join(" "));
    }

    return quatrain;
  }
}
