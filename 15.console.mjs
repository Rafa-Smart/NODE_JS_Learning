// https://chat.deepseek.com/a/chat/s/bf875111-7e62-4421-98c1-ad7d99c5c1bf

console.clear();

const obj = {
  name: "John",
  age: 30,
  nested: { a: 1, b: 2 },
};
console.dir(obj, { depth: null, colors: true });

console.log("==========");

const users = [
  { name: "John", age: 30 },
  { name: "Jane", age: 28 },
];
console.table(users);

console.log("==========");
console.time("loop");
for (let i = 0; i < 110; i++) {}
console.timeEnd("loop");

console.log("========");
console.assert(1 === 2, "1 tidak sama dengan 2");

console.log("===========");
for (let i = 0; i < 5; i++) {
  console.count("counter");
}

console.log("==========");


// misal kan kalo kita pake console biasa, outputnya bakalan ke terminal
// tapi kmu bisa custom, misal outputnya ada di file, maka itu bisa

// caranya gini
import {Console} from "console";
import fs from "fs";
import { stderr, stdout } from "process";

const File = fs.createWriteStream("tesLog.txt");
const logFile = new Console({
    stdout:File, //  biasanya stdout:output
    stderr:File // biasanya stderr errorOutput
})

logFile.log("halo semuanyaaaa, lorem lorem lorem lorem lorem lorem lorem lorem")

// jadi bisa juga untuk nanti network clientnnya