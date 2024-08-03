'use client'
import React from 'react'
import { HoverEffect } from './ui/CardHover'
import { GoArrowDownRight } from 'react-icons/go'
import { RiCustomerServiceLine } from 'react-icons/ri'
import ApplyButton from './ui/ApplyButton'
import Header from './ui/Header'
import { IconCalendarDue, IconCircleDashedCheck, IconCreditCardPay, IconCrosshair } from '@tabler/icons-react'
import { GiProgression } from 'react-icons/gi'

const HomeService = () => {
    return (
        <div id='services' className='blackGradient2 min-h-screen '>
            <div className='max-w-6xl mx-auto max-sm:px-4 max-sm:pb-10 '>
                <Header>
                    <span className='flex'>
                        Services we are providing
                        <GoArrowDownRight fill='white' className='text-4xl sm:text-5xl font-bold z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 ' />
                    </span>
                </Header>
                <HoverEffect items={items} />
                <div className='pt-10 flex justify-end '>
                    <ApplyButton buttonText={"Join Now"} />
                </div>
            </div>
        </div>
    )
}

export default HomeService

const items = [
    {
        title: "Find your perfect card",
        description: "Point Up guides you to the perfect card for your lifestyle by maximizing rewards and make every swipe count",
        link: "#",
        icon: <IconCircleDashedCheck />
    },
    {
        title: "Maximize credit card rewards!",
        description: "We help you unlock hidden points, choose the right cards, and turn your spending into rewards.",
        link: "#",
        icon: <GiProgression />

    },
    {
        title: "Instant Credit Card Advice",
        description: "Our AI-powered chatbot helps you picking the right card to max rewards and personalized advice at your fingertips.",
        link: "#",
        icon: <RiCustomerServiceLine />

    },
    {
        title: "One-Stop Credit Card Command Center!",
        description: "From card selection to maximizing rewards, and beyond, we're your go-to credit card experts. Enjoy personalized advice, masterclasses, and ongoing support – all in one place!",
        link: "#",
        icon: <IconCreditCardPay />

    },
    {
        title: "Never Miss a Deadline Again!",
        description: "We'll remind you about due dates, reward point expiry, and more to avoid late fees or missed opportunities!",
        link: "#",
        icon: <IconCalendarDue />

    },
    {
        title: "Personalized Advice",
        description: "Our experts analyze your spending habits, credit history, and goals to create a customized plan just for you. ",
        link: "#",
        icon: <IconCrosshair />

    },
]