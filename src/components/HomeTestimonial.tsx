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
            <div className='max-w-6xl  mx-auto py-8 pt-12 max-sm:px-4'>
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
        designation: "IT Professor",
        name: "Priya",
        review: ["They went above and beyond to ensure that all my needs were met and exceeded my expectations in every way. The quality ", "They went above and beyond to ensure that all my needs were met and exceeded my expectations in every way. The quality of their work is outstanding, and I would highly went above and beyond to ensure  recommend them to anyone looking for top-notch service. Thank you for making this such a positive experience went above and beyond !"],
        divNo: "1",
        black: false
    },
    {
        designation: "IT Professor",
        name: "Aniket",
        review: ["They went above and beyond to ensure that", "They went above and beyond to ensure that all my needs were met and exceeded my expectations in every way. The quality of their work"],
        divNo: "2",
        black: false
    },
    {
        designation: "IT Professor",
        name: "Himanshu",
        review: ["They went above and beyond to ensure that all my needs were met and exceeded my expectations in every way. The quality ", "They went above and beyond to ensure that all my needs were met and exceeded my expectations in every way. The quality of their work is outstanding, and I would highly recommend them to anyone looking for top-notch service. Thank you for making this such a positive experience!"],
        divNo: "3",
        black: false
    },
    {
        designation: "IT Professor",
        name: "Shibani",
        review: ["exceeded my expectations in every way. The quality ", " and I would highly recommend them to anyone looking for top-notch service. Thank you for making this such a positive experience!"],
        divNo: "4",
        black: false
    },
    {
        designation: "IT Professor",
        name: "Shibani",
        review: ["They went above and beyond to ensure that all my needs were met and exceeded my expectations in every way. The quality ", "They went above and beyond to ensure that all my needs were met and exceeded my expectations in every way. The quality of their work is outstanding, and I would highly recommend them to anyone looking for top-notch service. Thank you for making this such a positive experience!"],
        divNo: "5",
        black: false
    },
    ]
    return (

        <div className='outerDiv'>
            <div className="innerdiv">
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