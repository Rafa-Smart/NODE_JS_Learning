// jadi report ini merupakan sebuah fitur yang ada didalam node js, untuk membuat laporan secara otomatis, dalam file yang ditentukan ketika
// sesuatu terjadi pada sebuah aplikasi

// cara menggunakannya kita bisa langusng panggil di terminal atau bisa kita tulus langusng secara explisit didalam kode kita
// kao mau lewat terminal kamu tingggal tambah parameter ini ketika ingin menjalankan aplikasi kita
// node --report-uncaught-exception --report-on-signal \
// --report-on-fatalerror nama_aplikasi.js

// atau cara kedua yaitu dengna menuliskan kode secara explisit kedalam koe node js kita,
// dengan menggunkana process

// process.report.reportOnFatalError = false;
// process.report.reportOnSignal = false;
// process.report.reportOnUncaughtException = true;
// nah semua ini kita ubah menjadi true semua agar bisa membuat laporan ketika terjadi fatal error, signal, dan uncaught exception

process.report.reportOnFatalError = true;
process.report.reportOnSignal = true;
process.report.reportOnUncaughtException = true;
// process.report.directory = "/NODE_JS_2025/DATA/"
process.report.filename = "report.json";

// disini kita buat dulu program yang disengaja untuk terjadi kesalahan
// disini misal kita buat agar terjadi errir yang tidak tertangkap.

function error() {
  throw new Error("terjadi masalah internal pada program");
}
error()