import StatCard from "../ui/statcard"

const integrations = [
    "ServiceTitan",
    "GHL",
    "Leap",
    "JobNimbus",
]

export default function DirectConnections() {
    return (
        <section className="w-full bg-black text-white py-10 px-6">
            <div className="w-10/12 mx-auto text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-3 rounded-md border border-white bg-[#191919] mb-6 tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-[#6dda8f]/30 hover:border-[#6dda8f]/10">
                    <span className="h-2 w-2 rounded-full bg-[#6DDA8F]" />
                    <span className="text-base">Direct Connections</span>
                </div>

                {/* Subtitle */}
                <p className="text-white mb-12">
                    Seamlessly connect with your existing tools and workflows
                </p>

                {/* Grid */}
                <div className="grid items-center-safe grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {integrations.map((item) => (
                        <StatCard className="px-4 py-3" key={item} label={item}/>
                    ))}
                </div>
            </div>
        </section>
    )
}