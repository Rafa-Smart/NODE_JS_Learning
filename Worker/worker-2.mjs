import { parentPort, threadId } from "worker_threads";

parentPort.addListener("message", function(data) {
    let hasil = data * 7 + 9 - 6
    console.log("info dari thread ", threadId)
    parentPort.postMessage(hasil);
    parentPort.close()
})