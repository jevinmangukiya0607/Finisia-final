
import Image from 'next/image';
import { PROFESSIONAL_FEATURE } from 'constants/Professionalfeature';

export default function ProfessionalFeature() {
  return (
      <div className="flex items-center justify-evenly ">
        {PROFESSIONAL_FEATURE.map(item => (
          <div
            className="flex justify-evenly items-center"
            key={item.desc}
          >
            <div className='pr-5'>
              <Image src={item.img} alt='⚪' width={24} height={24} />
            </div>
            <p className="text-sm text-left font-medium sm:text-lg">{item.desc}</p>
          </div>
        ))}
      </div>
  );
}
