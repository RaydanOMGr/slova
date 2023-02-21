import { Models } from "../types/models";
import { Param } from "../types/parameters";
import { consonants, digraphs, vowels } from "./dictionary";

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
      const thirdLetter = Math.floor(Math.random() * 2);
      let syllable = "";

      if (thirdLetter == 1) {
        const randomNum4 = Math.floor(Math.random() * 2);

        syllable = syllable + getLetter(consonants);

        if (randomNum4 == 0) {
          syllable = syllable + getLetter(vowels);
          syllable = syllable + getLetter(consonants);
        } else if (randomNum4 == 1) {
          syllable = syllable + getLetter(vowels);
          syllable = syllable + getLetter(vowels);
        }
      } else if (thirdLetter == 0) {
        syllable = syllable + getLetter(consonants);
        syllable = syllable + getLetter(vowels);

        const digraphLetters = Math.floor(Math.random() * 2);
        if (digraphLetters == 1) {
          syllable = syllable + getLetter(digraphs);
        }
      }

      word = word + syllable;
    }

    return word;
}

export function generateString({
	length,
	syllables = length / 3
}: Param.Generator): string {

	if (length === 0) throw "Length cannot be 0!";
	if (length === 1) {
		return consonants[Math.floor(Math.random() * consonants.length)]
			.letter;
	}

	let wordLength = length / syllables;
	if (wordLength < 2) throw "The length of the word is too short for the amount of syllables!";
	else if (wordLength > 4) throw "The length of the word is too long for the amount of syllables!";

	let response = word(syllables);

	while (response.length != length) {
		response = word(syllables);
	}

	return response;
}