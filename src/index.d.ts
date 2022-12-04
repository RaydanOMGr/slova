export class Text {
    constructor({
        length = 300,
        words,
        paragraphs
    }: {
        length?: number;
        words?: number;
        paragraphs?: number;
    });

    generate(): string[];
    paragraph(): string;
    withWords(): string;
    withoutWords(): string;
}

export class Word {
    constructor({
        length = 5,
        amount = 1,
        syllables = (length / 3)
    }: {
        length?: number;
        amount?: number;
        syllables?: number;
    });

    generate(): string[];
}

export class MumbleRap {
    constructor({
        length = 150,
        scheme = 'q-c-q-q-c',
    }: {
        length?: number;
        scheme: string;
    });

    generate(): string[];
    quatrain(): string[];
}

export class TextGenerator extends Text {}
export class WordGenerator extends Word {}
export class MumbleRapGenerator extends MumbleRap {}