import { useEffect, useState, useRef } from "react";
import botData from "./ChatBot.json";
import "./ChatBot.css";
import logoEjecuta from '../../assets/img/LogoEjecuta/LogosFondosOscuro.png';

export default function EjecutaChatbot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const messagesEndRef = useRef(null);
    const chatContainerRef = useRef(null);


    // Scroll automático
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    // Mensaje de bienvenida
    useEffect(() => {
        if (open && messages.length === 0) {
            setTimeout(() => {
                addBotMessage(botData.welcome.greeting);
                setTimeout(() => {
                    addBotMessage(botData.welcome.message);
                    setTimeout(() => {
                        addBotMessage(botData.welcome.cta);
                    }, 1800);
                }, 1800);
            }, 500);
        }
    }, [open]);


    useEffect(() => {
        if (!open) return;

        const preventScrollPropagation = (e) => {
            if (chatContainerRef.current?.contains(e.target)) {
                e.stopPropagation();
            }
        };

        document.addEventListener('wheel', preventScrollPropagation, { passive: true });
        document.addEventListener('touchmove', preventScrollPropagation, { passive: false });

        return () => {
            document.removeEventListener('wheel', preventScrollPropagation);
            document.removeEventListener('touchmove', preventScrollPropagation);
        };
    }, [open]);

    // Agregar mensaje del bot con delay ajustado
    const addBotMessage = (text, delay = 1400) => {
        setIsTyping(true);
        setTimeout(() => {
            setMessages(prev => [...prev, {
                type: 'bot',
                text,
                timestamp: new Date()
            }]);
            setIsTyping(false);
        }, delay);
    };

    // Agregar mensaje del usuario
    const addUserMessage = (text) => {
        setMessages(prev => [...prev, {
            type: 'user',
            text,
            timestamp: new Date()
        }]);
    };

    // Manejar selección de categoría
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        addUserMessage(category.title);

        const responses = Object.values(category.responses);
        responses.forEach((response, index) => {
            setTimeout(() => {
                addBotMessage(response, 1600);
            }, index * 1800);
        });
    };

    // Manejar envío de mensaje
    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMsg = inputValue.trim();
        addUserMessage(userMsg);
        setInputValue("");

        const response = generateAutoResponse(userMsg);
        addBotMessage(response, 1600);
    };

    // Generar respuesta automática inteligente SUPER MEJORADA
    const generateAutoResponse = (userMessage) => {
        const msg = userMessage.toLowerCase();

        // ============================================
        // RESPUESTAS REACTIVAS (SI, NO, CLARO, ETC)
        // ============================================

        // AFIRMACIONES - cuando el usuario dice SÍ o acepta
        if (
            msg === 'si' ||
            msg === 'sí' ||
            msg === 'si porfa' ||
            msg === 'si por favor' ||
            msg === 'sí por favor' ||
            msg === 'si porfavor' ||
            msg === 'sí porfavor' ||
            msg === 'claro' ||
            msg === 'claro que si' ||
            msg === 'claro que sí' ||
            msg === 'por supuesto' ||
            msg === 'dale' ||
            msg === 'ok' ||
            msg === 'okay' ||
            msg === 'perfecto' ||
            msg === 'genial' ||
            msg === 'excelente' ||
            msg === 'seguro' ||
            msg === 'me gustaria' ||
            msg === 'me gustaría' ||
            msg === 'me interesa' ||
            msg === 'estoy interesado' ||
            msg === 'quiero' ||
            msg === 'quisiera' ||
            msg === 'acepto'
        ) {
            // Determinar qué respuesta de afirmación usar según el contexto
            const afirmaciones = [
                botData.autoResponses.afirmacion_si,
                botData.autoResponses.afirmacion_claro,
                botData.autoResponses.afirmacion_porfa,
                botData.autoResponses.afirmacion_perfecto,
                botData.autoResponses.afirmacion_dale,
                botData.autoResponses.afirmacion_ok,
                botData.autoResponses.afirmacion_seguro,
                botData.autoResponses.afirmacion_me_interesa
            ];
            return afirmaciones[Math.floor(Math.random() * afirmaciones.length)];
        }

        // NEGACIONES - cuando el usuario dice NO
        if (
            msg === 'no' ||
            msg === 'no gracias' ||
            msg === 'todavia no' ||
            msg === 'todavía no' ||
            msg === 'aun no' ||
            msg === 'aún no' ||
            msg === 'despues' ||
            msg === 'después' ||
            msg === 'mas tarde' ||
            msg === 'más tarde' ||
            msg === 'luego' ||
            msg === 'otro dia' ||
            msg === 'otro día' ||
            msg === 'no por ahora' ||
            msg === 'ahora no'
        ) {
            const negaciones = [
                botData.autoResponses.negacion_no,
                botData.autoResponses.negacion_todavia_no,
                botData.autoResponses.negacion_aun_no,
                botData.autoResponses.negacion_despues,
                botData.autoResponses.negacion_mas_tarde
            ];
            return negaciones[Math.floor(Math.random() * negaciones.length)];
        }

        // SOLICITUDES DE MÁS INFORMACIÓN
        if (
            msg.includes('tengo otra') ||
            msg.includes('otra pregunta') ||
            msg.includes('otra consulta') ||
            msg.includes('otra duda') ||
            msg.includes('mas info') ||
            msg.includes('más info') ||
            msg.includes('mas informacion') ||
            msg.includes('más información') ||
            msg.includes('quiero saber mas') ||
            msg.includes('quiero saber más') ||
            msg.includes('cuentame mas') ||
            msg.includes('cuéntame más') ||
            msg.includes('explica mas') ||
            msg.includes('explica más')
        ) {
            const masInfo = [
                botData.autoResponses.duda_adicional,
                botData.autoResponses.mas_info,
                botData.autoResponses.otra_pregunta,
                botData.autoResponses.quiero_saber_mas,
                botData.autoResponses.tengo_otra_duda
            ];
            return masInfo[Math.floor(Math.random() * masInfo.length)];
        }

        // ============================================
        // FRASES DE APERTURA Y CONSULTAS GENERALES
        // ============================================
        if (
            msg.includes('asistente') ||
            msg.includes('una consulta') ||
            msg.includes('tengo una consulta') ||
            msg.includes('tengo una duda') ||
            msg.includes('quisiera saber') ||
            msg.includes('me gustaria saber') ||
            msg.includes('necesito informacion') ||
            msg.includes('necesito información') ||
            msg.includes('requiero informacion') ||
            msg.includes('quiero preguntar') ||
            msg.includes('puedo preguntar') ||
            msg.includes('una pregunta') ||
            msg.includes('ayuda con') ||
            msg.includes('necesito ayuda')
        ) {
            const openingResponses = [
                botData.autoResponses.consulta_general,
                botData.autoResponses.tengo_duda,
                botData.autoResponses.quisiera_saber,
                botData.autoResponses.necesito_info
            ];
            return openingResponses[Math.floor(Math.random() * openingResponses.length)];
        }

        // ============================================
        // PREGUNTAS FRECUENTES ESPECÍFICAS
        // ============================================

        // ¿Atienden proyectos pequeños o solo obras grandes?
        if (
            msg.includes('proyectos pequeños') ||
            msg.includes('obras pequeñas') ||
            msg.includes('proyectos chicos') ||
            msg.includes('obras chicas') ||
            msg.includes('proyecto pequeño') ||
            msg.includes('obra pequeña') ||
            msg.includes('solo obras grandes') ||
            msg.includes('tamaño de proyecto') ||
            msg.includes('tamaño mínimo')
        ) {
            return botData.autoResponses.obras_pequenas;
        }

        // ¿Trabajan solo en Lima o también en provincias?
        if (
            msg.includes('provincias') ||
            msg.includes('fuera de lima') ||
            msg.includes('todo el peru') ||
            msg.includes('todo el perú') ||
            msg.includes('nivel nacional') ||
            msg.includes('otras ciudades') ||
            msg.includes('en que zonas')
        ) {
            return botData.autoResponses.lima_provincias;
        }

        // ¿Pueden apoyar desde la etapa de diseño o solo ejecutan?
        if (
            msg.includes('desde el diseño') ||
            msg.includes('etapa de diseño') ||
            msg.includes('ingenieria de detalle') ||
            msg.includes('diseñan') ||
            msg.includes('solo ejecutan') ||
            msg.includes('también diseñan') ||
            msg.includes('diseño y ejecucion') ||
            msg.includes('diseño y ejecución')
        ) {
            return botData.autoResponses.diseño_ejecucion;
        }

        // ¿Incluyen pruebas, mediciones y puesta en servicio?
        if (
            msg.includes('incluyen pruebas') ||
            msg.includes('hacen pruebas') ||
            msg.includes('mediciones') ||
            msg.includes('puesta en servicio') ||
            msg.includes('ensayos') ||
            msg.includes('protocolos de prueba') ||
            msg.includes('certifican')
        ) {
            return botData.autoResponses.pruebas_mediciones;
        }

        // ¿Cumplen normas técnicas y reglamentos vigentes?
        if (
            msg.includes('cumplen normas') ||
            msg.includes('normas tecnicas') ||
            msg.includes('normas técnicas') ||
            msg.includes('reglamentos') ||
            msg.includes('normativa vigente') ||
            msg.includes('cne') ||
            msg.includes('rne') ||
            msg.includes('nfpa')
        ) {
            return botData.autoResponses.normas_reglamentos;
        }

        // ¿Ejecutan instalaciones eléctricas para oficinas, industrias y comercios?
        if (
            msg.includes('para oficinas') ||
            msg.includes('para industrias') ||
            msg.includes('para comercios') ||
            msg.includes('sector industrial') ||
            msg.includes('sector comercial') ||
            msg.includes('corporativo')
        ) {
            return botData.autoResponses.oficinas_industrias;
        }

        // ¿Atienden observaciones después de la entrega?
        if (
            msg.includes('despues de la entrega') ||
            msg.includes('después de la entrega') ||
            msg.includes('post entrega') ||
            msg.includes('observaciones posteriores') ||
            msg.includes('atienden despues') ||
            msg.includes('postventa') ||
            msg.includes('post venta')
        ) {
            return botData.autoResponses.observaciones_postventa;
        }

        // ¿Qué diferencia a EJECUTA de otras empresas?
        if (
            msg.includes('que los diferencia') ||
            msg.includes('qué los diferencia') ||
            msg.includes('diferencia con otros') ||
            msg.includes('por que elegirlos') ||
            msg.includes('por qué elegirlos') ||
            msg.includes('ventaja competitiva') ||
            msg.includes('que los hace diferentes') ||
            msg.includes('destacan')
        ) {
            return botData.autoResponses.diferencia_otras;
        }

        // ¿Pueden mostrar proyectos ejecutados o referencias?
        if (
            msg.includes('mostrar proyectos') ||
            msg.includes('ver proyectos') ||
            msg.includes('referencias') ||
            msg.includes('portafolio') ||
            msg.includes('trabajos anteriores') ||
            msg.includes('obras realizadas') ||
            msg.includes('galeria') ||
            msg.includes('brochure')
        ) {
            return botData.autoResponses.referencias_proyectos;
        }

        // Tengo planos y quiero evaluarlos
        if (
            msg.includes('tengo planos') ||
            msg.includes('evaluar planos') ||
            msg.includes('revisar planos') ||
            msg.includes('analizar planos') ||
            msg.includes('quiero que revisen')
        ) {
            return botData.autoResponses.evaluacion_planos;
        }

        // ¿Pueden visitar mi obra?
        if (
            msg.includes('visitar mi obra') ||
            msg.includes('visita tecnica') ||
            msg.includes('visita técnica') ||
            msg.includes('pueden venir') ||
            msg.includes('venir a evaluar') ||
            msg.includes('inspección previa') ||
            msg.includes('inspeccion previa')
        ) {
            return botData.autoResponses.visita_obra;
        }

        // ¿Cómo empiezo mi proyecto con EJECUTA?
        if (
            msg.includes('como empiezo') ||
            msg.includes('cómo empiezo') ||
            msg.includes('como inicio') ||
            msg.includes('como comienzo') ||
            msg.includes('primer paso') ||
            msg.includes('como arranco') ||
            msg.includes('proceso de inicio')
        ) {
            return botData.autoResponses.como_empezar;
        }

        // ¿La cotización incluye materiales y mano de obra?
        if (
            msg.includes('cotizacion incluye') ||
            msg.includes('cotización incluye') ||
            msg.includes('incluye materiales') ||
            msg.includes('incluye mano de obra') ||
            msg.includes('que incluye la cotizacion') ||
            msg.includes('qué incluye la cotización')
        ) {
            return botData.autoResponses.cotizacion_incluye;
        }

        // ¿Ofrecen alternativas técnicas según presupuesto?
        if (
            msg.includes('alternativas') ||
            msg.includes('opciones segun presupuesto') ||
            msg.includes('opciones según presupuesto') ||
            msg.includes('ajustar a mi presupuesto') ||
            msg.includes('presupuesto limitado') ||
            msg.includes('alternativas economicas') ||
            msg.includes('alternativas económicas')
        ) {
            return botData.autoResponses.alternativas_presupuesto;
        }

        // ¿Qué información necesitan para cotizar un proyecto?
        if (
            msg.includes('informacion para cotizar') ||
            msg.includes('información para cotizar') ||
            msg.includes('que necesitan para cotizar') ||
            msg.includes('qué necesitan para cotizar') ||
            msg.includes('requisitos para cotizar') ||
            msg.includes('datos para cotizar')
        ) {
            return botData.autoResponses.info_para_cotizar;
        }

        // ¿Cómo manejan los cambios o imprevistos en obra?
        if (
            msg.includes('cambios en obra') ||
            msg.includes('imprevistos') ||
            msg.includes('modificaciones') ||
            msg.includes('cambios durante') ||
            msg.includes('surgen cambios') ||
            msg.includes('orden de cambio')
        ) {
            return botData.autoResponses.cambios_imprevistos;
        }

        // ¿Quién supervisa la ejecución en campo?
        if (
            msg.includes('quien supervisa') ||
            msg.includes('quién supervisa') ||
            msg.includes('supervision en campo') ||
            msg.includes('supervisión en campo') ||
            msg.includes('residente de obra') ||
            msg.includes('ingeniero residente') ||
            msg.includes('quien esta a cargo')
        ) {
            return botData.autoResponses.supervision_campo;
        }

        // ¿Trabajan con cronogramas y planificación técnica?
        if (
            msg.includes('cronograma') ||
            msg.includes('planificacion') ||
            msg.includes('planificación') ||
            msg.includes('calendario de obra') ||
            msg.includes('fechas de entrega') ||
            msg.includes('plazos detallados')
        ) {
            return botData.autoResponses.cronogramas_planificacion;
        }

        // ¿Cómo aseguran el cumplimiento de plazos?
        if (
            msg.includes('cumplimiento de plazos') ||
            msg.includes('cumplen los plazos') ||
            msg.includes('aseguran plazos') ||
            msg.includes('garantizan fechas') ||
            msg.includes('puntualidad') ||
            msg.includes('retrasos')
        ) {
            return botData.autoResponses.cumplimiento_fechas;
        }

        // ¿Cómo gestionan el control de calidad en obra?
        if (
            msg.includes('control de calidad') ||
            msg.includes('gestion de calidad') ||
            msg.includes('gestión de calidad') ||
            msg.includes('aseguran calidad') ||
            msg.includes('calidad en obra') ||
            msg.includes('supervision de calidad')
        ) {
            return botData.autoResponses.control_calidad_obra;
        }

        // ¿Realizan pruebas y protocolos de funcionamiento?
        if (
            msg.includes('pruebas de funcionamiento') ||
            msg.includes('protocolos') ||
            msg.includes('ensayos tecnicos') ||
            msg.includes('ensayos técnicos') ||
            msg.includes('certificacion') ||
            msg.includes('certificación')
        ) {
            return botData.autoResponses.pruebas_protocolos;
        }

        // ¿Realizan solo instalaciones o también diseño y supervisión?
        if (
            msg.includes('solo instalaciones') ||
            msg.includes('tambien diseño') ||
            msg.includes('también diseño') ||
            msg.includes('tambien supervision') ||
            msg.includes('también supervisión') ||
            msg.includes('servicio completo') ||
            msg.includes('servicio integral')
        ) {
            return botData.autoResponses.instalacion_diseno_supervision;
        }

        // ¿Cómo controlan la calidad durante la ejecución?
        if (
            msg.includes('controlan durante ejecucion') ||
            msg.includes('controlan durante ejecución') ||
            msg.includes('calidad durante obra') ||
            msg.includes('seguimiento de calidad')
        ) {
            return botData.autoResponses.control_durante_ejecucion;
        }

        // ¿Realizan visitas técnicas o evaluaciones previas?
        if (
            msg.includes('visitas tecnicas') ||
            msg.includes('visitas técnicas') ||
            msg.includes('evaluaciones previas') ||
            msg.includes('evaluacion previa') ||
            msg.includes('evaluación previa')
        ) {
            return botData.autoResponses.visitas_evaluaciones;
        }

        // ¿Cómo es el proceso de trabajo desde el primer contacto?
        if (
            msg.includes('proceso de trabajo') ||
            msg.includes('como es el proceso') ||
            msg.includes('cómo es el proceso') ||
            msg.includes('desde el primer contacto') ||
            msg.includes('flujo de trabajo')
        ) {
            return botData.autoResponses.proceso_primer_contacto;
        }

        // ¿Qué pasa si surgen cambios durante la ejecución?
        if (
            msg.includes('surgen cambios') ||
            msg.includes('cambios durante la ejecucion') ||
            msg.includes('cambios durante la ejecución') ||
            msg.includes('modificaciones en obra')
        ) {
            return botData.autoResponses.cambios_durante_proyecto;
        }

        // ¿Mantienen comunicación constante durante el proyecto?
        if (
            msg.includes('comunicacion constante') ||
            msg.includes('comunicación constante') ||
            msg.includes('mantienen comunicacion') ||
            msg.includes('mantienen comunicación') ||
            msg.includes('informan avances') ||
            msg.includes('reportes de avance')
        ) {
            return botData.autoResponses.comunicacion_proyecto;
        }

        // ¿Cómo sé que son de confiar? / ¿Por qué tengo que confiar en ustedes?
        if (
            msg.includes('como se que son de confiar') ||
            msg.includes('cómo sé que son de confiar') ||
            msg.includes('por que confiar') ||
            msg.includes('por qué confiar') ||
            msg.includes('son confiables') ||
            msg.includes('puedo confiar') ||
            msg.includes('como confiar') ||
            msg.includes('garantia de confianza')
        ) {
            return botData.autoResponses.confianza_ejecuta;
        }

        // ============================================
        // RESPUESTAS PREVIAS (mantenidas)
        // ============================================

        // Preguntas sobre precios y costos
        if (msg.includes('precio') || msg.includes('costo') || msg.includes('cuanto cuesta') || msg.includes('cotiza') || msg.includes('presupuesto')) {
            return botData.autoResponses.precio;
        }

        // Preguntas sobre tiempo y plazos
        if (msg.includes('tiempo') || msg.includes('plazo') || msg.includes('demora') || msg.includes('cuanto demora') || msg.includes('duración') || msg.includes('cuando')) {
            return botData.autoResponses.tiempo;
        }

        // Preguntas sobre garantía
        if (msg.includes('garantia') || msg.includes('garantía') || msg.includes('soporte') || msg.includes('post')) {
            return botData.autoResponses.garantia;
        }

        // Preguntas sobre materiales
        if (msg.includes('material') || msg.includes('marcas') || msg.includes('equipos') || msg.includes('certificado')) {
            return botData.autoResponses.materiales;
        }

        // Preguntas sobre el equipo
        if (msg.includes('equipo') || msg.includes('personal') || msg.includes('ingeniero') || msg.includes('técnico') || msg.includes('profesional')) {
            return botData.autoResponses.equipo;
        }

        // Preguntas sobre ubicación y zona
        if (msg.includes('zona') || msg.includes('donde') || msg.includes('ubicación') || msg.includes('ubicacion') || msg.includes('lima') || msg.includes('direccion') || msg.includes('dirección') || msg.includes('encuentro')) {
            return botData.autoResponses.ubicacion;
        }

        // Preguntas sobre horario
        if (msg.includes('horario') || msg.includes('hora') || msg.includes('atienden') || msg.includes('abierto') || msg.includes('disponible')) {
            return botData.autoResponses.horario;
        }

        // Preguntas sobre contacto
        if (msg.includes('contacto') || msg.includes('contactar') || msg.includes('comunicar') || msg.includes('llamar') || msg.includes('escribir') || msg.includes('teléfono') || msg.includes('telefono') || msg.includes('email') || msg.includes('correo')) {
            return botData.autoResponses.contacto;
        }

        // Preguntas sobre inicio de proyecto
        if (msg.includes('empezar') || msg.includes('comenzar') || msg.includes('iniciar') || msg.includes('arrancar') || msg.includes('inicio')) {
            return botData.autoResponses.inicio;
        }

        // Preguntas sobre planos
        if (msg.includes('plano') || msg.includes('diseño') || msg.includes('diseñan')) {
            return botData.autoResponses.planos;
        }

        // Preguntas sobre inspección
        if (msg.includes('inspección') || msg.includes('inspeccion') || msg.includes('visita') || msg.includes('evaluación') || msg.includes('evaluacion')) {
            return botData.autoResponses.inspeccion;
        }

        // Preguntas sobre tipo de proyecto (integral o especialidad)
        if (msg.includes('integral') || msg.includes('especialidad') || msg.includes('completo') || msg.includes('parcial')) {
            return botData.autoResponses.integral;
        }

        // Preguntas sobre cumplimiento de plazos
        if (msg.includes('cumplen') || msg.includes('retraso') || msg.includes('puntual')) {
            return botData.autoResponses.plazos;
        }

        // Preguntas sobre seguridad
        if (msg.includes('seguridad') || msg.includes('epp') || msg.includes('protección') || msg.includes('proteccion') || msg.includes('accidente')) {
            return botData.autoResponses.seguridad;
        }

        // Preguntas sobre normas
        if (msg.includes('norma') || msg.includes('reglamento') || msg.includes('código') || msg.includes('codigo')) {
            return botData.autoResponses.normas;
        }

        // Preguntas sobre integración a proyectos
        if (msg.includes('integra') || msg.includes('unir') || msg.includes('continua') || msg.includes('obra iniciada')) {
            return botData.autoResponses.integracion;
        }

        // Preguntas sobre sectores
        if (msg.includes('sector') || msg.includes('público') || msg.includes('publico') || msg.includes('privado') || msg.includes('minería') || msg.includes('mineria')) {
            return botData.autoResponses.sectores;
        }

        // Preguntas sobre la empresa
        if (msg.includes('empresa') || msg.includes('ejecuta') || msg.includes('quienes son') || msg.includes('quiénes') || msg.includes('que es') || msg.includes('qué es') || msg.includes('historia') || msg.includes('experiencia')) {
            return botData.autoResponses.empresa;
        }

        // Preguntas sobre servicios
        if (msg.includes('servicio') || msg.includes('qué hacen') || msg.includes('que hacen') || msg.includes('realizan') || msg.includes('ofrecen') || msg.includes('especialidad')) {
            return botData.autoResponses.servicios;
        }

        // Preguntas sobre proyectos realizados
        if (msg.includes('proyecto') || msg.includes('obra') || msg.includes('han hecho') || msg.includes('realizado') || msg.includes('ejecutado') || msg.includes('referencia')) {
            return botData.autoResponses.proyectos;
        }

        // Preguntas sobre valores
        if (msg.includes('valor') || msg.includes('principio') || msg.includes('filosofía') || msg.includes('filosofia') || msg.includes('cultura')) {
            return botData.autoResponses.valores;
        }

        // Preguntas sobre misión
        if (msg.includes('misión') || msg.includes('mision') || msg.includes('propósito') || msg.includes('proposito')) {
            return botData.autoResponses.mision;
        }

        // Preguntas sobre visión
        if (msg.includes('visión') || msg.includes('vision') || msg.includes('futuro') || msg.includes('aspiración') || msg.includes('aspiracion') || msg.includes('meta')) {
            return botData.autoResponses.vision;
        }

        // Preguntas sobre diferencial
        if (msg.includes('diferencia') || msg.includes('destaca') || msg.includes('mejor') || msg.includes('ventaja') || msg.includes('competencia') || msg.includes('elegir')) {
            return botData.autoResponses.diferencial;
        }

        // Servicios específicos - Eléctrico
        if (msg.includes('eléctric') || msg.includes('electric') || msg.includes('luz') || msg.includes('cable') || msg.includes('tablero') || msg.includes('acometida')) {
            const servicios = botData.categories.find(c => c.id === 'servicios');
            return servicios.responses.electrico;
        }

        // Servicios específicos - Sanitario
        if (msg.includes('sanitari') || msg.includes('agua') || msg.includes('desagüe') || msg.includes('desague') || msg.includes('tubería') || msg.includes('tuberia') || msg.includes('bombeo')) {
            const servicios = botData.categories.find(c => c.id === 'servicios');
            return servicios.responses.sanitario;
        }

        // Servicios específicos - Contra incendio
        if (msg.includes('incendio') || msg.includes('fuego') || msg.includes('rociador') || msg.includes('extintor') || msg.includes('detección') || msg.includes('deteccion') || msg.includes('alarma')) {
            const servicios = botData.categories.find(c => c.id === 'servicios');
            return servicios.responses.incendio;
        }

        // Servicios específicos - Comunicaciones
        if (msg.includes('comunica') || msg.includes('red') || msg.includes('datos') || msg.includes('fibra') || msg.includes('cctv') || msg.includes('cámara') || msg.includes('camara') || msg.includes('telefon')) {
            const servicios = botData.categories.find(c => c.id === 'servicios');
            return servicios.responses.comunicaciones;
        }

        // Saludos
        if (msg.includes('hola') || msg.includes('buenos') || msg.includes('buenas') || msg.includes('buen día') || msg.includes('buen dia')) {
            return "¡Hola! Gracias por escribir. ¿En qué puedo ayudarte hoy? Puedes seleccionar un tema de la izquierda o preguntarme directamente.";
        }

        // Agradecimientos
        if (msg.includes('gracias') || msg.includes('thank')) {
            return "¡De nada! Estoy para ayudarte. Si tienes más dudas, no dudes en preguntar.";
        }

        // Despedidas
        if (msg.includes('adiós') || msg.includes('adios') || msg.includes('chau') || msg.includes('bye')) {
            return "¡Hasta pronto! Si necesitas algo más, estaré aquí para ayudarte. ¡Que tengas un excelente día!";
        }

        // Respuesta por defecto
        return botData.autoResponses.default;
    };

    // Manejar acción rápida
    const handleQuickAction = (action) => {
        addUserMessage(action);
        const response = generateAutoResponse(action);
        addBotMessage(response, 1400);
    };

    // Abrir WhatsApp
    const handleWhatsApp = () => {
        window.open(`${botData.company.whatsapp.includes('wa.me') ? botData.company.whatsapp : `https://wa.me/${botData.company.whatsapp.replace(/\+/g, '')}`}?text=${encodeURIComponent('Hola, vengo desde el chatbot de la web y me gustaría recibir información.')}`, '_blank');
    };

    // Reiniciar chat
    const handleRestart = () => {
        setMessages([]);
        setSelectedCategory(null);
        addBotMessage(botData.welcome.greeting);
        setTimeout(() => addBotMessage(botData.welcome.message), 1600);
        setTimeout(() => addBotMessage(botData.welcome.cta), 3200);
    };

    return (
        <>
            <button
                className={`ejecuta_chatbot_trigger ${open ? 'open' : ''}`}
                onClick={() => setOpen(!open)}
                aria-label="Abrir asistente virtual"
            >
                <i className={`fas ${open ? 'fa-times' : 'fa-comments'}`}></i>
                <span className="ejecuta_chatbot_trigger_text">
                    {open ? 'Cerrar' : 'Asistente EJECUTA'}
                </span>
            </button>

            {open && (
                <div className="ejecuta_chatbot_container" ref={chatContainerRef}>

                    <aside className="ejecuta_chatbot_sidebar">
                        <div className="ejecuta_sidebar_header">
                            <img src={logoEjecuta} alt="Logo EJECUTA" />
                            <p>Temas de consulta</p>
                        </div>

                        <div className="ejecuta_sidebar_categories">
                            {botData.categories.map(category => (
                                <button
                                    key={category.id}
                                    className={`ejecuta_category_item ${selectedCategory?.id === category.id ? 'active' : ''}`}
                                    onClick={() => handleCategoryClick(category)}
                                >
                                    <span className="ejecuta_category_icon">
                                        <i className={`fas fa-${category.icon}`}></i>
                                    </span>
                                    <div className="ejecuta_category_info">
                                        <strong>{category.title}</strong>
                                        <small>{category.subtitle}</small>
                                    </div>
                                </button>
                            ))}
                        </div>

                        <button
                            className="ejecuta_sidebar_whatsapp"
                            onClick={handleWhatsApp}
                        >
                            <i className="fab fa-whatsapp"></i> Hablar con ingeniero
                        </button>
                    </aside>

                    <main className="ejecuta_chatbot_main">

                        <header className="ejecuta_chat_header">
                            <div className="ejecuta_chat_header_info">
                                <div className="ejecuta_chat_avatar">
                                    <i className="fas fa-robot"></i>
                                </div>
                                <div>
                                    <h4>Asistente Virtual EJECUTA</h4>
                                    <span className="ejecuta_chat_status">
                                        <span className="ejecuta_status_dot"></span>
                                        En línea
                                    </span>
                                </div>
                            </div>
                            <button
                                className="ejecuta_chat_restart"
                                onClick={handleRestart}
                                title="Reiniciar conversación"
                            >
                                <i className="fas fa-redo-alt"></i>
                            </button>
                        </header>

                        <div className="ejecuta_chat_messages">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`ejecuta_message ${msg.type}`}
                                >
                                    <div className="ejecuta_message_content">
                                        <p>{msg.text}</p>
                                        <span className="ejecuta_message_time">
                                            {msg.timestamp.toLocaleTimeString('es-PE', {
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </span>
                                    </div>
                                </div>
                            ))}

                            {/* Indicador de escritura */}
                            {isTyping && (
                                <div className="ejecuta_message bot">
                                    <div className="ejecuta_typing">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Acciones rápidas */}
                        <div className="ejecuta_quick_actions">
                            {botData.quickActions.map((action, index) => (
                                <button
                                    key={index}
                                    className="ejecuta_quick_action_btn"
                                    onClick={() => handleQuickAction(action)}
                                >
                                    {action}
                                </button>
                            ))}
                        </div>

                        {/* Input */}
                        <form
                            className="ejecuta_chat_input_form"
                            onSubmit={handleSendMessage}
                        >
                            <input
                                type="text"
                                className="ejecuta_chat_input"
                                placeholder="Escribe tu consulta aquí..."
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <button
                                type="submit"
                                className="ejecuta_chat_send_btn"
                                disabled={!inputValue.trim()}
                            >
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </form>

                    </main>

                </div>
            )}
        </>
    );
}