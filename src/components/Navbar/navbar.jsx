import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import { useEffect, useState } from "react";
import logo from '../../assets/img/LogoEjecuta/LogosFondosOscuro.png';
import logo2 from '../../assets/img/LogoEjecuta/LogosFondosBlancos.png';
import VideoBg from '../BackgroundVideo/Home/BackgroundHome';
import VideoBgContact from '../BackgroundVideo/Contact/BackgroundContact.jsx';
import VideoBgApproach from '../BackgroundVideo/Approach/BackgroundApproach.jsx';
import VideoBgCriterion from '../BackgroundVideo/Criterion/BackgroundCriterion.jsx';
import VideoBgEssence from '../BackgroundVideo/Essence/BackgroundEssence.jsx';
import VideoMethod from '../BackgroundVideo/Method/BackgroundMethod.jsx';
import VideoServiceElectrical from '../BackgroundVideo/Electrical/BackgroundElectrical.jsx';
import VideoServiceSanitary from '../BackgroundVideo/Sanitary/BackgroundSanitary.jsx';
import VideoServiceFire from '../BackgroundVideo/Fire/BackgroundFire.jsx';
import VideoProject from '../BackgroundVideo/Project/BackgroundProject.jsx';
import VideoServiceCommunication from '../BackgroundVideo/Communication/BackgroundCommunication.jsx';
const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();
    const [empresaOpen, setEmpresaOpen] = useState(false);
    const [especialidadOpen, setEspecialidadOpen] = useState(false);
    const [mobileEmpresaOpen, setMobileEmpresaOpen] = useState(false);
    const [mobileEspecialidadOpen, setMobileEspecialidadOpen] = useState(false);

    const toggleEmpresaMobile = () => {
        setMobileEmpresaOpen(!mobileEmpresaOpen);
        setMobileEspecialidadOpen(false);
    };

    const toggleEspecialidadMobile = () => {
        setMobileEspecialidadOpen(!mobileEspecialidadOpen);
        setMobileEmpresaOpen(false);
    };

    const closeMobileMenu = () => {
        setMenuOpen(false);
        setMobileEmpresaOpen(false);
        setMobileEspecialidadOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* ============================= SECCION DE TOP_UTILITY ============================ */}
            <div className={`top_utility_information_bar_container ${isScrolled ? 'hidden' : ''}`}>
                <div className="top_utility_information_bar_layout_wrapper">

                    <div className="top_utility_contact_information_group">
                        <span className="top_utility_contact_item">
                            <i className="fa-solid fa-phone"></i>
                            <span className="top_utility_contact_text">+51 987 654 321</span>
                        </span>

                        <span className="top_utility_contact_item">
                            <i className="fa-solid fa-envelope"></i>
                            <span className="top_utility_contact_text">contacto@ejecuta.net.pe</span>
                        </span>

                        <span className="top_utility_contact_item">
                            <i className="fa-solid fa-location-dot"></i>
                            <span className="top_utility_contact_text">Lima, Perú</span>
                        </span>
                    </div>

                    <div className="top_utility_social_media_group">
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="top_utility_social_media_link">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>

                        <a
                            href="#"
                            aria-label="Instagram"
                            className="top_utility_social_media_link">
                            <i className="fa-brands fa-instagram"></i>
                        </a>

                        <a
                            href="#"
                            aria-label="WhatsApp"
                            className="top_utility_social_media_link">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                    </div>

                </div>
            </div>

            {/* =============================== SECCION BACKGROUND =============================== */}
            <div className='application_global_header_layout_wrapper'>
                {location.pathname === "/contactos" && <VideoBgContact />}
                {location.pathname === "/approach" && <VideoBgApproach />}
                {location.pathname === "/criterion" && <VideoBgCriterion />}
                {location.pathname === "/essence" && <VideoBgEssence />}
                {location.pathname === "/method" && <VideoMethod />}
                {location.pathname === "/service-electrical" && <VideoServiceElectrical />}
                {location.pathname === "/service-sanitary" && <VideoServiceSanitary />}
                {location.pathname === "/service-fire" && <VideoServiceFire />}
                {location.pathname === "/service-communications" && <VideoServiceCommunication />}
                {location.pathname === "/project" && <VideoProject/>}
                {location.pathname === "/" && <VideoBg />}

                {/* ============================== SECCION DE NAVBAR ============================= */}
                <header className={`primary_navigation_header_container ${isScrolled ? 'scrolled' : ''}`}>
                    <nav className='primary_navigation_flex_distribution_wrapper'>
                        <div className='navigation_brand_identity_container'>
                            <Link to='/'>
                                <img
                                    src={isScrolled ? logo2 : logo}
                                    alt='logo_Ejecuta'
                                    className='navigation_brand_indetity_image_asset'
                                />
                            </Link>
                        </div>

                        <div className={`navigation_menu_interactive_container ${menuOpen ? "navigation_menu_state_expanded" : ""}`}
                            id='navMenu'>
                            <ul className='navigation_menu_list_structure'>
                                <li className='navigation_menu_list_item navigation_menu_list_item_with_dropdow'>
                                    <NavLink
                                        className="navigation_menu_link_element"
                                        to="/"
                                        onClick={closeMobileMenu}>
                                        <i className="fa-solid fa-house"></i> Inicio
                                    </NavLink>
                                </li>

                                <li
                                    className={`navigation_menu_list_item navigation_menu_list_item_with_dropdown ${mobileEmpresaOpen ? 'mobile-submenu-open' : ''}`}
                                // onMouseEnter={() => setEmpresaOpen(true)}
                                // onMouseLeave={() => setEmpresaOpen(false)}
                                >
                                    <span
                                        className='navigation_menu_list_element navigation_menu_list_with_indicator'
                                        onClick={toggleEmpresaMobile}
                                    >
                                        <i className="fa-solid fa-city"></i>
                                        La Empresa <i className="fa-solid fa-chevron-down"></i>
                                    </span>

                                    <ul
                                        className='navigation_submenu_dropdown_panel_container'
                                    // style={{ display: empresaOpen || mobileEmpresaOpen ? 'block' : 'none' }}
                                    >
                                        <li className='navigation_submenu_list_item'>
                                            <NavLink className='navigation_submenu_link_element'
                                                to="/approach"
                                                onClick={closeMobileMenu}>
                                                <i className="fa-solid fa-bullseye"></i> Enfoque Estratégico
                                            </NavLink>
                                        </li>
                                        <li className='navigation_submenu_list_item'>
                                            <NavLink className='navigation_submenu_link_element'
                                                to="/essence"
                                                onClick={closeMobileMenu}>
                                                <i className="fa-solid fa-dna"></i> Nuestra Identidad
                                            </NavLink>
                                        </li>
                                        <li className='navigation_submenu_list_item'>
                                            <NavLink className='navigation_submenu_link_element'
                                                to="/criterion"
                                                onClick={closeMobileMenu}>
                                                <i className="fa-solid fa-brain"></i> Criterio Técnico
                                            </NavLink>
                                        </li>
                                        <li className='navigation_submenu_list_item'>
                                            <NavLink className='navigation_submenu_link_element'
                                                to="/method"
                                                onClick={closeMobileMenu}>
                                                <i className="fa-solid fa-screwdriver-wrench"></i> Método Ejecuta
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>

                                <li
                                    className={`navigation_menu_list_item navigation_menu_list_item_with_dropdown ${mobileEspecialidadOpen ? 'mobile-submenu-open' : ''}`}
                                // onMouseEnter={() => setEspecialidadOpen(true)}
                                // onMouseLeave={() => setEspecialidadOpen(false)}
                                >

                                    <span
                                        className='navigation_menu_list_element navigation_menu_list_with_indicator'
                                        onClick={toggleEspecialidadMobile}
                                    >
                                        <i className="fa-solid fa-layer-group"></i> Especialidad <i className="fa-solid fa-chevron-down"></i>
                                    </span>

                                    <ul className='navigation_submenu_dropdown_panel_container'
                                        // style={{ display: especialidadOpen || mobileEspecialidadOpen ? 'block' : 'none' }}
                                    >
                                        <li className='navigation_submenu_list_item'>
                                            <NavLink
                                                className='navigation_submenu_link_element'
                                                to="/service-electrical"
                                                onClick={closeMobileMenu}>
                                                <i className="fa-solid fa-bolt"></i> Instalaciones Eléctricas
                                            </NavLink>
                                        </li>

                                        <li className='navigation_submenu_list_item'>
                                            <NavLink
                                                className='navigation_submenu_link_element'
                                                to="/service-sanitary"
                                                onClick={closeMobileMenu}>
                                                <i className="fa-solid fa-droplet"></i> Instalaciones Sanitarias
                                            </NavLink>
                                        </li>

                                        <li className='navigation_submenu_list_item'>
                                            <NavLink
                                                className='navigation_submenu_link_element'
                                                to="/service-fire"
                                                onClick={closeMobileMenu}>
                                                <i className="fa-solid fa-fire-extinguisher"></i> Contraincendio
                                            </NavLink>
                                        </li>

                                        <li className='navigation_submenu_list_item'>
                                            <NavLink
                                                className='navigation_submenu_link_element'
                                                to="/service-communications"
                                                onClick={closeMobileMenu}>
                                                <i className="fa-solid fa-tower-broadcast"></i> Comunicaciones
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>

                                <li className='navigation_menu_list_item'>
                                    <NavLink
                                        className="navigation_menu_link_element"
                                        to="/project"
                                        onClick={closeMobileMenu}>
                                        <i className="fa-solid fa-diagram-project"></i> Proyectos
                                    </NavLink>
                                </li>

                                <li className='navigation_menu_list_item'>
                                    <NavLink
                                        className="navigation_menu_link_element"
                                        to="/contactos"
                                        onClick={closeMobileMenu}>
                                        <i class="fa-solid fa-envelope"></i> Hablemos
                                    </NavLink>
                                </li>
                            </ul>
                        </div>

                        <div className='navigation_menu_toggle_action_container'>
                            <button
                                className={`navigation_menu_toggle_interaction_button ${menuOpen ? "active" : ""}`}
                                onClick={() => setMenuOpen(!menuOpen)}
                                aria-label="Menú">
                                <div className='navigation_menu_toggle_icon_structure'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </button>
                        </div>
                    </nav>
                </header>
            </div>
        </>
    );
};

export default Navbar;