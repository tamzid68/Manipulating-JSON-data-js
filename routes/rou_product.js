const express = require('express');
const router = express.Router();

const { getProduct, getProductById } = require('../controllers/con_productController');

router.get('/get/product', getProduct);
router.get('/product/:id', getProductById);


module.exports = router;