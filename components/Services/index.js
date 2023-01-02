import Link from 'next/link';
import Image from 'next/image';
import { ServicesItem } from 'constants/Services';

export default function Services() {
  return (
    <div className="flex flex-col items-center bg-[url('/service-back.png')] py-[1rem] md:py-[5rem] px-4 sm:px-10 relative">
      <div className="custom-shape-divider-top-services-top">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            className="shape-fill"
          />
        </svg>
      </div>
      <h1 className="text-2xl sm:text-4xl mb-4 font-semibold text-center">
        Our Services
      </h1>
      <p className="text-center text-base sm:text-xl font-normal max-w-2xl mb-10">
        Get the best offer on your loan with the touch of a finger.
      </p>
      <div className="flex flex-wrap items-center justify-center">
        {ServicesItem.map(item => (
          <div
            className="service-item flex flex-col border-transparent items-left px-8 py-8 rounded-xl border-2 max-w-[300px] m-4 mx-4 bg-white drop-shadow-[0_0_50px_rgba(0,0,0,0.05)] hover:drop-shadow-[0_0_169px_rgba(0,0,0,0.2)] hover:bg-gradient-to-r from-[#1E5EF3] to-[#134FDA] hover:text-white sm:mx-12"
            key={item.title}
          >
            {/* <div>
              <Image src={item.img} alt={item.title} width={100} height={100} />
            </div> */}
            <p className="mt-6 font-semibold text-left text-xl sm:text-2xl">
              {item.title}
            </p>
            <p className="mt-3 text-sm text-left sm:text-base">{item.desc}</p>
            <Link href={item.url}>
              <div className="service-btn bg-red text-white mt-5 font-semibold hover:opacity-90 text-center rounded-[5px] text-white font-semibold text-base rounded-[5px] bg-gradient-to-r from-[#1E5EF3] to-[#134FDA] px-4 py-[10px]">
                Know More
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="custom-shape-divider-bottom-whyFinisia-bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            className="shape-fill"
          />
        </svg>
      </div>
    </div>
  );
}
