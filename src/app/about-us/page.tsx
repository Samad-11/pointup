import React from 'react'
import Hero from './components/Hero'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import JoinNow from './components/JoinNow'
import Section1Table from './components/Section1Table'

const AboutPage = () => {
    return (
        <main className='min-h-screen'>
            <Hero />
            <Section1Table />
            {/* <Section1 /> */}
            <Section2 />
            <JoinNow />
        </main>
    )
}

export default AboutPage