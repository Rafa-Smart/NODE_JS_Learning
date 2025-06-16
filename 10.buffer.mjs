// buffer

// buffer ini merupakan objek yang berisikian urutan byte dengan panjang yang tetap
// buffer merupakan turunan dari tipe data Uint8Array
// jadi array yang berisi byte byte yang dapat diakses dengan indeks
// dan sebenarnya array yang biasa itu secara internal sebenarnya adalah byte byte

// nah jadi biasanya buffer ini diterima dari fungsi baca file, dari website, dll

const dataBUffer = Buffer.from("Rafa Khadafi")
console.log(dataBUffer) //<Buffer 52 61 66 61 20 4b 68 61 64 61 66 69>
console.log(dataBUffer.toJSON())
console.log(dataBUffer.toString())
console.log(dataBUffer.toString("hex"))
console.log(dataBUffer.reverse().toString()) // jadi di reverse dulu baru di stringkan

console.log("================")
// jadi kita bisa membuat buffer dari image
// dan juga bis digunakan untuk melakukan encoding dari encoding satu ke encoding lainnya

const buffer2 = Buffer.from("jamal istiqomah", "utf-8")
// nah jadi kita buat data string jamal istiqomah dnegan encodingnya utf-8,
// lalu kita ubah menjadi buffer
console.log(buffer2.toString("base64"))
// nah di parameter didalam toString ini, defaultnya adalah encoding apa yang ita masukan di Buffer.from nya
let base = Buffer.from("amFtYWwgaXN0aXFvbWFo", "base64")
console.log(base.toString("utf-8"))