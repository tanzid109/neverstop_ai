interface Feature {
    icon: number;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        icon: 1,
        title: "Business Analysis",
        description: "We analyze your current processes, lead sources, team structure, and service areas to create your automation blueprint."
    },
    {
        icon: 2,
        title: "CRM Connection",
        description: "Seamlessly connect your existing CRM and calendar systems with our platform for unified data management."
    },
    {
        icon: 3,
        title: "AI Training",
        description: "We configure your AI agents with your FAQs, pricing, service areas, and brand voice for authentic interactions."
    },
    {
        icon: 4,
        title: "Launch & Optimize",
        description: "Go live with monitoring and continuous optimization of prompts, routing, and performance metrics."
    },
]

export default function AutomationSetup() {
    return (
        <section className="w-full bg-black text-white py-10 px-6">
            <div className="w-10/12 mx-auto">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Simple 4-Step 
                        <span className="bg-linear-to-r from-[#13C6DD] to-[#6DDA8F] bg-clip-text text-transparent">
                            {""}  Setup
                        </span>
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