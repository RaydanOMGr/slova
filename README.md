<p align="center">
  <img alt="slova" src="public/slova.svg" width="200px" />
</p>

# Overview

Slova (Russian word for "words", pronounced `/slova/`) is a placeholder
tool generating non-existing words. It includes various generators
such as: `word`, `text` & `rap`.

# Install

```bash
$ npm install slova
$ yarn add slova
```

# Usage

You can generate a random word, text, rap, etc. with just a few lines of code.

For a word creation you have to define a `word` function wrapper or `Word/WordGenerator` class with several options,
all of them are optional:

```js
import { word, Word } from "slova"; // esm
const { word, Word } = require("slova"); // or cjs

const nickname = word({
  length: 5, // Generates a word with 5 letters
  amount: 10, // Generates 10 words with a length of 5 letters
  syllables: 3 // Generates 10 words with a length of 5 letters and 3 syllables
});

const username = new Word({
  length: 5, // Generates a word with 5 letters
  amount: 10, // Generates 10 words with a length of 5 letters
  syllables: 3 // Generates 10 words with a length of 5 letters and 3 syllables
});

console.log(nickname());
console.log(username.generate());
// Generates a word with given options
// Always returns an array of words
```

For a text creation you have to define function/class as well, this time it is a `text` or `Text/TextGenerator`:

```js
import { text, Text } from "slova"; // esm
const { text, Text } = require("slova"); // or cjs

const article = text({
  length: 100, // Generates a paragraph with 100 letters (spaces count as well)
  words: 10, // Generates a paragraph with length of 100 letters & 10 words, if not specified, words amount will be randomized
  paragraphs: 3 // Generates 3 paragraphs with given options above
});

const blog = new Text({
  length: 100, // Generates a paragraph with 100 letters (spaces count as well)
  words: 10, // Generates a paragraph with length of 100 letters & 10 words, if not specified, words amount will be randomized
  paragraphs: 3 // Generates 3 paragraphs with given options above
});

console.log(article());
console.log(blog.generate());
// Generates a text with given options
// Always returns an array of paragraphs
```

Unlike previous functions/classes for a mumble rap generation you'd have to pass a required scheme option:

```js
import { mumbleRap, MumbleRap } from "slova"; // esm
const { mumbleRap, MumbleRap } = require("slova"); // or cjs

const randomshit = mumbleRap({
  scheme: 'q-c-q-q-c', // Scheme of the mumble rap separated with "-" (quatrains are "q", choruses are "c")
  length: 150 // Generates a quatrain & chorus with 150 letters (spaces count as well)
});

const manImBadAtNamingVars = new MumbleRap({
  scheme: 'q-c-q-q-c', // Scheme of the mumble rap separated with "-" (quatrains are "q", choruses are "c")
  length: 150 // Generates a quatrain & chorus with 150 letters (spaces count as well)
});

console.log(randomshit());
console.log(manImBadAtNamingVars.generate());
```

# Documentation

All the available documentation regarding the usage of the package is in jsdoc of each / types.

# Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

# License

This project is under [MIT](https://choosealicense.com/licenses/mit/) license. You can freely use it for your own purposes.

# Todo

- [ ] Add JSDoc
- [x] Return OOP approach
- [x] Return single object argument approach