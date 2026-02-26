import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

interface Package {
    id: string;
    title: string;
    subtitle: string;
    price: number;
    period: string;
    badge?: string;
    included: string[];
    benefits: string[];
    buttonText: string;
    isPopular?: boolean;
}

const packages: Package[] = [
    {
        id: 'start',
        title: 'Start Package',
        subtitle: 'Strategic review and referral requests',
        price: 3750,
        period: 'month',
        badge: 'Most Popular',
        included: ['Delta System', 'Inbound Voice AI'],
        benefits: [
            '24/7 AI call handling',
            'After-hours, weekend & holiday coverage',
            'Voice, text & email responses',
            'Lead qualification & routing',
            'Never miss another opportunity',
        ],
        buttonText: 'Build This Package',
        isPopular: true,
    },
    {
        id: 'automation',
        title: 'Full Automation Package',
        subtitle: 'Enterprise Neverstop Complete end-to-end automation system',
        price: 4850,
        period: 'month',
        included: ['Delta System', 'Inbound Voice AI', 'Outbound Voice AI'],
        benefits: [
            '24/7 AI coverage across all channels',
            'Direct CRM booking integration',
            'Fully automated follow-ups',
            'Custom reporting & dashboards',
            'Dedicated support with 24-hour response',
        ],
        buttonText: 'Build This Package',
    },
];

export default function RecommendedPackages() {

    return (
        <div className="w-full bg-black text-white py-10 px-6">
            {/* Header */}
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold">
                    Real-World Usage Examples
                </h2>

                <p className="text-white mt-4 max-w-5xl mx-auto">
                    See how different business sizes typically use our services. These examples are based on actual client usage patterns and can help you estimate your monthly costs.
                </p>
            </div>

            {/* Packages Grid */}
            <div className="w-10/12 mx-auto grid md:grid-cols-2 gap-8">
                {packages.map((pkg) => (
                    <div key={pkg.id} className="relative">
                        {/* Popular Badge - Outside overflow container */}
                        {pkg.badge && (
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-50">
                                <div className="bg-linear-to-r from-[#20c9d2] to-[#65d997] text-slate-950 px-6 py-3 rounded-md text-base font-semibold whitespace-nowrap shadow-lg">
                                    {pkg.badge}
                                </div>
                            </div>
                        )}

                        {/* Card */}
                        <div
                            className="relative p-6 flex flex-col justify-evenly rounded-2xl border border-white/10 bg-linear-to-br from-[#010201] via-[#0A231B] to-[#071A14] hover:border-[#6DDA8F]/40 transition duration-300 overflow-hidden"
                        >
                            {/* Soft Glow */}
                            <div className="absolute top-1/3 -right-30 h-60 w-60 bg-[#3f7d52]/70 blur-3xl rounded-full" />

                            {/* Title and Price */}
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-2">{pkg.title}</h3>
                                <p className="text-sm mb-4">{pkg.subtitle}</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-bold text-white">${(pkg.price / 100).toLocaleString()}</span>
                                    <span className="">/{pkg.period}</span>
                                </div>
                            </div>

                            {/* Professional Package */}
                            <div className="mb-8 pb-8 border-b border-slate-700/50">
                                <p className="text-base font-semibold tracking-wider mb-3">
                                    Professional Package
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {pkg.included.map((item) => (
                                        <div
                                            key={item}
                                            className="px-4 py-2 bg-[#0f1e13] border border-px border-[#47544b] rounded-full text-sm font-medium"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Benefits */}
                            <div className="mb-8">
                                <p className="text-sm font-semibold text-white mb-4">Benefits:</p>
                                <ul className="space-y-3">
                                    {pkg.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 shrink-0 mt-0.5" />
                                            <span className="text-white text-sm">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Button */}
                            <Button
                                className='bg-linear-to-r from-[#20c9d2] to-[#65d997] py-6 text-black font-medium'
                            >
                                {pkg.buttonText}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}