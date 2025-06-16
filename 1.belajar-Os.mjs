
// ini cara lama, dan ga bisa kalo pake .mjs dan harus .js
// const os = require('os');


// ini cara es terbaru, tapi harus pake .mjs, atau di package.json tambah type: module
import os from 'os';

// Cek penggunaan CPU
const cpuUsage = os.loadavg();  // Nilai load average (1, 5, 15 menit)
console.log(`Load Average: ${cpuUsage}`);

// Cek memori tersedia
const freeMemory = os.freemem() / (1024 ** 3);  // Konversi ke GB
const totalMemory = os.totalmem() / (1024 ** 3);
console.log(`Memory: ${freeMemory.toFixed(2)} GB free of ${totalMemory.toFixed(2)} GB`);

console.log("++++++++")
const cpu = os.cpus()
console.table(cpu)
console.log("++++++++")
const namaHOst = os.hostname()
console.log(namaHOst)
const architecure = os.arch()
console.log(architecure)
console.log(os.platform())
console.info(os.networkInterfaces())
console.info(os.uptime())

console.log("---------");
console.log(os.version())
