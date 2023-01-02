import Link from 'next/link';
import Image from 'next/image';
import { WHY_FINISIA } from 'constants/WhyFinisia';

export default function WhyFinisia() {
  return (
    <div className="flex items-center flex-col relative md:flex-row justify-between py-[1rem] md:py-[5rem] px-4 sm:px-10 relative md:mx-32">
      <div className="my-4 md:my-0 md:mt-0 scale-150 md:scale-100 w-1/2 flex items-center justify-center">
        <Image
          src="/whychooseus.png"
          alt="Why Finisia"
          width={577}
          height={433}
        />
      </div>
      <div className="flex flex-col w-full md:w-1/2 items-left justify-center max-w-sm lg:max-w-xl">
        <h1 className="text-2xl sm:text-4xl mb-4 font-semibold text-center md:text-left">
          Why choose us?
        </h1>
        <p className="text-center md:text-left text-base sm:text-xl font-normal max-w-2xl mb-10 text-[#575757]">
        We help our customers find the ideal deal for their personal loan from India’s top banks and financial institutions.
        </p>
        {WHY_FINISIA.map(item => (
          <div
            className="flex items-center p-5 rounded-xl max-w-xl m-4 ml-0 bg-[#F8F8F8] hover:bg-black hover:text-white"
            key={item.id}
          >
            <div className='p-2 md:p-4 mr-3 md:mr-5 rounded-lg bg-gradient-to-r from-[#1E5EF3] to-[#134FDA]'>
              <Image className='scale-75 md:scale-100' src={item.img} alt={item.id} width={25} height={25} />
            </div>
            <p className="text-sm text-left font-medium sm:text-lg">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
