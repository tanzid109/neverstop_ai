
import { Button } from "@/components/ui/button"
import StatCard from "../ui/statcard"

export default function Hero() {
    return (
        <section className="relative w-full bg-linear-to-b from-[#096f29] to-black text-white overflow-hidden border-b-[0.1px] border-white/50">
            <div className="w-10/12 mx-auto px-6 py-20 lg:py-28">

                {/* Badge */}
                <div className="inline-block mb-6">
                    <span className="px-4 py-1.5 text-sm rounded-full border border-white/30 bg-white/5 backdrop-blur-sm">
                        AI Automation for Service Businesses
                    </span>
                </div>

                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-5xl">
                    Complete{" "}
                    <span className="bg-linear-to-r from-[#13C6DD] to-[#6DDA8F] bg-clip-text text-transparent">
                        Automation
                    </span>{" "}
                    For Service Businesses.
                </h1>

                {/* Description */}
                <p className="mt-6 text-white/90 text-lg max-w-2xl">
                    AI that handles every customer touchpoint: calls, chats, booking,
                    follow-ups, and CRM updates. Replace your entire call center and
                    sales process with intelligent automation that works 24/7.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Button className="rounded-xl px-6 bg-linear-to-r from-[#13C6DD] to-[#6DDA8F] text-black hover:opacity-90 transition">
                        Book Demo
                    </Button>
                    <Button variant="destructive">
                        Try AI
                    </Button>
                    <Button variant="destructive">
                        Models & Pricing
                    </Button>
                </div>

                {/* Stats Cards */}
                <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <StatCard value="100K+" label="Calls Handled Monthly" />
                    <StatCard value="95%" label="Customer Satisfaction" />
                    <StatCard value="50+" label="Integrations Available" />
                </div>

            </div>

            {/* Subtle radial glow effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(19,198,221,0.15),transparent_50%)] pointer-events-none" />
        </section>
    )
}