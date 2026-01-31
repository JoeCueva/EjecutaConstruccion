import Obra_1 from '../../../../assets/img/obra1.png';
import Obra_2 from '../../../../assets/img/obra2.png';
import Obra_3 from '../../../../assets/img/enfoqueIngeniero.jpg';
import '../../../../styles/Criterion.css';

const Criterion = () => {
    return (
        <>
            {/* ============================ SECCION CRITERIO DE OBRA ========================== */}
            <section className="approach_criteria_section">
                <div className="approach_criteria_layout">

                    <div className="approach_criteria_visual">
                        <span className="criteria_tag">CRITERIO EJECUTA</span>

                        <h2>Nuestro criterio en obra</h2>

                        <div className="criteria_line"></div>

                        <p className="criteria_key">
                            Decisiones técnicas claras,
                            antes y durante la ejecución.
                        </p>
                    </div>

                    <div className="approach_criteria_content">
                        <p className="approach_criteria_text">
                            En EJECUTA no tomamos decisiones al azar. Antes de entrar a obra,
                            nos sentamos a entender tu proyecto, revisamos el diseño, el entorno
                            y las condiciones reales para anticiparnos a los problemas y definir
                            cómo se debe ejecutar. Ya en campo, mantenemos control técnico sobre
                            cada avance, coordinamos con las demás especialidades y actuamos con
                            criterio cuando la obra lo exige. Nuestro compromiso no es solo cumplir
                            con una partida, sino entregarte un sistema que funcione bien, que sea
                            seguro y que esté respaldado técnicamente desde el inicio hasta el cierre.
                        </p>
                    </div>

                </div>

                <div className="approach_criteria_images">
                    <img src={Obra_3} alt="Instalación eléctrica industrial terminada" />
                    <img src={Obra_2} alt="Tablero eléctrico industrial" />
                    <img src={Obra_1} alt="Ingeniero revisando planos en obra" />
                </div>
            </section>
        </>

    );
};

export default Criterion;