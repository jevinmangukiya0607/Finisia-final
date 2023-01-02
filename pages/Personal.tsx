import React, { useState } from 'react';
import Image from 'next/image';
import HowItsWork from '../components/HowItsWork';
import EMIcalculator from '../components/calculator';
import LoanDoc from '../components/LoanDoc';
import LoanFactor from '../components/LoanFactor';
import PersonalFeature from '../components/PersonalFeature';
import Banks from '../components/Banks';
import PageHead from '../components/PageHead';
import Modal from '../components/Modal';


export default function Personal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <PageHead
                title="Personal Loan | Finisia"
                description="Finance made simple, smooth and affordable. Finisia deals with all things regarding your personal finance requirement, so that you don’t have to."
            />
            <section className="flex flex-col relative md:flex-row items-center justify-between py-20 px-8 pb-[8rem] lg:px-20">
                <div className="flex flex-col items-start max-w-sm lg:max-w-xl">
                    <h1 className="text-3xl font-bold text-center text-black mb-3 md:text-4xl md:text-left lg:text-5xl lg:leading-[66px]">
                    Avail the best possible deal for your personal loan through 
                        <span className='text-[#1E5EF3]'> Finisia.</span>
                    </h1>
                    {/* <p className="text-center mt-3 text-base font-medium text-[#101010] md:text-left md:text-2xl md:font-medium w-full">
                        Avail the best possible deal for your personal loan through finisia.
                    </p> */}
                    <button onClick={() => setShowModal(true)} className="mt-7 font-semibold text-lg rounded-[5px] bg-gradient-to-r from-[#1E5EF3] to-[#134FDA] px-7 py-3 mx-auto md:mx-0 text-white font-semibold bg-red hover:opacity-90 py-3 px-10">
            Apply Now
          </button>

          <Modal title="enquiry form"
            onClose={() => setShowModal(false)}
            show={showModal}            >
            Finisia
          </Modal>
                </div>
                <div className="mt-16 md:mt-0">
                    <Image
                        src="/home-hero.png"
                        alt="Finisia"
                        width={572}
                        height={515}
                    />
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
            <PersonalFeature />

            <section className='bg-black py-[5rem] px-4 sm:px-10 relative mt-12' >
                <div className='flex flex-col items-center md:items-start justify-center mx-0 md:mx-32 self-center md:self-start'>
                    <div className='text-white text-xl md:text-[33px] font-semibold'>
                        What is Personal Loan?
                    </div>
                    <div className='text-[#B5B5B5] text-base md:text-xl mt-4 text-center'>
                    Personal Loan is an unsecured loan provided by financial institutions on the basis of income level, employment history, credit history and profession. Personal loan does not require any any collateral and with the help of finisia, you can avail a personal loan at the comfort of your home online. 
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-evenly mt-14 w-full mx-32'>
                    <div className='flex flex-col md:flex-row items-left  justify-evenly w-1/2 sm:w-1/4 md:w-full'>
                        <div className='flex flex-col items-start justify-center'>
                            <div className='text-[#1E5EF3] text-2xl md:text-5xl font-semibold'>
                                <span className='text-2xl'>upto  </span>40 Lakh
                            </div>
                            <div className='text-sm md:text-base text-white uppercase mt-2'>
                                amount
                            </div>
                        </div>
                        <div className='flex flex-col items-start mt-4 sm:mt-0 justify-center'>
                            <div className='text-[#1E5EF3] text-2xl md:text-5xl font-semibold'>
                                <span className='text-2xl'>upto  </span> 60
                            </div>
                            <div className='text-sm md:text-base text-white uppercase mt-2'>
                                TENURE (months)
                            </div>
                        </div>
                        <div className='flex flex-col items-start mt-4 sm:mt-0 justify-center'>
                            <div className='text-sm text-white mb-2 opacity-75'>
                                Starting at
                            </div>
                            <div className='text-[#1E5EF3] text-2xl md:text-5xl font-semibold'>
                                10.25 PA
                            </div>
                            <div className='text-sm md:text-base text-white uppercase mt-2'>
                                RATE OF INTEREST
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Banks />
            <HowItsWork />
            <EMIcalculator />
            <LoanDoc />
            <LoanFactor />
        </div>
    )
}