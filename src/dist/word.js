const generator = new (require('../util/generator'))();

module.exports = class Word {
	constructor({
		length = 5, // The length of the word
		amount = 1, // The amount of words to generate
		syllables = (length / 3) // The amount of syllables in the word
	}) {
		if (isNaN(length)) throw new Error('Length must be a number!');
		if (isNaN(amount)) throw new Error('Amount must be a number!');
		if (isNaN(syllables)) throw new Error('Syllables must be a number!');
        if (length < 0 || length === 0) throw new Error('Length cannot be negative or equal 0!');
		if (amount < 0 || amount === 0) throw new Error('Amount cannot be negative or equal 0!');
		if (syllables < 0 || syllables === 0) throw new Error('Syllables cannot be negative or equal 0!');
		
		this.length = length;
		this.amount = amount;
		// Average syllable length is 3 as it can be 2, 3 or 4
		this.syllables = Math.ceil(syllables);

		this.consonants = generator.consonants;
		this.vowels = generator.vowels;
		this.digraphs = generator.digraphs;
	}

	generate() {
		let words = [];

		for (let i = 0; i < this.amount; i++) {
			words.push(generator.sampler(this.length, this.syllables));
		}

		return words;
	}
}