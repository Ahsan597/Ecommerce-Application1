const express = require("express");
const router = express.Router();
// const mongoose = require("mongoose");

const Customer = require("../Model/Customer.js")
router.get('/getcus',getcus)
router.get('/getidcus', getidcus)
router.post('/postcus',postcus)
router.put('/putcus', putcusid)
router.delete('/deleteidcus', deleteidcus)

async function getcus(req, res) {
    try {
        console.log("get working")
        let data1 = await Customer.find()
        console.log(data1)
        res.status(300).send({ data1: data1 })
    } catch (error) {
        res.status(300).send("am out of route")
    }
};
async function getidcus(req, res) {
    try {
        console.log("get working")
        let data1 = await Customer.find({_id: req.query.id})
        console.log(data1)
        res.status(300).send({ data1: data1 })
    } catch (error) {
        res.status(300).send("am out of route")
    }
};
async function postcus(req, res) {
    try {
        let data2 = {};
        data2.customername = req.body.customername,
        data2.customerphno = req.body.customerphno,
        data2.customeraddres = req.body.customeraddres,
        data2.customerbill = req.body.customerbill,
        data2.customerproduct = req.body.customerproduct

        let data1 = await Customer.find()
        let resp = new Customer(data2)
        let rss = await resp.save()
        console.log("res", rss)
        res.send({ data1: data1 })
        res.status(200).send("on route")
    } catch (error) {
        console.log(error)
        res.send({ message: "am out of route", error })
    }
};

async function putcusid(req, res) {
    try {
        let data1 = await Customer.updateOne({ _id: req.query.id },
            {
                $set:
                {
                    customername: req.body.customername,
                    customerphno: req.body.customerphno,
                    customeraddress: req.body.customeraddres,
                    customerbill: req.body.customerbill,
                    customerproduct: req.body.customerproduct
                }
            });
        let datas = await Customer.find()
        res.status(300).send({ data1: data1 })
    } catch (error) {
        res.status(300).send("am out of route")
    }
};

async function deleteidcus(req, res) {
    try {

        let data1 = await Customer.findByIdAndRemove({ _id: req.query.id })
        res.status(300).send("on route")
    } catch (error) {
        res.status(300).send("am out of route")
    }
};
module.exports= router;
