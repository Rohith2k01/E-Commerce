const express = require('express');
const Product = require('../models/productModels');
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Add a new product
router.post('/', async (req, res) => {
    const { name, description, price, image } = req.body;
    const product = new Product({ name, description, price, image });
    try {
        await product.save();
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;