import Container from '@/components/Container'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='h-screen flex justify-center items-center text-white'>
            <Container>

                <h2 className='text-2xl font-bold'>Not Found</h2>
                <p className='font-mono'>Could not find requested resource</p>
                <Link href="/" className='text-blue-400'>Return Home</Link>
            </Container>
        </div>
    )
}