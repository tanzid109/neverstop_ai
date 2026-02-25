import { ArrowRight, Building2, Shield, TrendingUp, Target } from 'lucide-react';

interface Feature {
    tag: string;
    icon: React.ReactNode;
    label: string;
    title: string;
    description: string;
    badges: string[];
}

export default function BuildYourAutomationStack() {
    const features: Feature[] = [
        {
            tag: "Roofing",
            icon: <Building2 size={26} />,
            label: "CORE AUTOMATION",
            title: "Delta System",
            description: "All core funnels, API connection, reporting dashboard, and dedicated support.",
            badges: ["Core Funnels", "API Connection", "Dashboard"],
        },
        {
            tag: "Roofing",
            icon: <Shield size={26} />,
            label: "24/7 CALL HANDLING",
            title: "Inbound Voice AI",
            description: "Replace your call center with AI that handles after-hours, weekends, and holidays.",
            badges: ["24/7 coverage", "After-hours", "Lead qualification"],
        },
        {
            tag: "Growth",
            icon: <TrendingUp size={26} />,
            label: "PROACTIVE OUTREACH",
            title: "Outbound Voice AI",
            description: "All core funnels, API connection, reporting dashboard, and dedicated support.",
            badges: ["Follow-ups", "Campaigns", "Lead qualification"],
        },
        {
            tag: "Premium",
            icon: <Target size={26} />,
            label: "DIRECT CRM BOOKING",
            title: "New AI",
            description: "All core funnels, API connection, reporting dashboard, and dedicated support.",
            badges: ["Direct booking", "End-to-end", "CRM connection"],
        },
    ];

    return (
        <section className="w-full bg-black text-white py-10 px-6">
            <div className="w-10/12 mx-auto">
                {/* Heading Section */}
                <div className="mb-16">
                    <h2 className="text-5xl font-bold mb-4">
                        Build Your{" "}
                        <span className="text-[#13C6DD]">Automation</span>{" "}
                        System
                    </h2>

                    <div className="flex items-center justify-between">
                        <p className="text-white/60 text-base max-w-2xl">
                            Start with the Atlas Model and add Voice AI, Outbound campaigns, or direct CRM booking as you grow.
                        </p>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-white hover:border-white/40 transition">
                            Learn More <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="relative rounded-2xl border border-white/10 bg-[#000000] p-6 overflow-hidden group hover:border-white/20 transition"
                        >
                            {/* Gradient Glow Background */}
                            <div className="absolute bottom-0 right-0 h-40 w-40 bg-[#3f7d52]/80 blur-3xl rounded-full" />

                            {/* Content */}
                            <div className="relative z-10 flex flex-col h-full">
                                {/* Top Section with Icon and Tag */}
                                <div className=" mb-4">
                                    <div className="flex justify-between items-center gap-3">
                                        <div className="bg-[#0b160e] h-10 w-10 rounded-xl flex items-center justify-center">
                                            {feature.icon}
                                        </div>
                                        <span className="inline-block px-3 py-1 rounded-full bg-[#0b160e] text-white text-base border border-white/10">
                                            {feature.tag}
                                        </span>
                                    </div>
                                </div>

                                {/* Label */}
                                <p className="text-base font-semibold text-white/50 uppercase tracking-wider mb-2">
                                    {feature.label}
                                </p>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-white mb-1">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-base text-white/70 mb-6 grow">
                                    {feature.description}
                                </p>

                                {/* Badges */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {feature.badges.map((badge, i) => (
                                        <span
                                            key={i}
                                            className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-base text-white/70 font-medium hover:border-white/20 transition"
                                        >
                                            {badge}
                                        </span>
                                    ))}
                                </div>

                                {/* Learn More Link */}
                                <button className="flex items-center gap-2 text-white font-medium hover:gap-3 transition group/link">
                                    Learn More <ArrowRight size={16} className="group-hover/link:translate-x-1 transition" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}