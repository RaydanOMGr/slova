import { sampleWord } from "../tools";

function withWords(words: number, length: number): string {
  let response = [];

  const wordsWithLength = (length - words + 1) / words;

  // Word's length is starting from 30% of avg length to 70% of avg length
  let wordMinLength = Math.ceil(wordsWithLength * 0.3);
  let wordMaxLength = Math.floor(wordsWithLength * 1.7);

  for (let i = 0; i < words - 1; i++) {
    let wordLength = Math.floor(Math.random() * wordMaxLength) + wordMinLength;
    response.push(sampleWord(wordLength));
  }

  // A length to generate last word to match the total length
  const remain = length - response.join(" ").length - 1;

  // Regenerate the paragraph if remaining length is negative
  if (remain < 0) return withWords(words, length);

  response.push(sampleWord(remain));
  return response.join(" ");
}

function withoutWords(length: number): string {
  let response = [];

  // Generate words until the length - 10 is reached
  while (response.join(" ").length < length - 13) {
    // Minimum length of the word is 3, maximum is 10
    let wordLength = Math.floor(Math.random() * 7) + 3;
    response.push(sampleWord(wordLength));
  }

  // A length to generate last word to match the total length
  const remain = length - response.join(" ").length - 1;

  // Generates a word with the length of the remaining length
  // 1 to 13 in case if words parameter isn't given
  response.push(sampleWord(remain));

  return response.join(" ");
}

function paragraph(length: number, words?: number): string {
  return words ? withWords(words, length) : withoutWords(length);
}

export function text(
  length: number = 300, // The length of the text
  words?: number, // words in a paragraph
  paragraphs: number = 1 // length * paragraphs = total length
): () => string[] {
  // //
  if (isNaN(length)) throw "Length must be a number!";
  if (isNaN(paragraphs)) throw "Paragraphs must be a number!";
  if (words && isNaN(words)) throw "Words must be a number!";
  if (length <= 0) throw "Length cannot be negative or equal 0!";
  if (words && words <= 0) throw "Words cannot be negative or equal 0!";
  if (paragraphs <= 0)
    throw "Paragraphs cannot be negative or equal 0!";
  if (words && words > length)
    throw "Words cannot be greater than the length of the text!";
  if (words && (length - words + 1) / words < 1)
    throw "The length of the text is too short for the amount of words!";
  // //

  return () => {
    let response: string[] = [];

    for (let i = 0; i < paragraphs; i++) {
      response.push(paragraph(length, words));
    }

    return response;
  };
}
