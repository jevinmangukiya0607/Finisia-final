import React, { useState } from "react";

export default function ApplyForm() {

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [cityname, setCityname] = useState("");
    const [statename, setStatename] = useState("");
    const [email, setEmail] = useState("");
    const [amountrequired, setAmountrequired] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

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
        if (message.length <= 0) {
            tempErrors["message"] = true;
            isValid = false;
        }

        setErrors({ ...tempErrors });
        console.log("errors", errors);
        return isValid;
    };

    //   const [form, setForm] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        let isValidForm = handleValidation();

        if (isValidForm) {
            setButtonText("Sending");
            const res = await fetch("/api/sendgrid", {
                body: JSON.stringify({
                    email: email,
                    firstname: firstname,
                    lastname: lastname,
                    phone: phone,
                    cityname: cityname,
                    amountrequired: amountrequired,
                    statename: statename,
                    message: message,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
            });

            const { error } = await res.json();
            if (error) {
                console.log(error);
                setShowSuccessMessage(false);
                setShowFailureMessage(true);
                setButtonText("Send");

                // Reset form fields
                setFirstname("");
                setEmail("");
                setMessage("");
                setPhone("");
                setAmountrequired("");
                setLastname("");
                setCityname("");
                setStatename("");
                return;
            }
            setShowSuccessMessage(true);
            setShowFailureMessage(false);
            setButtonText("Send");
            // Reset form fields
            setFirstname("");
            setEmail("");
            setMessage("");
            setPhone("");
            setAmountrequired("");
            setLastname("");
            setCityname("");
            setStatename("");
        }
        console.log(firstname, lastname, phone, cityname, statename, amountrequired, email, message);
    };

    return (
        <div className="flex items-center flex-col relative justify-between py-[4rem] pb-[1rem] md:py-[5rem] px-4 sm:px-10 relative md:mx-32 bg-[#fbfbfb] rounded-xl">
            <div className="flex items-center justify-center w-full">
                <p className="text-base md:text-xl">
                    Your search for the ideal personal loan ends here   <span className='text-[#1E5EF3] font-semibold'> Apply Below </span>
                </p>
            </div>
            <div className="flex items-center justify-center w-full">
                <form className="flex flex-col w-full" onSubmit={handleSubmit}>
                    <div className='row mt-4 md:mt-10 w-full flex flex-wrap items-start justify-evenly'>
                        <div className="flex flex-col w-full md:w-2/5 lg:w-1/5 ">
                            <select value={amountrequired}
                                onChange={(e) => {
                                    setAmountrequired(e.target.value);
                                }} name="amountrequired" id="amountrequired" className="border  mt-4 md:mt-4 lg:mt-0 w-full  rounded col-12 col-sm-12 col-md-6 col-lg-3 border-zinc-200 outline-[#1e5ef3] p-3">
                                <option value="0-5">0-5 lakhs</option>
                                <option value="5-10">5-10 lakhs</option>
                                <option value="10-15">10-15 lakhs</option>
                                <option value="15-20">15-20 lakhs</option>
                                <option value="20-25">20-25 lakhs</option>
                                <option value="25+">25 lakh +</option>
                            </select>
                            {errors?.amountrequired && (
                                <p className="text-red-500">Amount cannot be empty.</p>
                            )}
                        </div>
                        <div className="flex flex-col w-full md:w-2/5 lg:w-1/5 ">
                            <input
                                id='firstname'
                                type='text'
                                value={firstname}
                                onChange={(e) => {
                                    setFirstname(e.target.value);
                                }}
                                className="border  mt-4 md:mt-4 lg:mt-0 w-full  rounded col-12 col-sm-12 col-md-6 col-lg-3 border-zinc-200 outline-[#1e5ef3] p-3"
                                placeholder='First Name'
                                required
                            />
                            {errors?.firstname && (
                                <p className="text-red-500">Firstname cannot be empty.</p>
                            )}
                        </div>
                        <div className="flex flex-col w-full md:w-2/5 lg:w-1/5 ">
                            <input
                                id='lastname'
                                type='text'
                                value={lastname}
                                onChange={(e) => {
                                    setLastname(e.target.value);
                                }}
                                className="border  mt-4 md:mt-4 lg:mt-0 w-full  rounded col-12 col-sm-12 col-md-6 col-lg-3 border-zinc-200 outline-[#1e5ef3] p-3"
                                placeholder='Last Name'
                                required
                            />
                            {errors?.lastname && (
                                <p className="text-red-500">Lastname cannot be empty.</p>
                            )}
                        </div>
                        <div className="flex flex-col w-full md:w-2/5 lg:w-1/5 ">
                            <input
                                id='phone'
                                type='tel'
                                value={phone}
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                }}
                                className="border  mt-4 md:mt-4 lg:mt-0 w-full  rounded col-12 col-sm-12 col-md-6 col-lg-3 border-zinc-200 outline-[#1e5ef3] p-3"
                                placeholder='Phone Number'
                                pattern="[0-9]{10}"
                                required
                            />
                            {errors?.phone && (
                                <p className="text-red-500">Phone number cannot be empty.</p>
                            )}
                        </div>
                    </div>
                    <div className='row lg:mt-10 w-full flex flex-wrap items-start justify-evenly'>
                        <div className="flex flex-col w-full md:w-2/5 lg:w-1/5 ">
                            <input
                                id='email'
                                type='email'
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                className="border mt-4 md:mt-4 lg:mt-0 w-full rounded col-12 col-sm-12 col-md-6 col-lg-3 border-zinc-200 outline-[#1e5ef3] p-3"
                                placeholder='Email'
                                required
                            />
                            {errors?.email && (
                                <p className="text-red-500">Email cannot be empty.</p>
                            )}
                        </div>
                        <div className="flex flex-col w-full md:w-2/5 lg:w-1/5 ">
                            <input
                                id='city'
                                type='text'
                                value={cityname}
                                onChange={(e) => {
                                    setCityname(e.target.value);
                                }}
                                className="border  mt-4 md:mt-4 lg:mt-0 w-full  rounded col-12 col-sm-12 col-md-6 col-lg-3 border-zinc-200 outline-[#1e5ef3] p-3"
                                placeholder='City'
                                required
                            />
                            {errors?.city && (
                                <p className="text-red-500">City cannot be empty.</p>
                            )}
                        </div>
                        <div className="flex flex-col w-full md:w-2/5 lg:w-1/5 ">
                            <input
                                id='state'
                                type='text'
                                value={statename}
                                onChange={(e) => {
                                    setStatename(e.target.value);
                                }}
                                className="border  mt-4 md:mt-4 lg:mt-0 w-full  rounded col-12 col-sm-12 col-md-6 col-lg-3 border-zinc-200 outline-[#1e5ef3] p-3"
                                placeholder='State'
                                required
                            />
                            {errors?.state && (
                                <p className="text-red-500">State cannot be empty.</p>
                            )}
                        </div>
                        <div className="flex flex-col w-full md:w-2/5 lg:w-1/5 ">
                            <input
                                id='message'
                                type='text'
                                value={message}
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                }}
                                className="border mt-4 md:mt-4 lg:mt-0 w-full rounded col-12 col-sm-12 col-md-6 col-lg-3 border-zinc-200 outline-[#1e5ef3] p-3"
                                placeholder='Message'

                            />
                            {errors?.message && (
                                <p className="text-red-500">Message cannot be empty.</p>
                            )}
                        </div>
                        <div className='row mt-12 w-full flex flex-wrap items-center justify-evenly'>
                            <button className="font-semibold text-lg rounded-[5px] bg-gradient-to-r from-[#1E5EF3] to-[#134FDA] px-12 py-3 mx-auto md:mx-0 text-white font-semibold bg-red hover:opacity-90 py-3 px-10 w-fit">
                                Apply Now
                            </button>
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
        </div >
    )
}