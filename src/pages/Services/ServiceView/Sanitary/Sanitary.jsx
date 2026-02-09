import '../../../../styles/Sanitary.css';
import imagenInstalacionTuberia from '../../../../assets/img/imagenInstalacionTuberia.png';
import { useState } from 'react';

const Sanitary = () => {

    const [activeTab, setActiveTab] = useState(1);

    const servicesData = [
        {
            id: 1,
            title: "Equipamiento y Aparatos Sanitarios",
            shortTitle: "Equipamiento",
            number: "01",
            description: "Suministro e instalación de aparatos sanitarios de alta gama y grado comercial:",
            items: [
                { label: "Inodoros de bajo consumo", desc: "Sistemas de doble descarga (3/6 litros) o descarga controlada con tecnología sifónica." },
                { label: "Lavatorios y urinarios", desc: "Equipos con sensores automáticos para baños públicos y corporativos." },
                { label: "Griferías electrónicas", desc: "Válvulas temporizadas, sensores infrarrojos y mezcladoras termostáticas anti-escaldaduras." },
                { label: "Duchas y sistemas de hidromasaje", desc: "Columnas de ducha, lluvias cromadas y bañeras con sistema whirlpool." },
                { label: "Accesorios certificados", desc: "Jaboneras automáticas, secadores de manos, dispensadores y barras de apoyo." }
            ]
        },
        {
            id: 2,
            title: "Instalaciones Especiales",
            shortTitle: "Instalaciones",
            number: "02",
            description: "Sistemas sanitarios para aplicaciones de alta complejidad técnica:",
            items: [
                { label: "Gases medicinales", desc: "Redes de oxígeno, aire comprimido y vacío para hospitales según HTM 02-01." },
                { label: "Vapor y condensado", desc: "Redes de vapor saturado para lavanderías, cocinas industriales y esterilización." },
                { label: "Sistemas de riego tecnificado", desc: "Aspersores automáticos, goteo subsuperficial y fertirrigación programable." },
                { label: "Piscinas y spas", desc: "Sistemas de filtración, cloración salina, bombas de recirculación y calentamiento solar." },
                { label: "Laboratorios especializados", desc: "Grifos de emergencia, duchas lavacojos y sistemas de drenaje químico resistente." }
            ]
        },
        {
            id: 3,
            title: "Mantenimiento y Modernización",
            shortTitle: "Mantenimiento",
            number: "03",
            description: "Gestión integral del ciclo de vida de las instalaciones sanitarias:",
            items: [
                { label: "Mantenimiento preventivo programado", desc: "Inspección de válvulas, limpieza de tanques, desinfección de redes y calibración de equipos." },
                { label: "Detección de fugas no visibles", desc: "Tecnología de geófonos, correladores acústicos y termografía para localización precisa." },
                { label: "Retrofitting de instalaciones antiguas", desc: "Reemplazo de tuberías de fierro galvanizado por PVC/PPR sin romper pisos ni muros." },
                { label: "Actualización a sistemas eficientes", desc: "Cambio a griferías ahorradoras, inodoros ecológicos y sistemas de aprovechamiento pluvial." },
                { label: "Servicio de emergencias 24/7", desc: "Atención inmediata ante roturas, obstrucciones o fallas en equipos de bombeo." }
            ]
        }
    ];
    return (
        <>
            {/* Hero Section */}
            <section className="sanitary-hero">
                <div className="sanitary-hero-overlay">
                    <div className="sanitary-hero-content">
                        <span className="sanitary-hero-label">INSTALACIONES SANITARIAS</span>
                        <h1>Sistemas hidráulicos y sanitarios para infraestructura sostenible</h1>
                        <p className="sanitary-hero-description">
                            Diseñamos e instalamos redes de agua potable, desagüe, agua contra incendios
                            y sistemas de tratamiento con tecnología de punta, garantizando eficiencia
                            hídrica, calidad sanitaria y cumplimiento normativo total.
                        </p>
                        <div className="sanitary-hero-stats">
                            <div className="stat-item">
                                <span className="stat-number">800+</span>
                                <span className="stat-label">Instalaciones ejecutadas</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Pruebas hidrostáticas aprobadas</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">30%</span>
                                <span className="stat-label">Ahorro promedio en consumo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="sanitary-intro">
                <div className="sanitary-intro-container">
                    <div className="sanitary-intro-image">
                        <img
                            src={imagenInstalacionTuberia}
                            alt="Instalación de sistemas sanitarios profesionales"
                        />
                        <div className="image-badge">
                            <span className="badge-icon">✓</span>
                            <span>Certificado ISO 9001:2015</span>
                        </div>
                    </div>

                    <div className="sanitary-intro-content">
                        <span className="section-label">INGENIERÍA SANITARIA INTEGRAL</span>
                        <h2>Soluciones hidráulicas diseñadas para eficiencia y durabilidad</h2>
                        <p className="intro-leadss">
                            En EJECUTA desarrollamos proyectos sanitarios aplicando criterios de
                            ingeniería hidráulica, uso racional del agua y sostenibilidad ambiental,
                            desde la planificación hasta la puesta en marcha y certificación final.
                        </p>

                        <div className="intro-text-block">
                            <p>
                                Nuestro equipo especializado gestiona cada instalación sanitaria con
                                control riguroso de materiales, procesos constructivos y pruebas de
                                hermeticidad. Trabajamos con fabricantes homologados y aplicamos
                                normativa nacional e internacional (RNE IS.010, UPC, IPC).
                            </p>
                            <p>
                                Implementamos tecnologías de ahorro hídrico (válvulas ahorradoras,
                                sistemas de reutilización de aguas grises, sensores automáticos) que
                                reducen hasta un 40% el consumo de agua potable, contribuyendo a la
                                sostenibilidad del proyecto y certificaciones LEED o EDGE.
                            </p>
                        </div>

                        <div className="intro-highlights">
                            <div className="highlight-box">
                                <div className="highlight-number">01</div>
                                <div className="highlight-content">
                                    <h4>Cálculo Hidráulico Preciso</h4>
                                    <p>Dimensionamiento de redes mediante software especializado, considerando presiones, caudales y pérdidas de carga según demanda real.</p>
                                </div>
                            </div>

                            <div className="highlight-box">
                                <div className="highlight-number">02</div>
                                <div className="highlight-content">
                                    <h4>Materiales Certificados</h4>
                                    <p>Tuberías PVC, CPVC, PPR, HDPE y cobre certificadas por ASTM, ISO y fabricantes de primera línea mundial.</p>
                                </div>
                            </div>

                            <div className="highlight-box">
                                <div className="highlight-number">03</div>
                                <div className="highlight-content">
                                    <h4>Pruebas de Hermeticidad</h4>
                                    <p>Protocolo completo de pruebas hidrostáticas y neumáticas con certificados de calidad firmados por supervisor técnico.</p>
                                </div>
                            </div>

                            <div className="highlight-box">
                                <div className="highlight-number">04</div>
                                <div className="highlight-content">
                                    <h4>Garantía Extendida</h4>
                                    <p>Respaldo técnico post-instalación con mantenimiento preventivo y atención inmediata ante emergencias sanitarias.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Systems Section */}
            <section className="sanitary-systems">
                <div className="sanitary-systems-container">
                    <div className="systems-header">
                        <span className="section-label">SISTEMAS ESPECIALIZADOS</span>
                        <h2>Instalaciones sanitarias completas para proyectos de cualquier escala</h2>
                    </div>

                    <div className="systems-grid">
                        <div className="system-card">
                            <h3>Agua Potable Fría y Caliente</h3>
                            <ul>
                                <li>Redes de distribución con tuberías PVC-P, CPVC, PPR o cobre tipo L según zona</li>
                                <li>Cisternas, tanques elevados y equipos de bombeo con variadores de frecuencia</li>
                                <li>Sistemas de presurización con bombas jockey y bombas principales redundantes</li>
                                <li>Termas solares, calderas a gas y sistemas de recirculación con aislamiento térmico</li>
                                <li>Válvulas de control, reguladoras de presión y sistemas anti-retorno</li>
                                <li>Medidores individuales y sistemas de telemetría para control de consumos</li>
                            </ul>
                        </div>

                        <div className="system-card">
                            <h3>Desagüe y Ventilación</h3>
                            <ul>
                                <li>Redes de desagüe con tuberías PVC-U SAL y SAP, con uniones de campana espiga</li>
                                <li>Sistemas de ventilación sanitaria para evitar sifonamiento y olores</li>
                                <li>Cajas de registro, buzones y cámaras de inspección según RNE</li>
                                <li>Trampas de grasa y separadores de hidrocarburos en zonas de cocinas industriales</li>
                                <li>Sistemas de drenaje pluvial con sumideros, canaletas y bajadas separadas</li>
                                <li>Bombas de desagüe sumergibles para sótanos y áreas bajo nivel de calle</li>
                            </ul>
                        </div>

                        <div className="system-card">
                            <h3>Agua Contra Incendios (ACI)</h3>
                            <ul>
                                <li>Redes de tuberías de acero Schedule 40 pintadas en rojo según NFPA 13/14</li>
                                <li>Gabinetes contraincendios con mangueras de 1½" y válvulas de globo certificadas</li>
                                <li>Rociadores automáticos (sprinklers) tipo colgante, montante o empotrado</li>
                                <li>Bombas eléctricas y jockey con tablero de control y arranque automático por presión</li>
                                <li>Válvulas de diluvio, pre-acción y sistemas de supresión para riesgos especiales</li>
                                <li>Siamesas de inyección, válvulas de prueba y alarmas de flujo supervisadas</li>
                            </ul>
                        </div>

                        <div className="system-card">
                            <h3>Tratamiento y Reutilización</h3>
                            <ul>
                                <li>Plantas de tratamiento de aguas residuales compactas (PTAR) con proceso MBR o lodos activados</li>
                                <li>Sistemas de filtración y desinfección UV para reutilización en riego y limpieza</li>
                                <li>Biodigestores autolimpiables para viviendas y edificios sin conexión a red pública</li>
                                <li>Sistemas de captación y aprovechamiento de aguas pluviales con filtros y tanques de almacenamiento</li>
                                <li>Equipos de osmosis inversa y ablandadores para tratamiento de agua potable</li>
                                <li>Monitoreo de calidad de agua con sensores de pH, cloro residual y turbidez</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Detail Section */}
            <section className="sanitary-section">
                <div className="container">
                    <header className="section-header">
                        <span className="badge">Expertos en Ingeniería</span>
                        <h2 className='section-header_h3s'>Servicios Complementarios</h2>
                        <p>Soluciones técnicas especializadas con estándares internacionales.</p>
                    </header>

                    <div className="tabs-wrapper">
                        <div className="tabs-nav">
                            {servicesData.map((service) => (
                                <button
                                    key={service.id}
                                    className={`tab-link ${activeTab === service.id ? 'active' : ''}`}
                                    onClick={() => setActiveTab(service.id)}
                                >
                                    <span className="tab-num">{service.number}</span>
                                    <span className="tab-text">{service.shortTitle}</span>
                                </button>
                            ))}
                            <div
                                className="tab-glow"
                                style={{
                                    width: `${100 / servicesData.length}%`,
                                    transform: `translateX(${(activeTab - 1) * 100}%)`
                                }}
                            />
                        </div>

                        <div className="tabs-content">
                            {servicesData.map((service) => (
                                activeTab === service.id && (
                                    <div className="content-card animate-slide-up" key={service.id}>
                                        <div className="card-side-info">
                                            <span className="big-number">{service.number}</span>
                                            <div className="accent-line"></div>
                                        </div>

                                        <div className="card-main-content">
                                            <h3>{service.title}</h3>
                                            <p className="description">{service.description}</p>

                                            <div className="features-grid">
                                                {service.items.map((item, idx) => (
                                                    <div className="feature-item" key={idx}>
                                                        <span className="feature-dot"></span>
                                                        <div>
                                                            <strong>{item.label}</strong>
                                                            <span>{item.desc}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </section>



            {/* Process Section */}
            <section className="sanitary-process">
                <div className="sanitary-process-container">
                    <span className="section-label">METODOLOGÍA DE EJECUCIÓN</span>
                    <h2>6 fases para instalaciones sanitarias sin defectos</h2>

                    <div className="process-flow">
                        <div className="flow-step">
                            <div className="flow-icon">
                                <span>1</span>
                            </div>
                            <h4>Ingeniería de Detalle</h4>
                            <p>Cálculo hidráulico de redes, isométricos, planimetría de instalaciones y especificaciones técnicas completas según demanda proyectada y normativa vigente.</p>
                        </div>

                        <div className="flow-connector"></div>

                        <div className="flow-step">
                            <div className="flow-icon">
                                <span>2</span>
                            </div>
                            <h4>Coordinación Multidisciplinaria</h4>
                            <p>Revisión de interferencias con estructuras, instalaciones eléctricas, HVAC y arquitectura mediante modelos BIM 3D para evitar incompatibilidades en obra.</p>
                        </div>

                        <div className="flow-connector"></div>

                        <div className="flow-step">
                            <div className="flow-icon">
                                <span>3</span>
                            </div>
                            <h4>Instalación Controlada</h4>
                            <p>Montaje por personal certificado con registro fotográfico por tramos, verificación de pendientes, anclajes y juntas según procedimientos constructivos aprobados.</p>
                        </div>

                        {/* <div className="flow-connector"></div> */}

                        <div className="flow-step">
                            <div className="flow-icon">
                                <span>4</span>
                            </div>
                            <h4>Pruebas de Calidad</h4>
                            <p>Pruebas hidrostáticas a 150% de presión de trabajo durante 2 horas mínimo, pruebas neumáticas en desagües y verificación de caudales en puntos críticos.</p>
                        </div>

                        <div className="flow-connector"></div>

                        <div className="flow-step">
                            <div className="flow-icon">
                                <span>5</span>
                            </div>
                            <h4>Desinfección y Limpieza</h4>
                            <p>Desinfección química de redes de agua potable con hipoclorito, enjuague completo y análisis bacteriológico certificado por laboratorio acreditado.</p>
                        </div>

                        <div className="flow-connector"></div>

                        <div className="flow-step">
                            <div className="flow-icon">
                                <span>6</span>
                            </div>
                            <h4>Entrega y Capacitación</h4>
                            <p>Documentación as-built digital, manuales de operación, capacitación a personal de mantenimiento y certificado de conformidad técnica final.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Section */}
            <section className="sanitary-vision">
                <div className="sanitary-vision-overlay">
                    <div className="sanitary-vision-content">
                        <span className="vision-label">COMPROMISO CON LA SALUD PÚBLICA</span>
                        <h2>Instalaciones sanitarias que protegen la salud y preservan el recurso hídrico</h2>
                        <p>
                            Cada sistema que diseñamos e instalamos cumple con los más altos estándares
                            de calidad sanitaria, eficiencia hídrica y durabilidad. Utilizamos materiales
                            libres de plomo, tecnologías de ahorro certificadas y procesos constructivos
                            que garantizan agua limpia, presión adecuada y evacuación eficiente durante
                            toda la vida útil del edificio.
                        </p>
                        <div className="vision-features">
                            <div className="vision-feature">
                                <div className="vision-feature-icon">✓</div>
                                <p>Cero filtraciones garantizado</p>
                            </div>
                            <div className="vision-feature">
                                <div className="vision-feature-icon">✓</div>
                                <p>Materiales certificados NSF/ANSI 61</p>
                            </div>
                            <div className="vision-feature">
                                <div className="vision-feature-icon">✓</div>
                                <p>Eficiencia hídrica LEED certificable</p>
                            </div>
                            <div className="vision-feature">
                                <div className="vision-feature-icon">✓</div>
                                <p>Garantía técnica extendida</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="sanitary-cta">
                <div className="sanitary-cta-container">
                    <div className="cta-box">
                        <h2>¿Necesita un sistema sanitario eficiente y confiable?</h2>
                        <p>
                            Evaluamos sus necesidades hidráulicas y desarrollamos soluciones personalizadas
                            que optimizan el consumo de agua, garantizan calidad sanitaria y cumplen
                            con toda la normativa técnica vigente.
                        </p>
                        <button className="cta-button">Solicitar evaluación técnica gratuita</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Sanitary;