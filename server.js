const express = require("express");

const projectsRouter = require("./projects/projectsRouter.js");

const actionsRouter = require("./actions/actionsRouter.js");

const server = express();

server.use(express.json());

server.use("/api/actions", actionsRouter);

server.get("/", (req, res) => {
    res.send("PUSH THROUGH THE PAIN!");
});

module.exports = server; 