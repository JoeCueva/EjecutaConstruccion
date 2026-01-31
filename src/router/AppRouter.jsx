import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar/navbar";
import Home from "../pages/Home/home";
import Approach from "../pages/Company/CompanyView/Approach/Approach";
import Criterion from "../pages/Company/CompanyView/Criterion/Criterion";
import Footer from "../components/Footer/footer";
import Contact from "../pages/Contact/contact";
import ScrollToTop from "../utils/ScrollToTop";


const AppRouter = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />

            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contactos" element={<Contact />} />
                <Route path="/approach" element={< Approach />}/>
                <Route path="/criterion" element={<Criterion/>}/>
            </Routes>

            <Footer />
        </BrowserRouter>

    );
};

export default AppRouter;