import React from "react"

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
            className={`p-6 rounded-xl bg-[#0b170f] border-[0.5px] border-[#36423a] ${className}`}
        >
            <p className="text-[#6dda8f] text-lg font-semibold">
                {value}
            </p>
            <p className="text-white text-base mt-1">
                {label}
            </p>
        </div>
    )
}