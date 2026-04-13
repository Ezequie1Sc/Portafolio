import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../../styles/Contact.css";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface NotificationState {
  show: boolean;
  type: "success" | "error" | "";
  message: string;
}

const SuccessIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <path d="M20 6L9 17L4 12" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ErrorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4M12 16h.01" strokeLinecap="round" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<NotificationState>({
    show: false,
    type: "",
    message: "",
  });

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Mínimo 3 caracteres";
    } else if (formData.name.trim().length > 50) {
      newErrors.name = "Máximo 50 caracteres";
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(formData.name.trim())) {
      newErrors.name = "Solo letras permitidas";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = "Email inválido";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "El asunto es requerido";
    } else if (formData.subject.trim().length < 4) {
      newErrors.subject = "Mínimo 4 caracteres";
    } else if (formData.subject.trim().length > 80) {
      newErrors.subject = "Máximo 80 caracteres";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Mínimo 10 caracteres";
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = "Máximo 1000 caracteres";
    }

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({ show: true, type, message });
    setTimeout(() => {
      setNotification({ show: false, type: "", message: "" });
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });

    if (!validateForm()) {
      showNotification("error", "Por favor corrige los errores del formulario");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_lr1bbpn",
        "template_04sljbp",
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        },
        "V4cRUy_nas2KUpQWU"
      );

      showNotification("success", "¡Mensaje enviado correctamente! Te responderé pronto.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTouched({});
      setErrors({});
    } catch (error) {
      console.error("EMAILJS ERROR:", error);
      showNotification("error", "Error al enviar el mensaje. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const messageLength = formData.message.length;
  const messageMaxLength = 1000;

  const fieldState = (field: keyof FormData) => {
    if (!touched[field]) return "";
    return errors[field] ? "has-error" : formData[field] ? "has-success" : "";
  };

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-grid-bg" />
      <div className="contact-light-left" />
      <div className="contact-light-right" />

      <div className="contact-container">

        {/* ===== HEADER ESTILO "CERTIFICACIONES" ===== */}
        <div className="contact-header">
          <h2 className="contact-title">Contacto</h2>
          <div className="contact-title-underline" />
          <p className="contact-description">
            ¿Tienes un proyecto en mente o quieres colaborar?
            Escríbeme y hablemos sobre cómo puedo ayudarte.
          </p>
        </div>

        {/* ===== LAYOUT ===== */}
        <div className="contact-layout">

          {/* COLUMNA IZQUIERDA */}
          <div className="contact-left">

            <a
              href="mailto:ezequielsc017@gmail.com"
              className="contact-card"
            >
              <div className="contact-card-icon icon-blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 6L12 13L2 6M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" strokeLinecap="round" />
                </svg>
              </div>
              <div className="contact-card-body">
                <span className="contact-card-label">Email</span>
                <span className="contact-card-value">ezequielsc017@gmail.com</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/ezequiel-salazar-194975340/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon icon-purple">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" strokeLinecap="round" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div className="contact-card-body">
                <span className="contact-card-label">LinkedIn</span>
                <span className="contact-card-value">Ezequiel Salazar</span>
              </div>
            </a>

            <a
              href="https://github.com/Ezequie1Sc"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon icon-pink">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" strokeLinecap="round" />
                </svg>
              </div>
              <div className="contact-card-body">
                <span className="contact-card-label">GitHub</span>
                 <span className="footer-social-user">@Ezequie1Sc</span>
              </div>
            </a>

            <div className="contact-divider" />

            <div className="availability-badge">
              <span className="availability-dot" />
              Disponible para proyectos
            </div>

            <div className="response-note">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" strokeLinecap="round" />
              </svg>
              Tiempo de respuesta: 24–48 horas
            </div>

          </div>

          {/* COLUMNA DERECHA */}
          <div className="contact-right">
            <div className="contact-form-card">

              {notification.show && (
                <div className={`contact-notification ${notification.type}`}>
                  <div className="notification-icon">
                    {notification.type === "success" ? <SuccessIcon /> : <ErrorIcon />}
                  </div>
                  <span className="notification-text">{notification.message}</span>
                  <button
                    className="notification-close"
                    onClick={() => setNotification({ show: false, type: "", message: "" })}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div className="notification-progress" />
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form" noValidate>

                {/* Fila: Nombre + Email */}
                <div className="form-row">
                  <div className={`form-field ${fieldState("name")}`}>
                    <label htmlFor="name" className="field-label">Nombre</label>
                    <div className="input-wrapper">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Tu nombre completo"
                        className="field-input"
                        disabled={loading}
                        autoComplete="name"
                      />
                      {touched.name && !errors.name && formData.name && (
                        <span className="input-icon success-icon"><SuccessIcon /></span>
                      )}
                      {touched.name && errors.name && (
                        <span className="input-icon error-icon"><ErrorIcon /></span>
                      )}
                    </div>
                    {touched.name && errors.name && (
                      <span className="field-error">{errors.name}</span>
                    )}
                  </div>

                  <div className={`form-field ${fieldState("email")}`}>
                    <label htmlFor="email" className="field-label">Email</label>
                    <div className="input-wrapper">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="tu@email.com"
                        className="field-input"
                        disabled={loading}
                        autoComplete="email"
                      />
                      {touched.email && !errors.email && formData.email && (
                        <span className="input-icon success-icon"><SuccessIcon /></span>
                      )}
                      {touched.email && errors.email && (
                        <span className="input-icon error-icon"><ErrorIcon /></span>
                      )}
                    </div>
                    {touched.email && errors.email && (
                      <span className="field-error">{errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Campo: Asunto */}
                <div className={`form-field ${fieldState("subject")}`}>
                  <label htmlFor="subject" className="field-label">Asunto</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="¿De qué trata tu mensaje?"
                      className="field-input"
                      disabled={loading}
                    />
                    {touched.subject && !errors.subject && formData.subject && (
                      <span className="input-icon success-icon"><SuccessIcon /></span>
                    )}
                    {touched.subject && errors.subject && (
                      <span className="input-icon error-icon"><ErrorIcon /></span>
                    )}
                  </div>
                  {touched.subject && errors.subject && (
                    <span className="field-error">{errors.subject}</span>
                  )}
                </div>

                {/* Campo: Mensaje */}
                <div className={`form-field ${fieldState("message")}`}>
                  <label htmlFor="message" className="field-label">Mensaje</label>
                  <div className="input-wrapper">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Cuéntame sobre tu proyecto, idea o consulta..."
                      rows={6}
                      className="field-textarea"
                      disabled={loading}
                    />
                  </div>
                  <div className="field-footer">
                    {touched.message && errors.message ? (
                      <span className="field-error">{errors.message}</span>
                    ) : (
                      <span />
                    )}
                    <span
                      className={`char-counter ${
                        messageLength > 900 && messageLength <= messageMaxLength
                          ? "counter-warning"
                          : messageLength > messageMaxLength
                          ? "counter-error"
                          : ""
                      }`}
                    >
                      {messageLength}/{messageMaxLength}
                    </span>
                  </div>
                </div>

                {/* Botón */}
                <button
                  type="submit"
                  className={`submit-button ${loading ? "loading" : ""}`}
                  disabled={loading || !isValid}
                >
                  {loading ? (
                    <>
                      <span className="spinner" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <span>Enviar mensaje</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;