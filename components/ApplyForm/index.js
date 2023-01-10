import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";
// import sendgrid from "@sendgrid/mail";

// sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default function ApplyForm ({ category }) {

    const form = useRef();

    // const [firstname, setFirstname] = useState("");
    // const [lastname, setLastname] = useState("");
    // const [cityname, setCityname] = useState("");
    // const [statename, setStatename] = useState("");
    // const [email, setEmail] = useState("");
    // const [amountrequired, setAmountrequired] = useState("");
    // const [phone, setPhone] = useState("");
    // const [monthlyincome, setMonthlyincome] = useState("");


    //   Form validation
    const [errors, setErrors] = useState({});

    //   Setting button text
    const [buttonText, setButtonText] = useState("Send");

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;

        if (firstname.length <= 0) {
            tempErrors["firstname"] = true;
            isValid = false;
        }
        if (lastname.length <= 0) {
            tempErrors["lastname"] = true;
            isValid = false;
        }
        if (cityname.length <= 0) {
            tempErrors["cityname"] = true;
            isValid = false;
        }
        if (statename.length <= 0) {
            tempErrors["statename"] = true;
            isValid = false;
        }
        if (amountrequired.length <= 0) {
            tempErrors["amountrequired"] = true;
            isValid = false;
        }
        if (email.length <= 0) {
            tempErrors["email"] = true;
            isValid = false;
        }
        if (phone.length <= 0) {
            tempErrors["phone"] = true;
            isValid = false;
        }
        if (monthlyincome.length <= 0) {
            tempErrors["monthlyincome"] = true;
            isValid = false;
        }

        setErrors({ ...tempErrors });
        console.log("errors", errors);
        return isValid;
    };

    //   const [form, setForm] = useState(false);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     let isValidForm = handleValidation();
    //     // console.log(isValidForm);

    //     // if (isValidForm) {
    //     //     setButtonText("Sending");
    //     //     setValues({ firstname: "", lastname: "", cityname: "", statename: "", amountrequired: "", email: "", phone: "", monthlyincome: "" });
    //     //     toast.success("Form Submitted Successfully");
    //     //     emailjs.sendForm('service_w168mhr', 'template_zoun2in', form.current, 'vNLayYzfxJy_djaZn')
    //     //         .then((result) => {
    //     //             console.log(result.text);
    //     //         }, (error) => {
    //     //             console.log(error.text);
    //     //         });

    //     // }

    // };


    const sendEmail = (e) => {
        e.preventDefault();

        if (!firstname || !email || !lastname || !cityname || !statename || !amountrequired || !monthlyincome || !phone) {
            toast.error("Please provide value in each input field");
        } else {
            // firebaseDb.child("contacts").push(state);
            setValues({ firstname: "", lastname: "", cityname: "", statename: "", amountrequired: "", email: "", phone: "", monthlyincome: ""});
            toast.success("Form Submitted Successfully");
            emailjs.sendForm('service_yd2sdfa', 'template_w6bvw32', form.current, 'hbRwWId7I_ouVTakY')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
        }

    };

    const [values, setValues] = useState({
        firstname: "",
        lastname: "",
        cityname: "",
        statename: "",
        amountrequired: "",
        email: "",
        phone: "",
        monthlyincome: "",
    });

    const { firstname, lastname, cityname, statename, amountrequired, monthlyincome, phone , email } = values;

    const handleInputChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (

        <div className="flex items-center justify-center w-full">
            <ToastContainer position="top-center" />
            <form ref={form} className="flex flex-col w-full" onSubmit={sendEmail}>
                <input name="category" className="hidden" value={category.name} />
                <div className='row mt-4 md:mt-10 w-full flex flex-wrap items-start justify-evenly'>
                    <div className="flex flex-col w-full md:w-2/5 lg:w-1/5 ">
                        <label for="amountrequires" className="text-sm mb-1 ml-1 mt-4 md:mt-4 lg:mt-0">Amount Required</label>
                        <select value={amountrequired}
                            onChange={handleInputChange} name="amountrequired" id="amountrequired" className="border   w-full  rounded col-12 col-sm-12 col-md-6 col-lg-3 border-zinc-200 outline-[#1e5ef3] p-3">
                            <option value="" disabled selected hidden>Amount Required</option>
                            <option value="0-5 lakh">0-5 lakhs</option>
                            <option value="5-10 lakh">5-10 lakhs</option>
                            <option value="10-15 lakh">10-15 lakhs</option>
                            <option value="15-20 lakh">15-20 lakhs</option>
                            <option value="20-25 lakh">20-25 lakhs</option>
                            <option value="25+ lakh">25 lakh +</option>
                        </select>
                    </div>
                    <div className="flex flex-col w-full md:w-2/5 lg:w-1/5 ">
                        <label for="firstname" className="text-sm mb-1 ml-1 mt-4 md:mt-4 lg:mt-0">First Name</label>
                        <input
                            id='firstname'
                            type='text'
                            value={firstname}
                            onChange={handleInputChange}
                            className="border   w-full  rounded col-12 col-sm-12 col-md-6 col-lg-3 border-zinc-200 outline-[#1e5ef3] p-3"
                            placeholder='First Name'
                            name="firstname"
                            required
                        />
                    </div>
                    <div className="flex flex-col w-full md:w-2/5 lg:w-1/5 ">
                        <label for="lastname" className="text-sm mb-1 ml-1 mt-4 md:mt-4 lg:mt-0">Last Name</label>
                        <input
                            id='lastname'
                            type='text'
                            value={lastname}
                            onChange={handleInputChange}
                            className="border   w-full  rounded col-12 col-sm-12 col-md-6 col-lg-3 border-zinc-200 outline-[#1e5ef3] p-3"
                            name="lastname"
                            placeholder='Last Name'
                            required
                        />
                    </div>
                    <div className="flex flex-col w-full md:w-2/5 lg:w-1/5 ">
                        <label for="phone" className="text-sm mb-1 ml-1 mt-4 md:mt-4 lg:mt-0">Phone Number</label>
                        <input
                            id='phone'
                            type='tel'
                            value={phone}
                            onChange={handleInputChange}
                            className="border   w-full  rounded col-12 col-sm-12 col-md-6 col-lg-3 border-zinc-200 outline-[#1e5ef3] p-3"
                            placeholder='Phone Number'
                            pattern="[0-9]{10}"
                            name="phone"
                            required
                        />
                    </div>
                </div>
                <div className='row lg:mt-10 w-full flex flex-wrap items-start justify-evenly'>
                    <div className="flex flex-col w-full md:w-2/5 lg:w-1/5 ">
                        <label for="email" className="text-sm mb-1 ml-1 mt-4 md:mt-4 lg:mt-0 ">Email</label>
                        <input
                            id='email'
                            type='email'
                            value={email}
                            onChange={handleInputChange}
                            className="border w-full rounded col-12 col-sm-12 col-md-6 col-lg-3 border-zinc-200 outline-[#1e5ef3] p-3"
                            placeholder='Email'
                            name="email"
                            required
                        />
                    </div>
                    <div className="flex flex-col w-full md:w-2/5 lg:w-1/5 ">
                        <label for="city" className="text-sm mb-1 ml-1 mt-4 md:mt-4 lg:mt-0">City</label>
                        <input
                            id='city'
                            type='text'
                            value={cityname}
                            onChange={handleInputChange}
                            className="border   w-full  rounded col-12 col-sm-12 col-md-6 col-lg-3 border-zinc-200 outline-[#1e5ef3] p-3"
                            placeholder='City'
                            name="cityname"
                            required
                        />
                    </div>
                    <div className="flex flex-col w-full md:w-2/5 lg:w-1/5 ">
                        <label for="state" className="text-sm mb-1 ml-1 mt-4 md:mt-4 lg:mt-0">State</label>
                        <input
                            id='state'
                            type='text'
                            value={statename}
                            onChange={handleInputChange}
                            className="border   w-full  rounded col-12 col-sm-12 col-md-6 col-lg-3 border-zinc-200 outline-[#1e5ef3] p-3"
                            placeholder='State'
                            name="statename"
                            required
                        />
                    </div>
                    <div className="flex flex-col w-full md:w-2/5 lg:w-1/5 ">
                        <label for="monthlyincome" className="text-sm mb-1 ml-1 mt-4 md:mt-4 lg:mt-0">Monthly Income</label>
                        <select value={monthlyincome}
                            onChange={handleInputChange} name="monthlyincome" id="monthlyincome" className="border   w-full  rounded col-12 col-sm-12 col-md-6 col-lg-3 border-zinc-200 outline-[#1e5ef3] p-3">
                            <option value="" disabled selected hidden>Monthly Income</option>
                            <option value="0-30000">30,000 below</option>
                            <option value="30000-35000">30,000 - 35,000</option>
                            <option value="35001-45000">35,001 - 45,000</option>
                            <option value="45001-75000">45,001 - 75,000</option>
                            <option value="75001-150000">75,001 - 150,000</option>
                            <option value="150000+">150,000 +</option>
                        </select>
                    </div>
                    <div className='row mt-12 w-full flex flex-wrap items-center justify-evenly'>
                        <input
                                                            type="submit"
                                                            value="Apply Now"
                                                            className="font-semibold text-lg rounded-[5px] bg-gradient-to-r from-[#1E5EF3] to-[#134FDA] px-12 py-3 mx-auto md:mx-0 text-white font-semibold bg-red hover:opacity-90 py-3 px-10 w-fit"
                                                        />
                    </div>
                    <div className="text-left">
                        {showSuccessMessage && (
                            <p className="text-green-500 font-semibold text-sm my-2">
                                Thankyou! Your Message has been delivered.
                            </p>
                        )}
                        {showFailureMessage && (
                            <p className="text-red-500">
                                Oops! Something went wrong, please try again.
                            </p>
                        )}
                    </div>
                </div>
            </form >
        </div >
    )
}