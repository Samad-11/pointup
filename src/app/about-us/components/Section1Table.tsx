import Header from '@/components/ui/Header'
import React from 'react'
import { GridSection1 } from './GridSection1'

const Section1Table = () => {
    return (
        <div>
            <Header classname='pt-10  '>
                <div className='w-fit space-y-3 mx-auto'>
                    <p >We Cater to everyone</p>
                    <div className='p-[2px] w-full bg-white rounded-full'></div>
                </div>
            </Header>
            <GridSection1 />
        </div>
    )
}

export default Section1Table