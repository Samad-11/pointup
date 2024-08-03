'use client'

import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const GoToServiceButton = () => {
    const pathname = usePathname()
    const { push } = useRouter()
    const [service, setService] = useState<HTMLElement | null>(null)
    useEffect(() => {

        setService(document.getElementById("home-service-section"))


    }, [])


    return (
        <button
            onClick={() => {
                if (pathname !== '/') {
                    push('/')
                }
                if (service) {
                    service.scrollIntoView({ behavior: "smooth" });
                }
            }}
        >Our Services</button>
    )
}

export default GoToServiceButton