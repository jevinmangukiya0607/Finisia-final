import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {

  return (
    <>
      <footer className='bg-[#101010] p-4 md:p-[75px]'>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 justify-evenly items-start px-2 md:px-8 py-3 pb-20">
          <div className="flex flex-col items-left w-full ">
            <Link href="/">
              <Image
                src="/white-logo.png"
                alt="Finisia"
                width={130}
                height={75}
              />
            </Link>
            <div className='text-white mt-4 '>
              Finance made simple, <br />smooth and affordable.
            </div>
          </div>

          <div className='grid grid-cols-1 col-span-2 gap-8 md:grid-cols-3 items-start w-full text-white mt-4 md:mt-0'>
            <div className="flex flex-col items-start md:items-end w-full text-white">
              <ul>
                <li className='font-semibold text-lg md:text-2xl mb-2 md:mb-4'>
                  Service
                </li>
                <li className='my-1 md:my-4 opacity-80 text-sm md:text-base cursor-pointer'>
                  <Link href="/Personal">
                  Personal Loan
                  </Link>
                </li>
                <li className='my-1 md:my-4 opacity-80 text-sm md:text-base cursor-pointer'>
                  <Link href="/Overdraft">
                  Overdraft limit
                  </Link>
                </li>
                <li className='my-1 md:my-4 opacity-80 text-sm md:text-base cursor-pointer'>
                  <Link href="/Professional">
                  Professional Loan
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start md:items-end w-full text-white">
              <ul>
                <li className='font-semibold text-lg md:text-2xl mb-2 md:mb-4'>
                  Social Media
                </li>
                <li className='my-1 md:my-4 opacity-80 text-sm md:text-base cursor-pointer'>
                  Linkedin
                </li>
                <li className='my-1 md:my-4 opacity-80 text-sm md:text-base cursor-pointer'>
                  Twitter
                </li>
                <li className='my-1 md:my-4 opacity-80 text-sm md:text-base cursor-pointer'>
                  Facebook
                </li>
                <li className='my-1 md:my-4 opacity-80 text-sm md:text-base cursor-pointer'>
                  Instagram
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start md:items-end w-full text-white">
              <ul>
                <li className='font-semibold text-lg md:text-2xl mb-2 md:mb-4'>
                  Contact
                </li>
                <li className='my-1 md:my-4 opacity-80 text-sm md:text-base cursor-pointer'>
                  {/* <Link href="mailto:finisia@rediffmail.com"> */}
                  finisia@rediffmail.com
                  {/* </Link> */}
                </li>
                <li className='my-1 md:my-4 opacity-80 text-sm md:text-base cursor-pointer'>
                  {/* <Link href="tel:+917292066660"> */}
                  7292066660
                  {/* </Link> */}
                </li>
                <li className='my-1 md:my-4 opacity-80 text-sm md:text-base cursor-pointer'>
                  {/* <Link> */}
                  Delhi, India
                  {/* </Link> */}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='divider w-full bg-[#434343] opacity-20 h-[2px] rounded'>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start justify-between mx-auto mt-4 text-[#B0B0B0]  text-sm">
          <p className="px-0 md:px-4">
            @2022 finisia.in All rights reserved
          </p>
          <div className='col-span-0 md:col-span-1'></div>
          <div className="grid grid-cols-1 col-span-2 md:col-span-1 md:grid-cols-2 text-start  md:text-center justify-start md:justify-end">
            <Link href="/Privacy">
              <div className="px-0 md:px-4 my-2 md:my-0">Privacy Policy</div>
            </Link>
            <Link href="/Terms">
              <div className="px-0 md:px-4 my-2 md:my-0">Terms & Conditions</div>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
