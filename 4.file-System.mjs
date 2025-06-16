import fs from "fs";
// import { readFile } from "fs/promises"

// ini penting
// liat fungsi fungsi di dalam file-system 
// https://chat.deepseek.com/a/chat/s/afc84a41-ff5c-4638-bb8f-c12b8ee02774


// 0. testing
fs.stat("./TES-File-System/1.data-contoh-1.txt", (err, stats) => {
  if(!err){
    console.log(stats.isFile()); // true
    console.log(stats.size); // file size in bytes
  }
  console.log(err)
});
console.log("===========")


// 1. ini menggunakan sync

// jadi flag itu buat ngasih tau secar aspesifik kita mau ngapain misal "r" = read, dll
// jadi Encoding adalah cara untuk memastikan data teks (karakter seperti "A", "B", "é", "😊") bisa disimpan, diproses, dan dibaca oleh komputer dan sebaliknya decoding adalah agar dari komputer yang mempunyai encoding utf-8 ke bahasa manusia tanpa merusak karakter tersebut.
const buffer = fs.readFileSync("./TES-File-System/1.data-contoh-1.txt") // kalo gapake utf-8 / encoding
console.log(buffer)// berupa buffer, dan tidak dipahami oleh kamu
// Kenapa buffer? Karena kamu tidak kasih tahu Node.js encoding-nya apa, jadi Node.js mengira kamu butuh data mentah, bukan teks.

const data = fs.readFileSync("./TES-File-System/1.data-contoh-1.txt", "utf-8")
// nah kalo ini Karena kamu memberi tahu bahwa file tersebut disimpan dalam encoding UTF-8, maka Node.js tahu cara menerjemahkan byte-to-character dengan benar.
//  Node.js tahu kamu ingin hasilnya dalam bentuk teks, jadi ia langsung melakukan decoding dari byte ke string UTF-8.
 debugger;
console.log(data) // sudah berubah menjadi bahasa manusia

console.log("===============");

// 2. ini menggunakan async
fs.readFile("./TES-File-System/1.data-contoh-1.txt", "utf-8" ,(err, data) => {
    if(!data){
        console.log(err)
    }
    console.log(data)
})

// 3. ini menggunakan promise
// kalo mau coba dua duanya ga bisa, harus promise, kalo engga async, atau kalo engga sync, harus satu

// (async () => {
//     try {
//         const data = await readFile("./TES-File-System/1.data-contoh-1.txt", {encoding:"utf-8"})
//         console.log(data)
//     }catch(err){
//         console.log(`data tidak ada : ${err}`)
//     }
// })()