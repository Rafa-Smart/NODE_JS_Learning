import net from "net";

const client = net.createConnection({ // kita hubungkan ke server
    port:3000,
    host: "localhost"
})

setInterval(() => { // disini kita ingin mengirim data ke server secara berkala
    client.write(`${process.argv[2]}\r\n`)
}, 2000)

client.addListener("data", function(data){
    console.log(`menerima data dari server : ${data.toString()} `)
})
