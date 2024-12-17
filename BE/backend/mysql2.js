const mysql = require('mysql2');
require("dotenv").config(); // Load biến môi trường từ file .env

// Cấu hình kết nối
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'coffee',
  port: 3306
});

// Kết nối tới MySQL
connection.connect((err) => {
  if (err) {
    console.error('Không thể kết nối MySQL:', err.message);
  } else {
    console.log('Kết nối MySQL thành công!');
  }
});

module.exports = connection;
