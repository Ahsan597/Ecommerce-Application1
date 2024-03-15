const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {res.send('working')})
// router.use('/sales', require('./sales'))
// router.use('/customer', require('./customer'))
router.use('/product',require('./product'))
router.use('/signup',require('./signup.js'))
module.exports = router;