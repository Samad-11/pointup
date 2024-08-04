import React from 'react'
import Hero from './components/Hero'
import JoinNow from './components/JoinNow'
import WeCater from './components/WeCater'
import HowWeHelp from './components/HowWeHelp'
import Container from '@/components/Container'
import { Metadata } from 'next'


export const metadata: Metadata = {
    title: "About Us"
}

const AboutPage = () => {
    return (
        <main className='min-h-screen'>
            <Hero />
            <Container>
                <WeCater />
                <HowWeHelp />
            </Container>
            <JoinNow />
        </main>
    )
}

export default AboutPage