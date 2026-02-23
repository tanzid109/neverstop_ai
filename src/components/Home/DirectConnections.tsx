import StatCard from "../ui/statcard"

const integrations = [
    "ServiceTitan",
    "JobNimbus",
    "Housecall Pro",
    "AccuLynx",
    "Jobber",
    "Leap",
    "FieldPulse",
    "Dataforma",
    "SalesRabbit",
    "Service Bridge",
    "Improveit360",
    "JobTread",
]

export default function DirectConnections() {
    return (
        <section className="w-full bg-black text-white py-20 px-6 border-b-[0.1px] border-white/50">
            <div className="w-10/12 mx-auto text-center">

                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-3 rounded-md border border-white bg-[#191919] mb-6 tracking-wide">
                    <span className="h-2 w-2 rounded-full bg-[#6DDA8F]" />
                    <span className="text-base">Direct Connections</span>
                </div>

                {/* Subtitle */}
                <p className="text-white mb-12">
                    Seamlessly connect with your existing tools and workflows
                </p>

                {/* Grid */}
                <div className="grid items-center-safe grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                    {integrations.map((item) => (
                        <StatCard className="px-4 py-3" key={item} label={item}/>
                    ))}
                </div>

                {/* Bottom Full Width Items */}
                <div className="grid sm:grid-cols-2 gap-6 mt-8">
                    <div className="rounded-xl py-3 bg-[#0b170f] border-[0.5px] border-[#36423a]">
                        GHL
                    </div>
                    <div className="rounded-xl py-3 bg-[#0b170f] border-[0.5px] border-[#36423a]">
                        Service Fusion
                    </div>
                </div>

            </div>
        </section>
    )
}