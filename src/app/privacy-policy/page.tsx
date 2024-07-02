import Header from '@/components/ui/Header'
import React from 'react'
import Policies from './Policies'

const PrivacyPolicyPage = () => {
    return (
        <div className='min-h-screen px-5'>
            <div className='max-w-5xl mx-auto pt-40'>
                <Header>
                    Privacy Policy
                </Header>
                <div className='space-y-10 text-primary pb-10'>
                    <p>Last updated on March 21st, 2023</p>
                    <p>We at Multiply (“the Company/Multiply/We/Us”) are committed to protecting the privacy and security of your personal information. Your privacy is important to us and maintaining your trust is paramount.
                    </p>
                    <p>This Privacy Policy explains how we collect, use, process and disclose information about you. By using our website/app, you consent to the terms of our privacy policy (“Privacy Policy”) in addition to our Terms of Use. We encourage you to read this Privacy Policy regarding the collection, use, and disclosure of your information from time to time to keep yourself updated with the changes & updated that we make to this Policy.
                        This Privacy Policy describes our privacy practices for all websites/apps, products and services that are linked to it. However, this policy does not apply to those affiliates and partners that have their own privacy policy. In such situations, we recommend that you read the privacy policy on the applicable site. Any capitalized terms not defined hereunder shall hold the same definition as provided under the Terms of Use.                    </p>
                </div>
                <Policies />
            </div>
        </div>
    )
}

export default PrivacyPolicyPage