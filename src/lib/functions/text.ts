import type { Param } from "../types";
import { Text } from "../classes";

/**
 * text function that generates an array of paragraphs
 * @param {number} param.length The length of the paragraph, is an optional parameter (default: 300)
 * @param {number} param.words Amount of words in a paragraph, is an optional parameter
 * @param {number} param.paragraphs Amount of paragraphs to generate, is an optional parameter (default: 1)
 * @returns {() => string[]} Inner function generator, generates on call
 */
export function text(params: Param.Text): () => string[] {
  const instance = new Text(params);

  /**
   * Generate the text out of paragraphs with a certain length & amount of words
   * @returns {string[]} an array of paragraphs
   */
  return (): string[] => instance.generate();
}
