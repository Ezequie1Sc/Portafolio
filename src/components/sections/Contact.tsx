import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "../../styles/Contact.css";
import {
  SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss, SiNodedotjs,
  SiPython, SiGit, SiGithub, SiMongodb, SiPostgresql, SiFlutter,
  SiDart, SiFirebase, SiAngular, SiVite
} from "react-icons/si";

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

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
  </svg>
);

// --- NUBE 3D DE TECNOLOGÍAS ---
const techCloudIcons = [
  { icon: <SiJavascript />, className: "javascript", x: -55, y: -65, z: 80, s: 1.15 },
  { icon: <SiTypescript />, className: "typescript", x: 20, y: -80, z: 45, s: 1.05 },
  { icon: <SiHtml5 />, className: "html", x: 78, y: -45, z: 70, s: 1.2 },
  { icon: <SiCss />, className: "css", x: -85, y: -15, z: 20, s: 0.9 },
  { icon: <SiReact />, className: "react", x: -35, y: 20, z: 95, s: 0.95 },
  { icon: <SiNodedotjs />, className: "node", x: 25, y: 35, z: 65, s: 1.15 },
  { icon: <SiPython />, className: "python", x: 88, y: 18, z: 10, s: 0.85 },
  { icon: <SiGit />, className: "git", x: -70, y: 70, z: 55, s: 0.95 },
  { icon: <SiGithub />, className: "github", x: 8, y: 82, z: 20, s: 1.05 },
  { icon: <SiMongodb />, className: "mongodb", x: -95, y: -70, z: -45, s: 0.85 },
  { icon: <SiPostgresql />, className: "postgres", x: 95, y: -78, z: -30, s: 1 },
  { icon: <SiFlutter />, className: "flutter", x: 70, y: 70, z: -40, s: 0.9 },
  { icon: <SiDart />, className: "dart", x: -10, y: -10, z: -85, s: 0.8 },
  { icon: <SiFirebase />, className: "firebase", x: -95, y: 35, z: -65, s: 1.1 },
  { icon: <SiAngular />, className: "angular", x: 40, y: -10, z: -70, s: 0.9 },
  { icon: <SiVite />, className: "vite", x: -20, y: 58, z: -20, s: 0.85 },
];

const TechSphere = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 34;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -34;

    setTilt({ x: y, y: x });
  };

  return (
    <div
      className="tech-cloud-scene"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <div
        className="tech-cloud"
        style={
          {
            "--tilt-x": `${tilt.x}deg`,
            "--tilt-y": `${tilt.y}deg`,
          } as React.CSSProperties
        }
      >
        {techCloudIcons.map((tech, index) => (
          <span
            key={index}
            className={`cloud-tech-icon ${tech.className}`}
            style={
              {
                "--x": `${tech.x}px`,
                "--y": `${tech.y}px`,
                "--z": `${tech.z}px`,
                "--s": tech.s,
              } as React.CSSProperties
            }
          >
            {tech.icon}
          </span>
        ))}
      </div>
    </div>
  );
};

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
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
        <div className="contact-layout">
          
          {/* COLUMNA IZQUIERDA - FORMULARIO */}
          <div className="contact-left">
            <div className="contact-form-wrapper">
              
              {/* Título y Subtítulo con animación de entrada */}
              <div className="contact-header">
                <h2 className="contact-title">
                  Cuéntame sobre <span className="title-highlight">tu proyecto</span>
                </h2>
                <p className="contact-subtitle">
                  Completa el formulario y te responderé a la brevedad
                </p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="form-row">
                  <div className={`form-field ${fieldState("name")}`}>
                    <label htmlFor="name" className="field-label">NOMBRE</label>
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
                    <label htmlFor="email" className="field-label">EMAIL</label>
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

                <div className={`form-field ${fieldState("subject")}`}>
                  <label htmlFor="subject" className="field-label">ASUNTO</label>
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

                <div className={`form-field ${fieldState("message")}`}>
                  <label htmlFor="message" className="field-label">MENSAJE</label>
                  <div className="input-wrapper">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Cuéntame sobre tu proyecto, idea o consulta..."
                      rows={5}
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
                    <span className="char-counter">{messageLength}/{messageMaxLength}</span>
                  </div>
                </div>

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
                      <span>ENVIAR MENSAJE</span>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* COLUMNA DERECHA - NUBE 3D Y CONTACTO */}
          <div className="contact-right">
            
            {/* Contenedor de la Nube 3D */}
            <div className="contact-globe-card">
              <div className="globe-wrapper">
                <TechSphere />
              </div>

              <div className="invitation-text">
                <p className="invitation-headline">
                  Tienes las <em>ideas</em>, <br />
                  yo tengo las <em>habilidades</em>. <br />
                  <span className="invitation-highlight">¡Trabajemos juntos!</span>
                </p>
              </div>
            </div>

            {/* Enlaces de contacto rápidos */}
            <div className="contact-links-grid">
              <a href="mailto:ezequielsc017@gmail.com" className="contact-link">
                <div className="link-icon icon-blue">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 6L12 13L2 6M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="link-content">
                  <span className="link-label">Email</span>
                  <span className="link-value">ezequielsc017@gmail.com</span>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/ezequiel-salazar-194975340/" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="link-icon icon-purple">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" strokeLinecap="round" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div className="link-content">
                  <span className="link-label">LinkedIn</span>
                  <span className="link-value">Ezequiel Salazar</span>
                </div>
              </a>

              <a href="https://github.com/Ezequie1Sc" target="_blank" rel="noopener noreferrer" className="contact-link">
                <div className="link-icon icon-pink">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" strokeLinecap="round" />
                  </svg>
                </div>
                <div className="link-content">
                  <span className="link-label">GitHub</span>
                  <span className="link-value">@Ezequie1Sc</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {notification.show && (
        <div className={`toast-notification ${notification.type}`}>
          <div className="toast-icon">
            {notification.type === "success" ? <SuccessIcon /> : <ErrorIcon />}
          </div>
          <span className="toast-message">{notification.message}</span>
          <button className="toast-close" onClick={() => setNotification({ show: false, type: "", message: "" })}>
            <CloseIcon />
          </button>
          <div className="toast-progress" />
        </div>
      )}
    </section>
  );
};

export default Contact;