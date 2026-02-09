import '../../styles/Home.css';
import StellaMaris from '../../assets/img/ClienteLogos/StellaMaris.png';
import Falabella from '../../assets/img/ClienteLogos/Falabella.png';
import Consorcio from '../../assets/img/ClienteLogos/Consorcio.png';
import Feban from '../../assets/img/ClienteLogos/Feban.png';
import Tottus from '../../assets/img/ClienteLogos/Tottus.png';
import IconElectrical from '../../assets/icons/IconElectrical.png';
import IconFire from '../../assets/icons/iconFire.png';
import IconSanitary from '../../assets/icons/iconSanitary.png';
import IconWifi from '../../assets/icons/iconWifi.png';
import BannerIsotipo from '../../assets/img/bannerIsotipo.png';
import SeccionFoto1 from '../../assets/img/SeccionFoto1.jpeg';
import SeccionFoto2 from '../../assets/img/SeccionFoto2.jpeg';
import FondoCTA from '../../assets/img/FondoCTA.jpg';
import edificacionFalabella from '../../assets/img/edificacionFalabella.jpg';
import edificacionPrecio from '../../assets/img/edificacionPrecio.jpg';
import educacionalUPN from '../../assets/img/educacionalUPN.jpg';
import edificacionStella from '../../assets/img/edificacionStella.jpg';
import imagenEjemplo1 from '../../assets/img/obra1.png';
import imagenEjemplo2 from '../../assets/img/obra2.png';
import imagenEjemplo3 from '../../assets/img/revisionTablero.png';
import enfoqueIngenierio from '../../assets/img/enfoqueIngeniero.jpg';
import infraTuberias from '../../assets/img/infraTuberias.jpg';
import ImagenSeccionMarca from '../../assets/img/instalacionInspeccion.jpeg';
import { use, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {

    {/* ================= ACTIVATED ================= */ }
    const [activeItem, setActiveItem] = useState(null);
    const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [activeEdificacion, setActiveEdificacion] = useState(0);
    const [activeTecnica, setActiveTecnica] = useState(0);
    const [activeInfra, setActiveInfra] = useState(0);


    const handleToggle = (index) => {
        setActiveItem(activeItem === index ? null : index);
    };

    {/* ================= SECTION ACTIVATED CONSTRUIMOS CON COMPROMISO ================= */ }
    useEffect(() => {
        const elements = document.querySelectorAll(
            ".reveal_section, .reveal_up, .reveal_right"
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("reveal_show");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.15
            }
        );

        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    {/* ================= CLIENT SECTION FIVE ================= */ }
    const clientesRespaldanEjecutaPrincipal = [
        {
            img: StellaMaris, alt: 'Stella Maris'
        },
        {
            img: Falabella, alt: 'Falabella'
        },
        {
            img: Consorcio, alt: 'Consorcio'
        },
        {
            img: Feban, alt: 'Feban'
        },
        {
            img: Tottus, alt: 'Tottus'
        }
    ];

    {/* ================= FORM SECTION MODAL ================= */ }

    const openQuoteModal = (service) => {
        setSelectedService(service);
        setIsQuoteModalOpen(true);
    };

    const closeQuoteModal = () => {
        setIsQuoteModalOpen(false);
        setSelectedService(null);
    };

    useEffect(() => {
        if (isQuoteModalOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isQuoteModalOpen]);


    {/* ================= FOR ESC ================= */ }
    useEffect(() => {
        if (!isQuoteModalOpen) return;

        const handleEsc = (e) => {
            if (e.key === "Escape") {
                closeQuoteModal();
            }
        };

        document.addEventListener("keydown", handleEsc);

        return () => {
            document.removeEventListener("keydown", handleEsc);
        };
    }, [isQuoteModalOpen]);


    {/* =========== FOR CARRUSEL IMAGE EDIFICACION ============ */ }
    const edificacionImages = [
        edificacionFalabella,
        edificacionPrecio,
        educacionalUPN,
        edificacionStella,
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveEdificacion(prev => (prev + 1) % edificacionImages.length);
        }, 3200);

        return () => clearInterval(interval);
    }, []);

    {/* =========== FOR CARRUSEL IMAGE TECNICA ============ */ }
    const tecnicaImages = [
        enfoqueIngenierio,
        imagenEjemplo2,
        imagenEjemplo3
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTecnica(prev => (prev + 1) % tecnicaImages.length);
        }, 3800);

        return () => clearInterval(interval);
    }, []);

    {/* =========== FOR CARRUSEL IMAGE Infraestructura ============ */ }

    const infraImages = [
        imagenEjemplo1,
        infraTuberias
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveInfra(prev => (prev + 1) % infraImages.length);
        }, 4500);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* ================================ NAVBAR SECCION INICIO ================================ */}
            {/* <Navbar /> */}

            {/* =============================== SECCION COMO TRABAJAMOS =============================== */}
            <section className="certainty_section">
                <div
                    className="certainty_background"
                    style={{ backgroundImage: `url(${BannerIsotipo})` }}
                />

                <div className="certainty_container">

                    <div className="certainty_text">

                        <span className="certainty_tag">Ejecución sin fricción</span>

                        <h2>
                            Tu proyecto no debería<br />
                            depender de la suerte
                        </h2>

                        <p className="certainty_intro">
                            Cuando la ingeniería está clara desde el inicio,
                            la obra deja de ser una fuente de estrés y se convierte
                            en un proceso controlado.
                        </p>

                        <div className="certainty_list">

                            <div className="certainty_item">
                                <span className="certainty_icon">01</span>
                                <p>
                                    Las decisiones técnicas no se postergan.
                                    Se definen antes de ejecutar.
                                </p>
                            </div>

                            <div className="certainty_item">
                                <span className="certainty_icon">02</span>
                                <p>
                                    Cada sistema avanza solo después de ser verificado.
                                </p>
                            </div>

                            <div className="certainty_item">
                                <span className="certainty_icon">03</span>
                                <p>
                                    La instalación responde a la operación real,
                                    no solo al plano.
                                </p>
                            </div>

                            <div className="certainty_item">
                                <span className="certainty_icon">04</span>
                                <p>
                                    El cierre de obra no deja dudas ni pendientes.
                                </p>
                            </div>

                        </div>

                    </div>

                    <div className="certainty_visual">

                        <div className="certainty_image primary">
                            <img src={SeccionFoto1} alt="Ejecución en obra" />
                        </div>

                        <div className="certainty_image secondary">
                            <img src={SeccionFoto2} alt="Control técnico" />
                        </div>

                    </div>

                </div>

            </section>


            {/* ======================= SECCION MANIFIESTO INICIAL DE LA MARCA ======================== */}

            <section className="brand_hero_background_banner_section_wrapper"
            // style={{ backgroundImage: `url(${Banner})` }}
            >

                <div className='bradn_hero_background_images_overlay_wrapper'>
                    <img src={ImagenSeccionMarca} alt="iamgen para seccion marca" />
                </div>

                <div className="brand_hero_background_banner_overlay_container">
                    <div className="brand_hero_background_banner_content_alignment">

                        <h1 className="brand_hero_background_banner_main_heading">
                            Ingeniería que responde cuando tu proyecto lo necesita
                        </h1>
                        <p className="brand_hero_background_banner_supporting_description">
                            Sabemos que una instalación eléctrica bien ejecutada define el rendimiento
                            y la seguridad de toda la obra.
                            Por eso hoy enfocamos nuestra experiencia en sistemas eléctricos,
                            integrándolos con instalaciones sanitarias, comunicaciones y contra incendio,
                            ejecutadas con el mismo nivel de control y responsabilidad técnica
                            que tu proyecto exige.
                        </p>


                        <div className="brand_hero_background_banner_action_group">
                            <button className="brand_hero_background_banner_primary_action">
                                Hablemos de tu proyecto
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* ============================= SECCION METODOLOGIA EJECUTA ============================= */}

            <section className="container_section_info reveal_section">

                <div className="container_section_info_left reveal_up">
                    <span className="certainty_tag">¿Por que elegirnos?</span>
                    <h2 className="container_section_info_title">
                        Construimos con compromiso y criterio técnico
                    </h2>

                    <p className="container_section_info_desc">
                        En <b>EJECUTA CONSTRUCCIÓN S.A.C.</b> ejecutamos cada proyecto
                        con orden, responsabilidad y control técnico permanente,
                        asegurando resultados confiables y sostenibles.
                    </p>

                    <button className="container_section_info_btn">
                        Conocer nuestro enfoque
                    </button>
                </div>

                <div className="container_section_info_right">

                    {[
                        {
                            title: "Ejecución técnica con criterio",
                            content: "Cada sistema se ejecuta bajo decisiones técnicas claras y control permanente en obra."
                        },
                        {
                            title: "Seguridad y control en obra",
                            content: "Implementamos estándares de seguridad industrial para evitar riesgos en obra y proteger a todos los involucrados"
                        },
                        {
                            title: "Calidad en materiales y procesos",
                            content: "Utilizamos materiales certificados y procesos alineados a normativa vigente."
                        },
                        {
                            title: "Cumplimiento de plazos",
                            content: "Planificamos y ejecutamos con orden para cumplir cronogramas sin sacrificar calidad."
                        },
                        {
                            title: "Acompañamiento continuo",
                            content: "Mantenemos comunicación clara y seguimiento técnico durante todo el proyecto."
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`container_section_info_item ${activeItem === index ? "active" : ""
                                }`}
                            onClick={() => handleToggle(index)}
                        >
                            <div className="container_section_info_item_header">
                                <span>{item.title}</span>
                                <i className="fa-solid fa-chevron-right"></i>
                            </div>

                            {activeItem === index && (
                                <div className="container_section_info_item_content">
                                    {item.content}
                                </div>
                            )}
                        </div>
                    ))}

                </div>
            </section>

            {/* ============================= SECCION DE ALGUNOS CLIENTES ============================= */}

            <section className='enterprise_level_client_trust_validation_section_wrapper'>
                <div className='enterprise_level_client_trust_validation_section_container'>
                    <div className="enterprise_level_client_trust_validation_logos_grid_container">
                        {clientesRespaldanEjecutaPrincipal.map((cliente, index) => (
                            <div
                                key={index} className='enterprise_level_client_trust_validation_logo_item_container'>
                                <img src={cliente.img} alt={cliente.alt} className='enterprise_level_client_trust_validation_logo_image_element' />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================= SECCION DE SERVICIOS EJECUTA ============================ */}

            <section className="brand_multidisciplinary_installation_capabilities_section_wrapper">
                <div className='brand_multidisciplinary_installation_capabilities_container_intro_card'>
                    <div className="brand_multidisciplinary_installation_capabilities_intro_container">
                        <h2 className="brand_multidisciplinary_installation_capabilities_intro_title">
                            Ingeniería que integra todas las especialidades
                        </h2>

                        <p className="brand_multidisciplinary_installation_capabilities_intro_description">
                            Nuestro enfoque principal está en las instalaciones eléctricas,
                            pero entendemos que una obra funciona bien cuando todas las
                            especialidades técnicas están correctamente coordinadas.
                        </p>
                    </div>

                    <div className="brand_multidisciplinary_installation_capabilities_item_wrapper">
                        <div className="brand_multidisciplinary_installation_capabilities_item_card">

                            <div className="brand_multidisciplinary_installation_capabilities_item_icon_container">
                                <img
                                    src={IconElectrical}
                                    alt="Instalaciones eléctricas"
                                    className="brand_multidisciplinary_installation_capabilities_item_icon_image"
                                />
                            </div>

                            <h3 className="brand_multidisciplinary_installation_capabilities_item_title">
                                Instalaciones Eléctricas
                            </h3>

                            <p className="brand_multidisciplinary_installation_capabilities_item_text">
                                Ejecución de sistemas eléctricos con criterio técnico,
                                seguridad operativa y control permanente en obra.
                            </p>

                            <button
                                className="brand_multidisciplinary_installation_capabilities_item_action_button"
                                onClick={() => openQuoteModal({
                                    title: "Instalaciones Eléctricas",
                                    image: IconElectrical
                                })}
                            >
                                Solicitar Cotización
                            </button>

                            <NavLink
                                className="navigation_menu_link_element_seccion_services"
                                to="/service-electrical"
                            >
                                Más información <i className="fa-solid fa-arrow-right"></i>
                            </NavLink>


                        </div>
                    </div>

                    <div className="brand_multidisciplinary_installation_capabilities_item_wrapper">
                        <div className="brand_multidisciplinary_installation_capabilities_item_card">

                            <div className="brand_multidisciplinary_installation_capabilities_item_icon_container">
                                <img
                                    src={IconSanitary}
                                    alt="Instalaciones sanitarias"
                                    className="brand_multidisciplinary_installation_capabilities_item_icon_image"
                                />
                            </div>

                            <h3 className="brand_multidisciplinary_installation_capabilities_item_title">
                                Instalaciones Sanitarias
                            </h3>

                            <p className="brand_multidisciplinary_installation_capabilities_item_text">
                                Sistemas sanitarios ejecutados con orden técnico
                                y compatibilidad con el resto de la obra.
                            </p>

                            <button
                                className="brand_multidisciplinary_installation_capabilities_item_action_button"
                                onClick={() => openQuoteModal({
                                    title: "Instalaciones Sanitarias",
                                    image: IconSanitary
                                })}
                            >
                                Solicitar Cotización
                            </button>
                            <NavLink
                                className="navigation_menu_link_element_seccion_services"
                                to="/service-sanitary"
                            >
                                Más información <i className="fa-solid fa-arrow-right"></i>
                            </NavLink>


                        </div>
                    </div>

                    <div className="brand_multidisciplinary_installation_capabilities_item_wrapper">
                        <div className="brand_multidisciplinary_installation_capabilities_item_card">

                            <div className="brand_multidisciplinary_installation_capabilities_item_icon_container">
                                <img
                                    src={IconWifi}
                                    alt="Comunicaciones"
                                    className="brand_multidisciplinary_installation_capabilities_item_icon_image"
                                />
                            </div>

                            <h3 className="brand_multidisciplinary_installation_capabilities_item_title">
                                Comunicaciones
                            </h3>

                            <p className="brand_multidisciplinary_installation_capabilities_item_text">
                                Infraestructura de datos integrada desde la
                                planificación eléctrica del proyecto.
                            </p>

                            <button
                                className="brand_multidisciplinary_installation_capabilities_item_action_button"
                                onClick={() => openQuoteModal({
                                    title: "Comunicaciones",
                                    image: IconWifi
                                })}
                            >
                                Solicitar Cotización
                            </button>

                            <NavLink
                                className="navigation_menu_link_element_seccion_services"
                                to="/service-communications"
                            >
                                Más información <i className="fa-solid fa-arrow-right"></i>
                            </NavLink>


                        </div>
                    </div>

                    <div className="brand_multidisciplinary_installation_capabilities_item_wrapper">
                        <div className="brand_multidisciplinary_installation_capabilities_item_card">

                            <div className="brand_multidisciplinary_installation_capabilities_item_icon_container">
                                <img
                                    src={IconFire}
                                    alt="Sistemas contra incendio"
                                    className="brand_multidisciplinary_installation_capabilities_item_icon_image"
                                />
                            </div>

                            <h3 className="brand_multidisciplinary_installation_capabilities_item_title">
                                Sistemas Contra Incendio
                            </h3>

                            <p className="brand_multidisciplinary_installation_capabilities_item_text">
                                Sistemas contra incendio coordinados
                                técnicamente con las demás especialidades.
                            </p>

                            <button
                                className="brand_multidisciplinary_installation_capabilities_item_action_button"
                                onClick={() => openQuoteModal({
                                    title: "Sistema Contraincendio",
                                    image: IconFire
                                })}
                            >
                                Solicitar Cotización
                            </button>

                            <NavLink
                                className="navigation_menu_link_element_seccion_services"
                                to="/service-fire"
                            >
                                Más información <i className="fa-solid fa-arrow-right"></i>
                            </NavLink>


                        </div>
                    </div>
                </div>
            </section>

            {/* ========================== SECCION DE SERVICIOS MODAL EJECUTA ========================= */}
            {isQuoteModalOpen && (
                <div className="brand_quote_modal_overlay" onClick={closeQuoteModal}>
                    <div
                        className="brand_quote_modal_container"
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button
                            className="brand_quote_modal_close_button"
                            onClick={closeQuoteModal}
                        >
                            <i className="fas fa-times"></i>
                        </button>

                        <div className="brand_quote_modal_layout">

                            {/* SERVICIO */}
                            <aside className="brand_quote_modal_service_panel">
                                <div className="brand_quote_modal_service_icon">
                                    <img
                                        src={selectedService?.image}
                                        alt={selectedService?.title}
                                    />
                                </div>

                                <span className="brand_quote_modal_service_tag">
                                    Servicio Seleccionado
                                </span>

                                <h2 className="brand_quote_modal_service_title">
                                    {selectedService?.title}
                                </h2>

                                <p className="brand_quote_modal_service_desc">
                                    Complete el formulario para recibir una propuesta técnica
                                    alineada a los requerimientos de su proyecto.
                                </p>
                            </aside>

                            {/* FORMULARIO */}
                            <section className="brand_quote_modal_form_panel">
                                <form className="brand_quote_modal_form">

                                    <div className="form_row_double">
                                        <div className="brand_quote_modal_form_group">
                                            <label>Nombre Completo *</label>
                                            <input type="text" required />
                                        </div>

                                        <div className="brand_quote_modal_form_group">
                                            <label>Correo Electrónico *</label>
                                            <input type="email" required />
                                        </div>
                                    </div>

                                    <div className="form_row_double">
                                        <div className="brand_quote_modal_form_group">
                                            <label>Teléfono *</label>
                                            <input type="tel" required />
                                        </div>

                                        <div className="brand_quote_modal_form_group">
                                            <label>Empresa</label>
                                            <input type="text" />
                                        </div>
                                    </div>

                                    <div className="brand_quote_modal_form_group">
                                        <label>Descripción del Proyecto</label>
                                        <textarea rows="3"></textarea>
                                    </div>

                                    <div className="brand_quote_modal_form_group">
                                        <label className="file_label_custom">
                                            <i className="fas fa-paperclip"></i>
                                            Adjuntar información técnica (opcional)
                                            <input type="file" className="hidden_input" />
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="brand_quote_modal_form_submit_button"
                                    >
                                        ENVIAR SOLICITUD
                                    </button>
                                </form>
                            </section>

                        </div>
                    </div>
                </div>
            )}

            {/* ============================= SECCION DE PROYECTOS EJECUTA ============================ */}

            <section className="enterprise_project_experience_section">
                <div className="enterprise_project_experience_container">

                    <span className="enterprise_project_experience_tag">
                        Proyectos
                    </span>

                    <h2 className="enterprise_project_experience_title">
                        Experiencia aplicada <br /> en proyectos reales
                    </h2>

                    <p className="enterprise_project_experience_description">
                        Hemos participado en proyectos de distintas escalas y complejidades,
                        donde la coordinación técnica, el cumplimiento normativo
                        y la ejecución ordenada fueron determinantes para el resultado final.
                    </p>

                    <div className="enterprise_project_experience_grid">

                        <div className="enterprise_project_experience_card">
                            <div className="enterprise_project_experience_image_slider">
                                <img
                                    key={activeEdificacion}
                                    src={edificacionImages[activeEdificacion]}
                                    className="enterprise_project_experience_image"
                                />

                            </div>

                            <h3>Edificaciones comerciales e institucionales</h3>
                            <p>
                                Instalaciones eléctricas, sanitarias y de comunicaciones
                                integradas a la operación real del proyecto.
                            </p>
                        </div>

                        <div className="enterprise_project_experience_card">
                            <div className="enterprise_project_experience_image_slider">
                                <img
                                    key={activeTecnica}
                                    src={tecnicaImages[activeTecnica]}
                                    className="enterprise_project_experience_image"
                                />
                            </div>

                            <h3>Proyectos industriales y técnicos</h3>
                            <p>
                                Ejecución bajo estándares de seguridad,
                                control de calidad y validación técnica en cada etapa.
                            </p>
                        </div>

                        <div className="enterprise_project_experience_card">
                            <div className="enterprise_project_experience_image_slider">
                                <img
                                    key={activeInfra}
                                    src={infraImages[activeInfra]}
                                    className="enterprise_project_experience_image"
                                />
                            </div>

                            <h3>Obras de infraestructura y ampliaciones</h3>
                            <p>
                                Intervenciones planificadas para asegurar continuidad operativa
                                y compatibilidad con sistemas existentes.
                            </p>
                        </div>

                    </div>

                </div>
            </section>


            {/* ================================ SECCION DE CTA EJECUTA =============================== */}
            <section className="enterprise_level_project_engagement_call_to_action_section"
                style={{ backgroundImage: `url(${FondoCTA})` }}
            >
                <div className="enterprise_level_project_engagement_call_to_action_overlay_layer">

                    <div className="enterprise_level_project_engagement_call_to_action_content_container">

                        <span className="enterprise_level_project_engagement_call_to_action_context_tag">
                            Contacto
                        </span>

                        <h2 className="enterprise_level_project_engagement_call_to_action_primary_heading">
                            ¿Conversamos tu proyecto antes de avanzar?
                        </h2>

                        <p className="enterprise_level_project_engagement_call_to_action_supporting_text">
                            Si estás evaluando una intervención, una mejora o un nuevo proyecto,
                            podemos ayudarte a definir el alcance, validar decisiones técnicas
                            y estructurar una ejecución segura y eficiente.
                        </p>

                        <NavLink
                            to="/contactos"
                            className="enterprise_level_project_engagement_call_to_action_interactive_text_link"
                        >
                            Solicitar información
                        </NavLink>

                    </div>

                </div>
            </section>

            {/* ================================ FOOTER SECCION INICIO ================================ */}
            {/* <Footer /> */}
        </>
    );
};

export default Home;
