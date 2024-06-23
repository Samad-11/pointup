import React from 'react'
import ApplyButton from './ui/ApplyButton'

const ParallaxBG = () => {
    return (

        <div className="hero min-h-screen  md:bg-fixed" style={{ backgroundImage: 'url(images/bgImages/b1.jpg)' }}>
            <div className="hero-overlay bg-opacity-90 "></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-lg">
                    <h1 className="mb-5 text-5xl font-bold">Unlock the limitless possibilities</h1>
                    <p className="mb-5 font-fauna">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis fuga corrupti at commodi ducimus necessitatibus architecto laboriosam reiciendis maiores dolorem!</p>
                    <div className='flex justify-center items-center'>
                        <ApplyButton buttonText={"Apply Now"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ParallaxBG