# wordgen.js

wordgen.js is a JavaScript library that provides random word, text, rap generation. It generates not existing words, but words that are similar to existing words. It is based on the [Markov chain algorithm](https://en.wikipedia.org/wiki/Markov_chain) yet uses `Math.random()`.

## Installation

```bash
npm install wordgen.js
```

## Usage

You can generate a random word, text, rap, etc. with just a few lines of code.
For a word creation you have to define a Word/WordGenerator class with several options, all of them are optional.
```js
const { Word } = require('wordgen.js');
const nickname = new Word({
    length: 5, // Generates a word with 5 letters
    amount: 10, // Generates 10 words with a length of 5 letters
    syllables: 3 // Generates 10 words with a length of 5 letters and 3 syllables
});
console.log(nickname.generate());
// Generates a word with given options
// Always returns an array of words
```

---

For a text creation you have to define class as well, this time it is a Text/TextGenerator class.
```js
const { Text } = require('wordgen.js');
const article = new Text({
    length: 100, // Generates a paragraph with 100 letters (spaces count as well)
    words: 10, // Generates a paragraph with length of 100 letters & 10 words, if not specified, words amount will be randomized
    paragraph: 3 // Generates 3 paragraphs with given options above
});
console.log(article.generate());
// Generates a text with given options
// Always returns an array of paragraphs
```

---

Unlike previous classes for a mumble rap generation you'd have to pass a required scheme option.
```js
const { MumbleRap } = require('wordgen.js');
const randomshit = new MumbleRap({
    length: 150, // Generates a quatrain & chorus with 150 letters (spaces count as well)
    scheme: 'q-c-q-q-c' // Scheme of the mumble rap separated with "-" (quatrains are "q", choruses are "c")
});
console.log(randomshit.generate());
```