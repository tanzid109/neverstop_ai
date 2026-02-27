"use client";
import { useState } from 'react';
import { Building2, PhoneOff, Zap, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

export default function CustomPricingPlan() {
    const [selectedPlans, setSelectedPlans] = useState({
        deltaSystem: true, // Always selected/mandatory
        inboundVoiceAI: true,
        outboundVoiceAI: false,
        neverstopBooking: false,
    });

    const plans = [
        {
            id: 'deltaSystem',
            name: 'Delta System',
            price: 2750,
            description: 'All core funnels + Standard API + Custom Reporting & Live Dashboard + Priority Support & Custom Integrations + Dedicated Account Manager',
            icon: Building2,
            mandatory: true,
        },
        {
            id: 'inboundVoiceAI',
            name: 'Inbound Voice AI',
            price: 1000,
            description: 'Replace your call center – AI handles after-hours calls, rollover calls, weekends, and holidays. Never miss another call.',
            icon: PhoneOff,
            mandatory: false,
        },
        {
            id: 'outboundVoiceAI',
            name: 'Outbound Voice AI + Invoicing',
            price: 1100,
            description: 'AI lead qualification, customer outreach, follow-ups, and proactive engagement campaigns',
            icon: Zap,
            mandatory: false,
        },
        {
            id: 'neverstopBooking',
            name: 'Neverstop Booking',
            price: 1800,
            description: 'All core funnels +$2,500 Standard API + Custom Reporting & Live Dashboard + Priority Support & Custom Integrations + Dedicated Account Manager',
            icon: Calendar,
            mandatory: false,
        },
    ];

    const totalPrice = plans.reduce((sum, plan) => {
        return selectedPlans[plan.id as keyof typeof selectedPlans] ? sum + plan.price : sum;
    }, 0);

    const handleToggle = (planId: string) => {
        // Prevent unchecking the mandatory Delta System plan
        if (planId === 'deltaSystem') return;

        setSelectedPlans(prev => ({
            ...prev,
            [planId]: !prev[planId as keyof typeof prev]
        }));
    };

    return (
        <div className="w-full bg-black ">
            <div className="w-10/12 mx-auto">
                {/* Header */}
                {/* Summary Card */}
                <Card className="bg-[#0b160e] border-[#545b56] mb-4 p-10">
                    <CardContent>
                        <div className="flex items-center justify-center">
                            <div>
                                <p className="text-white font-bold text-2xl mb-1">Your Custom Plan</p>
                                <p className="text-4xl font-bold text-white text-center">
                                    ${totalPrice.toLocaleString()}
                                </p>
                                {/* <p className="text-slate-500 text-xs mt-2">
                                    {Object.values(selectedPlans).filter(Boolean).length} plan(s) selected
                                </p> */}
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Plans Container */}
                <div className="space-y-3">
                    {plans.map((plan) => {
                        const Icon = plan.icon;
                        const isSelected = selectedPlans[plan.id as keyof typeof selectedPlans];
                        const canToggle = !plan.mandatory;

                        return (
                            <Card
                                key={plan.id}
                                className={`border transition-all duration-200 ${isSelected
                                    ? 'bg-[#0b160e] border-[#545b56]/10'
                                    : 'bg-[#0b160e] border-[#545b56]'
                                    } ${canToggle ? 'cursor-pointer hover:bg-[#0b160e]/70' : 'cursor-not-allowed'}`}
                                onClick={() => canToggle && handleToggle(plan.id)}
                            >
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        {/* Checkbox */}
                                        <div className="pt-1">
                                            <Checkbox
                                                checked={isSelected}
                                                onCheckedChange={() => canToggle && handleToggle(plan.id)}
                                                disabled={!canToggle}
                                                className={`w-8 h-8 ${canToggle ? 'cursor-pointer' : 'cursor-not-allowed opacity-70'
                                                    }`}
                                            />
                                        </div>

                                        {/* Icon and Content */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Icon className="w-5 h-5 text-white" />
                                                <CardTitle className="text-lg text-white">
                                                    {plan.name}
                                                </CardTitle>
                                            </div>
                                            <CardDescription className="text-sm text-slate-400 leading-relaxed">
                                                {plan.description}
                                            </CardDescription>
                                        </div>

                                        {/* Price */}
                                        <div className="shrink-0 text-right">
                                            <div className="text-2xl font-bold text-white">
                                                ${plan.price.toLocaleString()}
                                            </div>
                                            <div className="text-xs text-slate-500">/month</div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}