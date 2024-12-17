const Product = require("../models/productModel");

// Tạo sản phẩm mới
exports.createProduct = async (req, res) => {
  try {
    const { title, code, price, description } = req.body;
    const imagePath = `/uploads/${req.file.filename}`;
    const product = await Product.create({ title, code, price, description, images: imagePath });
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
