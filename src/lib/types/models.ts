import type { Char } from "./letters";
import type { Probability } from "./enumerates";

/** Models used for the Generator tool */
export declare namespace Models {
  /** Consonant object with its letter & probability */
  interface Consonant {
    /** Consonant from the english alphabet */
    letter: Char.Consonant;
    /** A probability of the letter 0-1 */
    probability: Probability;
  }
  /** Vowel object with its letter & probability */
  interface Vowel {
    /** Vowel from the english alphabet */
    letter: Char.Vowel;
    /** A probability of the letter 0-1 */
    probability: Probability;
  }
  /** Digraph object with its letter & probability */
  interface Digraph {
    /** Digraph from the english alphabet */
    letter: Char.Digraph;
    /** A probability of the letter 0-1 */
    probability: Probability;
  }
  /** Any object with its letter & probability */
  interface Any {
    /** Any letter from the english alphabet */
    letter: Char.Consonant | Char.Digraph | Char.Vowel;
    /** A probability of the letter 0-1 */
    probability: Probability;
  }
}
