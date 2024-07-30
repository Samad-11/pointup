import Header from '@/components/ui/Header'
import React from 'react'
import { FaFacebook, FaInstagram, FaPhone, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'
import { BottomGradient, ContactForm } from './ContactForm'
import { FiPhone } from 'react-icons/fi'
import { CiMail } from 'react-icons/ci'
import Link from 'next/link'
import { FaXTwitter } from 'react-icons/fa6'

const ContactSection = () => {
    return (
        <section className='min-h-screen blackGradient2 px-10 py-5'>
            <div className="flex flex-row-reverse flex-wrap-reverse">
                <div className='flex-1 border-l p-5'>
                    <div className='flex flex-col text-primary font-poppins text-xl font-bold gap-5 items-start '>
                        <Header classname='pb-10 '>
                            Contact Us
                            <div className="bg-gradient-to-r from-transparent via-[#d1ab38] to-transparent mt-8 h-[1px] w-full" />
                        </Header>
                        {/* <div className='flex  justify-center items-center gap-5 hover:link group'>
                            <FiPhone className='group-hover:text-white' />

                            <Link href={"tel:+919999275769"} className='font-extralight group-hover:font-semibold'>+91 99992 75769</Link>
                        </div> */}
                        <div className='flex  justify-center items-center gap-5 hover:link group '>
                            <FiPhone className='group-hover:text-white' />
                            <Link href={'tel:+919205392989'} className='font-extralight group-hover:font-semibold'>+91 92053 92989</Link>
                        </div>
                        {/* <div className='flex  justify-center items-center gap-5 hover:link group '>
                            <FaWhatsapp className='group-hover:text-white' />
                            <Link target='_blank' href={"https://wa.me/919999275769?text=I'm%20interested%20in%20your%20service"} className='font-extralight group-hover:font-semibold'>+91 99992 75769</Link>
                        </div> */}
                        <div className='flex  justify-center items-center gap-5 hover:link group '>
                            <CiMail className='group-hover:text-white' />
                            <Link target='_blank' href={'mailto:service@pointup.com'} className='font-extralight group-hover:font-semibold'>admin@pointup.com</Link>
                        </div>

                        <div className='mt-10'>
                            <Header classname='pb-10'>
                                Follow us on
                                <div className="bg-gradient-to-r from-transparent via-[#d1ab38] to-transparent mt-8 h-[1px] w-full" />
                            </Header>
                            <div className='flex justify-center items-start gap-10'>
                                <Link href={''} className='flex flex-col items-center justify-center group w-fit'>
                                    <FaInstagram size={70} className='group-hover:text-pink-700 ' />
                                    <span className='text-sm text-[#d1ab38] opacity-55 group-hover:text-pink-700'>Instagram</span>
                                </Link>
                                <Link href={''} className='flex flex-col items-center justify-center group w-fit'>
                                    <FaFacebook size={70} className='group-hover:text-blue-700 ' />
                                    <span className='text-sm text-[#d1ab38] opacity-55 group-hover:text-blue-700'>Facebook</span>
                                </Link>
                                <Link href={''} className='flex flex-col items-center justify-center group w-fit'>
                                    <FaXTwitter size={70} className='group-hover:text-white' />
                                    <span className='text-sm text-[#d1ab38] opacity-55 group-hover:text-white'>Twitter</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}

export default ContactSection
