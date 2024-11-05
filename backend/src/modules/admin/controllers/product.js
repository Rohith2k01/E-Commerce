const mongoose = require('mongoose');
const { Product } = require('../models/productModels');



addProduct: async (productDetails) => {

    try {

      const newProduct = new productDetails({
        productName: productDetails.producteName,
        description: productDetails.description,
        price: productDetails.price,
        image: productDetails.imageUrl,
        

      });
      await newProduct.save();

      const savedProduct = await Product.save();
      Product = savedProduct._id.toString()
      return (Product);


    } catch (error) {
      return error
    }

  }

  getProduct: async () => {

    try {
      const product = await Product.find();
      return product;
    } catch (error) {
      console.error('Error fetching product details:', error);
      throw new Error('Error fetching product details');
    }

  }