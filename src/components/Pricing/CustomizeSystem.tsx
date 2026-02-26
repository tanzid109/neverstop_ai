import { ArrowRight, Building2, CalendarCheck, CircleCheck, PhoneIncoming } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Feature {
    icon: React.ReactNode;
    title: string;
    price: string;
    pricePeriod: string;
    description: string;
    items: string[];
    buttonText: string;
}

export default function CustomizeSystem() {
    const features: Feature[] = [
        {
            icon: <Building2 size={24} />,
            title: "Delta System",
            price: "$2,750",
            pricePeriod: "/month",
            description: "Strategic review and referral requests",
            items: [
                "All core funnels + full API access",
                "Live reporting dashboard",
                "Priority support + custom integrations",
                "Dedicated account manager",
                "Professional copywriting",
                "Custom funnel branches",
            ],
            buttonText: "Start Delta System",
        },
        {
            icon: <PhoneIncoming size={24} />,
            title: "Inbound Voice AI",
            price: "$1,000",
            pricePeriod: "/month",
            description: "Replace your call center with AI",
            items: [
                "24/7 AI call handling",
                "After-hours, weekend & holiday coverage",
                "Voice, text & email responses",
                "Lead qualification & routing",
                "Never miss another opportunity",
            ],
            buttonText: "Add Inbound Voice AI",
        },
        {
            icon: <PhoneIncoming size={24} className="rotate-180" />,
            title: "Outbound Voice AI + Invoicing",
            price: "$1,100",
            pricePeriod: "/month",
            description: "AI-powered outreach and engagement",
            items: [
                "Lead qualification campaigns",
                "Estimate follow-ups",
                "Appointment reminders",
                "Reactivation campaigns",
                "Proactive pipeline filling",
            ],
            buttonText: "Add Outbound Voice AI",
        },
        {
            icon: <CalendarCheck size={24} />,
            title: "Neverstop Booking",
            price: "$1,800",
            pricePeriod: "/month",
            description: "Strategic review and referral requests",
            items: [
                "Direct scheduling into all calendar CRMs",
                "ServiceTitan, JobNimbus, HCP, AccuLynx, Jobber, Leap, and more",
                "AI schedules directly into your CRM",
                "Bypass third-party calendars",
                "End-to-end automation",
            ],
            buttonText: "Add Neverstop Booking",
        },
    ]
    return (
        <section className="w-full bg-black text-white py-10 px-6">
            <div className="w-10/12 mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Customize Your System
                    </h2>

                    <p className="text-white/70 mt-4 max-w-2xl mx-auto">
                        Start with the Atlas Model and add the automation apps you need. Voice AI, Outbound campaigns, CRM integration - build exactly what your business requires.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="relative p-6 flex flex-col justify-between rounded-2xl border border-white/10 bg-linear-to-br from-[#010201] via-[#0A231B] to-[#071A14] hover:border-[#6DDA8F]/40 transition duration-300 overflow-hidden"
                        >
                            {/* Soft Glow */}
                            <div className="absolute -top-20 -right-20 h-60 w-60 bg-[#3f7d52]/70 blur-3xl rounded-full" />
                            {/* Icon */}
                            <div className="relative z-10 h-12 w-12 rounded-lg bg-[#102014] flex items-center justify-center mb-4">
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <div className="relative z-10">
                                <h3 className="text-2xl font-semibold text-white">
                                    {feature.title}
                                </h3>
                            </div>

                            {/* Price */}
                            <div className="relative z-10 mt-4 mb-4">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-[#6DDA8F]">
                                        {feature.price}
                                    </span>
                                    <span className="text-white/70">
                                        {feature.pricePeriod}
                                    </span>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="relative z-10 text-white/80 text-sm leading-relaxed mb-6">
                                {feature.description}
                            </p>

                            {/* Divider */}
                            <div className="relative z-10 h-px bg-white/20 mb-6" />

                            {/* Feature List */}
                            <ul className="relative z-10 space-y-2 text-sm text-white/90 mb-6">
                                {feature.items.map((item, i) => (
                                    <div key={i} className="flex  items-center gap-2">
                                        <span className="text-[#67ce87]"><CircleCheck size={16} /></span>
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </ul>

                            {/* Button */}
                            <Button variant="destructive" className="border border-[#478e5c]">
                                {feature.buttonText} <ArrowRight/>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}