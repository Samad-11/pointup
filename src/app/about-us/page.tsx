import React from 'react'
import Hero from './components/Hero'
import JoinNow from './components/JoinNow'
import WeCater from './components/WeCater'
import HowWeHelp from './components/HowWeHelp'
import Container from '@/components/Container'
import { Metadata } from 'next'
import { AboutPage as AboutPageSchema, WithContext } from 'schema-dts'



export const metadata: Metadata = {
    title: "About Us"
}

const AboutPage = () => {

    const jsonLd: WithContext<AboutPageSchema> = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "@id": "About Page",
        name: "Points Up",
        description: "We provide high-quality food and beverages to help individuals and businesses connect with their customers",
        image: "/images/about-us.jpg",
        sameAs: [
            "https://www.facebook.com/pointsup-110485422285819/",
            "https://www.instagram.com/pointsup_110485422285819/",
            "https://twitter.com/PointsUp_110485422285819/",
        ],
        mainEntityOfPage: "https://pointsup.in/about",
        creator: {
            "@type": "Person",
            name: "Abdus Samad",
        },
    }

    return (
        <main className='min-h-screen'>
            <Hero />
            <Container>
                <WeCater />
                <HowWeHelp />
            </Container>
            <JoinNow />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        </main>
    )
}

export default AboutPage