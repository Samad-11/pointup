import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

const ApplyButton = ({ buttonText }: { buttonText: String }) => {
    return (
        <button className="border font-medium relative border-white/[0.2] text-white px-10 py-1 rounded-full flex justify-center items-center gap-3">
            <span>{buttonText}</span>
            <span><FaLongArrowAltRight size={26} /></span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-[#d1ab38] to-transparent  h-px" />
        </button>
    )
}

export default ApplyButton