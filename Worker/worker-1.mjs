import { threadId, parentPort } from "worker_threads";

// jadi parentPort itu adalah mainthread nya, dan sudah otomatis

parentPort.addListener("message", (data) => {
    console.log("info dari thread ", threadId) // ini akan terkirim ke main workernya
    parentPort.postMessage(ulang(data))
    parentPort.close()
})

function ulang(jml) {
    let arr = []
    for(let i = 0; i <jml; i++){
        arr.push(i)
    }
    return arr
}

