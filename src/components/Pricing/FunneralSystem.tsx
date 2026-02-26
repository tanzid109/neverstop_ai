import { Star, TrendingUp, UserPlus } from "lucide-react";

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        icon: <TrendingUp size={24} />,
        title: "Increased Lead Conversion",
        description: "AI ensures no lead slips through the cracks, responding instantly 24/7"
    },
    {
        icon: <UserPlus size={24} />,
        title: "Reduced Administrative Costs",
        description: "Eliminate manual scheduling, follow-ups, and repetitive outreach"
    },
    {
        icon: <Star size={24} />,
        title: "Higher Business Valuation",
        description: "Proven systems and recurring lead flow increase the value of your business"
    },
]

export default function FunneralSystem() {
    return (
        <section className="w-full bg-black text-white py-10 px-6">
            <div className="w-10/12 mx-auto">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Why This Investment Pays for Itself
                    </h2>

                    <p className="text-white mt-4 max-w-2xl mx-auto">
                        Unlike traditional marketing spend, our automation system is a business asset that compounds over time. Here&apos;s how it transforms your business beyond just lead generation.
                    </p>
                </div>
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Your Funnel System: A Scalable Asset, Not Just a Marketing Tool
                    </h2>
                    <p className="text-white mt-4 max-w-2xl mx-auto">
                        This isn&apos;t just another marketing system it&apos;s a business asset that can significantly increase your EBITDA multiple and enhance your company&apos;s valuation when you&apos;re ready to exit.
                    </p>
                </div>
                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="relative rounded-2xl border border-white/10 bg-[#0b160e] p-6 overflow-hidden group hover:border-white/20 transition"
                        >
                            {/* Content */}
                            <div className="z-10 flex flex-col gap-3 h-full">
                                {/* Top Section with Icon and Tag */}
                                <div className="flex justify-start items-center gap-3">
                                    <div className="bg-linear-to-r from-[#24cace] to-[#6dda8f] h-10 w-10 rounded-full flex items-center justify-center text-black text-2xl font-bold">
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