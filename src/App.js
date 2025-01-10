import {Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Landingpage from './pages/landingpage/landing-page';
import AboutUs from './pages/aboutus/about-us';
import Footer from "./components/footer/footer";
import Banner from "./components/promotion/banner";
import ScrollToTop from './components/scrollToTop';
import "./App.css"

export const chefBooking = "https://docs.google.com/forms/d/e/1FAIpQLSdNBp_QsAjRTZUPfWWW5XJRGp9VFBuxiCCcm6irP8BDJFK14g/viewform"
export const eventData = "https://docs.google.com/forms/d/e/1FAIpQLSc4GleU82zhAag3Ani21hHvFxpUqdDucP1FBNg3jsQB1zN4Tg/viewform"
export const whatsappContact = "wa.link/9yfb0t"
export const callContact = "tel:0711749149"
export const emailContact = "mailto:hi@thefeastify.com"
export const chefRegister = "https://docs.google.com/forms/d/e/1FAIpQLSc7dq4kQOYNrF9QIdwiV_Hi0_OEBYUenxwxUMJUvcEJXdTGcg/viewform?usp=dialog"
export const themeExperience = "https://docs.google.com/forms/d/e/1FAIpQLSdS6-fzfUke4eeyAr1hlaVo3HtgAeQLInbUvQK9uYGfz6DqXg/viewform"
export const calendlyLink = "https://calendly.com/marklenson/30min"

function App() {

    return (
        <>
            <div style={{font: 'Nunito'}}>
                <Banner/>
                <Navbar/>
                <ScrollToTop/>
                <Routes>
                    <Route path="/" element={<Landingpage/>}/>
                    <Route path="/about-us" element={<AboutUs/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    );
}

export default App;
