import React, { useEffect, useState } from "react";
import useAxios from "../../../../Context/API/UseAxios";
import axios from "axios";
const SignUp = ({ onSignUpSuccess }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const data = useAxios("http://localhost:3301/users");
  const [errors, setErrors] = useState("");
  const handlePost = async () => {
    try {
      await fetch('http://localhost:3301/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Name: formData.username, 
          email: formData.email,
          password: formData.password,
          role: "customer",
          // phone: formData.phone, // Thêm phone
        }),
        
      });
      
    } catch (error) {
      console.log("Error post data", error);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const [password, setPassword] = useState("");
  const [isStrong, setIsStrong] = useState(false);
  const [feedback, setFeedback] = useState("");
  const criteria = [
    { regex: /.{8,}/, message: "At least 8 characters" },
    { regex: /[A-Z]/, message: "At least one uppercase letter" },
    { regex: /[a-z]/, message: "At least one lowercase letter" },
    { regex: /\d/, message: "At least one number" },
    { regex: /[!@#$%^&*(),.?":{}|<>]/, message: "At least one special character" },
  ];

 

  const handleSubmit = (e) => {
    e.preventDefault();
    const unmetCriteria = criteria.filter((rule) => !rule.regex.test(formData.password));
    setIsStrong(unmetCriteria.length === 0);
    if (formData.password !== formData.comfirmPassword) {
      setErrors("Mật khẩu và xác nhận mật khẩu không khớp!");
    }else if(data.find((item) => item.email === formData.email)){ 
        setErrors("Email đã tồn tại!");
    }else  if (unmetCriteria.length > 0) {
      setErrors(
        `Password is weak. Missing: ${unmetCriteria
          .map((rule) => rule.message)
          .join(", ")}`
      );
    } else {
    
      handlePost();
      setTimeout(() => {
          alert("Đăng ký thành công");
          onSignUpSuccess();
      }, 1000);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        Name="username"
        placeholder="Họ và tên của bạn"
        value={formData.username || ""}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="email"
        placeholder="Email của bạn"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Mật khẩu của bạn"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="comfirmPassword"
        placeholder="Nhập lại mật khẩu "
        value={formData.comfirmPassword}
        onChange={handleChange}
        required
      />
      <div
        style={{
          color: isStrong ? "green" : "red",
          fontWeight: "bold",
        }}
      >
        {feedback}
      </div>
      <span>{errors}</span>
      <button type="submit">SignUp</button>
    </form>
  );
};

export default SignUp;
