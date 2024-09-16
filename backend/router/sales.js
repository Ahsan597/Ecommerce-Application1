const express = require("express");
const router = express.Router();

const Sales = require("../Model/Sales")


// router.get('/', async(req, res) => {res.send('sales working')}
router.get('/get', gethandle)
router.get('/getid', getidhandle)
router.post('/post', posthandle)
router.put('/up',updatehandle)
router.delete('/deleteid', delteidhandle)

async function gethandle(req, res) {
    try {
        console.log("get working")
        let data1 = await Sales.find()
        console.log(data1)
        res.status(300).send({ data1: data1 })
    } catch (error) {
        res.status(300).send("am out of route")
    }
};

async function getidhandle(req, res) {
    try {
        console.log("get working")
        let data1 = await Sales.find({_id: req.query.id})
        console.log(data1)
        res.status(300).send({ data1: data1 })
    } catch (error) {
        res.status(300).send("am out of route")
    }
};
async function posthandle(req, res) {
    try {
        let data2 = {};
        data2.salesamount = req.body.salesamount,
        data2.salesaverage = req.body.salesaverage,
        data2.salesrating = req.body.salesrating

        let data1 = await Sales.find()
        let resp = new Sales(data2)
        let rss = await resp.save()
        console.log("res", rss)
        res.send({ data1: data1 })
        res.status(200).send("on route")
    } catch (error) {
        console.log(error)
        res.send({ message: "am out of route", error })
    }
};

async function updatehandle(req, res) {
    try {
        let data1 = await Sales.updateOne({ _id: req.query.id },
            {
                $set:
                {
                    salesamount: req.body.salesamount,
                    salesaverage: req.body.salesaverage,
                    salesrating: req.body.salesrating
                }
            });
        let datas = await Sales.find()
        res.status(300).send({ data1: data1 })
    } catch (error) {
        res.status(300).send("am out of route")
    }
};

async function delteidhandle(req, res) {
    try {

        let data1 = await Sales.findByIdAndRemove({ _id: req.query.id })
        res.status(300).send("on route")
    } catch (error) {
        res.status(300).send("am out of route")
    }
};
module.exports = router;