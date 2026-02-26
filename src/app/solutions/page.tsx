import DirectConnections from "@/components/Home/DirectConnections";
import FAQPage from "@/components/shared/FAQ";
import AutomationApps from "@/components/Solutions/AutomationApps";
import AutomationJourney from "@/components/Solutions/AutomationJourney";
import AutomationPlatform from "@/components/Solutions/AutomationPlatform";
import AutomationSetup from "@/components/Solutions/AutomationSetup";
import SolutionHero from "@/components/Solutions/SolutionHero";

const page = () => {
    return (
        <div>
            <SolutionHero />
            <AutomationPlatform />
            <AutomationApps />
            <AutomationJourney />
            <DirectConnections />
            <AutomationSetup />
            <FAQPage />
        </div>
    );
};

export default page;