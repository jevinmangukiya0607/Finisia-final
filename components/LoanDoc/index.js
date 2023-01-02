
import Image from 'next/image';
import { LoanDOC } from 'constants/Loandoc';

export default function LoanDoc() {
  return (
    <div className="flex items-center flex-col relative md:flex-row justify-between py-[1rem] md:py-[5rem] px-4 sm:px-10 relative md:mx-32">
      <div className="my-4 md:my-0 md:mt-0 scale-70 md:scale-100 w-1/2 flex items-center justify-center">
        <Image
          src="/required-doc.svg"
          alt="Required Documents"
          width={339}
          height={330}
        />
      </div>
      <div className="flex flex-col w-full md:w-1/2 items-left justify-center max-w-sm lg:max-w-xl">
        <h1 className="loantitle text-2xl sm:text-4xl mb-4 font-semibold text-center md:text-left lg:self-start ">
          What are the documents required for personal loan?
        </h1>
        {LoanDOC.map(item => (
          <div
            className="flex items-center p-5 rounded-xl max-w-xl m-4 ml-0 bg-[#F8F8F8] hover:bg-black hover:text-white"
            key={item.id}
          >
            <div className='mr-5 py-2 px-5 rounded-lg text-white text-3xl bg-gradient-to-r from-[#1E5EF3] to-[#134FDA] flex items-center justify-center '>
              {item.id}
            </div>
            <p className="text-sm text-left font-medium sm:text-lg">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
