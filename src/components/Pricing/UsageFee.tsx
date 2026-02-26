
interface CategoryFeature {
    price: number;
    time: string;
    title: string;
    description: string;
}

const categories: CategoryFeature[] = [
    {
        price: 0.15,
        time: "per minute",
        title: "Voice AI Usage",
        description: "Only charged when call is answered (picked up)"

    },
    {
        price: 0.01,
        time: "per message",
        title: "Text Messages",
        description: "SMS and text-based communications"

    },
    {
        price: 0.01,
        time: "per 1K tokens",
        title: "AI Processing",
        description: "OpenAI token usage for AI responses"

    },
]

export default function UsageFee() {
    return (
        <section className="w-full bg-black text-white py-10 px-6">
            <div className="w-10/12 mx-auto">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Transparent Usage Fee
                    </h2>

                    <p className="text-white mt-4 max-w-5xl mx-auto">
                        Usage fees are pay-as-you-go - only charged when services are actively used. Voice AI is only charged when calls are answered (picked up), not for unanswered calls or voicemails. No hidden fees or minimums. Scale up or down as needed.
                    </p>
                </div>
                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((feature, index) => (
                        <div
                            key={index}
                            className="relative rounded-2xl border border-white/10 bg-[#0b160e] p-6 overflow-hidden group hover:border-white/20 transition"
                        >
                            {/* Content */}
                            <div className="z-10 flex items-center flex-col gap-4">
                                {/* price */}
                                <h3 className="text-5xl font-bold text-white">
                                    ${feature.price}
                                </h3>
                                <p className="text-sm text-white/70">{feature.time}</p>
                                <p className="text-base text-white">{feature.title}</p>
                                <p className="text-sm text-white/70">{feature.description}</p>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}