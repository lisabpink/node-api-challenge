const express = require("express");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.send("PUSH THROUGH THE PAIN!");
});

module.exports = server; 