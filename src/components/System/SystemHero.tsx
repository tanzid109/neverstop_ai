
export default function SystemHero() {
    return (
        <section className="relative py-40 w-full bg-black text-white overflow-hidden">
            <div className="z-10 absolute top-0 left-0 bg-linear-to-b from-[#096f29]/80 to-transparent w-full h-80 pointer-events-none"></div>

            <div className="relative text-center z-20 w-10/12 mx-auto px-6">
                {/* Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-5xl mx-auto">
                    <span className="bg-linear-to-r from-[#13C6DD] to-[#6DDA8F] bg-clip-text text-transparent">
                        Neverstop
                    </span>
                    {" "} Systems
                </h1>

                {/* Description */}
                <p className="my-6 text-white/90 text-lg max-w-5xl mx-auto">
                    Build your perfect plan by toggling individual features. Delta System ($2,750) is required, then add Inbound Voice AI ($1,000), Outbound Voice AI ($1,100), and Neverstop Booking ($1,800) as needed.
                </p>

                {/* Buttons */}
                <div className="bg-[#162c1d] border border-[#6dda8f] p-4 max-w-lg mx-auto rounded-lg font-bold">
                    <p>No Monthly Commitment • No Contract • Cancel Anytime</p>
                </div>
            </div>
        </section>
    )
}