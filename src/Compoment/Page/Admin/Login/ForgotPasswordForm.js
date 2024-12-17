import React, { useRef, useState } from 'react';
import emailjs from "@emailjs/browser";
import useAxios from '../../../../Context/API/UseAxios';

const ForgotPasswordForm = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const form = useRef();
    const checkDataMail = useAxios(
        "https://673c32f596b8dcd5f3f8dda8.mockapi.io/admin"
    );
    const sendEmail = (e) => {
        e.preventDefault();
        const check = checkDataMail.find((item) => item.mail === email);
        if (check) {
            setError("");
            alert("Mật khẩu mới đã được gửi đến mail của bạn");
            emailjs
                .sendForm("service_u2wexxs", "template_0s1ysjp", form.current, {
                    publicKey: "cXOgRNnywX48acMXh",
                })
                .then(
                    () => {
                        console.log("SUCCESS!");
                    },
                    (error) => {
                        console.error("FAILED...", error.text);
                    }
                );
        
        }else{
            setError("Email không tồn tại");
        }
    }
    return (
       <form ref={form} onSubmit={sendEmail}>
        <input 
            type="text" 
            placeholder="nhập email của bạn"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="user_email"
            required
        />
        <p>{error}</p>
        <button type="submit">Gửi yêu cầu</button>
       </form>
    );
};

export default ForgotPasswordForm;