import { text } from "./text";

function quatrain(length: number) {
  const quatrain = [];

  const quatrainLineLength = Math.floor(length / 4);
  const quatrainLineInstance = text(quatrainLineLength);
  for (let i = 0; i < 4; i++) {
      quatrain.push(quatrainLineInstance().join(' '));
  }

  return quatrain;
}

export function mumbleRap(
  rawScheme: string = "q-c-q-q-c",
  length: number = 150
): () => string[][] {
  // //
  if (isNaN(length)) throw new Error('Length must be a number!');
  if (length <= 0) throw new Error('Length cannot be negative or equal 0!');
  if (typeof rawScheme !== 'string') throw new Error('Scheme must be a string!');
  if (!rawScheme.match(/^([q|c])\1*(?:-([q|c]))*$/)) throw new Error('Scheme must only contain q and c!');
  if (rawScheme.length < 1) throw new Error('Scheme cannot be empty!');
  // //

  let scheme = rawScheme.split('-');

  return () => {
    let mumbleRap: string[][] = [];
    const chorus = quatrain(length);

    for (let i = 0; i < scheme.length; i++) {
        if (scheme[i] === 'q') mumbleRap.push(quatrain(length));
        else if (scheme[i] === 'c') mumbleRap.push(chorus);
        else throw new Error('Invalid scheme!');
    }

    return mumbleRap;
  }
}