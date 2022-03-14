const express = require("express");

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));


server.get('/', () => {
    console.log("call aayo re get me!");
    res.status(200).send({message: "get"});
})



server.post('/', (req, res) => {
    console.log("call aayo re post me!", req);
    res.status(200).send({message: "post"});
})


server.get("/getWebhookinfo", (req, res) => {
  try {
    res.status(200).send({ data: req.body });
  } catch (error) {
    console.error("Something went wrong!");
    res.status(404).send({ message: "Something is not in order!" });
  }
});

server.listen(8080, () => {
  console.log("Server is up and running on port: 8080");
});
