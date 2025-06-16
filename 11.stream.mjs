// jadi stream adalah sebuah fitu untuk mengabstraksi data secara berurutan, bukan secara keseluruhan sekaligus, pai bertahap, dan sangat bermanfaat unutk mengatasi data yang besar, jadi untuk efesiensi memori, keceptan,dll 

// cara kerjanya itu 
// Stream bekerja dengan konsep "chunk" (potongan data bisa 64 kb / dll). Setiap kali data tersedia, potongan tersebut segera diproses tanpa menunggu seluruh data selesai dikumpulkan.

// Event-Driven: Stream memancarkan event seperti data, end, error, dan finish.
// Pipeline: Mengalirkan data dari satu stream ke stream lainnya, mengurangi risiko kebocoran memori.
// Backpressure Handling: Mengatur aliran data ketika kecepatan baca dan tulis tidak seimbang.

// jadi stream ini cuma kontrak, jdi kmu bekerja dengan core modul yang lain tapi dengan kontrak atu bantuan dari
// si stream ini

import fs from "fs";
import zlib from "zlib"
import path from "path"
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const readStream = fs.createReadStream(path.join(__dirname,"Tes-File-System", "1.data-contoh-1.txt" ) , {
    encoding:"utf-8",
    highWaterMark:16 // jadi hanya menerima per chunk itu 16 byte saja
    // satu charakter itu 1 byte, jadi ini akna ada 16 karakter
});
let dataKe = 0

readStream.on("data", function(dataChunk){
    setTimeout(() => {
        dataKe++
        console.log(`data chunk ke - ${dataKe} : ${dataChunk}`);
    }, 1000)
})

readStream.addListener("end", function(){
    console.log("data sudah diterima semua...")
})

readStream.addListener("error", function(err) {
    console.log("error : ", err);
})


console.log("===================")



// Buat stream untuk membaca file
const readable = fs.createReadStream(path.join(__dirname,"Tes-File-System", "2.data-contoh-2.txt" ));

// Buat stream untuk mengompresi data
const gzip = zlib.createGzip();

// Buat stream untuk menulis hasil kompresi
const writable = fs.createWriteStream(path.join(__dirname,"Tes-File-System", "2.data-contoh-2.txt.gz" ));

// Menggunakan pipe untuk mengalirkan data
// nah jadi dari stream read langsung di salurkan ke stream zlib (dikompresi), lalu setelah di kompresi langsung disalurkan lagi ke stream write, dan selesai
// jadi tidak perlu :
// Membaca seluruh file ke dalam memori.
// Mengompres seluruh data sekaligus.
// Menulis hasilnya ke file baru.
readable.pipe(gzip).pipe(writable);

console.log('File berhasil dikompresi.');
