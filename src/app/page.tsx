import BuildYourAutomationStack from '@/components/Home/BuildYourAutomationStack';
import DirectConnections from '@/components/Home/DirectConnections';
import Hero from '@/components/Home/Hero';
import ImplementTimeline from '@/components/Home/ImplementTimeline';
import ServieStack from '@/components/Home/Servicestack';

const Home = () => {
  return (
    <div>
      <Hero />
      <DirectConnections />
      <ServieStack />
      <BuildYourAutomationStack />
      <ImplementTimeline />
    </div>
  );
};

export default Home;