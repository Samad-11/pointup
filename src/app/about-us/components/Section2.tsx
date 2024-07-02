import FlipCard from '@/components/ui/FlipCard'
import Header from '@/components/ui/Header'
import React from 'react'

const Section2 = () => {
    const howWeHelp = [
        {
            title: "AI-powered Optimization",
            description: "Our intelligent platform analyzes your spending habits and credit card rewards programs to identify the best ways to maximize your points."
        },
        {
            title: "Personalized Recommendations",
            description: "We don't offer generic advice. Point Up suggests the right cards for your spending patterns and helps you unlock hidden bonus categories."
        },
        {
            title: "Effortless Tracking",
            description: "Say goodbye to manual tracking! Point Up keeps a watchful eye on your points balance across all your cards, ensuring you never lose sight of your rewards potential."
        },
        {
            title: "Monetization Made Easy",
            description: "We show you how to turn your points into real value. Whether you want statement credits, dream vacations, or the latest gadgets, Point Up helps you find the most profitable redemption options."
        },
    ]
    return (
        <div className='sm:px-10 px-5 py-10 min-h-screen'>
            <div className='bg-gradient-to-tr from-orange-700  to-transparent max-w-5xl mx-auto 
            sm:px-14
            px-5
            rounded-t-3xl
            pb-10
            min-h-screen
            pt-10'>

                <Header classname='sm:text-3xl text-lg'>
                    Here&apos;s how Point Up helps you win the rewards game
                </Header>
                <div className='grid grid-cols-3 gap-4 grid-rows-3 min-h-[40rem]'>
                    <FlipCard frontText={howWeHelp[0].title} backText={howWeHelp[0].description}
                        className="col-span-2 row-span-2 text-3xl" />
                    <FlipCard frontText={howWeHelp[1].title} backText={howWeHelp[1].description}
                        className="col-span-1 row-span-3 text-2xl px-2" />
                    <FlipCard frontText={howWeHelp[2].title} backText={howWeHelp[2].description}
                        className="col-span-1 row-span-1 px-1 text-xs" />
                    <FlipCard frontText={howWeHelp[3].title} backText={howWeHelp[3].description}
                        className="col-span-1 row-span-1 px-1 text-xs" />
                </div>
            </div>
        </div>
    )
}

export default Section2