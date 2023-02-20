import { mumbleRap, text, word } from "../src";

test("Mumble Rap", () => {
  const mumble = mumbleRap("q-c-q-q-c", 150);

  // A length must be 5
  // As 3 quatrains + 2 chorus
  expect(mumble()).toHaveLength(5);

  // A length must be 4
  // as Set removes duplicate chorus
  expect([...new Set(mumble())]).toHaveLength(4);
});

test("Text", () => {
  const withoutParagraphs = text(150, 40);
  const withParagraphs = text(150, 40, 3);

  // Test if text generates 40 words
  expect(withoutParagraphs()[0].split(" ")).toHaveLength(40);

  // Test if text generates 3 paragraphs
  expect(withParagraphs()).toHaveLength(3);
});

test("Word", () => {
  const bigWord = word(150);
  const manyWords = word(5, 10);

  // Check if the big word is actually big
  expect(bigWord()[0]).toHaveLength(150);

  // Check if there are many generated words
  expect(manyWords()).toHaveLength(10);
});