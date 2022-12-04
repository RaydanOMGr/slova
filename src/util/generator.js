module.exports = class Generator {
	constructor() {
		this.consonants = "bcdfghjklmnpqrstvwxz".split("");
		this.vowels = "aeiouy".split("");
		this.digraphs = "ck ch sh".split(" ");
	}

	sampler(length, syllables = (length / 3)) {
		let word = this.word(syllables);

		if (length === 0) throw new Error("Length cannot be 0!");
		if (length === 1) {
			return this.consonants[
				Math.floor(Math.random() * this.consonants.length)
			];
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
			const randomNum1 = Math.floor(Math.random() * this.vowels.length);
			const randomNum2 = Math.floor(Math.random() * this.consonants.length);

			const thirdLetter = Math.floor(Math.random() * 2);

			let syllable = "";
			if (thirdLetter == 1) {
				const randomNum3 = Math.floor(Math.random() * this.consonants.length);
				const randomNum4 = Math.floor(Math.random() * 2);

				syllable = syllable + this.consonants[randomNum2];
				if (randomNum4 == 0) {
					syllable = syllable + this.vowels[randomNum1];
					syllable = syllable + this.consonants[randomNum3];
				} else if (randomNum4 == 1) {
					const randomNum5 = Math.floor(Math.random() * this.vowels.length);

					syllable = syllable + this.vowels[randomNum1];
					syllable = syllable + this.vowels[randomNum5];
				}
			} else if (thirdLetter == 0) {
				syllable = syllable + this.consonants[randomNum2];
				syllable = syllable + this.vowels[randomNum1];

				const digraphLetters = Math.floor(Math.random() * 2);
				if (digraphLetters == 1) {
					const randomNum4 = Math.floor(Math.random() * this.digraphs.length);

					syllable = syllable + this.digraphs[randomNum4];
				}
			}

			word = word + syllable;
		}

		return word;
	}
}