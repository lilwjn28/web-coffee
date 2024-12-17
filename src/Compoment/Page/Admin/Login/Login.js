import React,  { useState} from 'react';
import "./Login.css";
import { useNavigate } from "react-router-dom";
import useAxios from '../../../../Context/API/UseAxios';
const Login = ({onForgotPassword}) => {
    const [ErrEmail, setErrEmail] = useState("");
    const [ErrPassword, setErrPass] = useState("");
    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
    const navigate = useNavigate();
    const getData = useAxios(
        "http://localhost:3301/users"
    );
    const loginUser = () => {
        console.log(getData[0]);
        
        if (getData.find((item) => item.email === email)){
            if (getData.find((item) => item.password === pass)) {
                alert("Login Success");
                localStorage.setItem("email", email);
                // navigate("/");
                window.location.href = "/"
        } else {
            setErrPass("Sai mật khẩu");
        } 
    } else {
        setErrEmail("Sai tên đăng nhập hoặc không tồn tại");
    }
};
 const handleSubmit = (e) => {
    e.preventDefault();
    setErrEmail("");
    setErrPass("");
    loginUser();
 }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email" 
                placeholder="Email của bạn"
                onChange={(e) => setEmail(e.target.value)}
                required
             />
             <p>{ErrEmail}</p>
             <input 
                type="password"
                placeholder="Mật khẩu"
                onChange={(e) => setPass(e.target.value)}
                required
            />
            <p>{ErrPassword}</p>
            <p id="forgot-pass" onClick={onForgotPassword}>
                Quên mật khẩu?
            </p>
            <button type="submit">Đăng Nhập</button>
        </form>
    );
};

export default Login;