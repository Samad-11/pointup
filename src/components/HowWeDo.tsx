import React from 'react'
import ApplyButton from './ui/ApplyButton'
import WorkStep from './ui/WorkStep'
import Header from './ui/Header'

const HowWeDo = () => {

    return (
        <div className="pt-14 blackGradient min-h-screen" id='howWeDo'>
            <div className="max-w-6xl mx-auto max-sm:p-4">
                <Header>
                    How <span className='bg-clip-text text-transparent bg-gradient-to-b from-[#d1ab38] to-neutral-500'>Point Up</span> Works
                </Header>
                <WorkStep />
                <div className='pt-10 sm:pt-16 flex justify-end'>
                    <ApplyButton buttonText={"Join Now"} />
                </div>
            </div>
        </div>
    )
}

export default HowWeDo