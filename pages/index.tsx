import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Services from '../components/Services'
import WhyFinisia from '../components/WhyFinisia'
import EMIcalculator from '../components/calculator'
import React, { useState } from 'react';
import Banks from '../components/Banks';
import PageHead from '../components/PageHead';
import Modal from '../components/Modal'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  // const [modal2Open, setModal2Open] = useState(false);

  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <PageHead
        title="Finisia"
        description="Finance made simple, smooth and affordable. Finisia deals with all things regarding your personal finance requirement, so that you don’t have to."
      />
      <section className="flex flex-col-reverse relative md:flex-row items-center justify-between md:py-20 px-8 pb-[8rem] lg:px-20 bg-[#101010]">
        <div className="flex flex-col items-start max-w-sm lg:max-w-xl">
          <h1 className="text-3xl font-bold text-center text-white mb-3 md:text-4xl md:text-left lg:text-6xl lg:leading-tight">
            Finance made simple, smooth and affordable.
          </h1>
          <p className="text-center mt-3 opacity-85 text-base font-medium text-white w-full md:text-left md:text-2xl md:font-medium">
            Finisia deals with all things regarding your personal finance requirement, so that you don’t have to.
          </p>
          <button onClick={() => setShowModal(true)} className="mt-7 font-semibold text-lg rounded-[5px] bg-gradient-to-r from-[#1E5EF3] to-[#134FDA] px-7 py-3 mx-auto md:mx-0 text-white font-semibold bg-red hover:opacity-90 py-3 px-10">
            Get Started
          </button>

          <Modal title="enquiry form"
            onClose={() => setShowModal(false)}
            show={showModal}            >
            Finisia
          </Modal>
        </div>
        <div className="my-4 md:my-0 md:mt-0 ">
          <Image
            src="/herobanner.png"
            alt="Finisia"
            width={577}
            height={433}
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
      <Banks />
      <Services />
      <WhyFinisia />
      <EMIcalculator />
    </div>
  )
}
