import { generateString } from "../src/lib/tools/generator";

test("Generator", () => {
  for (let i = 0; i < 100; i++) {
    // A length must be 5
    // 2 syllables expected
    expect(generateString({ length: 5, syllables: 2 })).toHaveLength(5);
  }
});
