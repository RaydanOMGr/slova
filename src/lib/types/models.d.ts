import type { Char } from "./letters";
import type { Priority } from "./enumerates";

/** Models used for the Generator tool */
export declare namespace Models {
  /** Consonant object with its letter & priority */
  type Consonant = { letter: Char.Consonant, priority: Priority };
  /** Vowel object with its letter & priority */
  type Vowel = { letter: Char.Vowel, priority: Priority };
  /** Digraph object with its letter & priority */
  type Digraph = { letter: Char.Digraph, priority: Priority };
  /** Any object with its letter & priority */
  type Any = { letter: Char.Consonant | Char.Digraph | Char.Vowel, priority: Priority };
}