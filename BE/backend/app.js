const express = require("express");
const db = require("./mysql2.js"); // Kết nối đến MySQL
const dotenv = require("dotenv");
const cors = require("cors"); // Import cors
const multer = require("multer"); // Import multer
const path = require("path");

const app = express();
dotenv.config();
const port = process.env.PORT || 3301;

// Cấu hình CORS
const corsOptions = {
  origin: "http://localhost:3000", // Thay bằng URL của frontend
};
app.use(cors(corsOptions));

// Middleware parse JSON
app.use(express.json());

// Cấu hình Multer để lưu file ảnh
const storage = multer.diskStorage({
  destination: "uploads/", // Thư mục lưu ảnh
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Giới hạn 5MB
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);

    if (extName && mimeType) {
      return cb(null, true);
    } else {
      cb(new Error("Chỉ hỗ trợ các định dạng ảnh (jpeg, jpg, png, gif)."));
    }
  },
});

// API root
app.get("/", (req, res) => {
  res.send("Server đang chạy, truy cập /users để lấy dữ liệu");
});

// API thêm người dùng
app.post("/users", (req, res) => {
  const { Name, email, password, role } = req.body;

  if (!Name || !email || !password || !role) {
    return res.status(400).json({ message: "Thiếu dữ liệu cần thiết" });
  }

  const query = `INSERT INTO users (Name, email, password, role) VALUES (?, ?, ?, ?)`;
  db.query(query, [Name, email, password, role], (err, results) => {
    if (err) {
      console.error("Lỗi truy vấn:", err.message);
      return res.status(500).send("Lỗi kết nối cơ sở dữ liệu");
    }
    res.status(201).json({ message: "Người dùng đã được thêm thành công", data: results });
  });
});

// API trả danh sách người dùng
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      console.error("Lỗi truy vấn:", err.message);
      res.status(500).send("Lỗi kết nối cơ sở dữ liệu");
    } else {
      res.json(results);
    }
  });
});

// API thêm sản phẩm với ảnh
app.post("/products", upload.single("image"), (req, res) => {
  const { title, code, price, sale, quantity, category, description } = req.body;

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

// API cập nhật sản phẩm
app.put("/products", upload.single("images"), (req, res) => {
  const { ID } = req.query;
  const { title, code, price, sale, quantity, category, description } = req.body;

  if (!ID) {
    return res.status(400).json({ message: "ID sản phẩm không được bỏ trống" });
  }

  let images = req.body.images;
  if (req.file) {
    images = req.file.path;
  }

  const query = `
    UPDATE products
    SET title = ?, code = ?, price = ?, sale = ?, quantity = ?, images = ?, category = ?, description = ?
    WHERE ID = ?
  `;

  db.query(
    query,
    [title, code, price, sale, quantity, images, category, description, ID],
    (err, results) => {
      if (err) {
        console.error("Lỗi truy vấn:", err.message);
        return res.status(500).json({ message: "Lỗi cập nhật cơ sở dữ liệu" });
      }

      if (results.affectedRows === 0) {
        return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
      }

      res.json({ message: "Cập nhật sản phẩm thành công", data: results });
    }
  );
});

// API lấy danh sách sản phẩm hoặc sản phẩm theo ID
app.get("/products", (req, res) => {
  const { ID } = req.query;

  if (ID) {
    db.query("SELECT * FROM products WHERE ID = ?", [ID], (err, results) => {
      if (err) {
        console.error("Lỗi truy vấn:", err.message);
        return res.status(500).send("Lỗi kết nối cơ sở dữ liệu");
      }
      if (results.length === 0) {
        return res.status(404).json({ message: "Không tìm thấy sản phẩm" });
      }
      res.json(results[0]);
    });
  } else {
    db.query("SELECT * FROM products", (err, results) => {
      if (err) {
        console.error("Lỗi truy vấn:", err.message);
        return res.status(500).send("Lỗi kết nối cơ sở dữ liệu");
      }
      res.json(results);
    });
  }
});

// API thêm thông tin liên hệ
app.post("/contact", (req, res) => {
  const { fullname, email, phone, des } = req.body;

  if (!fullname || !email || !phone || !des) {
    return res.status(400).json({ message: "Thiếu dữ liệu cần thiết" });
  }

  const query = `
    INSERT INTO contact (fullname, email, phone, des)
    VALUES (?, ?, ?, ?)
  `;

  db.query(query, [fullname, email, phone, des], (err, results) => {
    if (err) {
      console.error("Lỗi truy vấn:", err.message);
      return res.status(500).send("Lỗi kết nối cơ sở dữ liệu");
    }
    res.status(201).json({ message: "Thông tin liên hệ đã được thêm thành công", data: results });
  });
});

// API lấy danh sách liên hệ
app.get("/contact", (req, res) => {
  db.query("SELECT * FROM contact", (err, results) => {
    if (err) {
      console.error("Lỗi truy vấn:", err.message);
      return res.status(500).json({ message: "Lỗi kết nối cơ sở dữ liệu", error: err.message });
    } else {
      res.json(results);
    }
  });
});

// API thêm đơn hàng
app.post("/dataorder", (req, res) => {
  const { firstname, lastname, email, phone, province, district, ward, location, message } = req.body;

  if (!firstname || !lastname || !email || !phone || !province || !district || !ward || !location || !message) {
    return res.status(400).json({ message: "Thiếu dữ liệu cần thiết" });
  }

  const query = `
    INSERT INTO dataorder (firstname, lastname, email, phone, province, district, ward, location, message)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [firstname, lastname, email, phone, province, district, ward, location, message], (err, results) => {
    if (err) {
      console.error("Lỗi truy vấn:", err.message);
      return res.status(500).send("Lỗi kết nối cơ sở dữ liệu");
    }
    res.status(201).json({ message: "Đặt đơn thành công", data: results });
  });
});

// API lấy danh sách đơn hàng
app.get("/dataorder", (req, res) => {
  db.query("SELECT * FROM dataorder", (err, results) => {
    if (err) {
      console.error("Lỗi truy vấn:", err.message);
      return res.status(500).json({ message: "Lỗi kết nối cơ sở dữ liệu", error: err.message });
    } else {
      res.json(results);
    }
  });
});

// Lắng nghe kết nối
app.listen(port, () => {
  console.log(`Server đang chạy tại http://localhost:${port}`);
});
