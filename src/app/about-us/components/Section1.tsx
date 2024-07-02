import Header from '@/components/ui/Header'
import { TextGenerateEffect } from '@/components/ui/TextGeneration'
import React from 'react'

const Section1 = () => {
    const categories = [
        {
            name: "Gen-Z",
            description: "Gamify your finances and unlock hidden rewards potential with our user-friendly app. No finance jargon, just clear strategies to make your credit card work for you. "
        },
        {
            name: "Millennials",
            description: "Tired of juggling multiple cards and missing out on bonus points? Point Up keeps you organized, tracks your rewards across cards, and helps you choose the best option for every purchase."
        },
        {
            name: "Gen-X",
            description: "Evolving rewards programs can be confusing. Point Up simplifies everything, keeping you up-to-date on the latest changes and ensuring you never miss out on valuable earning opportunities."
        },

    ]
    return (
        <div className='min-h-screen px-10'>
            <Header classname='pt-10  '>
                <div className='w-fit space-y-3 mx-auto'>
                    <p >We Cater for everyone</p>
                    <div className='p-[2px] w-full bg-white rounded-full'></div>
                </div>
            </Header>
            <div >
                {
                    categories.map((category, indx) => (
                        <Categories description={category.description} name={category.name} key={indx} />
                    ))
                }
            </div>
        </div>
    )
}

const Categories = ({ name, description }: {
    name: string, description: string
}) => {
    return (
        <div
            className='
         mb-20'
        >
            <p className='text text-3xl text-center bg-orange-900 glass rounded-full py-2 text-black font-extrabold mb-14
            max-w-5xl mx-auto
            '>{name}</p>
            <TextGenerateEffect words={description} className='max-w-4xl mx-auto ' />
        </div>
    )
}

export default Section1