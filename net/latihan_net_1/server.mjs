import net from "net";

const server = net.createServer( (socket) => { // ini berisi objek yang ketika ada client yang terhubung, dan setiap client akan berbeda isi dari objeknya
    console.log("client terhubung dengan server...")
    socket.addListener("data", function(data){ // data = buffer
        console.log(`menerima pesan dari client ${data.toString()}`)
        socket.write(`haloo, apa kabar ${data.toString()}...\r\n`) // ini untuk membalas ke clientnya, nanti clientnya nerima pake
        // event data
        // jadi fungsi ini adlaah sebagai enter, jadi biasanya kalo di network itu,
        // data akan dikirim jika ada enter, jadi kita harus menambahkan enter
    })
})

server.listen(3000, "localhost")

