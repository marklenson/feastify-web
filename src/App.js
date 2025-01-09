import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/navbar.v2';
import Landingpage from './pages/landingpage/landing-page.v2';
import AboutUs from './pages/aboutus/about-us';
import Footer from "./components/footer/footer.v3";
import Banner from "./components/promotion/banner";
import ScrollToTop from './components/scrollToTop';
import "./App.css"

export const BASE_URL = 'http://localhost:3000/api';

function App() {
  
    return (
    <>
      <div  style={{font: 'Nunito'}}>
        <Banner/>
        <Navbar/>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/about-us" element={<AboutUs />} />         
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
