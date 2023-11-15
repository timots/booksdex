// import SmallCentered from "../Component/Footer";
import Contact from '../Component/Contact';
import Footer from '../Component/Footer';
import Navbar from '../Component/Navbar';
import SearchBar from '../Component/SearchBar';
import Typing from '../Component/TypeWriter1';
// import axios from "axios";
const Books = () => {
  return (
    <div>
      <Navbar />
      <Typing />
      <SearchBar />
      <Contact />
      <Footer />
    </div>
  );
};

export default Books;
