import ApplyButton from '@/components/ui/ApplyButton'
import Header from '@/components/ui/Header'
import React from 'react'

const JoinNow = () => {
    return (
        <div className='min-h-[50vh] w-full border pt-20 max-w-5xl mx-auto px-10
        bg-gradient-to-bl from-gray-800 to-black glass
        space-y-10
        
        '>
            <p
                className='text-3xl
                max-sm:text-lg
                text-gray-100 font-semibold'
            >
                Point Up is more than just a rewards tracker,{' '}
                <span className='text-orange-700 font-extrabold bg-gray-800 px-2 py-1 rounded-full'> it&apos;s your credit card rewards guru!</span>
            </p>
            <div className='flex max-sm:flex-col items-center justify-around pt-10 pb-5'>
                <Header
                    classname='sm:text-lg sm:w-1/2 text-lg text-justify'
                >
                    Join the Point Up community and unlock the full potential of your credit cards. Start maximizing your rewards today!
                </Header>
                <ApplyButton buttonText={"Join Now"} />
            </div>
        </div>

    )
}

export default JoinNow
