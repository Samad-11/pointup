'use client'

import { useEffect, useState } from "react"

const GoToServiceButton = () => {
    const [service, setService] = useState<HTMLElement | null>(null)
    useEffect(() => {
        setService(document.getElementById("home-service-section"))


    }, [])


    return (
        <button
            onClick={() => {
                if (service) {
                    service.scrollIntoView({ behavior: "smooth" });
                }
            }}
        >Our Services</button>
    )
}

export default GoToServiceButton