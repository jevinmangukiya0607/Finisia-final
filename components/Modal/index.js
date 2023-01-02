import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
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

  const [state, setState] = useState({
    name: "",
    number: "",
    email: "",
    amount: "",
    rajstate: "",
    city: "",
  });

  const { name, number, email, amount, rajstate, city } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !number || !email || !amount || !rajstate || !city) {
      toast.error("Please provide value in each input field");
    } else {
      // firebaseDb.child("contacts").push(state);
      setState({ name: "", number: "", email: "", amount: "", rajstate: "", city: "" });
      toast.success("Form Submitted Successfully");
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
                      name="name"
                      placeholder="Name"
                      onChange={handleInputChange}
                      value={name}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="my-5 w-full">
                    <input
                      type="text"
                      className="w-full rounded border-black/20 border outline-0 p-2 md:py-3 md:px-4"
                      name="number"
                      placeholder="Phone Number"
                      onChange={handleInputChange}
                      value={number}
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
                      name="amount"
                      placeholder="Amount Required"
                      onChange={handleInputChange}
                      value={amount}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="my-5 w-full">
                    <input
                      type="text"
                      className="w-full rounded border-black/20 border outline-0 p-2 md:py-3 md:px-4"
                      name="rajstate"
                      placeholder="State"
                      onChange={handleInputChange}
                      value={rajstate}
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="my-5 w-full">
                    <input
                      type="text"
                      className="w-full rounded border-black/20 border outline-0 p-2 md:py-3 md:px-4"
                      name="city"
                      placeholder="City"
                      onChange={handleInputChange}
                      value={city}
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