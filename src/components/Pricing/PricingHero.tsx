
export default function PricingHero() {
    return (
        <section className="relative py-40 w-full bg-black text-white overflow-hidden">
            <div className="z-10 absolute top-0 left-0 bg-linear-to-b from-[#096f29]/80 to-transparent w-full h-80 pointer-events-none"></div>

            <div className="relative text-center z-20 w-10/12 mx-auto px-6">
                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-5xl mx-auto">
                    Pricing{" "}
                    <span className="bg-linear-to-r from-[#13C6DD] to-[#6DDA8F] bg-clip-text text-transparent">
                        Breakdown
                    </span>
                </h1>

                {/* Description */}
                <p className="my-6 text-white/90 text-lg max-w-2xl mx-auto">
                    Transparent pricing for automation systems that scale with your business. Build your perfect plan by combining individual features.
                </p>

                {/* Buttons */}
                <div className="bg-[#162c1d] border border-[#6dda8f] p-4 max-w-lg mx-auto rounded-lg font-bold">
                    <p>No Monthly Commitment • No Contract • Cancel Anytime</p>
                </div>
            </div>
        </section>
    )
}