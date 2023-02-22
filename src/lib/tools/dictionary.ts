import { Models } from "../types/models";

/**
 * Consonants
 * @see
 */
export const consonants: Models.Consonant[] = [
  { letter: "b", priority: 1 },
  { letter: "c", priority: 2 },
  { letter: "d", priority: 1 },
  { letter: "f", priority: 1 },
  { letter: "g", priority: 2 },
  { letter: "h", priority: 2 },
  { letter: "j", priority: 2 },
  { letter: "k", priority: 1 },
  { letter: "l", priority: 1 },
  { letter: "m", priority: 1 },
  { letter: "n", priority: 1 },
  { letter: "p", priority: 1 },
  { letter: "q", priority: 4 },
  { letter: "r", priority: 1 },
  { letter: "s", priority: 1 },
  { letter: "t", priority: 1 },
  { letter: "v", priority: 2 },
  { letter: "w", priority: 3 },
  { letter: "x", priority: 3 },
  { letter: "z", priority: 3 },
];

export const vowels: Models.Vowel[] = [
  { letter: "a", priority: 1 },
  { letter: "e", priority: 1 },
  { letter: "i", priority: 1 },
  { letter: "o", priority: 1 },
  { letter: "u", priority: 1 },
  { letter: "y", priority: 2 },
];

export const digraphs: Models.Digraph[] = [
  { letter: "ch", priority: 1 },
  { letter: "ck", priority: 1 },
  { letter: "sh", priority: 1 },
  { letter: "th", priority: 1 },
  { letter: "ng", priority: 2 },
  { letter: "wh", priority: 2 },
];
