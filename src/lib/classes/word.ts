import type { Param } from "../types/parameters";
import { generateString } from "../tools";
import { handle } from "../handlers/word";

/**
 * Word class that generates an array of speakable strings
 */
export class Word {
  /** Length of the word, is an optional parameter (default: 5) */
  public readonly length: number;
  /** Amount of words to generate, is an optional parameter (default: 1) */
  public readonly amount: number;
  /** Amount of syllables in a word, is an optional parameter (default: length / 3) */
  public readonly syllables: number;

  /**
   * An instance of Word to generate strings
   * @param {number} param.length Length of the word, is an optional parameter (default: 5)
   * @param {number} param.amount Amount of words to generate, is an optional parameter (default: 1)
   * @param {number} param.syllables Amount of syllables in a word, is an optional parameter (default: length / 3)
   */
  constructor({ length = 5, amount = 1, syllables = length / 3 }: Param.Word) {
    // Handle whether parameters are acceptable or not
    handle({ length, amount, syllables });

    this.length = length;
    this.amount = amount;
    // Average syllable length is 3 as it can be 2, 3 or 4
    this.syllables = Math.ceil(syllables);
  }

  /**
   * Generate an array of words (strings) based off their length, quantity & amount of syllables
   * @returns {string[]} An array of generated strings
   */
  public generate(): string[] {
    let response = [];

    for (let i = 0; i < this.amount; i++) {
      response.push(
        generateString({
          length: this.length,
          syllables: this.syllables,
        })
      );
    }

    return response;
  }
}
