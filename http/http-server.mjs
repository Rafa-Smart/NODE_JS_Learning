import http from "http";

const server = http.createServer((request, response) => {
  // untuk mengetahui data data dari requestnya
  // console.log(request.method)
  // console.log(request.url)
  // console.log(request.headers)
  // dan lain lain

  console.log(request.url);

  if (request.method === "POST") {
      let body = ""
    request.addListener("data", function (data) { // misalkan kita mendapatkan data dari request user maka
        body+=data
    });

    request.addListener("data", function () { // ini tuh kemarin "end" / sama aka sih
      response.setHeader("content-Type", "application/json");
      response.write(`data kamu : ${body}`);
      console.log(body);
      response.end();
      
    });
  } else {
    if (request.url === "/rafa") {
      response.write("halo rafa");
    } else {
      response.write("hello duniaa");
    }
    response.end();
  }

  // response.write("haloo duniaa"); // <- buffer
});

server.listen(3001);


// // dapet nih datanya dari postman
// {
//     "nama":"Rafa Khadafi",
//     "email":"rafakhadafi1205@gmail.com"
// }