const Text = require('./text');

module.exports = class MumbleRap {
    constructor({
        length = 150, // Length of each quatrain & chorus
        scheme = 'q-c-q-q-c' // Scheme of the mumble rap
    }) {
        if (isNaN(length)) throw new Error('Length must be a number!');
        if (length < 0 || length === 0) throw new Error('Length cannot be negative or equal 0!');
        if (typeof scheme !== 'string') throw new Error('Scheme must be a string!');
        if (!scheme.match(/^([q|c])\1*(?:-([q|c]))*$/)) throw new Error('Scheme must only contain q and c!');
        if (scheme.length < 1) throw new Error('Scheme cannot be empty!');
        this.length = length;
        this.scheme = scheme.split('-');
    }

    generate() {
        let mumbleRap = [];
        const chorus = this.quatrain();

        for (let i = 0; i < this.scheme.length; i++) {
            if (this.scheme[i] === 'q') mumbleRap.push(this.quatrain());
            else if (this.scheme[i] === 'c') mumbleRap.push(chorus);
            else throw new Error('Invalid scheme!');
        }

        return mumbleRap;
    }

    quatrain() {
        const quatrain = [];

        const quatrainLineLength = Math.floor(this.length / 4);
        const quatrainLineInstance = new Text({ length: quatrainLineLength });
        for (let i = 0; i < 4; i++) {
            quatrain.push(quatrainLineInstance.generate().join(' '));
        }

        return quatrain;
    }
}