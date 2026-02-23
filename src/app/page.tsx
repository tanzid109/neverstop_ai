import DirectConnections from '@/components/Home/DirectConnections';
import Hero from '@/components/Home/Hero';
import EverythingStack from '@/components/Home/Servicestack';

const Home = () => {
  return (
    <div>
      <Hero />
      <DirectConnections />
      <EverythingStack/>
    </div>
  );
};

export default Home;