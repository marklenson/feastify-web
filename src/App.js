import { Route, Routes, Navigate } from 'react-router-dom';
// import { useState, useEffect, useRef } from 'react';
import Navbar from './components/navbar/navbar.v2';
import Landingpage from './pages/landingpage/landing-page.v2';
import AboutUs from './pages/aboutus/about-us';
import Hirepage from './components/landing page/landingpage';
import EventType from './components/events/events';
import ServiceDay from './components/service/service';
import ServiceSchedule from './components/service/serviceschedule';
import ServiceQuality from './components/service/serviceQuality';
import DietaryRestrictions from './components/service/diet';
import CuisineType from './components/cuisine/Cuisine';
import Joy from './components/share-the-joy/joy';
import SpreadJoyPage from './components/spread-the-joy/page';
import Comingsoon from './components/comingsoon/comingsoon';
import Kitchenware from './components/mischellenous/kitchenware';
import Oven from './components/mischellenous/oven';
import StoveType from './components/mischellenous/stovetype';
import ChefChat from './components/mischellenous/chefchat';
import ContactInfo from './components/mischellenous/contactinfo';
// import ClientLogin from './components/login/clientLogin';
import ChefRegister from './components/login/ChefRegister';
import ContactUs from './pages/contact/contact-us';
import ExperienceBooking from './components/experiences/experience';
import ChefProfile from './components/profiles/chefprofile';
import Checkout from './components/checkout/checkout';
// import ChefLogin from './components/login/chefLogin';
import Footer from "./components/footer/footer.v3";
import Banner from "./components/promotion/banner";
import ScrollToTop from './components/scrollToTop';
import "./App.css"

export const BASE_URL = 'http://localhost:3000/api';

function App() {
  
  // const [authToken, setAuthToken] = useState(sessionStorage.getItem('Token'));
  // const logoutTimerRef = useRef(null);

  // const logoutUser = () => {
  //   sessionStorage.removeItem('Token');
  //   sessionStorage.removeItem('Role');
  //   setAuthToken(null);
  //   if (logoutTimerRef.current) clearTimeout(logoutTimerRef.current); 
  //   alert('You have been logged out due to inactivity');
  // };

  // const resetLogoutTimer = () => {
  //   if (logoutTimerRef.current) {
  //     clearTimeout(logoutTimerRef.current);
  //   }
  //   logoutTimerRef.current = setTimeout(logoutUser, 30 * 60 * 1000); 
  // };

  // useEffect(() => {
  //   const handleUserActivity = () => {
  //     resetLogoutTimer();
  //   };

  //   window.addEventListener('mousemove', handleUserActivity);
  //   window.addEventListener('keypress', handleUserActivity);
  //   window.addEventListener('click', handleUserActivity);
  //   window.addEventListener('scroll', handleUserActivity);

  //   resetLogoutTimer();

  //   return () => {
  //     window.removeEventListener('mousemove', handleUserActivity);
  //     window.removeEventListener('keypress', handleUserActivity);
  //     window.removeEventListener('click', handleUserActivity);
  //     window.removeEventListener('scroll', handleUserActivity);
  //     if (logoutTimerRef.current) {
  //       clearTimeout(logoutTimerRef.current);
  //     }
  //   };
  // }, [resetLogoutTimer]);

  // const PrivateRoute = ({ element: Element }) => {
  //   return authToken ? <Element /> : <Navigate to="/login" />;
  // };

  return (
    <>
      <div>
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
