import React from 'react'

const Container = ({
    children
}: {
    children: React.ReactNode,

}) => {
    return (
        <div className='
        md:px-10
        px-6
        '>
            {children}
        </div>
    )
}

export default Container