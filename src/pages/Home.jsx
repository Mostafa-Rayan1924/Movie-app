import Ads from "../components/Ads";
import Faq from "../components/Faq";
import Geners from "../components/Geners";
import Hero from "../components/Hero";
import Plans from "../components/Plans";
import Streaming from "../components/Streaming";

const Home = () => {
  return (
    <div>
      <Hero />
      <Geners />
      <Streaming />
      <Faq />
      <Plans />
      <Ads />
    </div>
  );
};

export default Home;
