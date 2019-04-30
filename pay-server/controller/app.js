var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();
var path = require('path');
var cors = require("cors")
var cor = cors();
app.use(cor);
app.use(express.static(path.join(__dirname, "../public")));

var mClient = require('../model/client.js');

app.get('/api/client', function (req, res) {
    mClient.getClient(function (err, result) {
        if (!err) {
            res.send(result);
        }
        else {
            console.log(err);
            res.status(500).send(err);
        }
    })
}) // end routing GET atribut all client

var mPay = require('../model/payment.js');

app.post('/api/payment', urlencodedParser, jsonParser, function (req, res) {
    var no_customer = req.body.no_customer;
    var date_payment = req.body.date_payment;
    var total = req.body.total;

    mPay.sendPayment(no_customer, date_payment, total, function (err, result) {
        if (!err) {
            console.log(result);
            res.send(result.affectedRows + ' record diambahakan');
        }
        else {
            console.log(err);
            res.status(500).send(err.code);
        }
    })
})  // end routing POST send payment

app.get('/api/payment', function (req, res) {
    mPay.getHistoryPayment(function (err, result) {
        if (!err) {
            res.send(result);
        }
        else {
            console.log(err);
            res.status(500).send(err);
        }
    })
}) // end routing GET history payment

module.exports = app