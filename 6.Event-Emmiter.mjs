import { EventEmitter } from "events";

// cara kerja dari event Emmiter
{
  // jadi ini struktur, dibelakagn layar, jadi
  // ketika kamu menginisiasi event pake on, atau once (unstuk sekali), maka js akan membuatkan ini

  // jadi misal
  //   myEmmiter.on("tes1", (dataTes1a) => console.log("tess1"));
  //   myEmmiter.on("tes1", (dataTes2a) => console.log("tess2"));
  //   myEmmiter.on("tes2", (dataTes1b) => console.log("tess3"));
  //   myEmmiter.on("tes2", (dataTes2b) => console.log("tess4"));

  // nah berati di jsnya akan dibuatkan
  // jadi setiap event adalah keynya, dan setiap listener adalah nilainya
  // Listener adalah fungsi yang terdaftar untuk menangani atau merespons sebuah event yang dipancarkan (dengan emit). Sebagai contoh, jika kamu ingin merespons suatu event, kamu akan mendefinisikan fungsi (listener) yang akan dijalankan ketika event tersebut dipancarkan.

  // kalo once itu sekali di pancarkan nanti listenernya akna dihapus lagi otomatis
  //   const tes = {
  //     tes1: [dataTes1a, dataTes1b, ...selanjutnya],
  //     tes2: [dataTes2a, dataTes2b, ...selanjutnya],
  //   }

  class MyEventEmitter {
    constructor() {
      this.events = {}; // tempat penyimpanan semua event dan listener
    }

    // Menambahkan listener ke event
    on(eventName, listener) {
      if (!this.events[eventName]) {
        this.events[eventName] = []; // buat array baru kalau belum ada
      }

      this.events[eventName].push(listener); // simpan listener
    }

    // Memancarkan (emit) event
    emit(eventName, ...args) {
      const listeners = this.events[eventName]; // ini dia akan mereturn sebuah array yang berisi listenernya

      if (listeners) {
        listeners.forEach((listener) => {
          listener(...args); // panggil setiap listener dengan argumen
          // kan listener ini adalh sperti fungsi, dan akan di looping fungsi nya untuk menjalankan parameter parameter yang diberikan, klo satu misalkan rafa, maka di setiap fungsinya parameternya, akan selalu rafa, dan kalo banyak juga nanti akan selalu yang banyak itu yang akan dijadikan parameternya
        });
      }
    }
  }

  //   contoh penggunaan
  const emitter = new MyEventEmitter();

  emitter.on("sayHello", (name) => { // listener 1
    console.log(`Hello, ${name}!`);
  });

  emitter.on("sayHello", (name) => { // listener 2
    console.log(`How are you, ${name}?`);
  });

  emitter.emit("sayHello", "Rafa"); // disini akan menjalankan semua listener yaitu 1 dan 2, liat diatas

  //   Hello, Alice!
  // How are you, Alice?
}

// jadi event ini akna jijalankan sesuai dengan urutannya

// contoh 1
{
  const emitter = new EventEmitter();

  // Listener 1 - sinkron
  emitter.on("pesan", () => {
    console.log("Listener 1: Pesanan diterima.");
  });

  // Listener 2 - menggunakan process.nextTick() (jalan *segera setelah* listener sinkron selesai)
  emitter.on("pesan", () => {
    process.nextTick(() => {
      console.log("Listener 2: Siapkan bahan (nextTick).");
    });
  });

  // Listener 3 - menggunakan setImmediate() (jalan setelah event loop saat ini selesai)
  emitter.on("pesan", () => {
    setImmediate(() => {
      console.log("Listener 3: Masak pesanan (setImmediate).");
    });
  });

  // Listener 4 - sinkron
  emitter.on("pesan", () => {
    console.log("Listener 4: Cetak struk pesanan.");
  });

  console.log('Memanggil event "pesan"...');
  emitter.emit("pesan");
}

// contoh 2
// menggunakan once, jadi hanya sekali pakai saja, kalo misalkan di pakai untuk yang kedua kalinya, maka yang kedua tidak akan dijalankan
{
  console.log("=================");
  let m = 0;
  const emmiter = new EventEmitter();
  emmiter.once("tes", () => {
    console.log("hanya sekali saja", "m :" + ++m);
  });

  emmiter.emit("tes"); // hanya sekali saja m : 1
  emmiter.emit("tes"); // tidka ada, dan kosong
}

// contoh lagi
{
  console.log("=============");
  const emmiter = new EventEmitter();
  emmiter.once("makan", (jumlah) => {
    console.log(`kamu telah makan dengan jumlah : ${jumlah}`);
  });

  //   nah ini tidka akan bisa karena once hanya bisa sekali
  emmiter.emit("makan", 4);
  emmiter.emit("makan", 6);

  // oke lanjut lagi
  // ini agar bisa membuat sebuah listener di tambahkan di awal array (tempas si listener)
  emmiter.on("sapa", (nama) => {
    console.log(`haloo ${nama}`);
  });
  // kalo begini, maka urutnanya adalah
  // haloo nama
  // apa kabar kamu hari ini ? nama

  // emmiter.on("sapa", nama => {
  //     console.log(`apa kabar kamu hari ini ? ${nama}`)
  // })

  // nah dnegan prependListener ini maka kita bisa menaruh listenernya di awar array (tempat penympanan listener), dan akan dieksekusi duluan
  emmiter.prependListener("sapa", (nama) => {
    console.log(`apa kabar kamu hari ini ? ${nama}`);
  });
  //   apa kabar kamu hari ini ? rafa
  // haloo rafa
  emmiter.emit("sapa", "rafa");

  // karena kalo kita pake ini, maka nanti listenernya akan didaftarkan di awal arraynya, jadi ga akan ke cek oleh si oncenya
}
