// ini untuk lokasi file, bukan untuk filenya
// Path adalah modul bawaan Node.js yang digunakan untuk memanipulasi dan mengelola jalur file (file paths) dalam sistem operasi. Modul ini membantu dalam menangani perbedaan format path antara Windows dan Unix-based systems (Linux/macOS), sehingga kode Anda bisa berjalan di berbagai platform tanpa masalah.

import Path from 'path'
const messyPath = '/var/log/../app/./error.log';
const cleanPath = Path.normalize(messyPath);
console.log(cleanPath); // Output: /var/app/error.log

