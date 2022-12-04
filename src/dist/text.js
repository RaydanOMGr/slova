const generator = new (require('../util/generator'))();

module.exports = class Text {
    constructor({
        length = 300, // The length of the text
        words, // words in a paragraph
        paragraphs = 1 // length * paragraphs = total length
    }) {

        if (isNaN(length)) throw new Error('Length must be a number!');
        if (words && isNaN(words)) throw new Error('Words must be a number!');
        if (isNaN(paragraphs)) throw new Error('Paragraphs must be a number!');
        if (length < 0 || length === 0) throw new Error('Length cannot be negative or equal 0!');
        if (words < 0 || words === 0) throw new Error('Words cannot be negative or equal 0!');
        if (paragraphs < 0 || paragraphs === 0) throw new Error('Paragraphs cannot be negative or equal 0!');
        if (words && words > length) throw new Error('Words cannot be greater than the length of the text!');
        if (words && (length - words + 1) / words < 1) throw new Error('The length of the text is too short for the amount of words!');

        this.length = length;
        this.words = words;
        this.paragraphs = paragraphs;
    }

    generate() {
        let paragraphs = [];

        for (let i = 0; i < this.paragraphs; i++) {
            paragraphs.push(this.paragraph());
        }

        return paragraphs;
    }

    paragraph() {
		return this.words
            ? this.withWords()
            : this.withoutWords();
    }

    withWords() {
        let words = [];

        const wordsWithLength = (this.length - this.words + 1) / this.words;
        
        // Word's length is starting from 30% of avg length to 70% of avg length
        let wordMinLength = Math.ceil(wordsWithLength * 0.3);
        let wordMaxLength = Math.floor(wordsWithLength * 1.7);

        for (let i = 0; i < this.words - 1; i++) {
            let wordLength = Math.floor(Math.random() * wordMaxLength) + wordMinLength;
            words.push(generator.sampler(wordLength));
        }

        // A length to generate last word to match the total length
        const remain = this.length - words.join(' ').length - 1;

        // Regenerate the paragraph if remaining length is negative
        if (remain < 0) return this.withWords();

        words.push(generator.sampler(remain));
        return words.join(' ');
    }

    withoutWords() {
        let words = [];

        // Generate words until the length - 10 is reached
        while (words.join(' ').length < this.length - 13) {
            // Minimum length of the word is 3, maximum is 10
            let wordLength = Math.floor(Math.random() * 7) + 3;
	    	words.push(generator.sampler(wordLength));
        }

        // A length to generate last word to match the total length
        const remain = this.length - words.join(' ').length - 1;

        // Generates a word with the length of the remaining length
        // 1 to 13 in case if words parameter isn't given
        words.push(generator.sampler(remain));

        return words.join(' ');
    }
}