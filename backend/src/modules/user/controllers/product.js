const mongoose = require('mongoose');
const { Product } = require('../models/productModels');



getProductDetails: async (productId) => {
    try {
      // Fetch the movie details
      const Product = await Product.findById(productId).exec();

      if (!Product) {
        throw new Error('Movie not found');
      }

      // Return movie details with the additional fields
      return {
        _id: Product._id,
        name: Product.name,
        description: Product.description,
        price: Product.price,
        image: Product.image,
      };
    } catch (error) {
      throw new Error(`Failed to fetch product details: ${error.message}`);
    }
  }