interface StatCardProps {
    value?: string | undefined
    label?: string | undefined
    className?: string
}

export default function StatCard({
    value,
    label,
    className = "",
}: StatCardProps) {
    return (
        <div
            className={`rounded-lg bg-[#0b170f] border-[0.5px] border-[#36423a] transition-all duration-300 hover:shadow-lg hover:shadow-[#6dda8f]/30 hover:border-[#6dda8f]/50 ${className}`}
        >
            <p className="text-[#6dda8f] text-lg font-semibold">
                {value}
            </p>
            <p className="text-white text-base">
                {label}
            </p>
        </div>
    )
}