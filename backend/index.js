const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const port = 3000;

io.on("connection", (socket) => {
  console.log("a user connected :D");
  socket.on("chat message", (msg) => {
    console.log(msg);
    io.emit("chat message", msg);
  });
});

server.listen(port, () => console.log("server running on port" + port));

app.get("/", (req, res) => {
  res.send("<h1>Hello fartface</h1>");
});

// http.listen(3000, () => {
//   console.log("listening on *:3000");
// });
