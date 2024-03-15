const express = require("express");
const bodyParser = require('body-parser')
const app = express();
// const router = express.Router();
const mongoose = require("mongoose");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
// app.use(router);


// const index = require("./router/index.js")

// const Product = require("./Model/Product.js")

// const Customer = require("./Model/Customer.js")

// const Sales = require("./Model/Sales.js")
// mongoose.connect("mongodb://localhost:27017/Sales")
//     .then(res => { console.log("connected") })
// mongoose.connection.on('err', err => console.log(err))


// 
//                          Sales apis             
// 
// 

// router.get('/get', async function (req, res) {
//     try {
//         console.log("get working")
//         let data1 = await Sales.find()
//         console.log(data1)
//         res.status(300).send({ data1: data1 })
//     } catch (error) {
//         res.status(300).send("am out of route")
//     }
// });

// router.post('/post', async function (req, res) {
//     try {
//         let data2 = {};
//         data2.salesamount = req.body.salesamount,
//         data2.salesaverage = req.body.salesaverage,
//         data2.salesrating = req.body.salesrating

//         let data1 = await Sales.find()
//         let resp = new Sales(data2)
//         let rss = await resp.save()
//         console.log("res", rss)
//         res.send({ data1: data1 })
//         // res.status(200).send("on route")
//     } catch (error) {
//         console.log(error)
//         res.send({ message: "am out of route", error })
//     }
// });

// router.put('/up', async function (req, res) {
//     try {
//         let data1 = await Sales.updateOne({ _id: req.query.id },
//             {
//                 $set:
//                 {
//                     salesamount: req.body.salesamount,
//                     salesaverage: req.body.salesaverage,
//                     salesrating: req.body.salesrating
//                 }
//             });
//         let datas = await Sales.find()
//         res.status(300).send({ data1: data1 })
//     } catch (error) {
//         res.status(300).send("am out of route")
//     }
// });

// router.delete('/delete', async function (req, res) {
//     try {

//         let data1 = await Sales.remove()
//         console.log(data1)
//         res.status(300).send({ data1: data1 })
//         res.status(300).send("on route")
//     } catch (error) {
//         res.status(300).send("am out of route")
//     }
// });

// router.delete('/deleteid', async function (req, res) {
//     try {

//         let data1 = await Sales.findByIdAndRemove({ _id: req.query.id })
//         res.status(300).send("on route")
//     } catch (error) {
//         res.status(300).send("am out of route")
//     }
// });



// 
// 
//                        Product APis
// 

// router.get('/getpro', async function (req, res) {
//     try {
//         console.log("get working")
//         let data1 = await Product.find()
//         console.log(data1)
//         res.status(300).send({ data1: data1 })
//     } catch (error) {
//         res.status(300).send("am out of route")
//     }
// });

// router.post('/postpro', async function (req, res) {
//     try {
//         let data2 = {};
//         data2.productname = req.body.productname,
//             data2.productrating = req.body.productrating,
//             data2.productimage = req.body.productimage

//         let data1 = await Product.find()
//         let resp = new Product(data2)
//         let rss = await resp.save()
//         console.log("res", rss)
//         res.send({ data1: data1 })
//         // res.status(200).send("on route")
//     } catch (error) {
//         console.log(error)
//         res.send({ message: "am out of route", error })
//     }
// });

// router.put('/uppro', async function (req, res) {
//     try {
//         let data1 = await Product.updateOne({ _id: req.query.id },
//             {
//                 $set:
//                 {
//                     productname: req.body.productname,
//                     productrating: req.body.productrating,
//                     productimage: req.body.productimage
//                 }
//             });
//         let datas = await Product.find()
//         res.status(300).send({ data1: data1 })
//     } catch (error) {
//         res.status(300).send("am out of route")
//     }
// });

// router.delete('/deletepro', async function (req, res) {
//     try {
//         let data1 = await Product.remove()
//         console.log(data1)
//         res.status(300).send({ data1: data1 })
//         res.status(300).send("on route")
//     } catch (error) {
//         res.status(300).send("am out of route")
//     }
// });

// router.delete('/deleteidpro', async function (req, res) {
//     try {

//         let data1 = await Product.findByIdAndRemove({ _id: req.query.id })
//         res.status(300).send("on route")
//     } catch (error) {
//         res.status(300).send("am out of route")
//     }
// });




// 
// 
//                        Customer APis
// 

// router.get('/getcus', async function (req, res) {
//     try {
//         console.log("get working")
//         let data1 = await Customer.find()
//         console.log(data1)
//         res.status(300).send({ data1: data1 })
//     } catch (error) {
//         res.status(300).send("am out of route")
//     }
// });

// router.post('/postcus', async function (req, res) {
//     try {
//         let data2 = {};
//         data2.customername = req.body.customername,
//             data2.customerphno = req.body.customerphno,
//             data2.customeraddres = req.body.customeraddres,
//             data2.customerbill = req.body.customerbill,
//             data2.customerproduct = req.body.customerproduct

//         let data1 = await Customer.find()
//         let resp = new Customer(data2)
//         let rss = await resp.save()
//         console.log("res", rss)
//         res.send({ data1: data1 })
//         // res.status(200).send("on route")
//     } catch (error) {
//         console.log(error)
//         res.send({ message: "am out of route", error })
//     }
// });

// router.put('/upcus', async function (req, res) {
//     try {
//         let data1 = await Customer.updateOne({ _id: req.query.id },
//             {
//                 $set:
//                 {
//                     customername: req.body.customername,
//                     customerphno: req.body.customerphno,
//                     customeraddres: req.body.customeraddres,
//                     customerbill: req.body.customerbill,
//                     customerproduct: req.body.customerproduct
//                 }
//             });
//         let datas = await Customer.find()
//         res.status(300).send({ data1: data1 })
//     } catch (error) {
//         res.status(300).send("am out of route")
//     }
// });

// router.delete('/deletecus', async function (req, res) {
//     try {
//         let data1 = await Customer.remove()
//         console.log(data1)
//         res.status(300).send({ data1: data1 })
//         res.status(300).send("on route")
//     } catch (error) {
//         res.status(300).send("am out of route")
//     }
// });

// router.delete('/deleteidcus', async function (req, res) {
//     try {

//         let data1 = await Customer.findByIdAndRemove({ _id: req.query.id })
//         res.status(300).send("on route")
//     } catch (error) {
//         res.status(300).send("am out of route")
//     }
// });

app.use(4700)