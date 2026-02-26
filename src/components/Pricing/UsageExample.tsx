
interface voiceAIPricingFeature {
    title: string;
    items: string[];
    total: string;
}

const voiceAIPricing: voiceAIPricingFeature[] = [
    {
        title: "Small Business",
        items: [
            "50 Voice AI calls (~5m) = $37.50",
            "50 Voice AI calls (~5m) = $37.50",
            "50 Voice AI calls (~5m) = $37.50",
        ],
        total: "$158.50/month",
    },
    {
        title: "Growing Business",
        items: [
            "200 Voice AI calls (~5m) = $150",
            "800 text messages = $8.00",
            "50K AI tokens = $0.50",
        ],
        total: "$158.50/month",
    },
    {
        title: "High Volume",
        items: [
            "500 Voice AI calls (~5m) = $375",
            "2,000 text messages = $20",
            "200K AI tokens = $2",
        ],
        total: "$397/month",
    },
    {
        title: "Enterprise",
        items: [
            "1,000 Voice AI calls (~5m) = $750",
            "5,000 text messages = $50",
            "1M AI tokens = $10.00",
        ],
        total: "$810/month",
    },
]

export default function UsageExample() {
    return (
        <section className="w-full bg-black text-white py-10 px-6">
            <div className="w-10/12 mx-auto">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Real-World Usage Examples
                    </h2>

                    <p className="text-white mt-4 max-w-5xl mx-auto">
                        See how different business sizes typically use our services. These examples are based on actual client usage patterns and can help you estimate your monthly costs.
                    </p>
                </div>
                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {voiceAIPricing.map((feature, index) => (
                        <div
                            key={index}
                            className="relative rounded-2xl border border-white/10 bg-linear-to-br from-[#0b160e] to-[#071a14] p-6 overflow-hidden group hover:border-[#6DDA8F]/40 transition"
                        >
                            {/* Background Glow */}
                            <div className="absolute -top-12 -right-12 h-40 w-40 bg-[#6DDA8F]/10 blur-3xl rounded-full pointer-events-none" />

                            {/* Content */}
                            <div className="relative z-10 flex flex-col gap-4">
                                {/* Title */}
                                <h3 className="text-xl font-bold text-white">
                                    {feature.title}
                                </h3>

                                {/* Items List */}
                                <ul className="space-y-2">
                                    {feature.items.map((item, i) => (
                                        <li key={i} className="text-sm text-white/80 flex items-center gap-2">
                                            <span className="bg-[#6DDA8F] h-1.5 w-1.5 rounded-full"></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                {/* Total */}
                                <div className="mt-2">
                                    <p className="text-xs text-white/60 mb-1">Total Monthly Cost:</p>
                                    <p className="text-lg font-semibold text-[#6DDA8F]">
                                        {feature.total}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}