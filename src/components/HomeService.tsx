'use client'
import React from 'react'
import { HoverEffect } from './ui/CardHover'
import { GoArrowDownRight } from 'react-icons/go'
import { RiCustomerServiceLine } from 'react-icons/ri'
import ApplyButton from './ui/ApplyButton'

const HomeService = () => {
    return (
        <div className='blackGradient2 min-h-screen '>
            <div className='max-w-6xl mx-auto max-sm:px-4 max-sm:pb-10 '>
                <h3 className='text-4xl sm:text-5xl flex items-center font-bold z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pt-5 pb-8 
                '>
                    Services we are providing
                    <GoArrowDownRight fill='white' className='text-4xl sm:text-5xl font-bold z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 ' />
                </h3>
                <HoverEffect items={items} />
                <div className='pt-10 flex justify-end '>
                    <ApplyButton buttonText={"More"} />
                </div>
            </div>
        </div>
    )
}

export default HomeService

const items = [
    {
        title: "Higher Reward",
        description: "service description: text which describe the service..",
        link: "#",
        icon: <RiCustomerServiceLine />
    },
    {
        title: "Credit Cards Suggestion",
        description: "service description: text which describe the service..",
        link: "#",
        icon: <RiCustomerServiceLine />

    },
    {
        title: "Quick Response",
        description: "service description: text which describe the service..",
        link: "#",
        icon: <RiCustomerServiceLine />

    },
    {
        title: "Timely suggestions",
        description: "service description: text which describe the service..",
        link: "#",
        icon: <RiCustomerServiceLine />

    },
    {
        title: "Live tracking",
        description: "service description: text which describe the service..",
        link: "#",
        icon: <RiCustomerServiceLine />

    },
    {
        title: "24/7 customer support",
        description: "service description: text which describe the service..",
        link: "#",
        icon: <RiCustomerServiceLine />

    },
]