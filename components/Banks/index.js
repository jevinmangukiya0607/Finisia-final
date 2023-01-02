import Image from 'next/image';
import { BANK_IMG } from 'constants/BankImg';


export default function Banks() {
    return (
        <div className='bankcontainer'>
        <section className="slide-option bg-black h-[100px] w-full">

            <div id="infinite" className="highway-slider">
                <div className="container highway-barrier">
                    <ul className="highway-lane">
                        {/* <li className="highway-car"><span className="fab fa-angular"></span></li>
                        <li className="highway-car"><span className="fab fa-js"></span></li>
                        <li className="highway-car"><span className="fab fa-node"></span></li>
                        <li className="highway-car"><span className="fab fa-html5"></span></li>
                        <li className="highway-car"><span className="fab fa-less"></span></li>
                        <li className="highway-car"><span className="fab fa-gulp"></span></li>
                        <li className="highway-car"><span className="fab fa-stack-overflow"></span></li>
                        <li className="highway-car"><span className="fab fa-codepen"></span></li>
                        <li className="highway-car"><span className="fab fa-aws"></span></li>
                        <li className="highway-car"><span className="fab fa-gitlab"></span></li>
                        <li className="highway-car"><span className="fab fa-chrome"></span></li>
                        <li className="highway-car"><span className="fab fa-google"></span></li>

                        <li className="highway-car"><span className="fab fa-angular"></span></li>
                        <li className="highway-car"><span className="fab fa-js"></span></li>
                        <li className="highway-car"><span className="fab fa-node"></span></li>
                        <li className="highway-car"><span className="fab fa-html5"></span></li>
                        <li className="highway-car"><span className="fab fa-less"></span></li>
                        <li className="highway-car"><span className="fab fa-gulp"></span></li>
                        <li className="highway-car"><span className="fab fa-stack-overflow"></span></li>
                        <li className="highway-car"><span className="fab fa-codepen"></span></li>
                        <li className="highway-car"><span className="fab fa-aws"></span></li>
                        <li className="highway-car"><span className="fab fa-gitlab"></span></li>
                        <li className="highway-car"><span className="fab fa-chrome"></span></li>
                        <li className="highway-car"><span className="fab fa-google"></span></li>
 */}

                        {BANK_IMG.map(item => (
                            <li
                                className="highway-car flex items-center"
                                key={item.img}
                            >
                                <Image
                                    src={item.img}
                                    width={130}
                                    height={75}
                                    alt={item.title}
                                    />
                            </li>
                        ))}
                        {BANK_IMG.map(item => (
                            <li
                                className="highway-car flex items-center"
                                key={item.img}
                            >
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    width={130}
                                    height={75}
                                />
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </section>
        </div>

    )
}