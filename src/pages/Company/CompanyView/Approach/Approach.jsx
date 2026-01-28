import '../../../../styles/Approach.css';
import BannerEnfoque from '../../../../assets/img/BannerEnfoque.png';
import EnfoqueIngeniero from '../../../../assets/img/EnfoqueIngeniero.png';

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
    return (
        <>

            <section className="approach_essence_section">
                <div className="approach_essence_layout">

                    <div className="approach_essence_image">
                        {/* <img className='approach_essence_image_credent'
                            src={EnfoqueIngeniero}
                            alt="Planificación técnica en obra"
                        /> */}
                    </div>

                    <div className="approach_essence_wrapper">
                        <h2>El enfoque EJECUTA</h2>

                        <p className="approach_essence_lead">
                            En EJECUTA combinamos análisis técnico y acción en obra.
                            Pensamos como ingenieros y actuamos como ejecutores responsables.
                        </p>

                        <p>
                            Nuestro enfoque parte del entendimiento profundo del proyecto:
                            diseño, entorno, restricciones reales y objetivos de funcionamiento.
                            Antes de ejecutar, definimos criterios claros que guían cada decisión.
                        </p>

                        <p>
                            Cuando la obra lo exige, respondemos con capacidad operativa y
                            criterio técnico, resolviendo sin improvisar ni comprometer la
                            integridad del sistema.
                        </p>

                        <p className="approach_essence_highlight">
                            Ese equilibrio entre análisis y acción es lo que define el enfoque EJECUTA.
                        </p>
                    </div>

                </div>
            </section>




            <section className="approach_criteria_section">
                <div className="approach_criteria_layout">

                    <div className="approach_criteria_visual">
                        <span className="criteria_tag">CRITERIO EJECUTA</span>
                        <h2>Nuestro criterio en obra</h2>
                        <div className="criteria_line"></div>
                         {/* <img className='approach_essence_image_credent'
                            src={EnfoqueIngeniero}
                            alt="Planificación técnica en obra"
                        /> */}
                    </div>

                    <div className="approach_criteria_content">
                        <p className="approach_criteria_lead">
                            El criterio técnico es el eje que guía nuestra ejecución en obra.
                        </p>

                        <p>
                            Analizamos cada proyecto considerando interferencias, secuencias
                            constructivas, tolerancias y condiciones reales del entorno antes
                            de iniciar cualquier intervención.
                        </p>

                        <p>
                            Durante la ejecución, mantenemos control técnico sobre avances,
                            recursos y coordinación entre especialidades, evitando decisiones
                            aisladas que comprometan el sistema.
                        </p>

                        <p>
                            Nuestro objetivo no es solo cumplir una partida, sino asegurar que
                            lo ejecutado responda al diseño, funcione correctamente y pueda ser
                            validado técnicamente.
                        </p>

                    </div>

                </div>
            </section>



            <section className="approach_principles_section">
                <div className="approach_principles_intro">
                    <h2>Nuestro enfoque de trabajo</h2>
                    <p>
                        En EJECUTA abordamos cada proyecto desde el análisis técnico, la
                        planificación rigurosa y el control de ejecución.
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


            <div className=''>
                <div className=''>
                    <div className=''></div>
                    <div className=''></div>
                </div>
            </div>
        </>
    );
};

export default Approach;