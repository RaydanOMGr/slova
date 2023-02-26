import type { Char } from "./letters";
import type { Priority } from "./enumerates";

/** Models used for the Generator tool */
export declare namespace Models {
  /** Consonant object with its letter & priority */
  interface Consonant {
    /** Consonant from the english alphabet */
    letter: Char.Consonant;
    /** A priority of the letter 0-4 */
    priority: Priority;
  }
  /** Vowel object with its letter & priority */
  interface Vowel {
    /** Vowel from the english alphabet */
    letter: Char.Vowel;
    /** A priority of the letter 0-4 */
    priority: Priority;
  }
  /** Digraph object with its letter & priority */
  interface Digraph {
    /** Digraph from the english alphabet */
    letter: Char.Digraph;
    /** A priority of the letter 0-4 */
    priority: Priority;
  }
  /** Any object with its letter & priority */
  interface Any {
    /** Any letter from the english alphabet */
    letter: Char.Consonant | Char.Digraph | Char.Vowel;
    /** A priority of the letter 0-4 */
    priority: Priority;
  }
}
