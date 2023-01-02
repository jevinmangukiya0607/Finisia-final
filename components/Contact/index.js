import React, { useState } from "react";
import firebaseDb from "../../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from 'next/image';
import { async } from "@firebase/util";

export default function Contact() {

    const [values, setValues] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const { name, email, subject, message } = values;

    const handleInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !subject || !message) {
            toast.error("Please provide value in each input field");
        } else {
            // firebaseDb.child("contacts").push(state);
            setValues({ name: "", email: "", subject: "", message: "" });
            toast.success("Form Submitted Successfully");
        }

        try {
            await fetch("http://localhost:3000/api/contact", {
                method: "POST",
                header: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(values),
            });

        } catch (err) {
            console.log(err);
        }
    };



    return (
        <section className="contact-section">
            <div className="container">
                <ToastContainer position="top-center" />
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <div className="wrapper">
                            <div className="row no-gutters flex flex-col md:flex-row  px-0 md:p-20">
                                <div className="flex flex-col w-full md:w-1/2">
                                    <div className="info-wrap w-100 p-lg-5 p-4 img">
                                        <h3 className="text-lg text-[#1E5EF3] ">Contact us</h3>
                                        <p className="text-xl md:text-4xl font-semibold my-2">
                                            Get free counselling for your personal finance requirement.
                                        </p>
                                        <p className="text-[#647488] text-base md:text-lg">
                                            We help you guide and get the best deal for your requirement. You can get in touch with us through the form or the email below
                                        </p>
                                    </div>
                                    <div>

                                        <div className="flex items-center pl-3 my-5">
                                            <div className="w-[60px] h-[60px] bg-gradient-to-r from-[#1E5EF3] to-[#134FDA] flex items-center justify-center rounded-lg" >
                                                <span>
                                                    <Image src='/icons/location.svg' alt='⚪' width={20} height={20} />
                                                </span>
                                            </div>
                                            <div className="pl-3 w-4/5">
                                                <span className="font-semibold text-base md:text-lg">Our Location</span>
                                                <p className="text-sm md:text-base">
                                                    208, CB-202A, Guru Harikrishn Plaza, Naraina ring road, New Delhi - 110028
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center pl-3 my-5">
                                            <div className="w-[60px] h-[60px] bg-gradient-to-r from-[#1E5EF3] to-[#134FDA] flex items-center justify-center rounded-lg" >
                                                <span>
                                                    <Image src='/icons/phone.svg' alt='⚪' width={20} height={20} />
                                                </span>
                                            </div>
                                            <div className="pl-3 w-4/5">
                                                <span className="font-semibold text-base md:text-lg">Phone Number</span>
                                                <p className="text-sm md:text-base">
                                                    <a href="tel://7292066660">+91 72920 66660</a>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center pl-3 my-5">
                                            <div className="w-[60px] h-[60px] bg-gradient-to-r from-[#1E5EF3] to-[#134FDA] flex items-center justify-center rounded-lg" >
                                                <span>
                                                    <Image src='/icons/email.svg' alt='⚪' width={20} height={20} />
                                                </span>
                                            </div>
                                            <div className="pl-3 w-4/5">
                                                <span className="font-semibold text-base md:text-lg">Email Address</span>
                                                <p className="text-sm md:text-base">
                                                    <a href="mailto:finisia@rediffmail.com">
                                                        finisia@rediffmail.com
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center md:justify-end  w-full md:w-1/2 px-0 py-8 md:p-11 md:py-0">
                                    <div className="flex flex-col p-lg-5 bg-gradient-to-r from-[#1E5EF3] to-[#134FDA] flex items-center justify-center rounded-lg p-6 sm:p-11 w-full md:w-4/5">
                                        <h3 className="self-start text-white font-semibold text-lg">Send us a message</h3>
                                        <form
                                            id="contactForm"
                                            className="contactForm w-full"
                                            onSubmit={handleSubmit}
                                        >
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="my-3 md:my-5 w-full">
                                                        <input
                                                            type="text"
                                                            className="w-full rounded py-2 px-4"
                                                            name="name"
                                                            value={name}
                                                            onChange={handleInputChange}
                                                            placeholder="Name"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="my-3 md:my-5 w-full">
                                                        <input
                                                            type="email"
                                                            className="w-full rounded py-2 px-4"
                                                            name="email"
                                                            value={email}
                                                            onChange={handleInputChange}
                                                            placeholder="Email"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="my-3 md:my-5 w-full">
                                                        <input
                                                            type="text"
                                                            className="w-full rounded py-2 px-4"
                                                            name="subject"
                                                            value={subject}
                                                            onChange={handleInputChange}
                                                            placeholder="Subject"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="my-3 md:my-5 w-full">
                                                        <textarea
                                                            type="text"
                                                            className="w-full rounded py-2 px-4"
                                                            name="message"
                                                            value={message}
                                                            onChange={handleInputChange}
                                                            placeholder="Message"
                                                            cols="30"
                                                            rows="3"
                                                        ></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <input
                                                            type="submit"
                                                            value="Send Message"
                                                            className="btn btn-primary bg-black w-full py-3 px-4 text-white rounded cursor-pointer"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}