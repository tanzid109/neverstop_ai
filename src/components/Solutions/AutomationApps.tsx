import { Calendar, Gift, Headphones, MessageCircle, MessageSquare, Phone, Send, Shuffle, Star, TrendingUp, User } from "lucide-react";
interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        icon: <MessageSquare size={26} />,
        title: "Speed-to-Lead",
        description: "Instant SMS/chat on new leads from web forms, ads, and third-party marketplaces."
    },
    {
        icon: <Phone size={26} />,
        title: "Missed-Call Text-Back",
        description: "If the office can't answer, automation texts back and offers to book."
    },
    {
        icon: <MessageCircle size={26} />,
        title: "Voice/Chat Agent",
        description: "Answers FAQs, captures details, and books time on the correct calendar."
    },
    {
        icon: <Calendar size={26} />,
        title: "Direct CRM Booking",
        description: "Route by territory, service, and availability. Confirmations + reminders included."
    },
    {
        icon: <User size={26} />,
        title: "Estimate Follow-Up",
        description: "Polite nudges by text/email/voice until closed, declined, or rescheduled."
    },
    {
        icon: <Shuffle size={26} />,
        title: "Rehash & Win-Back",
        description: "Re-engage lost/declined estimates with updated offers and smart scheduling."
    },
    {
        icon: <Star size={26} />,
        title: "Reviews & Referrals",
        description: "Ask on the right channel at the right time and route 1-stars internally."
    },
    {
        icon: <Gift size={26} />,
        title: "Membership Renewals",
        description: "Automated reminders for tune-ups, memberships, and seasonal services."
    },
    {
        icon: <User size={26} />,
        title: "Smart Lead Qualification",
        description: "AI asks custom questions to qualify leads based on job type, location, and urgency."
    },
    {
        icon: <TrendingUp size={26} />,
        title: "Lead Source Integration",
        description: "Seamless integration with Angi, Google Ads, Facebook, and other lead sources."
    },
    {
        icon: <Send size={26} />,
        title: "Outbound Fill-In",
        description: "Fill slow days by calling/texting warm lists to backfill unused crew hours."
    },
    {
        icon: <Headphones size={26} />,
        title: "After-Hours Coverage",
        description: "AI picks up when your office is closed and gets jobs on the calendar."
    }
]

export default function AutomationApps() {
    return (
        <section className="w-full bg-black text-white py-10 px-6">
            <div className="w-10/12 mx-auto">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Ready-to-Use
                        <span className="bg-linear-to-r from-[#13C6DD] to-[#6DDA8F] bg-clip-text text-transparent">
                            {""}  Automation
                        </span>
                        Apps
                    </h2>

                    <p className="text-white mt-4 max-w-2xl mx-auto">
                        Neverstop AI&apos;s automation suite comes loaded with pre-built apps for every part of your business—just switch on what you need now, then effortlessly plug in more as your company grows.
                    </p>
                </div>
                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="relative rounded-2xl border border-white/10 bg-[#0b160e] p-6 overflow-hidden group hover:border-white/20 transition"
                        >
                            {/* Content */}
                            <div className="z-10 flex flex-col gap-3 h-full">
                                {/* Top Section with Icon and Tag */}
                                <div className="flex justify-start items-center gap-3">
                                    <div className="bg-linear-to-r from-[#24cace] to-[#6dda8f] h-10 w-10 rounded-full flex items-center justify-center text-black">
                                        {feature.icon}
                                    </div>
                                </div>
                                {/* Title */}
                                <h3 className="text-base font-medium text-white">
                                    {feature.title}
                                </h3>
                                {/* Description */}
                                <p className="text-sm text-white">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}