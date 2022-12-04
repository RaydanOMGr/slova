// WON'T WORK, DON'T USE, DON'T RUN, DON'T EVEN LOOK AT IT

const {
    Worker, MessageChannel, MessagePort, isMainThread, parentPort
} = require('worker_threads');

const loopTimes = 10_000;
const wordsToLoop = 125000;
const threadCount = 6;

if (isMainThread) {
    require("fs").writeFileSync("./words.txt", "");

    const stream = require("fs").createWriteStream("./words.txt");
    const startTime = new Date();

    let closed = 0;

    console.log(
        `Starting "Word Generator" Main Thread:\n    Amount of words: ${loopTimes},\n    Words to Loop for the message: ${wordsToLoop},\n    Starting time: ${startTime}
      `);
    for (let i = 1; i <= threadCount; i++) {
        const worker = new Worker(__filename);
        const channel = new MessageChannel();
        worker.postMessage({ port: channel.port1 }, [channel.port1]);
        channel.port2.on('message', (msg) => {
            if (msg.type == "log") {
                console.log("[Thread " + i + "] " + msg.data);
            } else if (msg.type == "save") {
                stream.write(msg.data);
            } else if (msg.type == "close") {
                closed = closed + 1;
                if (closed == threadCount) {
                    console.log(`Stopping "Word Generator" Main Thread:\n    Amount of Words: ${loopTimes},\n    Words to Loop for the message: ${wordsToLoop},\n    Starting time: ${startTime}\n    Ending time: ${new Date()},\n    Time it took: ${Math.floor((new Date() - startTime) / 1000)} seconds`);
                }
            }
        });
    }
} else {
    const startTime = new Date();
    const newLoopTimes = loopTimes / threadCount;

    let words = [];
    let wordsLooped = wordsToLoop;
    parentPort.once('message', (msg) => {
        const port = msg.port;
        for (let i = 0; i <= newLoopTimes; i++) {
            words.push(createWord(Math.floor(Math.random() * (6 - 2) + 2)));

            if (wordsLooped == 0 || i >= newLoopTimes) {
                port.postMessage({ type: "save", data: words.join("\n") });
                words = [];
                wordsLooped = wordsToLoop;

                if (i == loopTimes) {
                    port.postMessage({ type: "log", data: "Wrote " + i + " words! It's done" });
                } else {
                    port.postMessage({ type: "log", data: "Wrote " + i + " words! Just " + (Math.floor(loopTimes / threadCount) - i) + " words left!" });
                }
            }

            wordsLooped--;
        }

        const endTime = new Date();

        port.postMessage({ type: "log", data: "Finished!" });
        port.postMessage({ type: "log", data: "Starting time: " + startTime });
        port.postMessage({ type: "log", data: "Ending Time: " + endTime });
        port.postMessage({ type: "log", data: "Time it took: " + Math.floor((endTime - startTime) / 1000) + " seconds" });
        port.postMessage({ type: "close" });
        port.close();
    });
}
