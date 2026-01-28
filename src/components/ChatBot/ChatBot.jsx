import { useEffect, useState } from "react";
import botData from "./ChatBot.json";
import "./ChatBot.css";

export default function EjecutaChatbot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [typing, setTyping] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });

    useEffect(() => {
        if (open && messages.length === 0) {
            simulateBotMessage(botData.welcome);
        }
    }, [open]);

    const simulateBotMessage = (text) => {
        setTyping(true);
        setTimeout(() => {
            setMessages((prev) => [...prev, { sender: "bot", text }]);
            setTyping(false);
        }, 900);
    };

    const handleOption = (option) => {
        setMessages((prev) => [...prev, { sender: "user", text: option.label }]);
        simulateBotMessage(botData.responses[option.value]);
        if (option.value === "quote") setShowForm(true);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setMessages((prev) => [
            ...prev,
            { sender: "user", text: `Cotización enviada: ${formData.nombre}, ${formData.email}` }
        ]);
        simulateBotMessage("Gracias por tu solicitud. Nos pondremos en contacto pronto.");
        setShowForm(false);
        setFormData({ nombre: "", email: "", mensaje: "" });
    };

    return (
        <>
            {!open && (
                <div className="chatbot-button" onClick={() => setOpen(true)}>💬</div>
            )}

            {open && (
                <div className="chatbot-wrapper">
                    {/* Menú lateral */}
                    <div className="chatbot-sidebar">
                        {botData.options.map((opt, i) => (
                            <button key={i} onClick={() => handleOption(opt)} className="sidebar-option">
                                {opt.label}
                            </button>
                        ))}
                        <a
                            href={`https://wa.me/${botData.whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="sidebar-whatsapp"
                        >
                            📲 WhatsApp Directo
                        </a>
                    </div>

                    {/* Ventana de chat */}
                    <div className="chatbot-container">
                        <div className="chatbot-header">
                            Asistente EJECUTA
                            <span className="chatbot-close" onClick={() => setOpen(false)}>✕</span>
                        </div>

                        <div className="chatbot-body">
                            {messages.map((m, i) => (
                                <div key={i} className={`chat-message ${m.sender}`}>
                                    {m.text}
                                </div>
                            ))}
                            {typing && <div className="typing">EJECUTA está escribiendo…</div>}
                        </div>

                        <div className="chatbot-footer">
                            {showForm && (
                                <form onSubmit={handleFormSubmit} className="chat-form">
                                    <input
                                        type="text"
                                        placeholder="Tu nombre"
                                        value={formData.nombre}
                                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                                        required
                                    />
                                    <input
                                        type="email"
                                        placeholder="Tu correo"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                    <textarea
                                        placeholder="Describe tu proyecto"
                                        value={formData.mensaje}
                                        onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                                        required
                                    />
                                    <button type="submit" className="chat-submit">Enviar</button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
