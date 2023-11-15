import Navbar from '../Component/Navbar';
import CaptionCarousel from '../Component/HomeContent';
import SimpleThreeColumns from '../Component/Feature';
import FeatureList from '../Component/FeatureList';
import Footer from '../Component/Footer';
import Contact from '../Component/Contact';
import SearchBar from '../Component/SearchBar';

const Home = () => {
  return (
    <div className='black-background'>
      <Navbar />
      <CaptionCarousel />
      <SimpleThreeColumns />
      <SearchBar />
      <FeatureList />
      <Contact/>
      <Footer />
    </div>
  );
};

export default Home;
