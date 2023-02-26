/** Parameter namespace for functions/classes */
export declare namespace Param {
  /** An object parameter for Word class/function */
  interface Word {
    /** Length of the word, is an optional parameter (default: 5) */
    length?: number;
    /** Amount of words to generate, is an optional parameter (default: 1) */
    amount?: number;
    /** Amount of syllables in a word, is an optional parameter (default: length / 3) */
    syllables?: number;
  }

  /** An object parameter for Text class/function */
  interface Text {
    /** Length of the text, is an optional parameter (default: 300) */
    length?: number;
    /** Amount of words in a text, is an optional parameter */
    words?: number;
    /** Amount of paragraphs to generate, is an optional parameter (default: 1) */
    paragraphs?: number;
  }

  /** An object parameter for MumbleRap class/function */
  interface MumbleRap {
    /** Scheme of the rap where q stands for quatrain, c stands for chorus: a scheme is split by -, is an optional parameter (default: "q-c-q-q-c") */
    scheme?: string;
    /** Length of each quatrain & chorus, is an optional parameter (default: 150) */
    length?: number;
  }

  /** An object parameter for generateString function */
  interface Generator {
    /** Length of the string to generate */
    length: number;
    /** Syllables of the string, is an optional parameter (default: length / 3) */
    syllables?: number;
  }
}
