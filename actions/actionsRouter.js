const express = require("express");

const actionsDb = require("../data/helpers/actionModel.js");

const router = express.Router();

// router.get("/", (req, res) => {
//     res.send("IT'S WORKING")
// });

router.get("/", (req, res) => {
    actionsDb.get()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: "The projects information could not be found"
        });
    });
});

module.exports = router; 