import https from "https";
const url = "https://jsonplaceholder.typicode.com/posts";

const request = https.request(url,{
    method: "POST",
    headers: {
        "content-type":"application/json",
        "Accept": "application/json",
    }
}, (response) => {
    response.addListener("data", function(data) {
        console.log(`data yang diterima : ${data}`)
    })
})

const bodyKirim = JSON.stringify({
    "nama":"Rafa Khadafi",
    "email":"rafakhadafi1205@gmail.com"
})

request.write(bodyKirim); // maksudnay ini untuk mengirim data ke server
request.end();

// nah, dari data yang diberikan ini, kita mendapatkan data (karena saya menggunakan jsonplaceholder, maka response yang diberikan itu akna sama dnegna request yang dikasih).

// data yang diterima : {
//   "nama": "Rafa Khadafi",
//   "email": "rafakhadafi1205@gmail.com",
//   "id": 101
// }


// jadi bedanya dengan net yang pernah dibuat sebelumnya itu,
// kalo client and server ini lewat http, tapi kalo si net pakenya port buat nyambunginnya