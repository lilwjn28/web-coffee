const multer = require("multer");
const path = require("path");

// Định nghĩa nơi lưu trữ file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Lưu vào thư mục "uploads"
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname)); // Đặt tên file duy nhất
  },
});

// Kiểm tra định dạng file
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  if (extname) {
    cb(null, true);
  } else {
    cb(new Error("File không hợp lệ! Chỉ chấp nhận JPEG, JPG, PNG, GIF."));
  }
};

// Khởi tạo Multer
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Giới hạn file 5MB
  fileFilter,
});

module.exports = upload;
