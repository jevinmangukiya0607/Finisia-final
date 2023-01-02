import { useState } from "react";
import { Typography, Button, Box, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Modal from './Modal';


export default function LoanCalculator() {
  const [amount, setAmount] = useState(0);
  const [interest, setInterest] = useState();
  const [time, setTime] = useState();
  const [emi, setEmi] = useState(0);
  const [totalinterest, setTotalinterest] = useState(0);
  const [principal, setPrincipal] = useState();

  const handlePrincipalchange = (event) => {
    setPrincipal(event.target.value);
  };
  const handleInterestchange = (event) => {
    setInterest(event.target.value);
  };
  const handleTimechange = (event) => {
    setTime(event.target.value);
  };



  const calculateLoan = () => {
    if (principal > 0 && interest > 0 && time > 0) {
      let p = parseFloat(principal);
      let r = parseFloat(interest);
      let n = parseFloat(time);

      let actualRate = parseFloat(r / 12 / 100);

      let calcemi =
        p *
        actualRate *
        (Math.pow(1 + actualRate, n) / (Math.pow(1 + actualRate, n) - 1));

      setEmi(Math.round(calcemi));
      setAmount(Math.round(calcemi * n));
      setTotalinterest(Math.round(calcemi * n - p));
    } else {
      toast.error("Amount, Interest and Period must be greater than 0!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        toastId: "id",
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const [showModal, setShowModal] = useState(false);


  return (
    <>
      <section className="bg-[#fbfbfb] flex items-center flex-col relative md:flex-row justify-between py-[1rem] md:py-[5rem] px-4 sm:px-10 relative ">
        <div className= "w-full flex items-center justify-between py-[1rem] md:py-[3rem] px-4 sm:px-10 relative md:mx-32">
          <div style={{ overflowY: "auto"}} className="w-full">
            <h1 className="text-2xl sm:text-4xl mb-4 font-semibold text-center md:text-left">
              EMI Calculator
            </h1>
            <p className="text-center md:text-left text-base sm:text-xl font-normal mb-10 text-[#647488]">
              Measure twice, cut once. You may have a target amount, a target tenure or a target EMI. When it comes to loans, no matter how big or small, always get an idea how it will affect your monthly finances, before you take a decision
            </p>
            <Box sx={{ m: 2 }} />
            <Grid container spacing={2} className="flex items-center justify-center md:justify-between">
              <Grid item md={6} xs={12}>
                <div className="my-5 flex flex-col self-center md:self-start">
                  <div className="text-lg sm:text-xl mb-1 font-medium">
                    Loan Amount
                  </div>
                  <TextField
                    type="number"
                    name="loan_amount"
                    onChange={handlePrincipalchange}
                    value={principal}
                    sx={{ minWidth: "92%" }}
                    className="bg-[#F2F2F2] emi-field"
                  />
                </div>
                <div className="my-5 flex flex-col self-center md:self-start">
                  <div className="text-lg sm:text-xl mb-1 font-medium">
                    Interest Rate %
                  </div>
                  <TextField
                    type="number"
                    name="interest_rate"
                    onChange={handleInterestchange}
                    value={interest}
                    sx={{ minWidth: "92%" }}
                    className="bg-[#F2F2F2] emi-field"
                  />
                </div>
                <div className="my-5 flex flex-col self-center md:self-start">
                  <div className="text-lg sm:text-xl mb-1 font-medium">
                    Tenure (Months)
                  </div>
                  <TextField
                    type="number"
                    name="loan_period_in_month"
                    onChange={handleTimechange}
                    value={time}
                    sx={{ minWidth: "92%" }}
                    className="bg-[#F2F2F2] emi-field "
                  />
                </div>


                <Box
                  display="flex"
                  justifyContent="left"
                  alignItems="left"
                  className="mt-3 flex items-center justify-center md:justify-start"
                >
                  <FormControl>
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={calculateLoan}
                      className="rounded-[5px] text-white font-semibold text-base rounded-[5px] bg-gradient-to-r from-[#1E5EF3] to-[#134FDA] px-4 py-[10px]"
                    >
                      Calculate
                    </Button>
                  </FormControl>
                </Box>
              </Grid>

              <div className="flex flex-col bg-white h-fit p-8 drop-shadow-[0_0_50px_rgba(0,0,0,0.05)] rounded-md mt-[50px] lg:mt-0">
                <div className="flex flex-col items-center justify-center my-3">
                  <div className="text-lg md:text-medium mr-1 md:mr-10">
                    Monthly EMI
                  </div>
                  <div className="text-xl md:text-2xl font-semibold mt-4">
                    ₹ {emi}
                  </div>
                </div>
                {/* <div className="flex items-center justify-between my-3">
                  <div className="text-sm md:text-medium mr-1 md:mr-10">
                    Total Interest Payable
                  </div>
                  <div className="text-base  md:text-2xl font-semibold ml-10">
                    ₹ {totalinterest}
                  </div>
                </div> */}
                {/* <div className="flex items-center justify-between my-3">
                  <div className="text-medium mr-10">
                    Total Payment
                  </div>
                  <div className="text-2xl font-semibold ml-10">
                    ₹ {amount}
                  </div>
                </div> */}
                <div className="flex items-center justify-center mt-5">
                  <button onClick={() => setShowModal(true)}
                    className="w-fit cursor-pointer rounded-[5px] text-white font-semibold text-base rounded-[5px] bg-gradient-to-r from-[#1E5EF3] to-[#134FDA] px-10 py-[10px]"
                  >
                    Apply
                  </button>
                  <Modal title="enquiry form"
                    onClose={() => setShowModal(false)}
                    show={showModal}            >
                    Hello from the modal!
                  </Modal>
                </div>
              </div>
            </Grid>
            <Box sx={{ m: 4 }} />
          </div>
        </div>
      </section>
    </>
  );
}
