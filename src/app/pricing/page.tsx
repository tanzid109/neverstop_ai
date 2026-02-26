import CustomizeSystem from '@/components/Pricing/CustomizeSystem';
import FunneralSystem from '@/components/Pricing/FunneralSystem';
import PricingHero from '@/components/Pricing/PricingHero';
import RecommendedPackages from '@/components/Pricing/RecommendedPackages';
import UsageExample from '@/components/Pricing/UsageExample';
import UsageFee from '@/components/Pricing/UsageFee';
import FAQPage from '@/components/shared/FAQ';
import React from 'react';

const page = () => {
    return (
        <div>
            <PricingHero />
            <CustomizeSystem />
            <UsageFee />
            <UsageExample />
            <RecommendedPackages />
            <FunneralSystem />
            <FAQPage />
        </div>
    );
};

export default page;