import net from "net";


let dataSockets = [];
const server = net.createServer((socket) => {
    // disini setiap ada client yang teronnect, maka ak dimasukan kedalam sebuah array
    dataSockets.unshift(socket) // kenapa unshift ?, karena agar berurutan dari 0 ke 1....
    console.log('Client terhubung');
    dataSockets.forEach((client) => { // nah disini kita inign ketiak pertama kali terhubung ada pesan, ke seluruh client bahwa ada client ini yang sudah gabung
        client.write(`client ${dataSockets.indexOf(client) + 1} terhubung...\n\r`) // sebenarnya bisa pake index sih di forEachnya
    })

    socket.addListener("data", ((data) => {
        // jadi pesan yang dikirin oleh salah satu client akan dikirmke seulurh client lainnya, kecuali client yang mengirim
        dataSockets.forEach((client) => {
            if(client !== socket){
                // nah jadi kita akan mengirimkan data ke klien yang bukan klien yang mengirim pesan
                // disini kenapa client bukan socket?, karena client itu adalah salah satu objek dari array dataSockets yang berisi socket socket

                client.write(`${data} dari client ${dataSockets.indexOf(client) +1}\n\r`)
            }
        })
    }))


    socket.addListener("end", () => {
        dataSockets.splice(dataSockets.indexOf(socket), 1)
    })

})

server.listen(3000, () => {
    console.log(`server jalan di port 3000 ...`)
})


// import net from "net";

// let data = []
// const server = net.createServer((socket) => {
//     data.unshift(socket);
//     data.forEach((client) => {
//         client.write("sudah ada 1 client\n\r");
//     })


// })