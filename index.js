const http = require("http");
const fs = require("fs").promises;

const handleRequest = function(request, response) {
  console.log("Request received for:", request.url);

  if (request.url === "/") {
    fs.readFile(__dirname + "/page.html")
      .then(content => {
        response.setHeader("Content-Type", "text/html; charset=UTF-8");
        response.writeHead(200);
        response.end(content);
      });
  } else {
    fs.readFile(__dirname + "/data.json")
      .then(content => {
        response.setHeader("Content-Type", "application/json; charset=UTF-8");
        response.writeHead(200);
        response.end(content);
      });
  }
};

const server = http.createServer(handleRequest);

const hostname = "127.0.0.1";
const port = 3000;

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});
