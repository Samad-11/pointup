import Header from '@/components/ui/Header'
import Image from 'next/image'
import React from 'react'
import { blogs } from '@/utils/staticBlogs'
import { Metadata } from 'next'


export async function generateStaticParams() {
    const data = blogs
    return data.map((item) => ({
        slug: item.title + "-" + item.description,
    }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const slug = params.slug
    const plainText = decodeURIComponent(slug)
    const blog = blogs.find((blog) => plainText === (`${blog.title}-${blog.description}`))
    if (!blog) return {}
    return {
        title: blog.title,
        description: blog.description,
        openGraph: {
            images: [`${process.env.BASE_URL}/${blog.image.src}`]
        }
    }
}


const BlogDetailPage = ({ params }: { params: { slug: string } }) => {
    const { slug } = params
    const plainText = decodeURIComponent(slug)
    const blog = blogs.find((blog) => plainText === (`${blog.title}-${blog.description}`))
    if (!blog) {
        return <div>Blog not found</div>
    }

    return (
        <div className='min-h-screen
        sm:px-10
        px-5
        max-w-6xl
        mx-auto
        pb-10
        '>

            <div className='pt-40'>
                <Header>
                    {blog.title}: {blog.description}
                </Header>
            </div>
            <div className='grid grid-cols-1 h-full w-full gap-y-14 text-white'>


                <div className='bg-red-500
                w-full
                relative
                rounded-xl
                h-[30rem]
                self-start
                '>
                    <Image
                        className=' object-cover rounded-xl object-center' fill
                        src={blog.image}
                        alt='amex travel card'
                    />
                </div>
                {blog.content()}
            </div>
        </div>
    )
}





export default BlogDetailPage