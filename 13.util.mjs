// https://chat.deepseek.com/a/chat/s/eca40b2e-130c-4b1f-ba02-5bcbdc0fb490

// jadi util itu berguna ketika

// Ketika membutuhkan pemeriksaan tipe yang lebih akurat daripada typeof atau instanceof.
// Ketika bekerja dengan pewarisan prototipal dan ingin sintaks yang lebih bersih.
// Ketika ingin mengkonversi callback ke promise atau sebaliknya.
// ketika membutuhkan format output debugging yang lebih baik.
// Ketika ingin menandai fungsi sebagai deprecated dengan cara standar.


// jadi ada bebrapa keuntungan salah satu conohnya adalah

import util from 'util'

const name = 'John';
const age = 30;
// tpai ini ga harus berurutan, karena udah dicek tipe datanya 
console.log(util.format('Nama: %s, umur: %d', age, name))
// Output: Nama: John, Umur: 30
// %f = float
// %i = integer
// %j = JSON
// %o  = objek

// contoh 2
const deepObj = { a: 1, b: { c: { d: { e: 5 } } } };
console.log(deepObj); 
// Output: { a: 1, b: { c: { d: [Object] } } } ← hanya sampai level 2
// jadi akan mengukur kedalaman dari objek tersebut, jadi jika objeknya terlalu dalam maka akna ditampilkan juga isinya buakan hanya [Object] saja
console.log(util.inspect(deepObj, {depth: null, colors: true, compact: false, showHidden: true,sorted: true}));
// Output: { a: 1, b: { c: { d: { e: 5 } } } } ← semua level



// contoh 3
// sebenarnya ada banyak sekali fungsi untuk mengecek yang seperti ini, lihat saja di dokuementasinya
util.types.isDate(new Date()); // true
util.types.isMap(new Map()); // true
util.types.isRegExp(/abc/); // true


// constoh 4 membuat inheritance, tpai ini sudah tidak seharusnya digunakna lagi
class Hewan {
    constructor(nama, jenis){
        this.nama = nama;
        this.jenis = jenis;
    }
    suara(){
        return `hewan ${this.nama} Bersuara`
    }
}


class Kucing {
    constructor(){
        // super()
        // atau bisa juga mneggunakan 
        // Object.setPrototypeOf(this, Hewan.prototype);
        // this = Object.create(Hewan.prototype);
        Hewan.call(this)
    }
    suara() {
        return `Kucing ${this.nama} bersuara miaww`
    }
}
util.inherits(Kucing, Hewan);
console.log(util.inspect(Kucing.prototype, {showHidden: true, colors: true, depth: null}));
// nah disini diunakan util
// nanti class kucing akan mewarisi semua property dari si class Hewan

// contoh 5
// mengkonversi callback ke promise

import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// ini cara biasanya
fs.readFile(path.join(__dirname,"TES-File-System","2.data-contoh-2.txt"), "utf-8", (err, data) => {
    if(err){
        console.error("Error reading file:", err);
        return false
    }
    console.log("File content:", data);
})

// ini kmau buka aja

const readFileTes = util.promisify(fs.readFile);
const data = await readFileTes(path.join(__dirname,"TES-File-System","2.data-contoh-2.txt"), "utf-8")
console.log("File content:", data);
// // jadi util.promisify itu akan mengubah fungsi yang menggunakan callback menjadi promise, sehingga kita bisa menggunakan async/await


// contoh 6
// mengkonversi promise ke callback

async function ceritanyaPromise(){
    return `ini return dari promise, karena sudah pake async`
}

const dataCallback = util.callbackify(ceritanyaPromise);
dataCallback((err, data) => {
    if(err){
        console.log("Error:", err);
        return; 
    }
    console.log("Data from callback:", data); // Data from callback: ini return dari promise, karena sudah pake async
})

// contoh 7
// untuk memberi tahu bahwa fungsi ini sudah tidak digunakan lagi
function fungsiGaGuna(){
    console.warn("ini kode fungsi lama");
    // kode fungsi lama
}
const menjalankanFungsi = util.deprecate(fungsiGaGuna, "fungsiGaGuna() sudah tidak digunakan lagi, silakan gunakan fungsiBaru() sebagai gantinya.");
menjalankanFungsi(); 
// ini kode fungsi lama
// (node:12736) DeprecationWarning: fungsiGaGuna() sudah tidak digunakan lagi, silakan gunakan fungsiBaru() sebagai gantinya.
// (Use `node --trace-deprecation ...` to show where the warning was created)

// nanti belajar lebih lanjut tentang util di https://nodejs.org/api/util.html
// atau di https://www.npmjs.com/package/util

// dan belajar juga yang debugLog