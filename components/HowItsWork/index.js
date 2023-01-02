import Link from 'next/link';
import Image from 'next/image';
import { HowItsWorkItem } from 'constants/HowItsWork';

export default function HowItsWork() {
  return (
    <div className='flex items-center flex-col relative md:flex-row justify-between py-[3rem] md:py-[5rem] px-4 sm:px-10 relative md:mx-32'>
    <div className="flex flex-col items-center w-full">

   <h1 className="text-2xl sm:text-4xl mb-4 font-semibold text-center lg:text-left md:self-start">
       How Does It Work?
      </h1>

      <div className="howitswork flex flex-wrap items-center w-full justify-center sm:justify-between">
        {HowItsWorkItem.map(item => (
          <div
            className="howitscard-container flex flex-col md:items-left w-[250px]"
            key={item.id}
          >
            <div className='howitsitem flex flex-col items-center'>
              <div className='back-id font-bold   text-6xl md:text-[80px]  text-[#E8E8E8] mt-6 lg:mt-2'>
                {item.id}
              </div>
              <div className="howitscard bg-white rounded-xl drop-shadow-[0_0_50px_rgba(0,0,0,0.05)] hover:drop-shadow-[0_0_169px_rgba(0,0,0,0.2)] p-8 h-[200px] w-[225px] md:h-[270px] flex flex-col justify-between">
                <div className='flex items-center justify-between'>
                  <Image src='/msg.svg' alt='⚪' width={30} height={28} />
                  <div className='font-semibold'>
                    {item.id}
                  </div>
                </div>
                <div className='font-medium pt-4 md:pt-12 text-base text-left font-medium sm:text-xl'>
                  {item.desc}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
