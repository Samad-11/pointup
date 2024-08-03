import React, { HTMLAttributes } from 'react'
import style from '@/components/Styles/HomeTestimonial.module.css'
import { cn } from '@/utils/cn'
import tmpImg from '../../public/images/logo/pointUpLogo.png'
import Image from 'next/image'
import { BackgroundBeams } from './ui/BackgroundBeams'
import Header from './ui/Header'

const HomeTestimonial = () => {
    return (
        <div className='bg-black min-h-[120vh] relative'>
            <div className='max-w-6xl  mx-auto py-8 pt-12 max-sm:px-4 '>
                <Header>
                    What our clients say
                </Header>
                <TestimonialDivs />
            </div>
            <BackgroundBeams />
        </div>
    )
}

export default HomeTestimonial



const TestimonialDivs = () => {
    const testimonials = [{
        designation: "Delhi",
        name: "Mr. Jayant Vohra",
        review: ["Point Up transformed my spending into rewards! ", "I was stuck in the debit card rut for years, unaware of the potential my credit card spending held. Thanks to Point Up, that all changed. Their expert guidance helped me choose the right Amex Platinum Travel Card, and within a year, I was enjoying complimentary stays at Marriott hotels across India. The best part? I didn't even realize how much I was spending until I saw the rewards piling up. It's like finding hidden money in my wallet! The team at Point Up is incredibly knowledgeable and their personalized approach made all the difference. Highly recommend!"],
        divNo: "1",
        black: false
    },
    {
        designation: "Mumbai",
        name: "Himanshu",
        review: ["They went above  ", "They went above and beyond to ensure that all my needs were met and exceeded my expectations in every way. The quality of their work is outstanding, and I would highly recommend them to anyone looking for top-notch service."],
        divNo: "2",
        black: false
    },
    {
        designation: "Delhi",
        name: "Baani Due",
        review: ["From Debit Card to Dream Vacations: My Point Up Journey", "I was a complete credit card newbie, living life on a debit card. Thanks to Point Up, my financial game completely changed. Their expert guidance helped me secure the Amex Platinum Travel Card, which I never thought was possible. Within a year, I was enjoying a luxurious 3-night stay in Sri Lanka, all expenses paid with my earned rewards! The best part? I didn't have to worry about a thing, as Point Up held my hand throughout the process. It's like having a personal financial advisor who actually cares!"],
        divNo: "3",
        black: false
    },
    {
        designation: "Gurgaon",
        name: "Rakesh Behl, CFO MNC",
        review: ["8 Free Flights on One Card!", " As a frequent Delhi-Mumbai flyer for work, your Vistara card tip was gold! Earned 8 free flights using company-reimbursed expenses. Thanks for the amazing advice!"],
        divNo: "4",
        black: false
    },
    {
        designation: "Delhi",
        name: "Raman Arora",
        review: ["From Frequent Flyer to Points Master with Point Up", "As a busy CEO, juggling travel and business demands can be overwhelming. I used to simply accumulate airline miles without a clear strategy. Point Up changed the game for me. Their expert guidance helped me optimize my spending through the SBI Air India card, earning enough points for two complimentary business class tickets to the US. Their insights were invaluable, and I'm already looking forward to my next trip, courtesy of my well-managed points."],
        divNo: "5",
        black: false
    },
    ]
    return (

        <div className='outerDiv '>
            <div className="innerdiv  mx-auto">
                {
                    testimonials.map(({ black, divNo, designation, name, review }, indx) => (
                        <TestimonialDiv key={indx} black={black} divNo={divNo} designation={designation} name={name} review={review} />
                    ))
                }
            </div>
        </div>
    )
}

const TestimonialDiv = ({ name, designation, review, divNo, black }: { divNo: string, black: boolean, name: string, designation: string, review: string[] }) => {
    return (
        <div className={`eachdiv div${divNo} hover:scale-105 transition-transform cursor-default`}>
            <div className="userdetails">
                <div className="imgbox">
                    <Image src={tmpImg} alt='hi' className='img' />
                </div>
                <div className="detbox">
                    <p className={`name ${black && "dark"}`}>{name}</p>
                    <p className={`designation font-fauna ${black && "dark"}`}>{designation}</p>
                </div>
            </div>
            <div className={`review ${black && 'dark'}`}>
                <h4>{review[0]}</h4>
                <p className='font-fauna'>“ {review[1]} ”</p>
            </div>
        </div>
    )
}