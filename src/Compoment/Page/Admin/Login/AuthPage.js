import React, { useState } from 'react';
import Login from './Login';
import SignUp from "./SignUp"
import "./Login.css";
import ForgotPasswordForm from './ForgotPasswordForm';

const AuthPage = () => {
    const [account, setAccount] = useState(true);
    const [forgotPassword, setForgotPassword] = useState(false);
    const toggleForgotPassword = () => {
        setForgotPassword(true);
    };
    const handleForgotPasswordSubmit = (email) => {
        alert(`yêu cầu quên mật khẩu của bạn đã gửi đến email: ${email}`);
        setForgotPassword(false);
    };
    const toggleAuthMode = () => {
        setAccount(!account);
        setForgotPassword(false);
    };
    return (
        <div className="login-page">
            <div className="auth-container flex flex-column">
                <h2>
                    {account
                        ? forgotPassword
                            ?"Lấy lại mật khẩu"
                            :"Đăng nhập"
                    : "Đăng ký"}
                </h2>
            {forgotPassword ? (
                 <ForgotPasswordForm onSubmit={handleForgotPasswordSubmit}></ForgotPasswordForm>
                ) : account ? (
                    <Login onForgotPassword={toggleForgotPassword}/>
                ) : (
                    <SignUp onSignUpSuccess={() => setAccount(true)}/>
                )
            }
            <button onClick={toggleAuthMode}>
                {account ? "Tạo tài khoản" : "Bạn đã có tài khoản? Đăng nhập tại đây"}
            </button>
            </div>
        </div>
    );
};

export default AuthPage;