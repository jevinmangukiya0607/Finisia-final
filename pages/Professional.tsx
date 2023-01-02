import React, { useState } from 'react';
import Image from 'next/image'
import HowItsWork from '../components/HowItsWork';
import EMIcalculator from '../components/calculator';
import ProLoanDoc from '../components/ProLoanDoc';
import ProfessionalFeature from '../components/ProfessionalFeature';
import Banks from '../components/Banks';
import PageHead from '../components/PageHead';
import Modal from '../components/Modal';
import ApplyForm from '../components/ApplyForm';

export default function Professional() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <PageHead
                title="Professional Loan | Finisia"
                description="Finance made simple, smooth and affordable. Finisia deals with all things regarding your personal finance requirement, so that you don’t have to."
            />

            <section className="flex items-center flex-col relative md:flex-row justify-start py-[1rem] md:py-[5rem] px-4 sm:px-10 relative md:mx-32">

                {/* <div className="my-8 lg:mb-0 md:mt-0 ">
<Image
src="/home-hero.png"
alt="Finisia"
width={200}
height={200}
/>
</div> */}


                <div className="flex flex-col items-start ml-0">
                    <h1 className="text-3xl font-bold text-center text-black mb-2 md:text-4xl md:text-left lg:text-5xl lg:leading-[66px]">
                        <span className='text-[#1E5EF3]'>Professional Loan</span>
                    </h1>
                    <p className="text-left mb-4 text-base font-medium text-[#101010] md:text-left md:text-xl md:font-medium w-full">
                    Expand or start your own practice with the help of professional loans through 
                        <span className='text-[#1E5EF3]'> Finisia.</span>
                    </p>
                    {/* <button onClick={() => setShowModal(true)} className="mt-7 font-semibold text-lg rounded-[5px] bg-gradient-to-r from-[#1E5EF3] to-[#134FDA] px-7 py-3 mx-auto md:mx-0 text-white font-semibold bg-red hover:opacity-90 py-3 px-10">
Apply Now
</button> */}
                    <ProfessionalFeature />
                    {/* <Modal title="enquiry form"
onClose={() => setShowModal(false)}
show={showModal}            >
Finisia
</Modal> */}
                </div>

                <div className="custom-shape-divider-bottom">
                    <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <path fill='white'
                            d="M985.66 92.83C906.67 72 823.78 31 743.84 14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84 11.73-114 31.07-172 41.86A600.21 600.21 0 0 1 0 27.35V120h1200V95.8c-67.81 23.12-144.29 15.51-214.34-2.97Z"
                            className="shape-fill"
                        />
                    </svg>
                </div>
            </section>
            <ApplyForm />

            {/* <ProfessionalFeature /> */}
            <section className='bg-black py-[5rem] px-4 sm:px-10 relative mt-12' >
                <div className='flex flex-col items-center md:items-start justify-center mx-0 md:mx-32 self-center md:self-start'>
                    <div className='text-white text-xl md:text-[33px] font-semibold'>
                        What is Professional Loan?
                    </div>
                    <div className='text-[#B5B5B5] text-base md:text-xl mt-4 text-center md:text-left'>
                        Professional loans are tailor made loans to suit the financial needs for CA’s and doctor to expand or start their office.
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-evenly mt-14 w-full mx-32'>
                    <div className='flex flex-col md:flex-row items-start  justify-evenly w-1/2 sm:w-1/4 md:w-full'>
                        <div className='flex items-center justify-center'>
                            <Image
                                src="/feature-amount.svg"
                                alt="Amount"
                                width={24}
                                height={24}
                                className="mr-4"
                            />
                            <div className='flex flex-col items-start justify-center'>
                                <div className='text-[#1E5EF3] text-xl md:text-5xl font-semibold'>
                                    <span className='text-xl'>upto  </span>1 Crore
                                </div>
                                <div className='text-sm md:text-base text-white uppercase mt-2'>
                                    amount
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center mt-2 md:mt-0'>
                            <Image
                                src="/feature-time.svg"
                                alt="Amount"
                                width={24}
                                height={24}
                                className="mr-4"
                            />
                            <div className='flex flex-col items-start mt-4 sm:mt-0 justify-center'>
                                <div className='text-[#1E5EF3] text-xl md:text-5xl font-semibold'>
                                    <span className='text-xl'>upto  </span> 96
                                </div>
                                <div className='text-sm md:text-base text-white uppercase mt-2'>
                                    TENURE (months)
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center justify-center mt-2 md:mt-0'>
                            <Image
                                src="/feature-roi.svg"
                                alt="Amount"
                                width={24}
                                height={24}
                                className="mr-4"
                            />
                            <div className='flex flex-col items-start mt-4 sm:mt-0 justify-center'>
                                <div className='text-sm text-white mb-2 opacity-75'>
                                    Starting at
                                </div>
                                <div className='text-[#1E5EF3] text-xl md:text-5xl font-semibold'>
                                    10.85 PA
                                </div>
                                <div className='text-sm md:text-base text-white uppercase mt-2'>
                                    RATE OF INTEREST
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Banks />
            <HowItsWork />
            <EMIcalculator />
            <ProLoanDoc />
        </div>
    )
}