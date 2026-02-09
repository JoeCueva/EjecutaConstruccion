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
            }, index * 2200);
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

    // Generar respuesta automática inteligente mejorada
    const generateAutoResponse = (userMessage) => {
        const msg = userMessage.toLowerCase();

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
        if (msg.includes('plazo') || msg.includes('cumplen') || msg.includes('retraso') || msg.includes('puntual')) {
            return botData.autoResponses.plazos;
        }

        // Preguntas sobre seguridad
        if (msg.includes('seguridad') || msg.includes('epp') || msg.includes('protección') || msg.includes('proteccion') || msg.includes('accidente')) {
            return botData.autoResponses.seguridad;
        }

        // Preguntas sobre normas
        if (msg.includes('norma') || msg.includes('reglamento') || msg.includes('código') || msg.includes('codigo') || msg.includes('cne') || msg.includes('nfpa')) {
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
            {/* Botón flotante circular con icono */}
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

            {/* Panel del chatbot */}
            {open && (
                <div className="ejecuta_chatbot_container" ref={chatContainerRef}>

                    {/* SIDEBAR IZQUIERDO - Categorías */}
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

                    {/* ÁREA PRINCIPAL - Chat */}
                    <main className="ejecuta_chatbot_main">

                        {/* Header del chat */}
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

                        {/* Mensajes */}
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