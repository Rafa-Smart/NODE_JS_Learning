
import {URL} from "url";

const dataUrl = new URL('https://www.programmerzamannow.com/belajar?kelas=nodejs')

// Membuat byte array yang merepresentasikan teks "Hello"
const bytes = new Uint8Array([72, 101, 108, 108, 111]);

// Mengonversi byte array menjadi string
const text = new TextDecoder().decode(bytes);
// jadi text decode adalah untuk mengubah byte ke strig dan defaultnya itu utf-8, bisa juga yang lain nanit
// ditaro di new TextDecoder("utf-16")
console.log(text);  // Output: Hello

console.log("===============")

// disini kita ubah

console.log(dataUrl.host)
console.log(dataUrl.port)
console.log(dataUrl.search)
console.log(dataUrl.pathname)
console.log(dataUrl.searchParams)

dataUrl.host = "www.Khadafi.com"
dataUrl.pathname = "/belajar"
dataUrl.searchParams.append("status", "premium")


console.log(dataUrl.host)
console.log(dataUrl.port)
console.log(dataUrl.search)
console.log(dataUrl.pathname)
console.log(dataUrl.searchParams)