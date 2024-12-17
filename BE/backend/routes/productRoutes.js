const express = require("express");
const upload = require("../config/upload"); // Import Multer
const db = require("../config/db"); // Import kết nối MySQL
const router = express.Router();

// API: Thêm sản phẩm kèm hình ảnh
router.post("/products", upload.single("image"), (req, res) => {
  const { title, code, price, sale, quantity, category, description } = req.body;

  // Kiểm tra dữ liệu
  if (!title || !code || !price || !quantity || !category || !description || !req.file) {
    return res.status(400).json({ message: "Thiếu dữ liệu cần thiết" });
  }

  const imagePath = req.file.path; // Lấy đường dẫn file từ Multer

  const query = `
    INSERT INTO products (title, code, price, sale, quantity, images, category, description)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [title, code, price, sale, quantity, imagePath, category, description],
    (err, result) => {
      if (err) {
        console.error("Lỗi truy vấn:", err.message);
        return res.status(500).json({ message: "Lỗi cơ sở dữ liệu" });
      }
      res.status(201).json({
        message: "Thêm sản phẩm thành công!",
        data: {
          id: result.insertId,
          title,
          code,
          price,
          sale,
          quantity,
          category,
          description,
          images: imagePath,
        },
      });
    }
  );
});

module.exports = router;
