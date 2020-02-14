const express = require("express");

const projectsRouter = require("./projects/projectsRouter.js");

const server = express();

server.use(express.json());

server.use("/api/projects", projectsRouter);

server.get("/", (req, res) => {
    res.send("PUSH THROUGH THE PAIN!");
});

module.exports = server; 