// jadi assert testing adalah modul di dalam node js, yang berfungsi untuk melakukan testing, komparasi, dll
// jadi kita bisa menggunakan assert untuk memastikan bahwa nilai yang dihasilkan sama dengan yang nilai yang diharapkan

// contoh
import assert from "assert";
const arr_1 = [2, 3, 4, 5, 6, 7, 8, 9];
const arr_2 = [2, 3, 4, 5, 6, 75, 8, 9];

// disini kita testing
// assert.deepEqual(arr_1, arr_2, "data array tidak sama")
// AssertionError [ERR_ASSERTION]: data array tidak sama

function createUser(reqBody) {
  // Validasi field wajib
  //ini buat ngecek, kalo misal di parameter pertama itu false, maka akan dijalankan kode error yang ada di parameter kedua nilainya bisa (message?: string | Error | undefined)
  assert.ok(reqBody.email, new Error("email harus diisi!"));
  assert.ok(reqBody.password, "Password harus diisi");
  assert.strictEqual(typeof reqBody.email, "string", "Email harus string");
  assert.ok(reqBody.password.length >= 8, "Password minimal 8 karakter");

  // Validasi format email
  const emailRegex = /\S+@\S+\.\S+/;
  assert.match(reqBody.email, emailRegex, new Error("email harus diisi!"));
  console.log("hasilnya benar semua...");
  // Proses pembuatan user...
  return true;
}

const data = {
  email: "rafakhadafi1205@gmail.com",
  password: "12345678",
};

createUser(data);

// try{
//     createUser(data)
// }catch(e){
//     console.log(e.message)
// }

// testing yang sederhana lagi

class Self {
  static add(a, b) {
    assert.ok(typeof a === "number", "tipe data harus number !");
    assert.deepEqual(typeof b, "number", "tipe data harus numberr!");
    assert.ok(a > 0, "angka harus positif");

    return a + b;
  }
}

console.log(Self.add(3, 4)); // err

// assert: Untuk testing, lebih ringkas, dan punya fitur khusus.

// if: Untuk logika program sehari-hari, lebih fleksibel.

// ini penting JADI;
// Jangan pakai assert di kode produksi karena bisa mematikan program jika gagal (kecuali untuk tujuan debugging).

const date = new Date();
const dateFake = {};
Object.setPrototypeOf(dateFake, Date.prototype);
// assert.deepStrictEqual(date, new dateFake, "ini tidak boleh terjadi"); // ini masih gagal, karena fakeDate ukan constructor

class dateFake2 extends Date {}
assert.deepEqual(date, new dateFake2(), "masih ga bisa"); // in bisa
console.table(dateFake2);
// assert.deepStrictEqual(date, new dateFake2, "masih ga bisa"); // ini ga bisa
// + 2025-05-12T02:43:04.453Z
// - dateFake2 2025-05-12T02:43:04.454Z
const data2 = new dateFake2();

assert.deepStrictEqual(
  date.toDateString(),
  data2.toDateString(),
  "ini ga bisa "
); // nahh ini bisa
// karena yang diceknya itu adalah nilai strin datenya, buakan dari contructornya

// kenapa ga bisa ?
// karena
// assert.deepEqual melakukan perbandingan dengan coercion type (lebih longgar)

// assert.deepStrictEqual melakukan perbandingan strict (termasuk cek tipe dan constructor)
console.log({
  dateConstructor: date.constructor.name, // 'Date'
  fakeConstructor: dateFake2.constructor.name, // 'DateFake'
});

// deepStrictEqual melakukan cek ini:
// 1. Apakah constructor sama? → Tidak (Date vs DateFake)
// 2. Apakah prototype chain sama? → Tidak
// 3. Jadi dianggap tidak equal

// contoh lagi yang reject pake promise
// Simulasi fungsi login (async)

// ini kenapa kita conoth promise pake aync, karena setiap fungsi yang awalnya asyc pasti mereturn promise inget lagi materinya)
async function loginUser(username, password) {
  if (password !== "123456") {
    throw new Error("Password salah!"); // Melempar error jika password tidak sesuai
  }
  return { username, token: "abc123" }; // Return data user jika sukses
}

(async () => {
  // disini sebenernya kita ga perlu pake async, karena file .mjs ini sudah ada asyncnya, jadi bisa langusng saja await
  await assert.rejects(
    // disini kita await datanya
    async () => await loginUser("rafa", "ini sengaja salah"),
    {
        // jdi objek yng direturn oleh si fungsi promise di parameter pertaman ini akna di kompare dengan objek yang   ad di sini, dan kalo sama maka berati test nya berhasil, dan berati ada kesalahan di dalam passwordnya, tapi kalo yang di komparenya return yang return { username, token: "abc123" }, artinya berhasil, maka akan menambpikan pesan error "Test gagal: Error 'Password salah' tidak dilempar"
      name: "Error", // dari err.name
      message: "Password salah!", // dari err.message
    },
    "Test gagal: Error 'Password salah' tidak dilempar" // Pesan jika test gagal / password benar
  );


  console.log("test berhasil") // jika password salah berati tes nya berhaisl
})();

// const tesReject = async () => {
//   await assert.rejects(
//     async () => await loginUser("rafa", "ini sengaja salah"),
//     {
//       username: "Error",
//       password: "Password salah!",
//     },
//     "Test gagal: Error 'Password salah' tidak dilempar" // Pesan jika test gagal / password benar
//   );


//   console.log("test berhasil") // jika password salah berati tes nya berhaisl
// };

// tesReject()