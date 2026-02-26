import { CircleCheck } from "lucide-react";

interface CategoryFeature {
    title: string;
    items: string[];
}

const categories: CategoryFeature[] = [
    {
        title: "Lead Capture & Booking",
        items: [
            "Instant response to all inquiries (text/voice/chat)",
            "Smart calendar booking with territory routing",
            "Smart lead qualification & source connection"
        ]
    },
    {
        title: "Service Delivery",
        items: [
            "Day-of confirmations and arrival notifications",
            "Intelligent rescheduling and no-show recovery",
            "Upsell opportunities and add-on recommendations"
        ]
    },
    {
        title: "Customer Retention",
        items: [
            "Strategic review and referral requests",
            "Lost estimate recovery and win-back campaigns",
            "Membership renewals and seasonal service reminders"
        ]
    }
]

export default function AutomationJourney() {
    return (
        <section className="w-full bg-black text-white py-10 px-6">
            <div className="w-10/12 mx-auto">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Complete Customer
                        <span className="bg-linear-to-r from-[#13C6DD] to-[#6DDA8F] bg-clip-text text-transparent">
                           {""} Journey {""}
                        </span>
                        Automation
                    </h2>

                    <p className="text-white mt-4 max-w-2xl mx-auto">
                        Our automation platform covers every stage of the customer journey, from initial contact to long-term relationship building.
                    </p>
                </div>
                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {categories.map((feature, index) => (
                        <div
                            key={index}
                            className="relative rounded-2xl border border-white/10 bg-[#0b160e] p-6 overflow-hidden group hover:border-white/20 transition"
                        >
                            {/* Content */}
                            <div className="z-10 flex flex-col gap-4">
                                {/* Title */}
                                <h3 className="text-lg font-semibold text-white">
                                    {feature.title}
                                </h3>
                                {/* Items List */}
                                <div className="text-sm text-white space-y-3 mb-4">
                                    {feature.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="flex  items-center gap-2">
                                            <span className="text-[#67ce87]"><CircleCheck size={16} /></span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}