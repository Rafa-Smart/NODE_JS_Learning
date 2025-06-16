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

rl.addListener("line", function(data){
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