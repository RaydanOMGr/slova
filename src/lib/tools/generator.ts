import type { Models } from "../types/models";
import type { Param } from "../types/parameters";
import { consonants, digraphs, vowels } from "./dictionary";

/**
 * Randomly generates true or false based on a fair coin.
 * @returns {boolean} true or false with 50% chance.
 */
function getFairCoin(): boolean {
  return Math.floor(Math.random() * 2) === 1;
}

function getLetter(letterList: Models.Any[]): string {
  let randomNum = Math.floor(Math.random() * letterList.length);
  let letter = letterList[randomNum];

  if (Math.floor(Math.random() * (letter.priority + 1)) !== letter.priority) {
    return getLetter(letterList);
  }

  return letter.letter;
}

function word(syllables: number): string {
  let word = "";

  if (syllables === 0) throw "Syllables cannot be 0!";

  for (let i = 0; i < syllables; i++) {
    let syllable: string = "";
    const threeLetterSyllable = getFairCoin();

    if (threeLetterSyllable) {
      const doubleVowels = getFairCoin();
      syllable += getLetter(consonants);

      if (doubleVowels) syllable += getLetter(vowels) + getLetter(vowels);
      else syllable += getLetter(vowels) + getLetter(consonants);
    } else {
      syllable += getLetter(consonants) + getLetter(vowels);

      if (getFairCoin()) syllable += getLetter(digraphs);
    }

    word += syllable;
  }

  return word;
}

export function generateString({
  length,
  syllables = length / 3,
}: Param.Generator): string {
  if (length === 0) throw "Length cannot be 0!";
  if (length === 1) {
    return consonants[Math.floor(Math.random() * consonants.length)].letter;
  }

  let wordLength = length / syllables;
  if (wordLength < 2)
    throw "The length of the word is too short for the amount of syllables!";
  else if (wordLength > 4)
    throw "The length of the word is too long for the amount of syllables!";

  let response = word(syllables);

  while (response.length != length) {
    response = word(syllables);
  }

  return response;
}
