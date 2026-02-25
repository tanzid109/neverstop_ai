import { Building2, Rocket, Settings } from "lucide-react";
interface Feature {
    icon: React.ReactNode;
    title: string;
    name: string;
    description: string;
}

const features: Feature[] = [
    {
        icon: <Building2 size={26} />,
        title: "Step 1",
        name: "Connect",
        description: "Securely connect your CRM, calendars, and phones."
    },
    {
        icon: <Settings size={26} />,
        title: "Step 2",
        name: "Configure",
        description: "Pick a model and tune scripts, intents, and KPIs."
    },
    {
        icon: <Rocket size={26} />,
        title: "Step 3",
        name: "Go Live",
        description: "Monitor, iterate, and expand by trade or location."
    }
]

export default function ImplementTimeline() {
    return (
        <section className="w-full bg-black text-white py-10 px-6">
            <div className="w-10/12 mx-auto text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-3 rounded-md border border-white bg-[#191919] mb-6 tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-[#6dda8f]/30 hover:border-[#6dda8f]/10">
                    <span className="h-2 w-2 rounded-full bg-[#6DDA8F]" />
                    <span className="text-base">Implementation Timeline</span>
                </div>

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Go live in
                        <span className="bg-linear-to-r from-[#13C6DD] to-[#6DDA8F] bg-clip-text text-transparent">
                            14 business days
                        </span>
                    </h2>

                    <p className="text-white mt-4 max-w-2xl mx-auto">
                        Shadow mode → soft launch → full coverage. Clear alerts and clean handoffs.
                    </p>
                </div>
                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="relative rounded-2xl border border-white/10 bg-[#0b160e] p-6 overflow-hidden group hover:border-white/20 transition"
                        >
                            {/* Content */}
                            <div className=" z-10 flex flex-col items-center gap-4 h-full">
                                {/* Top Section with Icon and Tag */}
                                <div className="flex justify-between items-center gap-3">
                                    <div className="bg-linear-to-r from-[#24cace] to-[#6dda8f] h-10 w-10 rounded-xl flex items-center justify-center text-black">
                                        {feature.icon}
                                    </div>
                                </div>
                                {/* Title */}
                                <h3 className="text-base  text-white mb-1">
                                    {feature.title}
                                </h3>
                                {/* Label */}
                                <p className="text-base font-semibold text-white uppercase tracking-wider mb-2">
                                    {feature.name}
                                </p>
                                {/* Description */}
                                <p className="text-base text-white/70 mb-6 grow">
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