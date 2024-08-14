import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Point Up App',
        short_name: 'Point Up',
        description: 'Unlock the Benefits You Deserve with Point Up - Stop missing out on valuable rewards. We help you maximize your credit card points and book amazing travel experiences.',
        start_url: '/',
        display: 'standalone',
        background_color: '#010101',
        theme_color: '#010101',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
        orientation: "portrait",
    }
}