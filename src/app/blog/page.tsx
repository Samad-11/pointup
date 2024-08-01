import React from 'react'
import { BlogSection } from './BlogSection'
import Hero from './Hero'
import Header from '@/components/ui/Header'

const page = () => {
    return (
        <div className='relative'>
            <Hero />
            <div className='max-w-5xl mx-auto py-10 
            sm:px-3 px-2
            '>
                <Header>
                    Latest Blog Posts
                </Header>
                <BlogSection />
            </div>
        </div>

    )
}

export default page