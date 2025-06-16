import  { Worker, isMainThread, parentPort, threadId} from "worker_threads"
import path from "path";
import { fileURLToPath } from "url";
console.clear()

// https://chat.deepseek.com/a/chat/s/603e1b16-a10b-4818-a18e-c4ec71c995b8

// worker threads ini cara kerjanya mirip seperi web worker di browser web api

// jadi kita itu ketika ingin membuat worker threads itu kita membutuhkan 2 file, yaitu file utama dan file worker
// file utama itu adalah parentPort


// jadi gini 
// 🔍 Apa itu __dirname?
// __dirname adalah variabel khusus di Node.js yang berisi path lengkap ke direktori tempat file JavaScript kamu berada.


// jadi itu adalalh variable global untuk mengetahui direktori tempat file kita berada
// kalo __filename itu untuk mengetahui nama file kita berada

// Jadi bukan folder tempat terminal kamu berada, tapi folder tempat file itu disimpan.

// Dapatkan __dirname di ESM
const __filename = fileURLToPath(import.meta.url); // nama file saat ini
const __dirname = path.dirname(__filename);

// Path absolut ke file worker
const worker1 = new Worker(path.join(__dirname, "worker-1.mjs"), { type: "module" });
const worker2 = new Worker(path.join(__dirname, "worker-2.mjs"), { type: "module" });



worker1.addListener("message", function(data){
    console.log(`menerima data dari thread ${threadId} ${data}`)
})
worker2.addListener("message", function(data){
    console.log(`menerima data dari thread ${threadId} ${data}`)
})

// disini kita akn mengirim tugas ke worker worker kita
worker1.postMessage(50)
worker2.postMessage(5)


// cara berkomunikasi
// jadi kalo onmessage itu artinya menerima pesan,
// kalo postmessage itu artinya mengirim pesan

// atau sebenarnya kita juga bisa jadi, satu file worker saja, tapi kita bisa panggil berkali kali, jadi
// worker1 = new Worker(path.join(__dirname, "worker.mjs"), { type: "module"})
// worker2 = new Worker(path.join(__dirname, "worker.mjs"), { type: "module"})
// nah jadi file nya sama
// nanti tinggal worker1.postmessage(29)
// dan worker2.postmessage(100)

// jdi lebih efisien file 