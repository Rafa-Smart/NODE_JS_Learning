// https://chat.deepseek.com/a/chat/s/0aa792b7-1441-4c98-a9e9-bc1c0cbcf89d
// Zlib adalah modul bawaan Node.js yang menyediakan fungsionalitas kompresi dan dekompresi menggunakan algoritma Gzip, Deflate, dan Brotli. Modul ini sangat penting untuk optimasi ukuran data dalam berbagai aplikasi Node.js.

// jadi sebenarnya kalo kita mengkrompresi data itu, dibaliknya itu kita mencari data atau pola yang duplikat lalu di hapus untuk mengurangi ukuran data. jadi itu yang disebut dengan kompresi data. dan itu juga bisa digunakan untuk mengurangi ukuran file yang besar.

// fungsinya adlaah
// Membuat backup yang lebih kecil ukurannya
// Mengoptimalkan pertukaran pesan dalam aplikasi real-time

console.log("Direktori kerja saat ini:", process.cwd());
import zlib from "zlib";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

let __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename); //c:\DATA-PEMROGRAMAN-WEB-GITHUB\NODE_JS_2025
console.log(__dirname)

const data = fs.createReadStream(
  path.join(__dirname, "TES-File-System", "3.data-tes.txt")
); // gausah pake utf 8, karenaa ga akna kita baca dan langusng di hubungkan ke pipe lain
const gzib = zlib.createGzip();
const output = fs.createWriteStream(
  path.join(__dirname, "TES-File-System", "4.hasil-data-tes.gz")
);
data.pipe(gzib).pipe(output);

// atau melakukan dekompresi data


// jadi setelah di kompresi maka langung di dekompresi lagi, sebelumnya itu pas di kompresi langsung di dekompresi, maka akan rusak, makanya harusnya ini itu beda file
output.addListener("finish", function () { // jadi ini kalo misalkan si outputnya sudah finish (artinya sudah di kompresi), baru kita dekompresi
  const gunzip = zlib.createGunzip();
  const input = fs.createReadStream(
    path.join(__dirname, "TES-File-System", "4.hasil-data-tes.gz")
  );
  const output2 = fs.createWriteStream(
    path.join(__dirname, "TES-File-System", "input_decompressed.txt")
  );

  input.pipe(gunzip).pipe(output2);

  output2.on("finish", () => {
    console.log("✅ Dekompresi selesai!");
  });
});
