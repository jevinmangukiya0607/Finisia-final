
import Image from 'next/image';
import { OVERDRAFT_ADV } from 'constants/Overdraftadv';

export default function OverdraftAdv() {
    return (
        <div className="flex items-center  relative flex-col justify-between py-[1rem] md:py-[5rem] px-4 sm:px-10 relative md:mx-32">
            <h1 className="text-2xl sm:text-4xl mb-4 font-semibold text-center md:text-left lg:self-start">
                Advantages Of Dropline Overdraft Limit
            </h1>
            <div className='flex  flex-wrap mt-4 lg:mt-20 justify-between grid grid-rows-6 grid-flow-col gap-4 lg:gap-y-10 gap-x-96 lg:grid-rows-3 '>
                {OVERDRAFT_ADV.map(item => (
                    <div
                        className="flex justify-start items-center"
                        key={item.desc}
                    >
                        <div className='mr-2 md:mr-5 w-10 h-10 md:w-[50px] md:h-[50px] p-2 md:p-4 flex items-center justify-center bg-gradient-to-r from-[#1E5EF3] to-[#134FDA] rounded-lg'>
                            <Image src={item.img} alt='⚪' width={25} height={25} className="scale-75 md:scale-100" />
                        </div>
                        <p className="text-base text-left font-medium sm:text-lg">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
