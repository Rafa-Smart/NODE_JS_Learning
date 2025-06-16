import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ini cara async biasa
// rl.question("masukan nama anda : ", nama => {
//     console.log("hallo ", nama)
//     rl.close()
// })

// ini promises
function ambilData(tanya) {
  return new Promise((resolve) => {
      rl.question(tanya, (data) => {
          resolve(data);
        });
    })
}


async function ambilDataRata(ulang){
    let dataArray = [];
    for(let i = 0; i < ulang; i++){
        let hasil = await ambilData(`masukan harga belanja ${i+1} : `)
        // nah jadi disini ini nanti setiap perulagnan kan user aakn mnasih jawaban misal 78, maka nanti disetiap perluangan ini
        // maka si let hasilnya ini akan di akan ditimpa degngan jawaban user selanjutnya
        console.log(hasil)
        dataArray.push(Number(hasil)); // disini kita parse dulu, agar jadi number dan bisa di operasikan
    }
    return dataArray
}

// nanti juga ini bisa di bungkus dulu dengan fungis async, lalu dibungkus dnegna try catch, finaly, dan nanti si rl.close() nya, di taruh di finaly

// const nama = await ambilData("masukan nama anda : ");
// const umur = await ambilData("masukan umur anda : ");
// console.log(`halo ${nama}, umur kamu adalah ${umur}`);

// rl.close();
// console.log("progrm selesai");

// // coba lagi
// (async function jumlahRata() {
//   try {
//     let jumlah = await ambilData("masukan jumlah data : ");
//     let hasil = await ambilDataRata(jumlah);

//     const hasil2 = hasil.reduce((acc, nilai) => {
//         return acc + nilai
//     }, 0)
//     console.log(`kamu berbelanja sebanyak ${jumlah}\nrata rata nilai belaja kamu adalah : ${hasil2/jumlah}`)
//   } finally {
//     rl.close()
//     console.log("program selesai")
//   }
// })()


// kalo mau digunain, yan gdulu kamu komen dulu
// coba lagi
let total = 0;

// console.log('Ketik angka (atau "selesai" untuk berhenti): ');

// rl.on('line', (input) => {
//   if (input.toLowerCase() === 'selesai') {
//     console.log(`Total: ${total}`);
//     rl.close();
//   } else {
//     const num = parseFloat(input);
//     if (!isNaN(num)) {
//       total += num;
//       console.log(`Ditambahkan: ${num}, Total sekarang: ${total}`);
//     } else {
//       console.log('Masukkan angka yang valid.');
//     }
//   }
// });

// nah jadi dnegan ada nya event line ini, maka kita tidak perlu seperti ngasih pertanyaan ualng, jadi setiap di enter, maka program bukan selesai, tapi anjut lagi mengulang pertanyaa, dan nanti kondisi
// jika inign berhenti kita haus tentukan sendiri, pake if else, dll


// // Event "line" pada modul readline di Node.js digunakan untuk mendeteksi ketika pengguna menekan tombol Enter (atau newline).

// // 1. Apa Itu Event "line"?
// // Event ini dipicu setiap kali ada baris baru yang masuk ke dalam antarmuka readline.

// // Biasanya digunakan saat kita ingin menerima banyak baris input dari pengguna tanpa menghentikan antarmuka.

// // Event "line" dapat digunakan untuk input berkelanjutan atau stream data.




// // tadi ini cara kamu sebelumny
// function ambilDataSalah(tanya, ulang = null) {
//   let dataArray = [];
//   return (
//     new Promise((resolve) => {
//       if (ulang) {
//         for (let i = 0; i <= ulang; i++) {
//           rl.question(tanya, (data) => {
//             resolve(dataArray.push(data))
//           });
//         }
//       } else {
//         rl.question(tanya, (data) => {
//           resolve(data);
//         });
//       }
//     }),
//     dataArray
//   );
// }

// async function jumlahRataSalah() {
//   try {
//     let jumlah = await ambilDataSalah("masukan jumlah data : ");
//     let hasil = await ambilDataSalah("masukan harga :", jumlah)[1];

//     const hasil2 = hasil.reduce((acc, nilai) => {
//         return acc + nilai
//     }, 0)
//     console.log(`kamu berbelanja sebanyak ${jumlah}\nrata rata nilai belaja kamu adalah : ${hasil2}`)
//   } finally {
//     rl.close()
//     console.log("program selesai")
//   }
// }


// function tanya(quest){
//   return new Promise((resolve) => {
//       rl.question(quest, (data) => {
//         resolve(data)
//     })
//   })
// }

// function ulangData(ulang, kata){
//   for(let i = 0; i< ulang; i++){
//     console.log(kata)
//   }
// }

// (async () => {

//   try {
//     const ulang = await tanya("masukan jumlah perulangan : ")
//     const kata = await tanya("masukan kata yang diulang : ")
//     ulangData(Number(ulang), kata)
//   }finally {
//     console.log("program selesai...")
//     rl.close()
//   }
// })()

function ngambildata(pertanyaan){
  return new Promise(resolve => {
    rl.question(pertanyaan, hasil => {
      resolve(hasil)
    })
  })
}


async function hitungMean(jumlah){
  let data = [];
  for(let i = 0; i < jumlah; i++){
    let p = await ngambildata(`masukan data ke ${i+1} -> `)
    data.push(Number(p))
  }
  return data
}


(async() => {
  try{
    let jumlah = await ngambildata("masukan data jumlah = ");
    let hasil = await hitungMean(jumlah);
    let hasil2 = hasil.reduce((acc, x) => acc + x, 0)
    console.log(`hasilnya dari rata rata dari pembelian anda adalah = ${hasil2/jumlah}`)
  }finally{
    console.log("program selesai...")
    rl.close()
  }
})()