import { Button } from "@/components/ui/button"

export default function SolutionHero() {
    return (
        <section className="relative py-24 w-full bg-linear-to-b from-[#096f29] via-[#0A231B] to-black text-white overflow-hidden">
            <div className="w-10/12 mx-auto px-6 ">

                {/* Badge */}
                <div className="inline-block mb-6">
                    <span className="px-4 py-1.5 text-sm rounded-full border border-white/30 bg-white/5 backdrop-blur-sm">
                        AI Automation for Service Businesses
                    </span>
                </div>

                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-5xl">
                    All‑In‑One {" "}
                    <span className="bg-linear-to-r from-[#13C6DD] to-[#6DDA8F] bg-clip-text text-transparent">
                        Automation
                    </span>{" "}
                    engine for home‑service pros
                </h1>

                {/* Description */}
                <p className="mt-6 text-white/90 text-lg max-w-2xl">
                    Unleash an AI‑driven system that never clocks out—capturing every inquiry, locking in every appointment, and nurturing every customer automatically, so your business runs smoothly around the clock.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex items-center justify-center flex-wrap gap-4">
                    <Button className="rounded-xl px-6 bg-linear-to-r from-[#13C6DD] to-[#6DDA8F] text-black hover:opacity-90 transition">
                        Book Demo
                    </Button>
                    <Button variant="destructive" className="px-6">
                        Test Drive 
                    </Button>
                </div>
            </div>

            {/* Subtle radial glow effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(19,198,221,0.15),transparent_50%)] pointer-events-none" />
        </section>
    )
}