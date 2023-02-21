export declare namespace Param {
  interface Word {
    length?: number;
    amount?: number;
    syllables?: number;
  }

  interface Text {
    length: number,
    words?: number,
    paragraphs?: number
  }

  interface MumbleRap {
    scheme?: string,
    length?: number
  }

  interface Generator {
    length: number,
	  syllables?: number
  }
}