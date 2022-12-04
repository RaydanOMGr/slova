module.exports = class Generator {
	constructor() {
		this.consonants = [
			{ letter: "b", priority: 1 }, { letter: "c", priority: 2 }, { letter: "d", priority: 1 }, { letter: "f", priority: 1 }, { letter: "g", priority: 2 }, { letter: "h", priority: 2 }, { letter: "j", priority: 2 }, { letter: "k", priority: 1 }, { letter: "l", priority: 1 }, { letter: "m", priority: 1 }, { letter: "n", priority: 1 }, { letter: "p", priority: 1 }, { letter: "q", priority: 4 }, { letter: "r", priority: 1 }, { letter: "s", priority: 1 }, { letter: "t", priority: 1 }, { letter: "v", priority: 2 }, { letter: "w", priority: 3 }, { letter: "x", priority: 3 }, { letter: "z", priority: 3 }
		];
		this.vowels = [
			{ letter: "a", priority: 1 }, { letter: "e", priority: 1 }, { letter: "i", priority: 1 }, { letter: "o", priority: 1 }, { letter: "u", priority: 1 }, { letter: "y", priority: 2 }
		];
		this.digraphs = [
			{ letter: "ch", priority: 1 }, { letter: "ck", priority: 1 }, { letter: "sh", priority: 1 }
		];
	}

	sampler(length, syllables = (length / 3)) {
		let word = this.word(syllables);

		if (length === 0) throw new Error("Length cannot be 0!");
		if (length === 1) {
			return this.consonants[
				Math.floor(Math.random() * this.consonants.length)
			].letter;
		}

		let wordLength = length / syllables;
		if (wordLength < 2) {
			throw new Error("The length of the word is too short for the amount of syllables!");
		} else if (wordLength > 4) {
			throw new Error("The length of the word is too long for the amount of syllables!");
		}
		while (word.length != length) {
			word = this.word(syllables);
		}

		return word;
	}

	word(syllables) {
		let word = "";
		if (syllables === 0) throw new Error("Syllables cannot be 0!");
		for (let i = 0; i < syllables; i++) {
			const thirdLetter = Math.floor(Math.random() * 2);

			let syllable = "";
			if (thirdLetter == 1) {
				const randomNum3 = Math.floor(Math.random() * this.consonants.length);
				const randomNum4 = Math.floor(Math.random() * 2);

				syllable = syllable + this.getLetter(this.consonants);
				if (randomNum4 == 0) {
					syllable = syllable + this.getLetter(this.vowels);
					syllable = syllable + this.getLetter(this.consonants);
				} else if (randomNum4 == 1) {
					const randomNum5 = Math.floor(Math.random() * this.vowels.length);

					syllable = syllable + this.getLetter(this.vowels);
					syllable = syllable + this.getLetter(this.vowels);
				}
			} else if (thirdLetter == 0) {
                                syllable = syllable + this.getLetter(this.consonants);
				syllable = syllable + this.getLetter(this.vowels);

				const digraphLetters = Math.floor(Math.random() * 2);
				if (digraphLetters == 1) {
					const randomNum4 = Math.floor(Math.random() * this.digraphs.length);

					syllable = syllable + this.getLetter(this.digraphs);
				}
			}

			word = word + syllable;
		}

		return word;
	}

	getLetter(letterList) {
		let randomNum = Math.floor(Math.random() * letterList.length); 
		let letter = letterList[randomNum]
                if(Math.floor(Math.random() * (letter.priority + 1)) !== letter.priority) {
                        return this.getLetter(letterList);
                }

		return letter.letter;
	}
}
