/*const express = require('express')
const app = express();
//function that return a boolean if the age is more than 14
function isoldenough(age) {
    if (age >= 14) {
        return true;
    }
    else {
        return false;
    }
}
app.get("/ride1", function (req, res) {
    if (isoldenough(req.query.age)) {

        res.json({
            msg: "you have successfully riden the ride1"
        })
    }

    else {
        res.status(411).json({
            msg: "you are not old enough to ride the ride1"
        })
    }
})

app.get("/ride2", function (req, res) {
    if (isoldenough(req.query.age)) {

        res.json({
            msg: "you have successfully riden the ride2"
        })
    }

    else {
        res.status(411).json({
            msg: "you are not old enough to ride the ride2"
        })
    }
})
app.listen(3000)*/

const express = require('express')
const app = express()
//function that return a boolean if the age is more than 14

function isoldenoughmiddleware(req, res, next) {
    const age = req.query.age
    if (age >= 14) {
        next()
    }
    else {
        res.json({
            msg: "sorry you are not old enough"
        })
    }
}
app.get("/ride1", isoldenoughmiddleware, function (req, res) {

    res.json({
        msg: "you have successfully riden the ride1"
    })

})

app.get("/ride2", isoldenoughmiddleware, function (req, res) {


    res.json({
        msg: "you have successfully riden the ride2"
    })
})
app.listen(3000)