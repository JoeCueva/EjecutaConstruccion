import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/navbar";
import Home from "../pages/Home/home";
import Approach from "../pages/Company/CompanyView/Approach/Approach";
import Criterion from "../pages/Company/CompanyView/Criterion/Criterion";
import Essence from "../pages/Company/CompanyView/Essence/Essence";
import Method from "../pages/Company/CompanyView/Method/Method";
import Electrical from "../pages/Services/ServiceView/Electrical/Electrical";
import Sanitary from "../pages/Services/ServiceView/Sanitary/Sanitary";
import Fire from "../pages/Services/ServiceView/Fire/Fire";
import Communications from "../pages/Services/ServiceView/Communications/Communications";
import Footer from "../components/Footer/footer";
import Contact from "../pages/Contact/contact";
import Chatbot from "../components/ChatBot/ChatBot";
import ScrollToTop from "../utils/ScrollToTop";


const AppRouter = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contactos" element={<Contact />} />
                <Route path="/approach" element={< Approach />} />
                <Route path="/criterion" element={<Criterion />} />
                <Route path="/essence" element={<Essence />} />
                <Route path="/method" element={<Method />} />
                <Route path="/service-electrical" element={<Electrical />} />
                <Route path="/service-sanitary" element={<Sanitary />} />
                <Route path="/service-fire" element={<Fire />} />
                <Route path="/service-communications" element={<Communications />} />
            </Routes>
            <Footer />
            <Chatbot/>
        </BrowserRouter>

    );
};

export default AppRouter;