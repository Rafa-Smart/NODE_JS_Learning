// https://chatgpt.com/c/682477f9-d34c-8009-a53e-d366a196aeea

import process from "process";
console.log(`Process ID: ${process.pid}`);
console.log(`Platform: ${process.platform}`);
console.log(`Current Directory: ${process.cwd()}`);
console.log(`Node Version: ${process.version}`);
console.table(process.argv);
console.table(`env: ${process.env}`);


// ini argument yang ditangkapnya
// PS C:\DATA-PEMROGRAMAN-WEB-GITHUB\NODE_JS_2025> node 7.process.mjs budi 25
// Process ID: 12400
// Platform: win32
// Current Directory: C:\DATA-PEMROGRAMAN-WEB-GITHUB\NODE_JS_2025
// Node Version: v22.14.0
// Arguments: budi,25

console.log("============")

process.addListener("exit", (code) => {
    console.log("kode program keluar dengan kode :", code)
})

// jadi sebenarnya kita ga perlu emit manual, karena ketika kita sudah beres menjalankan kode program node js kita, maka nanti akan otomatis keluar dari program node js, jadi pas di run maka nanti akan langsung exit programnya


// atau bisa juga manual
process.exit(1) // maka kodenya akan 1
// dan seluruh kode dibawahnya tidak akan dijalankan