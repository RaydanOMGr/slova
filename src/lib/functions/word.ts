import { sampleWord } from "../tools";

export function word(
  length: number = 5,
  amount: number = 1,
  syllables: number = (length / 3)
): () => string[] {
  if (isNaN(length)) throw 'Length must be a number!';
  if (isNaN(amount)) throw 'Amount must be a number!';
  if (isNaN(syllables)) throw 'Syllables must be a number!';
  if (length < 0 || length === 0) throw 'Length cannot be negative or equal 0!';
  if (amount < 0 || amount === 0) throw 'Amount cannot be negative or equal 0!';
  if (syllables < 0 || syllables === 0) throw 'Syllables cannot be negative or equal 0!';

  // Average syllable length is 3 as it can be 2, 3 or 4
  syllables = Math.ceil(syllables);

  return () => {
    let response: string[] = [];

		for (let i = 0; i < amount; i++) {
			response.push(sampleWord(length, syllables));
		}

		return response;
  }
}