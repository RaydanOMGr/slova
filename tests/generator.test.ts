import { sampleWord } from "../src/lib/tools/generator";

test("Generator", () => {
  for (let i = 0; i < 100; i++) {
    // A length must be 5
    // 2 syllables expected
    expect(sampleWord(5, 2)).toHaveLength(5);
  }
});