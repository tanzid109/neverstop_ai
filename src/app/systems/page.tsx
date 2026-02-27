import UsageFee from '@/components/Pricing/UsageFee';
import MonthlyUsageExamples from '@/components/System/MonthlyUsageExamples';
import PricingPlan from '@/components/System/PricingPlan';
import SystemHero from '@/components/System/SystemHero';

const page = () => {
    return (
        <div>
            <SystemHero />
            <PricingPlan />
            <UsageFee />
            <MonthlyUsageExamples />
        </div>
    );
};

export default page;