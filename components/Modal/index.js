import React, { useEffect, useState, useRef} from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from "react-toastify";

const Modal = ({ show, onClose, children, title }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const form = useRef();

  const [state, setState] = useState({
    firstname: "",
    phone: "",
    email: "",
    amountrequired: "",
    statename: "",
    cityname: "",
  });

  const { firstname, phone, email, amountrequired, statename, cityname } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstname || !phone || !email || !amountrequired || !statename || !cityname) {
      toast.error("Please provide value in each input field");
    } else {
      // firebaseDb.child("contacts").push(state);
      setState({ firstname: "", phone: "", email: "", amountrequired: "", statename: "", cityname: "" });
      toast.success("Form Submitted Successfully");
      emailjs.sendForm('service_yd2sdfa', 'template_w6bvw32', form.current, 'hbRwWId7I_ouVTakY')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };


  const modalContent = show ? (
    <StyledModalOverlay className="flex items-center justify-center">
      <StyledModal className="w-full md:w-1/2">
        {/* {title && <div>{title}</div>}
        <div>{children}</div> */}

        <ToastContainer position="top-center" />
        <div className="flex items-center justify-center w-full pt-0">
          <div className="flex flex-col p-lg-5 bg-white flex items-center justify-center rounded-lg p-5 pt-8 md:p-11 w-full md:w-4/5">
            <div className="close w-full mt-[-20px] flex items-end justify-end  text-white">
              <a href="#" className="text-xl md:text-2xl text-black" onClick={handleCloseClick}>
                x
              </a>
            </div>
            <h3 className="self-start font-medium text-xl md:text-2xl">👉 Apply here</h3>
            <form
              ref={form}
              id="contactForm"
              className="contactForm w-full"
              onSubmit={handleSubmit}
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="my-5 w-full">
                    <input
                      type="text"
                      className="w-full rounded border-black/20 border outline-0 p-2 md:py-3 md:px-4"
                      name="firstname"
                      placeholder="Full Name"
                      onChange={handleInputChange}
                      value={firstname}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="my-5 w-full">
                    <input
                      type="text"
                      className="w-full rounded border-black/20 border outline-0 p-2 md:py-3 md:px-4"
                      name="phone"
                      placeholder="Phone Number"
                      onChange={handleInputChange}
                      value={phone}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="my-5 w-full">
                    <input
                      type="email"
                      className="w-full rounded border-black/20 border outline-0 p-2 md:py-3 md:px-4"
                      name="email"
                      placeholder="Email"
                      onChange={handleInputChange}
                      value={email}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="my-5 w-full">
                    <input
                      type="number"
                      className="w-full rounded border-black/20 border outline-0 p-2 md:py-3 md:px-4"
                      name="amountrequired"
                      placeholder="Amount Required"
                      onChange={handleInputChange}
                      value={amountrequired}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="my-5 w-full">
                    <input
                      type="text"
                      className="w-full rounded border-black/20 border outline-0 p-2 md:py-3 md:px-4"
                      name="statename"
                      placeholder="State"
                      onChange={handleInputChange}
                      value={statename}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="my-5 w-full">
                    <input
                      type="text"
                      className="w-full rounded border-black/20 border outline-0 p-2 md:py-3 md:px-4"
                      name="cityname"
                      placeholder="City"
                      onChange={handleInputChange}
                      value={cityname}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Send Message"
                      className="btn btn-primary bg-black w-full p-2 md:py-3 md:px-4 text-white rounded cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

      </StyledModal>
    </StyledModalOverlay>



  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};


const StyledModal = styled.div`
  background: none;
  border-radius: 15px;
  padding: 15px;
`;

const StyledModalOverlay = styled.div`
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default Modal;