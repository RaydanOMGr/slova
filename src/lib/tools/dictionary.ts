import type { Models } from "../types/models";

export const consonants: Models.Consonant[] = [
  { letter: "b", probability: 1 },
  { letter: "c", probability: .66 },
  { letter: "d", probability: 1 },
  { letter: "f", probability: 1 },
  { letter: "g", probability: .66 },
  { letter: "h", probability: .66 },
  { letter: "j", probability: .66 },
  { letter: "k", probability: 1 },
  { letter: "l", probability: 1 },
  { letter: "m", probability: 1 },
  { letter: "n", probability: 1 },
  { letter: "p", probability: 1 },
  { letter: "q", probability: .4 },
  { letter: "r", probability: 1 },
  { letter: "s", probability: 1 },
  { letter: "t", probability: 1 },
  { letter: "v", probability: .66 },
  { letter: "w", probability: .5 },
  { letter: "x", probability: .5 },
  { letter: "z", probability: .5 },
];

export const vowels: Models.Vowel[] = [
  { letter: "a", probability: 1 },
  { letter: "e", probability: 1 },
  { letter: "i", probability: 1 },
  { letter: "o", probability: 1 },
  { letter: "u", probability: 1 },
  { letter: "y", probability: .66 },
];

export const digraphs: Models.Digraph[] = [
  { letter: "ch", probability: 1 },
  { letter: "ck", probability: 1 },
  { letter: "sh", probability: 1 },
  { letter: "th", probability: 1 },
  { letter: "ng", probability: .66 },
  { letter: "wh", probability: .66 },
];
