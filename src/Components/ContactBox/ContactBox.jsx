import React, { useState } from "react";
import axios from "axios";
import Styled from "./ContactBox.module.css";

export default function ContactBox(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // اعتبارسنجی شماره تلفن
        const phoneRegex = /^[0-9]{10,15}$/; // فقط اعداد، طول بین 10 تا 15
        if (phone && !phoneRegex.test(phone)) {
            setStatus("Please enter a valid phone number!");
            return;
        }

        try {
            const res = await axios.post("http://localhost:8000/api/contact/", {
                name,
                email,
                phone,
                message,
            });

            if (res.status === 201 || res.status === 200) {
                setStatus("Message sent successfully!");
                setName("");
                setEmail("");
                setPhone("");
                setMessage("");
            } else {
                setStatus("Something went wrong!");
            }
        } catch (error) {
            console.error(error);
            setStatus("Something went wrong!");
        }
    };

    switch (props.data.lan) {
        case "en":
            return (
                <div className={Styled.ContactBoxWrapper} id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-md-12 col-sm-12">
                                <div className={Styled.ContactSection}>
                                    <h3 className={Styled.ContactTitle}>Let's build something</h3>
                                    <p className={Styled.ContactDesc}>
                                        Tell me about your idea. I handle design, development and deployment.
                                    </p>

                                    <div className={Styled.ContactInfo}>
                                        <a className={Styled.InfoBox} href="mailto:amiraliabooei@gmail.com">
                                            <div className={Styled.InfoLable}>Email</div>
                                            <div className={Styled.InfoValue}>Amiraliabooei@gmail.com</div>
                                        </a>

                                        <a className={Styled.InfoBox} href="tel:+989912162483">
                                            <div className={Styled.InfoLable}>Phone</div>
                                            <div className={Styled.InfoValue}>09912162483</div>
                                        </a>

                                        <div className={Styled.ContactLinks}>
                                            <a href="https://t.me/">Telegram</a>
                                            <a href="https://www.linkedin.com/">LinkedIn</a>
                                            <a href="https://www.instagram.com/">Instagram</a>
                                            <a href="https://www.youtube.com/">Youtube</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xxl-6 col-xl-6 col-md-12 col-sm-12">
                                <div className={Styled.ContactFormWrapper}>
                                    <form className={Styled.ContactFormContainer} onSubmit={handleSubmit}>
                                        <label className={Styled.ContactFormLable}>Name</label>
                                        <input
                                            type="text"
                                            className={Styled.ContactFormInput}
                                            placeholder="Your name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                        <br /><br />
                                        <label className={Styled.ContactFormLable}>Email</label>
                                        <input
                                            className={Styled.ContactFormInput}
                                            type="email"
                                            placeholder="you@domain.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        <br /><br />
                                        <label className={Styled.ContactFormLable}>Phone</label>
                                        <input
                                            type="text"
                                            className={Styled.ContactFormInput}
                                            placeholder="Your phone"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                        />
                                        <br /><br />
                                        <label className={Styled.ContactFormLable}>Message</label>
                                        <textarea
                                            className={Styled.ContactFormTextArea}
                                            placeholder="Tell me about your project"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            required
                                        ></textarea>
                                        <div className={Styled.ContactFormBtnContainer}>
                                            <button type="submit" className={Styled.Btn}>Send</button>
                                        </div>
                                        {status && <p>{status}</p>}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );

        case "fa":
            return <></>;
        default:
            return <></>;
    }
}
