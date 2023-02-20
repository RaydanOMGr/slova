/** Character namespace for consonants, vowels & digraphs */
export declare namespace Char {
  /** All lowercased consonants from english alphabet */
  type Consonant =
    | "b"
    | "c"
    | "d"
    | "f"
    | "g"
    | "h"
    | "j"
    | "k"
    | "l"
    | "m"
    | "n"
    | "p"
    | "q"
    | "r"
    | "s"
    | "t"
    | "v"
    | "w"
    | "x"
    | "z";

  /** All lowercased vowels from english alphabet */
  type Vowel = "a" | "e" | "i" | "o" | "u" | "y";

  /** Some lowercased digraphs from english alphabet */
  type Digraph = "ch" | "ck" | "sh";
}