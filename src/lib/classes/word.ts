import type { Param } from "../types/parameters";

import { generateString } from "../tools";
import { handle } from "../handlers/word";

export class Word {
  public readonly length: number;
  public readonly amount: number;
  public readonly syllables: number;

	constructor({
		length = 5, // The length of the word
		amount = 1, // The amount of words to generate
		syllables = (length / 3) // The amount of syllables in the word
	}: Param.Word) {
    // Handle whether parameters are acceptable or not
    handle({ length, amount, syllables });

		this.length = length;
		this.amount = amount;
		// Average syllable length is 3 as it can be 2, 3 or 4
		this.syllables = Math.ceil(syllables);
	}

	public generate(): string[] {
		let response = [];

		for (let i = 0; i < this.amount; i++) {
			response.push(generateString({
        length: this.length,
        syllables: this.syllables
      }));
		}

		return response;
	}
}
