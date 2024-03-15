const express = require("express");
const router = express.Router()
const multer = require("multer");
const path = require("path");
const Product = require("../Model/Product.js")

router.get('/getpro', getpro)
router.get('/getidpro', getidpro)
router.post('/postpro', postpro)
router.put('/putpro', putpro)
router.delete('/deleteidpro', deleteidpro)

async function getpro(req, res) {
    try {
        console.log("get working")
        let data1 = await Product.find()
        console.log(data1)
        res.status(300).send({ data1: data1 })
    } catch (error) {
        res.status(300).send("am out of route")
    }
};

async function getidpro(req, res) {
    try {
        console.log("get working")
        let data1 = await Product.find({ _id: req.query.id })
        console.log(data1)
        res.status(300).send({ data1: data1 })
    } catch (error) {
        res.status(300).send("am out of route")
    }
};

// const storage = multer.diskStorage({
//     destination: '../Images',
//     filename: (req, file, cb) => {
//         return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//     }
// })

// const upload = multer({
//     storage: storage,
    // limits: {
    //     fileSize: 10
    // }
// })
// router.use('./Images', express.static('/Images'));
// const shoes = require("../Images")



async function postpro( req, res) {
    try {
        res.send("image uploaded")
        let product12 ={};
            product12.productName= req.body.productName,
            product12.productPrice= req.body.productPrice,
            product12.productQuantity= req.body.productQuantity,
        // productimage: `${req.file.filename}`

            // let data = new Product(product12);
            product12.save().then((doc) => res.status(201).send(doc))
            .catch((error)=>{
            res.send("product error")
      });
    } catch (error) {
        res.send("am out of route")
    }

};

// function errHandler(err, req, res, next) {
//     if (err instanceof multer.MulterError) {
//         res.json({
//             // success: 0,
//             message: err.message
//         })
//     }
// }



// async function postpro(req, res) {
    // try {

    //     let data2 = {};
    //     data2.productname = req.body.productname,
    //     data2.productprice = req.body.productprice,
    //     data2.productimage = req.body.productimage

    //     console.log(req.body.productimage)
    //     let data1 = await Product.find()
    //         let resp = new Product(data2)
    //         let rss = await resp.save()
    //         console.log("res", rss)
    //         res.send({ data1: data1 })

    //     res.status(200).send("on route")
    // } catch (error) {
    //     console.log(error)
    //     res.send({ message: "am out of route", error })
    // }
// };

async function putpro(req, res) {
    try {
        let data1 = await Product.updateOne({ _id: req.query.id },
            {
                $set:
                {
                    productname: req.body.productname,
                    productprice: req.body.productprice,
                    productimage: req.body.productimage
                }
            });
        let datas = await Product.find()
        res.status(300).send({ data1: data1 })
    } catch (error) {
        res.status(300).send("am out of route")
    }
};


  
async function deleteidpro(req, res) {
    try {
        let data1 = await Product.findByIdAndRemove({ _id: req.query.id })
        res.status(300).send("on route")
    } catch (error) {
        res.status(300).send("am out of route")
    }
};



module.exports = router;

