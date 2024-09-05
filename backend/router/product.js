const express = require("express");
const router = express.Router()
const multer = require("multer");
const bodyParser = require('body-parser');
const path = require("path");
const Product = require("../Model/Product.js")
const app = express();

router.get('/getpro', getpro)

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });


router.get('/getproid/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send({ message: 'Product not found' });
    }
    res.send(product);
  } catch (err) {
    res.status(500).send("am out of getproid");
  }
});


async function getpro(req, res) {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 18;
  const skip = (page - 1) * limit;
  try {
    console.log("getpro working")
    const products = await Product.find().skip(skip).limit(limit);
    const total = await Product.countDocuments();
    res.json({ products, total });
    // console.log(data1)
    // res.status(200).send({ data1 })
  } catch (error) {
    res.status(400).send(" out of route")
  }
};


router.post('/postpro', upload.single('productImageurl'), async (req, res) => {
  try {
    const { productName, productPrice, productCategory, productBrand } = req.body;
    const productImageurl = `/uploads/${req.file.filename}`;
    const product = new Product({ productName, productPrice, productCategory, productBrand, productImageurl });
    await product.save();
    res.status(201).send(product);
  } catch (error) {
    res.status(400).send("am out of route")
  }
});


router.put('putpro/:id', upload.single('productImageurl'), async (req, res) => {
  try {
    const { productName, productPrice, productCategory, productBrand } = req.body;
    let product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).send({ message: 'Product not found' });
    }

    // Update fields
    product.productName = productName || product.productName;
    product.productPrice = productPrice || product.productPrice;
    product.productBrand = productBrand || product.productBrand;
    product.productCategory = productCategory || product.productCategory;

    // Update image if a new one is uploaded
    if (req.file) {
      product.productImageurl = `/uploads/${req.file.filename}`;
    }

    await product.save();
    res.status(200).send(product);
  } catch (err) {
    res.status(500).send("am out of put route");
  }
});


router.delete('delpro/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).send({ message: 'Product not found' });
    }

    res.status(200).send({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});



module.exports = router;

