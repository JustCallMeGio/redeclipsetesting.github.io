// Single Responsibility: Home page composition
import { Hero, About, Work, Collaborations, Contact } from '../components/sections';

const Home = () => {
  return (
    <div>
      <Hero />
      <Collaborations />
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;
