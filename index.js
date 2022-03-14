const express = require("express");
const axios = require("axios");

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));


server.get('/', (req, res) => {
  console.log("call aayo re get me!");
  res.status(200).send({ message: "get" });
})



server.post('/', async (req, res) => {
  try {
    console.log("call aayo re post me!");

    let chat_id = req.body.from.id;
    
    console.log(req.body, chat_id)
    
  } catch (err) {
    console.error("Something went wrong bhaya!", error);
  }
})


server.listen(process.env.PORT, () => {
  console.log("Server is up and running on port: 8080");
});
