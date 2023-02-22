import type { Param } from "../types";
import { MumbleRap } from "../classes";

/**
 * Mumble rap generator
 * @param {number} params.length Length of each quatrain & chorus, is an optional parameter (default: 150)
 * @param {string} params.scheme Scheme of the rap where q stands for quatrain, c stands for chorus: a scheme is split by -, is an optional parameter (default: "q-c-q-q-c")
 * @returns {() => string[][]} Inner function generator, generates on call
 */
export function mumbleRap(params: Param.MumbleRap): () => string[][] {
  const instance = new MumbleRap(params);

  /**
   * Generate the rap, the scheme is split & looped through
   * @returns {string[][]} an array of q/c arrays
   */
  return (): string[][] => instance.generate();
}
