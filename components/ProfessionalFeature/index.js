
import Image from 'next/image';
import { PROFESSIONAL_FEATURE } from 'constants/Professionalfeature';

export default function ProfessionalFeature() {
  return (
    <div className="flex mt-0 md:mt-4 flex-col lg:flex-row items-start lg:items-center justify-evenly">
      {PROFESSIONAL_FEATURE.map(item => (
        <div
          className="flex mt-4 mr-8 lg:mt-0 justify-evenly items-center"
          key={item.desc}
        >
          <div className='pr-2'>
            <Image src={item.img} alt='⚪' width={20} height={20} className="fill-black"   />
          </div>
          <p className="text-sm text-left font-medium sm:text-base">{item.desc}</p>
        </div>
      ))}
    </div>
);
}


