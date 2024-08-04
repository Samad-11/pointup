import Header from '@/components/ui/Header'
import React from 'react'
import Terms from './AllTerms'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Terms"
}


const TermPage = () => {
    return (
        <div className='min-h-screen px-5 '>
            <div className='max-w-5xl mx-auto pt-40'>
                <Header classname=''>
                    General Terms of Use
                </Header>
                <div className='space-y-10 text-primary pb-10'>
                    <p>Welcome to www.Point Up.club(“Website”) owned and operated by (‘’Point Up’’), a company incorporated under the provisions of the Companies Act, 2013, 1956 and having its registered office New DelhI.</p>
                    <p>‍This document/agreement/understanding is a computer-generated electronic record published in terms of Rule 3 of the Information Technology (Intermediaries Guidelines) Rules, 2011 read with Information Technology Act, 2000 and does not require any physical or digital signatures.
                    </p>
                    <p>Before you may use the Website, you must read all of these General Terms of Use (“Terms”) herein and the Privacy Policy provided on the Website. By using Point Up&apos;s products, software, services, and the Website or by availing any products offered by Point Up’s partner institutions or third parties (“Services”), you understand and agree that Point Up will treat your use of the Services as acceptance of these Terms from such point of usage. You may not use the Services if you do not accept the Terms. If you do not agree to be bound by these Terms and the Privacy Policy, you may not use the Website in any way. It is strongly recommended for you to return to this page periodically to review the most current version of the Terms in force. Point Up reserves the right at any time, at its sole discretion, to change or otherwise modify the Terms without prior notice, and your continued access or use of this Website signifies your assent/ratification of the updated or modified Terms. If you object to these Terms or any subsequent modifications to these Terms in any way, your only recourse is to immediately terminate use of the Website. We may require you to agree to additional terms (if any) between you and Point Up in connection with specific services that you may avail from time to time. The service provided by Point Up through Website is available and appropriate only for use in India.</p>
                </div>
                <Terms />
            </div>
        </div>
    )
}

export default TermPage