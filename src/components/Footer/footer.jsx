import { NavLink } from 'react-router-dom';
import './footer.css';
import logo from '../../assets/img/LogoEjecuta/LogosFondosOscuro.png';
import fondoLogo from '../../assets/img/ImagenesFondos/FondoParaFooter.png';

import Logo1 from '../../assets/img/MarcaLogos/3M.png';
import Logo2 from '../../assets/img/MarcaLogos/Bticino.png';
import Logo3 from '../../assets/img/MarcaLogos/Dincorsa.png';
import Logo4 from '../../assets/img/MarcaLogos/Eaton.png';
import Logo5 from '../../assets/img/MarcaLogos/TuboPlast.png';
import Logo6 from '../../assets/img/MarcaLogos/Matusita.png';
import Logo7 from '../../assets/img/MarcaLogos/Jormen.png';

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer_global_container">

            {/* ================================ FOOTER LOGO CASCO ================================ */}
            <div className="footer_background_brand_overlay">
                <img src={fondoLogo} alt="LogoCasco" />
            </div>

            {/* ======================= SECCION DESCRIPCION - LI - CONTACTO ======================= */}
            <div className="footer_content_wrapper">
                <h3 className="footer_section_divider">Acerca de</h3>

                <div className="footer_top_section_layout">
                    <div className="footer_column footer_column_about_section">
                        <h3>Nosotros</h3>
                        <p>
                            Ejecuta es una empresa especializada en soluciones
                            eléctricas, sanitarias y de comunicaciones,
                            comprometida con la calidad, seguridad y
                            cumplimiento en cada proyecto.
                        </p>
                    </div>

                    <div className="footer_column footer_column_navigation_section">
                        <h3>Secciones</h3>
                        <ul className="footer_navigation_two_columns">
                            <li><NavLink to="/">Inicio</NavLink></li>
                            <li><NavLink to="/service-electrical">Ins. Eléctricas</NavLink></li>
                            <li><NavLink to="/approach">Enfoque Estratégico</NavLink></li>
                            <li><NavLink to="/service-sanitary">Ins. Sanitarias</NavLink></li>
                            <li><NavLink to="/essence">Nuestra Identidad</NavLink></li>
                            <li><NavLink to="/service-fire">Ins. Contraincendio</NavLink></li>
                            <li><NavLink to="/criterion">Criterio Técnico</NavLink></li>
                            <li><NavLink to="/service-communications">Ins. Comunicaciones</NavLink></li>
                            <li><NavLink to="/method">Método Ejecuta</NavLink></li>
                            <li><NavLink to="/project">Proyectos</NavLink></li>
                            <li><NavLink to="/contactos">Hablemos</NavLink></li>
                        </ul>
                    </div>

                    <div className="footer_column footer_column_contact_section">
                        <h3>Contacto</h3>
                        <p><FaPhoneAlt /> +51 987 654 321</p>
                        <p><FaEnvelope /> contacto@ejecuta.net.pe</p>
                        <p><FaMapMarkerAlt /> Lima, Perú</p>

                        <div className="footer_contact_schedule_block">
                            <strong>Horario de atención</strong>
                            <span>Lunes a Viernes</span>
                            <span>07:00 am – 06:00 pm</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ============================= SECCION LOGOS CLIENTES ============================== */}
            <div className="footer_content_wrapper">
                <h3 className="footer_section_divider">Socios</h3>

                <div className="footer_partners_section">
                    <div className="footer_partners_logo_grid">
                        <img src={Logo1} alt="3M" />
                        <img src={Logo2} alt="Bticino" />
                        <img src={Logo3} alt="Dincorsa" />
                        <img src={Logo4} alt="Eaton" />
                        <img src={Logo5} alt="TuboPlast" />
                        <img src={Logo6} alt="Matusita" />
                        <img src={Logo7} alt="Jormen" />
                    </div>
                </div>
            </div>

            {/* ============================= SECCION REDES SOCIALES ============================== */}
            <div className="footer_content_wrapper">
                <h3 className="footer_section_divider">Redes</h3>

                <div className="footer_social_section">
                    <div className="footer_social_icons_grid">
                        <a href="#" className="footer_social_icon"><i className="fa-brands fa-youtube"></i></a>
                        <a href="#" className="footer_social_icon"><i className="fa-brands fa-linkedin-in"></i></a>
                        <a href="#" className="footer_social_icon"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#" className="footer_social_icon"><i className="fa-brands fa-whatsapp"></i></a>
                    </div>
                </div>
            </div>

            {/* ============================== SECCION LOGO EJECUTA =============================== */}
            <div className="footer_logo_center_block">
                <img src={logo} alt="Ejecuta Logo" />
            </div>

            {/* =============================== SECCION COPYRIGHT ================================= */}
            <div className="footer_bottom_rights_reserved">
                <p>© 2026 Ejecuta Construccion S.A.C . Todos los derechos reservados.</p>
            </div>

            {/* ============================= SECCION CREADOR PAGES =============================== */}
            {/* <div className="footer_creator_signature_block">
                <p>Desarrollado por  <span>  Sebastian Cueva</span></p>
            </div> */}

        </footer>
    );
};

export default Footer;