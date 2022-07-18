const express = require("express");

const app = express();

const menu = {
    starters:["garlic bread", "chocolate fudge cake","fries"],
    mains:["burger and chips", "steak", "chicken"],
    desserts:["pancakes", "ice-cream", "creme brulee"],
    specials: {
        "monday":"dover sole",
        "tuesday":"porterhouse steak"
    }
}

app.get("/", (req, res) => {
    res.json({
        "name": "Chez Norbert",
        "established": 2019,
        "status": "open",
        "hygiene-rating": 10
    })
})

app.get("/menu", (req, res) => {
    res.send(menu);
})

// Specials 

app.get("/specials/:day", (req, res) => {

    const day = req.params.day;

    const special = menu["specials"][day];

    if (special) {
        res.json({
            "special": special,
            "success": true
        });
    } else {
        res.status(404).json({
            "special": null,
            "success": false
        })
    }


})

module.exports = app;
