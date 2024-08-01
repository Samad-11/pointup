import React from 'react'
import CaterCard from './CaterCard'
import legends from '../../../../public/images/weCaterForAll/legends.jpeg'
import genz from '../../../../public/images/weCaterForAll/genz.jpeg'
import genx from '../../../../public/images/weCaterForAll/genx.jpeg'
import geny from '../../../../public/images/weCaterForAll/geny.jpeg'
import Header from '@/components/ui/Header'

const WeCater = () => {
    return (
        <div className=''>
            <Header classname='pt-10
          
            '>
                <div className='w-fit space-y-3 mx-auto'>
                    <p >We Cater for everyone</p>
                    <div className='p-[2px] w-full bg-white rounded-full'></div>
                </div>
            </Header>
            <div className='max-w-5xl mx-auto  grid
            
            md:grid-cols-4
            sm:grid-cols-2
            grid-cols-1
            sm:gap-4
            gap-2'>

                {
                    cards.map((card, indx) => (
                        <CaterCard key={indx} image={card.image} name={card.name} sno={indx + 1} content={card.content} />
                    ))
                }

            </div>
        </div>
    )
}

export default WeCater

const cards = [
    {
        name: "Legends",
        image: legends,
        ctaText: "Visit",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>
                    You&apos;ve been holding your card for long time now.<br />
                    Its time to max your existing lots of reward points or change the game plan
                </p>
            );
        },
    },
    {
        name: "Gen-X",
        image: genx,

        content: () => {
            return (
                <p>
                    Evolving rewards programs can be confusing. Point Up simplifies everything, keeping you up-to-date on the latest changes and ensuring you never miss out on valuable earning opportunities.
                </p>
            );
        },
    },

    {
        name: "Gen-Y",
        image: geny,

        content: () => {
            return (
                <p>
                    Tired of juggling multiple cards and missing out on bonus points? Point Up keeps you organized, tracks your rewards across cards, and helps you choose the best option for every purchase.
                </p>
            );
        },
    },
    {
        name: "Gen-Z",
        image: genz,
        content: () => {
            return (
                <p>
                    Gamify your finances and unlock hidden rewards potential with our user-friendly app. No finance jargon, just clear strategies to make your credit card work for you.
                </p>
            );
        },
    },
];
