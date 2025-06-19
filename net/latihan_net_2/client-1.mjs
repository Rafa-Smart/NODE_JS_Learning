import net from "net";
import readline from "readline";


const client = net.createConnection({
    port:3000,
    host: "localhost"
})

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.addListener("line", function(data){ // jadi line ini adalh salah satu event dari si rl, 
    // jadi ketika dapet event atau emit line (yang maksudnya adalah baris atau ketika di enter)
    // maka akan mendapatkan datanya
    if(data === "keluar"){
        rl.close()
        // client.emit("end")
        client.end()
    }
    client.write(data)
})

client.on("data", (data) => {
    console.log(data.toString())
})