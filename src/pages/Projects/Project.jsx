import '../../styles/Project.css';
import Cliente1 from '../../assets/img/ClienteLogos/Condiminio.png';
import Cliente2 from '../../assets/img/ClienteLogos/Consorcio.png';
import Cliente3 from '../../assets/img/ClienteLogos/Falabella.png';
import Cliente4 from '../../assets/img/ClienteLogos/Feban.png';
import Cliente5 from '../../assets/img/ClienteLogos/Huarcaya.png';
import Cliente6 from '../../assets/img/ClienteLogos/Impala.png';
import Cliente7 from '../../assets/img/ClienteLogos/Ministerio.png';
import Cliente8 from '../../assets/img/ClienteLogos/Municipalidad.png';
import Cliente9 from '../../assets/img/ClienteLogos/PrecioUno.png';
import Cliente10 from '../../assets/img/ClienteLogos/StellaMaris.png';
import Cliente11 from '../../assets/img/ClienteLogos/Tottus.png';
import Cliente12 from '../../assets/img/ClienteLogos/Upn.png';
import Marca1 from '../../assets/img/MarcaLogos/3M.png';
import Marca2 from '../../assets/img/MarcaLogos/Bticino.png';
import Marca3 from '../../assets/img/MarcaLogos/Dincorsa.png';
import Marca4 from '../../assets/img/MarcaLogos/Eaton.png';
import Marca5 from '../../assets/img/MarcaLogos/Fratelli.png';
import Marca6 from '../../assets/img/MarcaLogos/Indeco.png';
import Marca7 from '../../assets/img/MarcaLogos/IndustriaTello.png';
import Marca8 from '../../assets/img/MarcaLogos/Jormen.png';
import Marca9 from '../../assets/img/MarcaLogos/Matusita.png';
import Marca10 from '../../assets/img/MarcaLogos/P&L.png';
import Marca11 from '../../assets/img/MarcaLogos/Portalampara.png';
import Marca12 from '../../assets/img/MarcaLogos/Sonepar.png';
import Marca13 from '../../assets/img/MarcaLogos/Trebol.png';
import Marca14 from '../../assets/img/MarcaLogos/TuboPlast.png';
import Marca15 from '../../assets/img/MarcaLogos/Wesco.png';
import Marca16 from '../../assets/img/MarcaLogos/Promhil.png';

import BrochurePDF from '../../assets/docs/BROCHURE_EJECUTA_CONTRUCCION_2026.pdf';

const Project = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = BrochurePDF;
        link.download = 'EJECUTA_Brochure.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const marcas = [
        Marca1, Marca2, Marca3, Marca4, Marca5, Marca6, Marca7, Marca8,
        Marca9, Marca10, Marca11, Marca12, Marca13, Marca14, Marca15, Marca16
    ];

    const clientes = [
        Cliente1, Cliente2, Cliente3, Cliente4, Cliente5, Cliente6,
        Cliente7, Cliente8, Cliente9, Cliente10, Cliente11, Cliente12
    ];

    return (
        <>

            <section className="project_trust_section">
                <h3>Clientes que confiaron en nosotros</h3>
                <p>
                    Hemos participado en proyectos para el sector privado e institucional,
                    cumpliendo estándares técnicos y plazos exigentes.
                </p>

                <div className="project_logo_grid">
                    {clientes.map((logo, index) => (
                        <div className="project_logo_item" key={index}>
                            <img src={logo} alt={`Cliente ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </section>

            <section className="project_coming_container">
                <div className="project_coming_card">
                    <h2>Sección en actualización</h2>
                    <h4>
                        Estamos preparando el contenido de esta vista para presentar
                        nuestros proyectos con el nivel de detalle que nos caracteriza.
                        Mientras tanto, puedes descargar nuestro brochure corporativo.
                    </h4>

                    <button
                        className="project_download_btn"
                        onClick={handleDownload}
                    >
                        Descargar Brochure
                    </button>
                </div>
            </section>


            <section className="project_trust_section_marcas">
                <h3>Marcas con las que trabajamos</h3>
                <p>
                    Colaboramos con proveedores y fabricantes reconocidos,
                    asegurando calidad, compatibilidad técnica y respaldo en cada proyecto.
                </p>

                <div className="project_logo_grids">
                    {marcas.map((logo, index) => (
                        <div className="project_logo_items" key={index}>
                            <img src={logo} alt={`Marca ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Project;