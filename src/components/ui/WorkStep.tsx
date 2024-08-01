import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { PiArrowArcLeftLight, PiArrowArcRightLight } from 'react-icons/pi'

import { isEven } from '@/utils/helpers'
import _1img from '@/../public/images/howWeDo/many-cards.jpeg'
import _2img from '@/../public/images/howWeDo/reward.jpeg'
import _3img from '@/../public/images/howWeDo/analyse.jpg'
import _4img from '@/../public/images/howWeDo/plane-cards.jpg'
import _5img from '@/../public/images/howWeDo/vacation.jpg'
import _6img from "@/../public/images/howWeDo/more.jpg"


const WorkStep = () => {
    const stepsContent = [
        {
            title: "Select the right credit card",
            description:
                "With 100’s of cards in Indian market, which card gives you the maximum reward points - is a tricky question. With our in-depth analysis, we guide you to select the right card basis your needs (cash back / vouchers / hotels / airlines / bill payment).",
            image: _1img
        },
        {
            title: "We guide you with maximising your reward points",
            description:
                "Reward points can be maximised by hitting the milestone benefits, using reward multiplier schemes, transferring points to partner hotels / airlines during offer period. We constantly guide - what action is to be taken when - so that you can just on spending!",
            image: _2img
        },
        {
            title: "⁠We assist you in transferring points to partner hotels / airlines",
            description:
                "Transferring points required multiple steps and great timing so as to extract out the maximum reward points upon transfer. We help you creating accounts with partner hotels / airlines and also assist you in transferring points when the right time comes.",
            image: _3img
        },
        {
            title: "⁠We assist you in redeeming the points for hotel / airline booking",
            description:
                "When you are ready for your vacation - we help you redeem your points for payment of hotels / flights. We are at your service till the bookings are not completed. So you just spend and reach the airport for your travel!!   ",
            image: _4img
        },
        {
            title: "⁠Hey - you’ve earned yourself free hotel / flight! Enjoy your free vacation :)",
            description:
                "Hey - you have reached your travel location. Why not click some great pics and tag us!! We’ll love to see you enjoy your free vacation",
            image: _5img
        },
        {
            title: "Wait Wait Wait",
            description:
                "Not a travel fan! Don't worry we wont stop only at Travel. We'll help you to extracting the most from your credit card for petrol savings / online shopping / vouchers & many more ....",
            image: _6img
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
        gap-2
        
        ">
            {
                isEven(sno) ?
                    <>
                        <div className='flex-1  flex flex-col items-end z-20 relative '>
                            <div className='sm:hidden absolute -z-10 -bottom-80  
                             w-full h-72'>
                                <Image src={image} alt='test' className='object-cover' fill></Image>
                            </div>

                            <h4 className='font-bold  z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 tracking-wide text-2xl 
                            
                            lg:text-5xl
                            md:4xl
                            sm:3xl
                            pb-5 text-left font-poppins'>
                                <span className='lg:text-6xl
                                md:text-5xl
                                sm:text-4xl
                                text-3xl
                                '>{sno}.</span>
                                {title}
                            </h4>
                            <p className='text-gray-300
                lg:text-lg
                
                sm:text-sm font-semibold
                text-xs
                font-fauna
                '>{description}</p>
                            <div className='justify-self-end self-end max-sm:hidden'>

                                <PiArrowArcLeftLight fill='white'
                                    className='text-9xl rotate-180'
                                />
                            </div>
                        </div>
                        <div className="flex-1 flex  justify-center items-center max-sm:hidden
                        h-96
                        relative
                        ">
                            <Image src={image} alt='test' fill className='object-cover'></Image>
                        </div>
                    </>
                    :
                    <>

                        <div className="flex-1 flex  justify-center items-center max-sm:hidden
                        h-96
                        relative
                        ">
                            <Image src={image} alt='test' fill className='object-cover'></Image>
                        </div>
                        <div className='flex-1  flex flex-col items-end  z-20 relative'>
                            <div className='sm:hidden absolute -z-10 -bottom-80 
                             w-full h-72'>
                                <Image src={image} alt='test' className='object-cover' fill></Image>
                            </div>
                            <h4 className='font-bold  z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 tracking-wide text-2xl 
                            
                            lg:text-5xl
                            md:4xl
                            sm:3xl
                            pb-5 text-left font-poppins'>
                                <span className='lg:text-6xl
                                md:text-5xl
                                sm:text-4xl
                                                                text-3xl

                                '>{sno}.</span>
                                {title}
                            </h4>
                            <p className='text-gray-300
                lg:text-lg
                
                sm:text-sm font-semibold
                text-xs
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