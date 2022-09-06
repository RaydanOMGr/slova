function createWord(partCount) {
	const alpha = "aeiouy".split("");
	const bet = "bcdfghjklmnpqrstvwxz".split("");
	const ckWords = "ck ch sh".split(" ");


	let word = "";
	for(let i = 0; i < partCount; i++) {
		const randomNum1 = Math.floor(Math.random() * alpha.length);
		const randomNum2 = Math.floor(Math.random() * bet.length);

		const thirdLetter = Math.floor(Math.random() * 2);

		let wordPart = "";
		if(thirdLetter == 1) {
			const randomNum3 = Math.floor(Math.random() * bet.length);
			const randomNum4 = Math.floor(Math.random() * 2);

			wordPart = wordPart + bet[randomNum2];
			if(randomNum4 == 0) {
				wordPart = wordPart + alpha[randomNum1];
				wordPart = wordPart + bet[randomNum3];
			} else if(randomNum4 == 1) {
				const randomNum5 = Math.floor(Math.random() * alpha.length);

				wordPart = wordPart + alpha[randomNum1];
				wordPart = wordPart + alpha[randomNum5];

				delete randomNum5;
			}
			} else if(thirdLetter == 0) {
			wordPart = wordPart + bet[randomNum2];
                        wordPart = wordPart + alpha[randomNum1];

			const ckLetter = Math.floor(Math.random() * 2);
			if(ckLetter == 1) {
				const randomNum4 = Math.floor(Math.random() * ckWords.length);

				wordPart = wordPart + ckWords[randomNum4];
			}
		}
		delete wordPart;
		delete randomNum1;
		delete randomNum2;
		delete randomNum3;
		delete randomNum4;
		delete ckLetter;
		delete thirdLetter;

		word = word + wordPart;
	}

	return word;

}

require("fs").writeFileSync("./words.txt", "");

const loopTimes = 950000;

let words = [];
const wordsToLoop = 125000;
let wordsLooped = wordsToLoop;

const startTime = new Date();

console.log(
`Starting "Word Generator":
    Amount of words: ${loopTimes},
    Words to Loop for the message: ${wordsToLoop},
    Starting time: ${startTime}
`);

for(let i = 0; i <= loopTimes; i++) {
	words.push(createWord(Math.floor(Math.random() * (6 - 2) + 2)));

	if(wordsLooped == 0 || i >= loopTimes) {
		require("fs").writeFileSync("./words.txt", require("fs").readFileSync("./words.txt") + words.join("\n"));
		words = [];
		wordsLooped = wordsToLoop;

		if(i == loopTimes) {
			console.log("Wrote " + i + " words! It's done");
		} else {
			console.log("Wrote " + i + " words! Just " + (loopTimes - i) + " words left!");
		} 
	}

	wordsLooped--;
}

console.log(
`Stopping "Word Generator":
    Amount of Words: ${loopTimes},
    Words to Loop for the message: ${wordsToLoop},
    Starting time: ${startTime}
    Ending time: ${new Date()}
    Time it took: ${Math.floor((new Date() - startTime) / 1000)} seconds
`);
