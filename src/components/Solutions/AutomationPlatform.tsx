import { Calendar, Clock, ThumbsUp, TrendingUp } from "lucide-react";
interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const features: Feature[] = [
    {
        icon: <TrendingUp size={26} />,
        title: "Never Miss a Lead",
        description: "Inbound, outbound, and chat AI that works 24/7, capturing leads and qualifying prospects automatically."
    },
    {
        icon: <Calendar size={26} />,
        title: "Automated Bookings",
        description: "AI books appointments directly into your CRM with intelligent routing and conflict resolution."
    },
    {
        icon: <ThumbsUp size={26} />,
        title: "Superior Experience",
        description: "Fast, friendly, and consistent customer interactions that build trust and drive repeat business."
    },
    {
        icon: <Clock size={26} />,
        title: "Reduce Costs",
        description: "Eliminate manual tasks and reduce overhead while increasing capacity and revenue potential."
    }
]

export default function AutomationPlatform() {
    return (
        <section className="w-full bg-black text-white py-10 px-6">
            <div className="w-10/12 mx-auto">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold">
                        Why Choose Our
                        <span className="bg-linear-to-r from-[#13C6DD] to-[#6DDA8F] bg-clip-text text-transparent">
                          {""}  Automation
                        </span>
                        Platform?
                    </h2>

                    <p className="text-white mt-4 max-w-2xl mx-auto">
                        Designed exclusively for home‑service businesses, our automation engine starts producing real, trackable results from day one without heavy setup, tech headaches, or disruption to your current operations.
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