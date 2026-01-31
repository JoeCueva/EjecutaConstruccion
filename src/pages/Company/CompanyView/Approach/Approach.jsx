import '../../../../styles/Approach.css';
import BannerEnfoque from '../../../../assets/img/BannerEnfoque.png';
import JoeIngeniero from '../../../../assets/img/JoeIngeniero.png';


const Approach = () => {

    const principles = [
        {
            id: '01',
            title: 'Análisis técnico previo',
            text: 'Estudiamos planos, especificaciones y condiciones reales de obra para anticipar interferencias y tomar decisiones técnicas correctas desde el inicio.'
        },
        {
            id: '02',
            title: 'Planificación y método',
            text: 'Definimos secuencias constructivas claras, recursos y criterios de ejecución antes de intervenir en campo.'
        },
        {
            id: '03',
            title: 'Control y coordinación',
            text: 'Gestionamos avances, recursos y coordinación con otras especialidades para asegurar plazos y calidad técnica.'
        },
        {
            id: '04',
            title: 'Cierre y respaldo técnico',
            text: 'Realizamos pruebas, puesta en marcha y entrega documentada, garantizando el correcto funcionamiento del sistema.'
        }
    ];

    const specialties = [
        {
            title: 'Instalaciones Eléctricas',
            items: [
                'Distribución MT/BT',
                'Tableros y subestaciones',
                'Puesta a tierra',
                'Iluminación técnica'
            ]
        },
        {
            title: 'Instalaciones Sanitarias',
            items: [
                'Agua fría y caliente',
                'Desagüe y ventilación',
                'Sistemas contra incendios',
                'Tratamiento de aguas'
            ]
        },
        {
            title: 'Corrientes Débiles',
            items: [
                'Cableado estructurado',
                'CCTV y control de accesos',
                'Detección y alarmas',
                'Sistemas audiovisuales'
            ]
        }
    ];


    return (
        <>

            {/* ============================= SECCION ENFOQUE EJECUTA ============================ */}
            <section className="approach_essence_section">
                <div className="approach_essence_split">
                    <div
                        className="approach_essence_image_bg"
                        style={{ backgroundImage: `url(${JoeIngeniero})` }}
                    />

                    <div className="approach_essence_content">
                        <div className="approach_essence_wrapper">
                            <h2>El enfoque <span>EJECUTA</span></h2>

                            <p className="approach_essence_lead">
                                Nosotros como empresa trabajamos como un socio estratégico en ingeniería,
                                enfocados en cumplir técnicamente y proteger la operación del proyecto.
                            </p>

                            <p>
                                Combinamos la agilidad de una empresa con 8 años en el mercado y el
                                respaldo de un equipo con amplia experiencia en ejecución de sistemas
                                eléctricos y especialidades integradas.
                            </p>

                            <p>
                                Antes de ejecutar, analizamos el proyecto, definimos criterios claros
                                y anticipamos riesgos. En obra, respondemos con decisiones técnicas
                                firmes, sin improvisar ni comprometer la calidad del sistema.
                            </p>

                            <p className="approach_essence_highlight">
                                Ese equilibrio entre análisis y acción es lo que define el enfoque EJECUTA.
                            </p>
                        </div>
                    </div>

                </div>
            </section>


            {/* ============================ SECCION ENFOQUE DE TRABAJO ========================== */}
            <section className="approach_principles_section">
                <div className="approach_principles_intro">
                    <h2>Nuestro enfoque de trabajo</h2>
                    <p>
                        Análisis técnico que se traduce en ejecución confiable.
                    </p>
                </div>

                <div className="approach_container_visual">
                    <div className="approach_center_bg">
                        <img src={BannerEnfoque} alt="Target Center" />
                    </div>

                    <div className="approach_principles_layout">
                        {principles.map((item, index) => (
                            <article className={`approach_principle_card pos_${index}`} key={index}>
                                <span className="principle_number">{item.id}</span>
                                <div className="principle_content">
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>


            {/* ============================ SECCION INTEGRADOR MULTIDISCIPLINARIO ========================== */}
            <section className="approach_multidisciplinary_section">
                <div className="multidisc_overlay"></div>
                <div className="multidisc_container">
                    <header className="section_header">
                        <h2>
                            Integrador técnico <span>multidisciplinario</span>
                        </h2>
                        <p>
                            Coordinamos múltiples especialidades bajo una sola lógica técnica,
                            reduciendo interferencias y asegurando coherencia operativa.
                        </p>
                    </header>

                    <div className="multidisc_role">
                        <h3>Socio estratégico multidisciplinario</h3>
                        <p>
                            Actuamos como un integrador técnico capaz de resolver de forma
                            simultánea instalaciones eléctricas, sanitarias y de corrientes
                            débiles, alineando ingeniería, ejecución y control bajo un
                            solo criterio técnico.
                        </p>
                    </div>

                    <div className="multidisc_grid">
                        {specialties.map((specialty, index) => (
                            <article className="specialty_card" key={index}>
                                <div className="specialty_header">
                                    <span className="specialty_number">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <h3>{specialty.title}</h3>
                                </div>

                                <ul className="specialty_list">
                                    {specialty.items.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>

                    <div className="multidisc_sectors">
                        <h4>Sectores donde la operación no puede fallar</h4>

                        <div className="sector_tags">
                            <span>Salud</span>
                            <span>Retail</span>
                            <span>Industria</span>
                            <span>Educación</span>
                        </div>

                        <p>
                            Ejecutamos proyectos en entornos donde la continuidad operativa,
                            el cumplimiento normativo y la coordinación técnica son
                            condiciones críticas desde el primer día.
                        </p>
                    </div>

                    <footer className="multidisc_footer">
                        <p>
                            Esta capacidad de integración técnica nos permite optimizar rutas
                            de instalación, coordinar interfaces y asegurar que todos los
                            sistemas funcionen como una sola infraestructura.
                        </p>
                    </footer>

                </div>
            </section>



            <section className="approach_result_section">
                <div className="result_overlay"></div>

                <div className="result_container">
                    <div className="result_grid">

                        <div className="result_intro">
                            <span className="result_badge">Resultado EJECUTA</span>

                            <h2>
                                Ingeniería que se <br />
                                entrega funcionando
                            </h2>

                            <p className="result_main">
                                Nuestro enfoque no se mide en promesas ni en renders.
                                Se mide en sistemas que arrancan, operan y se integran
                                correctamente desde el primer día.
                            </p>

                            <p className="result_closure">
                                Ejecutamos para que la operación no falle.
                            </p>
                        </div>

                        <div className="result_cards">
                            <div className="result_card">
                                <span className="card_index">01</span>
                                <h4>Sistemas probados</h4>
                                <p>
                                    Cada instalación pasa por pruebas técnicas,
                                    validaciones funcionales y protocolos de verificación.
                                </p>
                            </div>

                            <div className="result_card">
                                <span className="card_index">02</span>
                                <h4>Entrega documentada</h4>
                                <p>
                                    Planos as-built, protocolos, memorias técnicas
                                    y respaldo completo para operación y mantenimiento.
                                </p>
                            </div>

                            <div className="result_card">
                                <span className="card_index">03</span>
                                <h4>Acompañamiento técnico</h4>
                                <p>
                                    Soporte real en la puesta en marcha y primeras
                                    etapas de operación del sistema.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>




        </>
    );
};

export default Approach;
