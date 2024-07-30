import Image, { StaticImageData } from 'next/image'
import React from 'react'
import _1Img from '../../public/images/heroImage/dd.png'
import _2Img from '../../public/images/heroImage/6081538.png'
import { StickyScroll } from './ui/StickyCards'
import ApplyButton from './ui/ApplyButton'
import WorkStep from './ui/WorkStep'
import Header from './ui/Header'

const HowWeDo = () => {
    const content = [
        {
            title: "Select the right credit card",
            description:
                "With 100’s of cards in Indian market, which card gives you the maximum reward points - is a tricky question. With our in-depth analysis, we guide you to select the right card basis your needs (cash back / vouchers / hotels / airlines / bill payment).",
            content: <ContentBox img={_1Img} />
        },
        {
            title: "We guide you with maximising your reward points",
            description:
                "Reward points can be maximised by hitting the milestone benefits, using reward multiplier schemes, transferring points to partner hotels / airlines during offer period. We constantly guide - what action is to be taken when - so that you can just on spending!",
            content: <ContentBox img={_2Img} />
        },
        {
            title: "⁠We assist you in transferring points to partner hotels / airlines",
            description:
                "Transferring points required multiple steps and great timing so as to extract out the maximum reward points upon transfer. We help you creating accounts with partner hotels / airlines and also assist you in transferring points when the right time comes.",
            content: <ContentBox img={_1Img} />
        },
        {
            title: "⁠We assist you in redeeming the points for hotel / airline booking",
            description:
                "When u r ready for your vacation - we help you redeem your points for payment of hotels / flights. We are at your service till the bookings are not completed. So you just spend and reach the airport for your travel!!   ",
            content: <ContentBox img={_2Img} />
        },
        {
            title: "⁠Hey - you’ve earned yourself free hotel / flight! Enjoy your free vacation :)",
            description:
                "Hey - you have reached your travel location. Why not click some great pics and tag us!! We’ll love to see you enjoy your free vacation😊",
            content: <ContentBox img={_1Img} />
        },
        {
            title: "Wait Wait Wait",
            description:
                "Not a travel fan! Don't worry we wont stop only at Travel. We'll help you to extracting the most from your credit card for petrol savings / online shopping / vouchers & many more ....",
            content: <ContentBox img={_2Img} />
        },
    ]
    return (
        <div className="pt-14 blackGradient min-h-screen" id='howWeDo'>
            <div className="max-w-6xl mx-auto max-sm:p-4">
                <Header>
                    How <span className='bg-clip-text text-transparent bg-gradient-to-b from-[#d1ab38] to-neutral-500'>Point Up</span> Works
                </Header>
                {/* <StickyScroll content={content} /> */}
                <WorkStep />
                <div className='pt-10 sm:pt-16 flex justify-end'>
                    <ApplyButton buttonText={"Join our journey now"} />
                </div>
            </div>
        </div>
    )
}

const ContentBox = ({ img }: { img: StaticImageData }) => {
    return (
        <div className="h-full w-full relative   flex items-center justify-center text-white">
            <Image
                src={img}
                fill
                className="h-full w-full object-contain"
                alt="linear board demo"
            />
        </div>
    )
}

export default HowWeDo