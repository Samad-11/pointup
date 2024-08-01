import Header from '@/components/ui/Header'
import Image from 'next/image'
import React from 'react'
import img from '../../../../public/images/blogImages/blog1.jpg'

const BlogDetailPage = ({ params }: { params: { slug: string } }) => {
    return (
        <div className='min-h-screen
        sm:px-10
        px-5
        max-w-6xl
        mx-auto
        pb-10
        '>

            <div className='pt-40'>
                <Header>
                    Amex Platinum Travel Card: Hack Your Way to Free Marriott Stays (But Read the Fine Print!)
                </Header>
            </div>
            <div className='grid grid-cols-1 h-full w-full gap-y-14 text-white'>


                <div className='bg-red-500
                w-full
                relative
                rounded-xl
                h-[30rem]
                self-start
                '>
                    <Image
                        className=' object-cover rounded-xl object-center' fill
                        src={img}
                        alt='amex travel card'
                    />
                </div>
                <div className=' w-full h-full leading-6'>
                    <p className="mb-5"><span className='font-bold '>Calling all travel ninjas (and credit card gurus)! </span>
                        Dreaming of luxurious Marriott stays without breaking the bank? The Amex Platinum Travel Card might be your golden ticket (with a few twists). Lets dive into the details and see if this card helps you level up your travel game. ✈️
                    </p>
                    <p className="mb-5"><span className='font-bold'>Sweet Sign-Up Bonus: 40,000 Points, 2 Free Marriott Nights…Maybe? <br /></span>
                        The Amex Platinum Travel Card often throws a whopping 40,000 reward points if you spend ₹4 lakhs in a year. Sounds tempting, right? Those points can potentially translate to 2 free nights at a Marriott property in India. But hold on to your boarding pass – there&apos;s more to the story.
                    </p>
                    <p className="mb-5"><span className='font-bold'>Point Redemption: Its Not Always a 1-Night Stand <br /></span>
                        While you can transfer Amex points to Marriott Bonvoy points at a 1:1 ratio, the redemption rates for hotels can be a real rollercoaster. Some budget-friendly Marriotts might cost as low as 13,000 points per night, but many popular destinations will set you back significantly more – think 20,000 points or even higher!
                    </p>
                    <p className="mb-5"><span className='font-bold'>Marriott&aspo;s Award Chart: Your Guide to Point Paradise (or Point Purgatory) ️ <br /></span>
                        You need to be a good planner to hit the right property at the right time. Before you book that dream stay in Goa, make sure you check the award chart for that specific property. Trust us, it can save you a major point meltdown.
                    </p>
                    <p className="mb-5"><span className='font-bold'>Don&apos;t Expect Free Stays Every Weekend (Sorry, Weekend Warriors) ♀️ <br /></span>
                        Just because you spend ₹4 lakhs doesnt mean you will be living the high life at Marriotts all year. Remember, room availability plays a huge role. Those coveted rooms with stunning views might disappear faster than free pizza at a college party. So, be prepared to plan your trips in advance and be flexible with your travel dates. ️
                    </p>
                    <p className="mb-5"><span className='font-bold'>The Takeaway: Amex & Marriott – A Powerful Combo, But Play Smart <br /></span>
                        The Amex Platinum Travel Card and Marriott Bonvoy points can be a fantastic way to score free hotel stays. However, its crucial to understand the redemption rates, point requirements, and potential limitations on room availability. ️
                    </p>
                    <p className="mb-5"><span className='font-bold'>Here&apos;s how to be a Point Up pro: <br /></span>
                        <ul className='py-3 list-inside'>
                            <li className="list-item list-disc mb-2"><span className='font-bold'>Compare transfer ratios: </span>See if other credit cards offer better deals for Marriott Bonvoy points (or other hotel programs).</li>
                            <li className="list-item list-disc mb-2 "><span className='font-bold'>Track point expiry dates: </span>Track point expiry dates: </li>
                        </ul>
                    </p>
                    <p className="mb-5"><span className='font-bold'>So, is the Amex Platinum Travel Card your Marriott magic bullet? It depends!</span>
                        By being a savvy Point Up user, you can unlock the true potential of this card and transform your travel dreams into reality. Just remember, travel hacking requires a bit of research and planning, but the rewards can be epic! ✈️✨
                    </p>
                    <p className="mb-5">
                        <span className='font-bold'>A lot to digest? Join PointUp today for free to avail following benefits: <br /></span>
                        <span className='font-bold'>Stop missing out on dream vacations and hidden rewards! Join the Point Up community and become a travel and rewards master. We will help you:<br /></span>
                        <ul className="list list-disc list-inside">
                            <li className="list-item">
                                <span className='font-bold'>
                                    Track dream hotels:
                                </span>
                                Never miss a steal again! We will notify you when your favorite properties drop to their lowest point redemption rate.
                            </li>
                            <li className="list-item">
                                <span className='font-bold'>
                                    Unlock Amex rewards:
                                </span>
                                Dont let points slip through your fingers on excluded categories like insurance or utilities. We will share smart strategies to maximize your Amex card rewards on every swipe.
                            </li>
                            <li className="list-item">
                                <span className='font-bold'>
                                    Score a free Amex card (almost):
                                </span>
                                Apply for your new Amex card through our referral link and enjoy the first year free (subject to card issuer&apos;s terms).
                            </li>
                            <li className="list-item">
                                <span className='font-bold'>
                                    Uncover endless hacks:
                                </span>
                                Point Up is your treasure trove of travel and rewards secrets. Learn insider tips and tricks to maximize every point and make your travel dreams a reality.
                            </li>
                            <li className="list-item">
                                <span className='font-bold'>
                                    Become a confident traveler:
                                </span>
                                We will be your trusted guide throughout your journey. From maximizing points to booking dream stays, Point Up empowers you to navigate the world of travel rewards with ease.
                            </li>
                        </ul>
                    </p>
                    <p><span className='font-bold'>Join the Point Up community today and unlock a world of travel possibilities!</span></p>

                </div>
            </div>
        </div>
    )
}

export default BlogDetailPage