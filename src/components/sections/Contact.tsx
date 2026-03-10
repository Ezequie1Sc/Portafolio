import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // --- MEJORA: Estado para la notificación ---
  const [notification, setNotification] = useState({
    show: false,
    type: "", // 'success' o 'error'
    message: "",
  });
  // -----------------------------------------

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ show: true, type, message });
    // Ocultar después de 4 segundos
    setTimeout(() => {
      setNotification({ show: false, type: '', message: '' });
    }, 4000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_lr1bbpn",
        "template_04sljbp",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "V4cRUy_nas2KUpQWU"
      );

      // --- Mostrar notificación de ÉXITO ---
      showNotification('success', '¡Mensaje enviado con éxito!');
      // ------------------------------------

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log("EMAILJS ERROR:", error);
      // --- Mostrar notificación de ERROR ---
      showNotification('error', 'Error al enviar el mensaje. Inténtalo nuevamente.');
      // ------------------------------------
    }
    setLoading(false);
  };

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">Conectemos Nuestras Ideas</h2>
          <p className="contact-subtitle">
            ¿Listo para comenzar tu próximo proyecto? Envíame un mensaje y
            hablemos.
          </p>
        </div>

        <div className="contact-form-container">
          {/* --- NUEVA NOTIFICACIÓN EMERGENTE (Toast) --- */}
          {notification.show && (
            <div className={`notification-toast ${notification.type}`}>
              <div className="notification-content">
                <span className="notification-icon">
                  {notification.type === 'success' ? '✅' : '❌'}
                </span>
                <span className="notification-message">{notification.message}</span>
              </div>
              <div className="notification-progress-bar"></div>
            </div>
          )}
          {/* ------------------------------------------- */}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Mensaje</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntame sobre tu proyecto..."
                rows={4}
                required
                className="form-textarea"
              />
            </div>

            <button
              type="submit"
              className="form-submit"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;