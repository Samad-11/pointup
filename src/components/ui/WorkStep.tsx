import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { PiArrowArcLeftLight, PiArrowArcRightLight } from 'react-icons/pi'
import test1 from '../../../public/images/heroImage/dd.png'
import test2 from '../../../public/images/heroImage/6081538.png'
import { isEven } from '@/utils/helpers'


const WorkStep = () => {
    const stepsContent = [
        {
            title: "Select the right credit card",
            description:
                "With 100’s of cards in Indian market, which card gives you the maximum reward points - is a tricky question. With our in-depth analysis, we guide you to select the right card basis your needs (cash back / vouchers / hotels / airlines / bill payment).",
            image: test1
        },
        {
            title: "We guide you with maximising your reward points",
            description:
                "Reward points can be maximised by hitting the milestone benefits, using reward multiplier schemes, transferring points to partner hotels / airlines during offer period. We constantly guide - what action is to be taken when - so that you can just on spending!",
            image: test2
        },
        {
            title: "⁠We assist you in transferring points to partner hotels / airlines",
            description:
                "Transferring points required multiple steps and great timing so as to extract out the maximum reward points upon transfer. We help you creating accounts with partner hotels / airlines and also assist you in transferring points when the right time comes.",
            image: test1
        },
        {
            title: "⁠We assist you in redeeming the points for hotel / airline booking",
            description:
                "When u r ready for your vacation - we help you redeem your points for payment of hotels / flights. We are at your service till the bookings are not completed. So you just spend and reach the airport for your travel!!   ",
            image: test2
        },
        {
            title: "⁠Hey - you’ve earned yourself free hotel / flight! Enjoy your free vacation :)",
            description:
                "Hey - you have reached your travel location. Why not click some great pics and tag us!! We’ll love to see you enjoy your free vacation😊",
            image: test1
        },
    ]
    return (
        <div className="h-[50rem] sm:h-[30rem]  w-full carousel carousel-vertical carousel-start rounded-box">
            {
                stepsContent.map(({ description, image, title }, indx) => (
                    <Step key={indx} description={description} title={title} image={image} sno={indx + 1} />
                ))
            }
        </div>
    )
}

const Step = ({ title, description, image, sno }: { title: string, description: string, image: StaticImageData, sno: number }) => {
    return (
        <div className="carousel-item h-full
        px-5
        flex 
        max-sm:items-start
        items-center
        
        ">
            {
                isEven(sno) ?
                    <>
                        <div className='flex-1  flex flex-col items-end z-20 relative'>
                            <Image src={image} alt='test' width={400} height={400} className='sm:hidden absolute -z-10 top-52 
                             size-72
                            '></Image>

                            <h4 className='font-bold  z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 tracking-wide text-2xl sm:text-5xl pb-5 text-left font-poppins'>
                                <span className='text-6xl'>{sno}.</span>
                                {title}
                            </h4>
                            <p className='text-gray-300
                sm:text-lg text-sm font-semibold 
                font-fauna
                '>{description}</p>
                            <div className='justify-self-end self-end max-sm:hidden'>

                                <PiArrowArcLeftLight fill='white'
                                    className='text-9xl rotate-180'
                                />
                            </div>
                        </div>
                        <div className="flex-1 flex  justify-center items-center max-sm:hidden">
                            <Image src={image} alt='test' width={400} height={400}></Image>
                        </div>
                    </>
                    :
                    <>

                        <div className="flex-1 flex  justify-center items-center max-sm:hidden">
                            <Image src={image} alt='test' width={400} height={400}></Image>
                        </div>
                        <div className='flex-1  flex flex-col items-end  z-20 relative'>
                            <Image src={image} alt='test' width={400} height={400} className='sm:hidden absolute -z-10 top-52
                            size-72
                            '></Image>
                            <h4 className='font-bold  z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 tracking-wide text-2xl sm:text-5xl pb-5 text-left font-poppins'>
                                <span className='text-6xl'>{sno}.</span>
                                {title}
                            </h4>
                            <p className='text-gray-300
                sm:text-lg text-sm font-semibold
                font-fauna
                '>{description}</p>
                            <div className='justify-self-end self-start max-sm:hidden'>

                                <PiArrowArcRightLight fill='white'
                                    className='text-9xl rotate-180'
                                />
                            </div>
                        </div>

                    </>
            }
        </div>
    )
}

export default WorkStep