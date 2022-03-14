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
    console.log("call aayo re post me!", req.body );

    // let chat_id = req.body.from;
    
    // const res = await axios.post("https://api.telegram.org/bot" + process.env.TELEGRAM_TOKEN + "/sendMessage?chat_id=" + chat_id + "&text=Ha hello hello!")
    
    console.log("req.body in post = ");
    
  } catch (err) {
    console.error("Something went wrong bhaya!", err);
  }
})


server.get("/getWebhookinfo", (req, res) => {
  try {
    res.status(200).send({ data: req.body });
  } catch (error) {
    console.error("Something went wrong!");
    res.status(404).send({ message: "Something is not in order!" });
  }
});

server.listen(process.env.PORT, () => {
  console.log("Server is up and running on port: 8080");
});
