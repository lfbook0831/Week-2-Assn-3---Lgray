const http = require("http");
const fs = require("fs").promises;

const requestListener = function(req, res) {
  console.log(req.url);

  if (req.url === "/") {
    fs.readFile(__dirname + "/page.html")
      .then(contents => {
        res.setHeader("Content-Type", "text/html; charset=UTF-8");
        res.writeHead(200);
        res.end(contents);
      });
  } else {
    fs.readFile(__dirname + "/data.json")
      .then(contents => {
        res.setHeader("Content-Type", "application/json; charset=UTF-8");
        res.writeHead(200);
        res.end(contents);
      });
  }
};

const server = http.createServer(requestListener);

const host = "127.0.0.1";
const port = 3000;

server.listen(
  port,
  host,
  () => {
    console.log('Server is running');
  }
);
