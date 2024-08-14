'use client'
import { WHATSAPP_MESSAGE, WHATSAPP_NUMBER } from '@/lib/constants'
import Link from 'next/link'
import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import {useRouter} from 'next/navigation'

const ApplyButton = ({ buttonText }: { buttonText: String }) => {
  const {push} = useRouter()
    return (
        <a
           href=`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`
            
            className="border font-medium relative border-white/[0.2] text-white px-10 py-1 rounded-full flex justify-center items-center gap-3 max-w-full">
            <span className='text-nowrap max-sm:text-xs'>{buttonText}</span>
            <span><FaLongArrowAltRight className='text-2xl' /></span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#d1ab38] to-transparent  h-px" />
        </a>
    )
}

export default ApplyButton