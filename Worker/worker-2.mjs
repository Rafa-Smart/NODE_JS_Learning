import { parentPort, threadId } from "worker_threads";

parentPort.addListener("message", function(data) {
    let hasil = data * 7 + 9 - 6
    console.log("info dari thread ", threadId) // ini bakalan langusng kekirim di lognya si
    // main-workerData, karena ada si threadId ini 
    parentPort.postMessage(hasil);
    parentPort.close()
})