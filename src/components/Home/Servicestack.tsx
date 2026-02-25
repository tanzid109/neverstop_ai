
export default function EverythingStack() {
    const features = [
        {
            title: "Complete Customer Journey",
            description:
                "AI handles every touchpoint from first contact to booking to follow-up. Complete automation of your entire sales process.",
            items: ["Lead capture", "Qualification", "Booking", "Follow-up"],
        },
        {
            title: "24/7 Voice AI Coverage",
            description:
                "Replace your call center with AI that answers calls, handles inquiries, and books appointments around the clock.",
            items: [
                "After-hours coverage",
                "Weekend & holiday handling",
                "Instant responses",
            ],
        },
        {
            title: "Direct CRM Integration",
            description:
                "Replace your call center with AI that answers calls, handles inquiries, and books appointments around the clock.",
            items: ["Direct booking", "Automatic updates", "Revenue tracking"],
        },
        {
            title: "Intelligent Follow-up System",
            description:
                "AI-powered campaigns for lead nurturing, appointment reminders, and customer retention that work while you sleep.",
            items: [
                "Automated campaigns",
                "Smart timing",
                "Personalized messaging",
            ],
        },
    ]

    return (
        <section className="w-full bg-black text-white py-10 px-6">
            <div className="w-10/12 mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        <span className="bg-linear-to-r from-[#13C6DD] to-[#6DDA8F] bg-clip-text text-transparent">
                            Everything
                        </span>{" "}
                        You Need — One Stack
                    </h2>

                    <p className="text-white/70 mt-4 max-w-2xl mx-auto">
                        We wire Voice, Chat, and CRM so data moves instantly and work gets
                        booked. No rip-and-replace.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="relative p-6 flex flex-col justify-evenly rounded-2xl border border-white/10 bg-linear-to-br from-[#010201] via-[#0A231B] to-[#071A14] hover:border-[#6DDA8F]/40 transition duration-300 overflow-hidden"
                        >
                            {/* Soft Glow */}
                            <div className="absolute -top-20 -right-20 h-60 w-60 bg-[#3f7d52]/70 blur-3xl rounded-full" />
                            <div className="absolute bottom-0 left-0 h-40 w-40 bg-[#3f7d52]/80 blur-3xl rounded-full" />
                            {/* Title */}
                            <div className="flex items-start gap-2 mb-4">
                                <span className="mt-2 h-2 w-2 rounded-full bg-[#6DDA8F]" />
                                <h3 className="text-2xl font-semibold text-white">
                                    {feature.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <p className="text-white text-base leading-relaxed mb-6">
                                {feature.description}
                            </p>

                            {/* Divider */}
                            <div className="h-px bg-white/30 mb-6" />

                            {/* Feature List */}
                            <ul className="space-y-1 text-base text-white">
                                {feature.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#6DDA8F]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}