var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/index", function(req, res) {
    burger.selectAll(function(data) {
        var burgersObj = {
            burger: data
        };
        console.log(burgersObj);
        res.render("index", burgersObj);
    });

})

module.exports = router;

// route to index