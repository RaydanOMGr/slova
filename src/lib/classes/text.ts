import type { Param } from "../types/parameters";
import { generateString } from "../tools";
import { handle } from "../handlers/text";

/**
 * Text class that generates an array of paragraphs
 */
export class Text {
  /** The length of the paragraph */
  public readonly length: number;
  /** Amount of words in a paragraph */
  public readonly words: number;
  /** length * paragraphs = total length */
  public readonly paragraphs: number;

  /**
   * An instance of Text to generate the text
   * @param {number} param.length The length of the paragraph, is an optional parameter (default: 300)
   * @param {number} param.words Amount of words in a paragraph, is an optional parameter
   * @param {number} param.paragraphs Amount of paragraphs to generate, is an optional parameter (default: 1)
   */
  constructor({ length = 300, words, paragraphs = 1 }: Param.Text) {
    // Handle whether parameters are acceptable or not
    handle({ length, words, paragraphs });

    this.length = length;
    // Ignore optional argument as paragraph method decides the usage
    this.words = words as number;
    this.paragraphs = paragraphs;
  }

  /**
   * Generate the text out of paragraphs with a certain length & amount of words
   * @returns {string[]} an array of paragraphs
   */
  public generate(): string[] {
    let paragraphs = [];

    for (let i = 0; i < this.paragraphs; i++) {
      paragraphs.push(this.paragraph());
    }

    return paragraphs;
  }

  /** Paragraph generator, decides whether amount of words is set */
  private paragraph(): string {
    return this.words ? this.withWords() : this.withoutWords();
  }

  /** Generate a paragraph with certain amount of words */
  private withWords(): string {
    let words = [];

    const wordsWithLength = (this.length - this.words + 1) / this.words;

    // Word's length is starting from 30% of avg length to 70% of avg length
    let wordMinLength = Math.ceil(wordsWithLength * 0.3);
    let wordMaxLength = Math.floor(wordsWithLength * 1.7);

    for (let i = 0; i < this.words - 1; i++) {
      let wordLength =
        Math.floor(Math.random() * wordMaxLength) + wordMinLength;
      words.push(generateString({ length: wordLength }));
    }

    // A length to generate last word to match the total length
    const remain = this.length - words.join(" ").length - 1;

    // Regenerate the paragraph if remaining length is negative
    if (remain < 0) return this.withWords();

    words.push(generateString({ length: remain }));
    return words.join(" ");
  }

  /** Generate a paragraph with no words amount set */
  private withoutWords(): string {
    let words = [];

    // Generate words until the length - 10 is reached
    while (words.join(" ").length < this.length - 13) {
      // Minimum length of the word is 3, maximum is 10
      let wordLength = Math.floor(Math.random() * 7) + 3;
      words.push(generateString({ length: wordLength }));
    }

    // A length to generate last word to match the total length
    const remain = this.length - words.join(" ").length - 1;

    // Generates a word with the length of the remaining length
    // 1 to 13 in case if words parameter isn't given
    words.push(generateString({ length: remain }));

    return words.join(" ");
  }
}
