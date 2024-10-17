import React, { useState } from 'react';
import "./contact.css";
import  emailjs from "@emailjs/browser";
import {toast} from "react-toastify";

const Contact = () => {
    // const [isModalOpen, setIsModalOpen] = useState(false);
    const handleChange  = (e)=>{
        setForm({...form,[e.target.name]: e.target.value})
    };
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({name: "", email: "",message:""})

    // const Modal = ({ message, onClose }) => {
    //     return (
    //         <div className="modal">
    //             <div className="modal__content">
    //                 <i onClick={onClose} className="uil uil-times modal__close-icon"></i>
    //                 <p>{message}</p>
    //             </div>
    //         </div>
    //     );
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        console.log("Yes")
        console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: "Philip AJibola",
                form_email: form.email,
                to_email: "ajibolaphilip10@gmail.com",
                message: form.message,
            },
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        ).then(()=> {
            console.log("success")
                setIsLoading(false);
                toast.success('Message Sent Successfully ')
                setForm({name:"",email: "",message: ""})
            }
        ).catch((error)=>{
            toast.error("something went wrong");
            console.log(error)
            }

        )

    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Get in touch</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>
                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">ajibolaphilip10@gmail.com</span>
                            <a href="mailto:Abisoyeabolaji2k21@gmail.com" className="contact__button">
                                Write me
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-whatsapp contact__card-icon"></i>
                            <h3 className="contact__card-title">WhatsApp</h3>
                            <span className="contact__card-data">+23409027531222</span>
                            <a href="https://wa.me/2348165269244" className="contact__button" target="_blank" rel="noopener noreferrer">
                                Write me
                                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>
                    <form className="contact__form" onSubmit={handleSubmit}>
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="text" name="name" onChange={handleChange} className="contact__form-input"
                                   placeholder="Insert your name sir/ma" value={form.name} required />
                        </div>
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Mail</label>
                            <input type="email" onChange={handleChange} value={form.email} name="email" className="contact__form-input"
                                   placeholder="Insert your email sir/ma" required />
                        </div>
                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Message</label>
                            <textarea name="message" onChange={handleChange} value={form.message} className="contact__form-input" placeholder="Write your message" required></textarea>
                        </div>
                        <button className="button button--flex" type="submit" disabled={isLoading}>
                            {isLoading ?"Sending message...": "Send Message"
                            }
                        </button>
                    </form>
                </div>
            </div>

            {/*{isModalOpen && <Modal message={modalMessage} onClose={() => setIsModalOpen(false)} />}*/}
        </section>
    );
};

export default Contact;
