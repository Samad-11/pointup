import Header from '@/components/ui/Header';
import React from 'react'

interface SubItem {
    title: string;
    description: string[];
}

interface PrivacyPolicyItem {
    mainTitle: string;
    mainDescription: string[];
    sub?: SubItem[];
    number?: number
}

const privacyPolicy: PrivacyPolicyItem[] = [
    {
        mainTitle: "Information we collect",
        mainDescription: [
            "The following information is collected by or on behalf of Point Up",
        ],
        sub: [
            {
                title: "Information You provide us",
                description: [
                    "When you start using the Web Services, we ask you to provide certain information as part of the registration process, and in the course of your interface with the website/app. We will collect this information through various means and in various places through the web Services, including account registration forms, contact us forms, or when you otherwise interact with including at customer support.",
                    "At the time of registration, we ask for the following personal information. Name, Mobile Number, Email, PAN",
                    "Pursuant to the services consumed by You time to time, we may seek additional information including full name, email, address, payment or banking information, and any other governmental identification numbers or documents. You may choose to provide such information if you choose to use these services provided by the website/app."
                ]
            },
            {
                title: "Information created when You use our Website/App",
                description: [
                    "We collect information relating to your use of our website/app through the use of various technologies. This includes transaction details related to your use of our services including the type of services you requested, the payment method and amount and other related transactional and financial information. Further, when you visit our website/app, we may log certain information such as your IP address, browser type, mobile operating system, manufacturer and model of your mobile device, geolocation, preferred language, access time, and time spent. We will also collect information about the pages you view within our sites and other actions you take while visiting our website/app. From time to time, during your use of the Web Services.",
                    "On the Android app, Point Up requires access to additional information such as SMS. Prior to accessing any such information, explicit consent shall be sought from the User. Please note that we only read transactional or promotional SMS and do not open, access or read any personal SMS.",
                    "In case of both Android and iOS apps, we require access to users' emails also.",
                    "The Company’s access to the SMS and email account(s) is authorized through the email provider’s access mechanism. If you permit the Company’s app to track your credit Instruments’ accounts, the app will securely store account details for each of your credit Instruments’ accounts, including your sign-in user name and authorisation tokens for tracked accounts.",
                    "We also maintain some records of Users who contact us for support, for the purpose of responding to such queries and other related activities. However, we do not provide this information to any third party without your permission or utilize the same for any purposes not set out hereunder."
                ]
            },
            {
                title: "Information We Collect from Third Parties",
                description: [
                    "We may, on your consent, request certain third parties to provide information about you to further personalize your experience on our website/app, and provide certain services that cannot be accessed by all users of the website/app.",
                    "We may receive additional information about you, such as information to help detect fraud and safety issues, from third party service providers and/or partners, and combine it with information we have about you. We may receive information about you and your activities through partnerships, or about your experiences and interactions from our partner ad networks."
                ]
            }
        ]
    },
    {
        mainTitle: "How We Use the Information we collect",
        mainDescription: [
            "We may use, store and process personal information to (1) provide, understand, improve and develop the Web Services, (2) create and maintain a trusted and safe environment on Point Up (such as complying with our legal obligations and compliance with our policies) and (3) provide, personalize, measure and improve our products & services.",
            "All the information collected through different channels, allows us to collect statistics about our website/app usage and effectiveness, personalize your experience whilst you are on our website/app, as well as customize our interactions with you and also assist in business development to enhance and expand the scope of the Web Services. The following paragraphs describe in more detail how we use your personal information."
        ],
        sub: [
            {
                title: "Providing, understanding & improving Web/App Services",
                description: [
                    "Any information provided by a User will be used solely for creating and updating your Account and processing your transaction(s) or for any other purposes for which you have granted access to such information to us, based on your interaction with the Point Up website/app.",
                    "All personal information provided by you in our website/app which has been duly received and accepted by us will be used solely for the purpose of processing a transaction on the website/app. To enable such process, we may share information with authorized third parties, for instance, our business partners, financial teams/institutions, or postal/government authorities involved in fulfilment of said transactions, if any. In connection with a transaction, we may also contact you as part of our customer satisfaction surveys or for market research purposes.",
                    "We may use the information collected to perform internal operations necessary to provide our services, including to troubleshoot software bugs and operational problems, to conduct data analysis, testing and research and to monitor and analyze usage and activity trends.",
                    "We process this personal information for these purposes given our legitimate interest in improving the Web Services."
                ]
            },
            {
                title: "Safety, security and resolution of issues",
                description: [
                    "We may use the personal information to create and maintain a safe environment and use the same to detect and prevent fraud, span, abuse, security incidents and other harmful activity. We use the information we collect (including recordings of customer support calls) to assist you when you contact our customer support services to investigate & resolve your queries, monitor and improve our customer support responses. Certain online transactions may involve us calling you. They may also involve online chats. Please be aware that it is our general practice to monitor and, in some cases, record such interactions for staff training or quality assurance purposes or to retain evidence of a particular transaction or interaction. We intend to protect your personal information and to maintain its accuracy as confirmed by you. Point Up implements reasonable physical, administrative, and technical safeguards to help us protect your personal information from unauthorized access, use, and disclosure. For example, we encrypt all sensitive personal information when we transmit such information over the internet.",
                    "We blend security at multiple steps within our products with state-of-the-art technology to ensure our systems maintain strong security measures. The overall data and privacy security design allows us to defend our systems ranging from low hanging issue up to sophisticated attacks."
                ]
            },
            {
                title: "Sharing & Disclosure of data with Third Parties",
                description: [
                    "As required by law, at times we might be required to disclose your personal information including transactional and financial information to relevant authorities. In some cases, when we believe that such disclosure is necessary to protect our rights, or the rights of others, or to comply with a judicial proceeding, court order, or legal process served on our website/app we would share such information pursuant to a lawful request from law enforcement agencies.",
                    "You agree and consent to receive all communications at the mobile number provided, even if this mobile number is registered under DND/NCPR list under TRAI regulations. And for that purpose, you further authorise Company to share/disclose the information to any third party service provider or any affiliates, group companies, their authorised agents or third party service providers.",
                    "We may disclose information that identifies you at an individual level and which we have collected on our website/app, to other affiliate entities and partners that are not acting as our suppliers or business partners. Except as described in this Privacy Policy, we will only do so with your prior consent. For the sake of clarity, Point Up does not sell or lease such information.",
                    "Subject to your express permission to use the information as described herein, the information we have about you, may be used by us for marketing purposes. This consent is purely voluntary, and you may at any time choose not to receive marketing materials from us, by indicating so when we call you, or by contacting us directly. Further, if you want to remove your contact information from all our lists, please send an email request to support@Point Up.club",
                    "Point Up does not deliver third party online advertisements on the website/app but we may advertise our activities and organizational goals on other websites/apps. We may collaborate with other website/app operators as well as network advertisers to do so. We request you to read and understand such concerned third party privacy policies to understand their practices relating to advertising, including what type of information they may collect about your internet usage. Point Up does not provide any information relating to your usage to such website/app operators or network advertisers.",
                    "During your use of the web/app services, you may come across links to third party websites/apps that are not affiliated with Point Up. Point Up is not responsible for the privacy practices or the content of those other websites/apps, or for any acts/ omissions by such third parties in the course of your transaction with them."
                ]
            }
        ]
    },
    {
        mainTitle: "Account Deletion",
        mainDescription: [
            "We provide all our Users an option to request the deletion of all such information related to the specific card/account including but not limited to profile information, card data, transaction details, referrals details, google oauth sessions etc. that we are not required to retain.",
            "In certain circumstances, we may be unable to delete your account, such as if there is any outstanding dispute or unresolved claims pending on your card/account. However, upon resolution of the issue preventing deletion, the information is immediately deleted and can’t be recovered thereafter. Please note that we may retain certain information if necessary, for our own legitimate business interests such as fraud prevention and enhancing users’ safety and security OR to fulfil our legal obligations and compliance.",
            "Users also have the option to request for an account deactivation instead. This will temporarily block user access to Point Up until they send a re-activation request on support@Point Up.club and successfully re-activate their account."
        ]
    },
    {
        mainTitle: "Cookies",
        mainDescription: [
            "We use data collection devices such as “cookies”, etc. on certain parts of the Web to help analyze the Web Services, user interaction with the Web, measure promotional effectiveness, and promote trust and safety. For the sake of clarity, “cookies” are small files placed on your device hard-drive/storage that assist us in providing the Web Services. Please be informed that Point Up offers certain features via the Web that are only available through the use of a “cookie”.",
            "We also use cookies to allow you to enter a particular password less frequently during a session. Cookies also help us obtain information that assists in curating the Services more targeted to your interests. You are always free to decline our cookies if your device permits, although in that case you may not be able to use certain features on the website/app and you may be required to provide a password more frequently during a session."
        ]
    },
    {
        mainTitle: "Compliances",
        mainDescription: [
            "Point Up's use of information received from Google APIs will adhere to Google API Services User Data Policy, including the Limited Use requirements."
        ]
    },
    {
        mainTitle: "Changes to Privacy Policy",
        mainDescription: [
            "Point Up reserves the right to change this policy from time to time. Any changes shall be effective immediately upon the posting of the revised Privacy Policy. We encourage you to periodically review this page for latest information on our privacy practices."
        ]
    },
    {
        mainTitle: "Privacy Questions and Access",
        mainDescription: [
            "If you have questions, concerns, or suggestions regarding our Privacy Policy, we can be reached using the contact information on our “Contact Us” page or at support@Point Up.club . In certain cases, you may have the ability to view or edit your personal information online. In the event your information is not accessible online, and you wish to obtain a copy of particular information you provided to Point Up, or if you become aware the information is incorrect and you would like us to correct it, please contact us immediately.",
            "Before Point Up is able to provide you with any information or correct any inaccuracies, however, we may ask you to verify your identity and to provide other details to help us to respond to your request. We will contact you within 30 days of your request."
        ]
    }
];
const Policies = () => {

    return (
        <div>
            {
                privacyPolicy.map((policy, indx) => (
                    <Policy key={indx} number={indx + 1} mainDescription={policy.mainDescription} mainTitle={policy.mainTitle} sub={policy.sub}
                    />
                ))
            }
        </div>
    )
}

export default Policies

const Policy = ({ mainTitle, mainDescription, sub, number }: PrivacyPolicyItem) => {
    return (
        <div className='space-y-10 pb-10'>
            <Header classname='sm:text-4xl pb-5 '>
                {number}. {mainTitle}
            </Header>
            <div className='text-primary space-y-10'>
                {
                    mainDescription.map((descriptionPara, indx) => (

                        <p key={indx}>{descriptionPara}</p>
                    ))
                }
            </div>
            <div className='space-y-10 mt-10'>
                {
                    sub && sub.map((s, indx) => (
                        <div key={indx}>
                            <Header classname='sm:text-2xl text-xl'>
                                {number}.{indx + 1} {s.title}
                            </Header>
                            <div>
                                {
                                    s.description.map((des, indx) => (
                                        <p key={indx} className='text-primary'>{des}</p>
                                    ))
                                }
                            </div>
                        </div>

                    ))

                }
            </div>
        </div>
    )
}