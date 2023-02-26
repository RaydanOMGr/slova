import type { Param } from "../types/parameters";
import { Word } from "../classes";

/**
 * word function that generates an array of speakable strings
 * @param {number} param.length Length of the word, is an optional parameter (default: 5)
 * @param {number} param.amount Amount of words to generate, is an optional parameter (default: 1)
 * @param {number} param.syllables Amount of syllables in a word, is an optional parameter (default: length / 3)
 * @returns {() => string[]} Inner function generator, generates on call
 */
export function word(params: Param.Word): () => string[] {
  const instance = new Word(params);

  /**
   * Generate an array of words (strings) based off their length, quantity & amount of syllables
   * @returns {string[]} An array of generated strings
   */
  return (): string[] => instance.generate();
}
