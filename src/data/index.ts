import type { Project, Skill, SocialLink, NavLink, Certificate } from '../types';

export const navLinks: NavLink[] = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Proyectos', href: '#proyectos' },
  { name: 'Habilidades', href: '#habilidades' },
  { name: 'Certificados', href: '#certificados' },
  { name: 'Contacto', href: '#contacto' },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ezequiel-salazar-194975340/',
    icon: '/icons/linkedin.svg',
    hoverColor: 'hover:text-blue-400',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/Ezequie1Sc',
    icon: '/icons/github.svg',
    hoverColor: 'hover:text-purple-400',
  },
];

export const certificates: Certificate[] = [
  
  {
  id: 11,
  title: 'Responsive Web Design Certification',
  issuer: 'freeCodeCamp',
  date: '2026',
  image: '/Certificates/diseñoweb.png',
  credentialUrl: '/Certificates/Certificado_EzequielWeb.pdf',
  skills: [
    'HTML',
    'CSS',
    'Diseño Web Responsivo',
    'Accesibilidad',
    'Flexbox',
    'CSS Grid'
  ],
  category: 'programacion'
},
{
  id: 12,
  title: 'Foundational C# with Microsoft Certification',
  issuer: 'Microsoft',
  date: '2026',
  image: '/Certificates/csharp.png',
  credentialUrl: '/Certificates/csharp.pdf',
  skills: [
    'C# Fundamentals',
    'Variables & Data Types',
    'Control Structures',
    'Object-Oriented Programming',
    'Software Development Basics'
  ],
  category: 'programacion'
},
{
    id: 13,
    title: 'Desarrollo con IA',
    issuer: 'BIG school',
    date: '2026',
    image: '/Certificates/IADesarrollo.png',
    credentialUrl: '/Certificates/IADesarrollo.pdf',
    skills: ['Desarrollo con IA', 'Fundamentos de IA', 'Aplicaciones Prácticas'],
    category: 'ia'
},

  {
    id: 1,
    title: 'Python Programming',
    issuer: 'Cisco Networking Academy',
    date: '2026',
    image: '/Certificates/python.png',
    credentialUrl: '/Certificates/PythonEssentials.pdf',
    skills: ['Python', 'Automatización', 'Scripting', 'Fundamentos'],
    category: 'programacion'
  },
  {
    id: 9,
    title: 'Python Essentials',
    issuer: 'Cisco Networking Academy',
    date: '2026',
    image: '/Certificates/im.png',
    credentialUrl: '/Certificates/PythonEssentials2.pdf',
    skills: ['Python', 'Programación Orientada a Objetos', 'Automatización', 'Estructuras de Datos', 'Control de Flujo', 'Scripting'],
    category: 'programacion'
  },
  {
    id: 2,
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: '2026',
    image: '/Certificates/IntroductionCibersecurity.png',
    credentialUrl: '/Certificates/cybersecurity.pdf',
    skills: ['Seguridad Informática', 'Protección de Redes', 'Ciberseguridad'],
    category: 'ciberseguridad'
  },
     {
  id: 10,
  title: 'Claude Code in Action',
  issuer: 'Anthropic',
  date: '2026-04-04',
  image: '/Certificates/code.png',  
  credentialUrl: '/Certificates/code.pdf',
  skills: ['Claude Code', 'AI Assistants', 'Code Generation', 'LLM Integration'],
  category: 'ia'
},

  {
    id: 3,
    title: 'Modern AI',
    issuer: 'Cisco',
    date: '2024',
    image: '/Certificates/modernIA.png',
    credentialUrl: '/Certificates/IntrotoModernAI.pdf',
    skills: ['Inteligencia Artificial', 'Machine Learning', 'IA Moderna'],
    category: 'ia'
  },
{
  "id": 4,
  "title": "Integración de Inteligencia Artificial en Escenarios de Aprendizaje",
  "issuer": "Tecnológico Nacional de México",
  "date": "2025-07-08",
  "image": "/Certificates/diplomaenseñanzaconIA.png",
  "credentialUrl": "/Certificates/DIPLOMA.pdf",
  "skills": ["Integración de IA en educación", "Escenarios de aprendizaje con IA", "IA aplicada a la docencia"],
  "category": "ia"
},
  {
    id: 5,
    title: 'English Level B1 Certification',
    issuer: 'Instituto Tecnologico Superior De Calkini',
    date: '2022',
    image: '/Certificates/constanciaB1ingles.png',
    credentialUrl: '/Certificates/constancia.pdf',
    skills: ['Inglés Intermedio', 'Comprensión', 'Comunicación'],
    category: 'idiomas'
  },
  {
    id: 6,
    title: 'Professional Communication',
    issuer: 'LinkedIn Learning',
    date: '2026',
    image: '/Certificates/professionalCommunication.png',
    credentialUrl: '/Certificates/Cert.pdf',
    skills: ['Comunicación Efectiva', 'Habilidades Profesionales', 'Soft Skills'],
    category: 'profesional'
  },
  {
    id: 7,
    title: 'Advanced SQL',
    issuer: 'Kaggle',
    date: '2026',
    image: '/Certificates/AdvancedSQL.png',
    credentialUrl: '/Certificates/AdvancedSQL.png',
    skills: ['Advanced SQL', 'JOINs', 'UNION', 'Window Functions', 'Query Optimization', 'BigQuery'],
    category: 'datos'
  },
  {
    id: 8,
    title: 'Intro to SQL',
    issuer: 'Kaggle',
    date: '2026',
    image: '/Certificates/IntrotoSQL.png',
    credentialUrl: '/Certificates/IntrotoSQL.png',
    skills: ['SQL', 'BigQuery', 'SELECT', 'GROUP BY', 'JOIN', 'Query Fundamentals'],
    category: 'datos'
  },
 

];

// ===== PROYECTOS CON TEXTOS ENRIQUECIDOS =====
export const projects: Project[] = [
  // ===== APLICACIONES MÓVILES =====
  {
    id: 1,
    title: 'Sigel ITC Mobile',
    description: 'Aplicación móvil para gestión académica que permite a estudiantes y profesores administrar inventario de laboratorios, entregar trabajos prácticos y realizar seguimiento de asignaciones.',
    image: '/proyectos/1.png',
    icon: '/icons/flutter.svg',
    type: 'mobile',
    technologies: [
      { name: 'Flutter', icon: '/icons/flutter.svg', bgColor: 'bg-blue-600' },
      { name: 'Dart', icon: '/icons/dart.svg', bgColor: 'bg-blue-500' },
      { name: 'Flask', icon: '/icons/flask.svg', bgColor: 'bg-gray-600' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg', bgColor: 'bg-blue-700' },
      { name: 'Python', icon: '/icons/python.svg', bgColor: 'bg-green-600' },
    ],
    images: ['/proyectos/9.png', '/proyectos/3.png', '/proyectos/4.png', '/proyectos/D_3.png', '/proyectos/D_4.png', '/proyectos/D_5.png', '/proyectos/D_6.png'],
    color: 'blue',
    github: 'https://github.com/Ezequie1Sc/SIGEL',
    problem: 'Estudiantes y profesores enfrentaban dificultades para gestionar inventarios de laboratorio, entregar trabajos prácticos y hacer seguimiento de asignaciones de manera centralizada.',
    solution: 'Sistema móvil integral con IA que automatiza la gestión académica, permitiendo control de inventario en tiempo real, entregas digitales y seguimiento personalizado.',
    howItWorks: [
      'API en Flask que procesa todas las solicitudes del sistema',
      'Base de datos PostgreSQL para almacenamiento seguro',
      'App Flutter con interfaz intuitiva',
      'Notificaciones push para recordatorios'
    ],
    impact: 'Reduce tiempos de gestión en un 65% y eliminó el 90% de errores en inventario.'
  },
  {
    id: 2,
    title: 'Barber Shop App',
    description: 'Aplicación integral para barberías que facilita la reserva de turnos, la compra de productos y la gestión de clientes.',
    image: '/proyectos/barberia/b_1.png',
    icon: '/icons/flutter.svg',
    type: 'mobile',
    technologies: [
      { name: 'Flutter', icon: '/icons/flutter.svg', bgColor: 'bg-blue-600' },
      { name: 'Dart', icon: '/icons/dart.svg', bgColor: 'bg-blue-500' },
      { name: 'Flask', icon: '/icons/flask.svg', bgColor: 'bg-gray-600' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg', bgColor: 'bg-blue-700' },
      { name: 'Python', icon: '/icons/python.svg', bgColor: 'bg-green-600' },
    ],
    images: ['/proyectos/barberia/b_2.png', '/proyectos/barberia/b_3.png', '/proyectos/barberia/b_4.png', '/proyectos/barberia/b_5.png'],
    color: 'purple',
    github: 'https://github.com/Ezequie1Sc/BarberApk',
    problem: 'Barberías perdían clientes por falta de sistema de reservas y mala gestión de turnos.',
    solution: 'App todo-en-uno que digitaliza reservas 24/7, catálogo de productos y sistema de fidelización.',
    howItWorks: [
      'Sincronización en tiempo real de disponibilidad',
      'Pasarela de pagos integrada',
      'Base de datos centralizada',
      'Notificaciones automáticas'
    ],
    impact: 'Aumentó reservas en 80% y generó 40% más ingresos por venta de productos.'
  },
 {
    id: 3,
    title: 'Invernadero Mobile',
    description: 'Sistema de monitoreo para invernaderos con visualización en tiempo real y control automático de riego.',
    image: '/proyectos/Invernadero/i_1.png',
    demoVideo: '/videos/InvernaderoAPK.mp4', // Video que se mostrará en la galería
    icon: '/icons/flutter.svg',
    type: 'mobile',
    technologies: [
      { name: 'Flutter', icon: '/icons/flutter.svg', bgColor: 'bg-blue-600' },
      { name: 'Dart', icon: '/icons/dart.svg', bgColor: 'bg-blue-500' },
      { name: 'Flask', icon: '/icons/flask.svg', bgColor: 'bg-gray-600' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg', bgColor: 'bg-blue-700' },
      { name: 'Python', icon: '/icons/python.svg', bgColor: 'bg-green-600' },
    ],
    images: ['/proyectos/Invernadero/i_2.png', '/proyectos/Invernadero/i_3.png'],
    color: 'green',
    github: 'https://github.com/Ezequie1Sc/ServerInvernadero',
    problem: 'Agricultores perdían cosechas por falta de monitoreo preciso y riego ineficiente.',
    solution: 'Sistema IoT con sensores que automatiza el riego basado en datos reales.',
    howItWorks: [
      'Sensores ESP32 miden condiciones cada 5 minutos',
      'Algoritmo decide cuándo activar el riego',
      'App muestra datos en tiempo real',
      'Alertas push para condiciones críticas'
    ],
    impact: 'Redujo consumo de agua en 60% y aumentó producción en 45%.'
},
  {
    id: 4,
    title: 'Vodka App Mobile',
    description: 'Aplicación para organización y seguimiento de torneos de fútbol con resultados en tiempo real.',
    image: '/v_1.webp',
    icon: '/icons/flutter.svg',
    type: 'mobile',
    technologies: [
      { name: 'Flutter', icon: '/icons/flutter.svg', bgColor: 'bg-blue-600' },
      { name: 'Dart', icon: '/icons/dart.svg', bgColor: 'bg-blue-500' },
      { name: 'Flask', icon: '/icons/flask.svg', bgColor: 'bg-gray-600' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg', bgColor: 'bg-blue-700' },
      { name: 'Python', icon: '/icons/python.svg', bgColor: 'bg-green-600' },
    ],
  images: ['/v_1.webp'],
color: 'green',
github: 'https://github.com/Ezequie1Sc',

problem: 'Los organizadores de torneos deportivos gestionan equipos y resultados de forma manual, lo que genera errores y pérdida de tiempo.',

solution: 'Aplicación en desarrollo que automatiza la gestión de torneos, incluyendo registro de equipos, resultados y generación de estadísticas en tiempo real.',

howItWorks: [
  'Registro de equipos y jugadores',
  'Ingreso rápido de resultados',
  'Cálculo automático de estadísticas',
  'Visualización de tabla de posiciones en tiempo real'
],

impact: 'Proyecto en desarrollo enfocado en optimizar la organización de torneos y reducir errores en el manejo de resultados.'
},

  {
    id: 5,
    title: 'VideoJuego',
    description: 'Juego arcade donde controlas un personaje que atrapa regalos mientras esquiva objetos peligrosos.',
    image: '/game.webp',
    icon: '/icons/flutter.svg',
    type: 'mobile',
    technologies: [
      { name: 'Flutter', icon: '/icons/flutter.svg', bgColor: 'bg-blue-600' },
      { name: 'Dart', icon: '/icons/dart.svg', bgColor: 'bg-blue-500' },
    ],
    images: ['/game1.webp'],
    color: 'orange',
    github: 'https://github.com/Ezequie1Sc/love_apk',
   problem: 'Falta de opciones de entretenimiento rápido y accesible para sesiones cortas en dispositivos móviles.',
    solution: 'Juego arcade que mejora reflejos mientras ofrece experiencia divertida.',
    howItWorks: [
      'Control táctil para mover personaje',
      'Sistema de colisiones',
      'Dificultad progresiva',
      'Sistema de puntuación y récords'
    ],
   impact: 'Diseñado para ofrecer una experiencia entretenida y accesible para sesiones cortas de juego.'
  },

  // ===== APLICACIONES WEB =====
 
  {
    id: 15,
    title: 'Restaurant Website',
    description: 'Plataforma web para venta de desayunos sorpresa con contacto directo vía WhatsApp.',
    image: '/proyectos/web/webcasita.png',
    icon: '/icons/react.svg',
    type: 'web',
    technologies: [
      { name: 'HTML', icon: '/icons/html.svg', bgColor: 'bg-orange-600' },
      { name: 'CSS', icon: '/icons/css.svg', bgColor: 'bg-blue-600' },
      { name: 'TypeScript', icon: '/icons/tp.svg', bgColor: 'bg-blue-600' },
    ],
    images: ['/proyectos/plenum/1.png', '/proyectos/plenum/2.png', '/proyectos/plenum/3.png'],
    color: 'orange',
    github: 'https://github.com/Ezequie1Sc/web-casita',
    demoUrl: 'https://web-casita.vercel.app/',
    problem: 'Negocios gastronómicos no tenían presencia digital para recibir pedidos.',
    solution: 'Landing page optimizada que conecta directamente con WhatsApp.',
    howItWorks: [
      'Galería visual de productos',
      'Sistema de personalización',
      'Botón flotante de WhatsApp',
      'Diseño responsive'
    ],
    impact: 'Aumentó pedidos en 200% en el primer mes.'
  },

   {
    id: 6,
    title: 'Células Plenum',
    description: 'Plataforma web informativa para el programa de formación "Células Plenum".',
    image: '/proyectos/web/image1.png',
    icon: '/icons/bootstrap.svg',
    type: 'web',
    technologies: [
      { name: 'HTML', icon: '/icons/html.svg', bgColor: 'bg-orange-600' },
      { name: 'CSS', icon: '/icons/css.svg', bgColor: 'bg-blue-600' },
      { name: 'Bootstrap', icon: '/icons/bootstrap.svg', bgColor: 'bg-purple-600' },
    ],
    images: ['/proyectos/plenum/1.png', '/proyectos/plenum/2.png', '/proyectos/plenum/3.png'],
    color: 'blue',
    github: 'https://github.com/Ezequie1Sc/Practica-Web',
    demoUrl: 'https://practica-web-kappa.vercel.app/',
    problem: 'El programa formativo no tenía presencia digital profesional.',
    solution: 'Sitio web moderno que presenta información de manera organizada y atractiva.',
    howItWorks: [
      'Navegación por unidades temáticas',
      'Sección de estadísticas interactivas',
      'Galería de recursos descargables',
      'Formulario de contacto integrado'
    ],
    impact: 'Aumentó consultas al programa en 150%.'
  },
{
  id: 16,
  title: 'Atmosfera — Dashboard Meteorologico',
  description: 'App del clima con diseno editorial que consume APIs REST gratuitas para mostrar datos meteorologicos en tiempo real de cualquier ciudad del mundo.',
  image: '/proyectos/web/atmosfera.png',
  icon: '/icons/js.svg',
  type: 'web',
  technologies: [
    { name: 'HTML5', icon: '/icons/html.svg', bgColor: 'bg-orange-600' },
    { name: 'CSS3', icon: '/icons/css.svg', bgColor: 'bg-blue-500' },
    { name: 'JavaScript ES6+', icon: '/icons/javascript.svg', bgColor: 'bg-yellow-500' },
  ],
  images: [
    '/proyectos/atmosfera/dashboard.png',
    '/proyectos/atmosfera/metrics.png',
    '/proyectos/atmosfera/responsive.png'
  ],
  color: 'orange',
  github: 'https://github.com/Ezequie1Sc/Weather-app',
  demoUrl: 'https://weather-app-theta-one-68.vercel.app/',
  problem: 'Necesidad de consultar el clima actual de cualquier ciudad del mundo de forma rapida y visualmente clara, sin distracciones publicitarias ni interfaces sobrecargadas.',
  solution: 'Aplicacion web con arquitectura modular que integra Open-Meteo (datos meteorologicos) y Nominatim (geocodificacion), mostrando informacion climatica completa con un diseno editorial minimalista y tipografia cuidada.',
  howItWorks: [
    'Busqueda inteligente de ciudades con sugerencias en tiempo real y banderas de paises',
    'Geocodificacion via Nominatim para convertir nombres de ciudades en coordenadas',
    'Peticiones asincronas a Open-Meteo para obtener datos meteorologicos actuales y prevision de 5 dias',
    'Sistema de favoritos con persistencia en localStorage',
    'Renderizado dinamico de metricas: temperatura, sensacion termica, humedad, viento, rafagas, presion y visibilidad',
    'Iconos meteorologicos profesionales con diferenciacion visual por colores (soleado, nublado, lluvia, nieve, tormenta)',
    'Deteccion automatica de dia/noche para ajustar iconos',
    'Sistema de cache inteligente de 10 minutos para optimizar consultas',
    'Manejo de errores con banner informativo',
    'Diseno totalmente responsive con grid adaptativo'
  ],
  impact: 'Aplicacion meteorologica profesional sin dependencia de APIs de pago. Arquitectura escalable con sistema de favoritos persistente, busqueda global y prevision extendida. Codigo modular preparado para integrar nuevas funcionalidades.'
},

  {
    id: 7,
    title: 'JavaScript Laboratory',
    description: 'Laboratorio interactivo con 27 ejercicios de lógica en JavaScript.',
    image: '/proyectos/web/image2.png',
    icon: '/icons/javascript.svg',
    type: 'web',
    technologies: [
      { name: 'HTML', icon: '/icons/html.svg', bgColor: 'bg-orange-600' },
      { name: 'CSS', icon: '/icons/css.svg', bgColor: 'bg-blue-600' },
      { name: 'JavaScript', icon: '/icons/javascript.svg', bgColor: 'bg-yellow-600' },
    ],
    images: ['/proyectos/js-lab/1.png', '/proyectos/js-lab/2.png', '/proyectos/js-lab/3.png', '/proyectos/js-lab/4.png'],
    color: 'purple',
    github: 'https://github.com/Ezequie1Sc/Ejercicios-de-Javascript',
    demoUrl: 'https://ejercicios-de-javascript.vercel.app/',
    problem: 'Estudiantes carecían de herramienta práctica para aprender JavaScript.',
    solution: 'Laboratorio digital con ejercicios progresivos y ejecución en tiempo real.',
    howItWorks: [
      '27 ejercicios por nivel de dificultad',
      'Editor de código integrado',
      'Sistema de validación',
      'Interfaz limpia sin distracciones'
    ],
    impact: '+100 estudiantes, 92% reportó mejora significativa.'
  },
  {
    id: 8,
    title: 'Portafolio Web',
    description: 'Portafolio profesional con React y TypeScript.',
    image: '/proyectos/web/image3.png',
    icon: '/icons/react.svg',
    type: 'web',
    technologies: [
      { name: 'React', icon: '/icons/react.svg', bgColor: 'bg-cyan-600' },
      { name: 'TypeScript', icon: '/icons/tp.svg', bgColor: 'bg-blue-600' },
      { name: 'CSS', icon: '/icons/css.svg', bgColor: 'bg-blue-600' },
    ],
    images: ['/proyectos/portafolio/1.png', '/proyectos/portafolio/2.png', '/proyectos/portafolio/3.png'],
    color: 'green',
    github: 'https://github.com/Ezequie1Sc',
    demoUrl: 'https://portafolio-phi-six-35.vercel.app/',
    problem: 'Desarrolladores necesitan destacar profesionalmente con un portafolio moderno.',
    solution: 'Portafolio con arquitectura limpia y animaciones suaves.',
    howItWorks: [
      'Componentes reutilizables con TypeScript',
      'Galería interactiva con filtros',
      'Sección de habilidades con tarjetas',
      'Formulario de contacto funcional'
    ],
   impact: 'Mejoró la presentación de mis proyectos y facilitó la evaluación técnica por reclutadores.'
  },

  // ===== PROYECTOS BACKEND =====
  {
    id: 9,
    title: 'API Sigel ITC',
    description: 'Backend en Python con Flask para sistema de organización académica.',
    image: '/proyectos/backend/sigelServer.png',
    icon: '/icons/python.svg',
    type: 'backend',
    technologies: [
      { name: 'Python', icon: '/icons/python.svg', bgColor: 'bg-green-600' },
      { name: 'Flask', icon: '/icons/flask.svg', bgColor: 'bg-gray-600' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg', bgColor: 'bg-blue-700' },
    ],
    images: ['/proyectos/backend/sigelServer.png', '/proyectos/backend/sigel4.png', '/proyectos/backend/sigel3.png', '/proyectos/backend/sigel5.png', '/proyectos/backend/ss.png'],
    color: 'blue',
    github: 'https://github.com/Ezequie1Sc/SIGEL/tree/main/Backend/server',
    problem: 'Sistema académico necesitaba backend robusto para múltiples usuarios concurrentes.',
    solution: 'API RESTful con autenticación JWT y arquitectura modular escalable.',
    howItWorks: [
      'Autenticación JWT con refresh tokens',
      'Endpoints RESTful documentados',
      'Pool de conexiones optimizado',
      'Middleware de logging'
    ],
    impact: 'Soporta +1000 usuarios concurrentes con respuesta <200ms.'
  },
  {
    id: 10,
    title: 'API Invernadero',
    description: 'API RESTful para monitoreo y control de invernaderos.',
    image: '/proyectos/backend/inverServer.png',
    icon: '/icons/python.svg',
    type: 'backend',
    technologies: [
      { name: 'Python', icon: '/icons/python.svg', bgColor: 'bg-green-600' },
      { name: 'Flask', icon: '/icons/flask.svg', bgColor: 'bg-gray-600' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg', bgColor: 'bg-blue-700' },
    ],
    images: ['/proyectos/backend/inverServer.png', '/proyectos/backend/inver1.png'],
    color: 'green',
    github: 'https://github.com/Ezequie1Sc/ServerInvernadero',
    problem: 'Sistemas IoT necesitaban backend confiable para procesar datos en tiempo real.',
    solution: 'API especializada en IoT con procesamiento de sensores y lógica de decisión.',
    howItWorks: [
      'WebSockets para datos en tiempo real',
      'Algoritmo de decisión automática',
      'Base de datos time-series',
      'Endpoints para estadísticas'
    ],
    impact: 'Procesa 1000 lecturas/segundo, activa riego en <500ms.'
  },
  {
    id: 11,
    title: 'API Barber',
    description: 'API para gestión de barberías con sistema de reservaciones y auditoría.',
    image: '/proyectos/backend/baServer.png',
    icon: '/icons/python.svg',
    type: 'backend',
    technologies: [
      { name: 'Python', icon: '/icons/python.svg', bgColor: 'bg-green-600' },
      { name: 'Flask', icon: '/icons/flask.svg', bgColor: 'bg-gray-600' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg', bgColor: 'bg-blue-700' },
    ],
    images: ['/proyectos/backend/baServer.png', '/proyectos/backend/ba01.png', '/proyectos/backend/ba0.png', '/proyectos/backend/ba4.png', '/proyectos/backend/ba3.png', '/proyectos/backend/ba2.png', '/proyectos/backend/ba1.png'],
    color: 'purple',
    github: 'https://github.com/Ezequie1Sc/BarberServer',
    problem: 'Negocios necesitaban sistema confiable que evitara dobles reservas.',
    solution: 'API robusta con validación de disponibilidad y control de concurrencia.',
    howItWorks: [
      'Validación atómica de disponibilidad',
      'Sistema de colas para reservas concurrentes',
      'Logging detallado para auditoría',
      'Cache distribuido'
    ],
    impact: 'Eliminó 100% de dobles reservas, respuesta <150ms.'
  },

  // ===== APLICACIONES DESKTOP =====
  {
    id: 12,
    title: 'Barbería Desktop',
    description: 'Sistema de escritorio integral para barberías con gestión de citas e inventario.',
    image: '/v_2.webp',
    icon: '/icons/csharp.svg',
    type: 'desktop',
    technologies: [
      { name: 'C#', icon: '/icons/csharp.svg', bgColor: 'bg-purple-600' },
      { name: '.NET', icon: '/icons/dotnet.svg', bgColor: 'bg-purple-700' },
      { name: 'SQL Server', icon: '/icons/sql.svg', bgColor: 'bg-red-600' },
    ],
    images: ['/proyectos/dekstop/barber/ba0.jpg', '/proyectos/dekstop/barber/ba1.png', '/proyectos/dekstop/barber/ba2.png', '/proyectos/dekstop/barber/ba3.png', '/proyectos/dekstop/barber/ba4.png', '/proyectos/dekstop/barber/ba5.png', '/proyectos/dekstop/barber/b6Admin.png'],
    color: 'orange',
    github: 'https://github.com/Ezequie1Sc/Barberia',
    problem: 'Barberías manejaban operaciones en papel con pérdida de información.',
    solution: 'Sistema completo que centraliza citas, clientes, inventario y ventas.',
    howItWorks: [
      'Dashboard con métricas en tiempo real',
      'Calendario visual de reservas',
      'Alertas de stock bajo',
      'Reportes exportables'
    ],
    impact: 'Aumentó eficiencia operativa en 70% y redujo pérdidas en 50%.'
  },
  {
    id: 13,
    title: 'Control Escolar',
    description: 'Aplicación de escritorio para gestión de inventarios y reportes académicos.',
    image: '/proyectos/control.png',
    icon: '/icons/java.svg',
    type: 'desktop',
    technologies: [
      { name: 'Java', icon: '/icons/java.svg', bgColor: 'bg-orange-600' },
      { name: 'Swing', icon: '/icons/java.svg', bgColor: 'bg-orange-700' },
      { name: 'MySQL', icon: '/icons/mysql.svg', bgColor: 'bg-blue-600' },
    ],
    images: ['/proyectos/dekstop/escuela/es1.png', '/proyectos/dekstop/escuela/es2.png', '/proyectos/dekstop/escuela/es3.png', '/proyectos/dekstop/escuela/es4.png', '/proyectos/dekstop/escuela/es5.png', '/proyectos/dekstop/escuela/es6.png', '/proyectos/dekstop/escuela/es7.png', '/proyectos/dekstop/escuela/es8.png', '/proyectos/dekstop/escuela/es9.png', '/proyectos/dekstop/escuela/es10.png'],
    color: 'purple',
    github: 'https://github.com/Ezequie1Sc/ControlEscolar',
    problem: 'Instituciones carecían de sistema integrado para gestión administrativa.',
    solution: 'Sistema desktop con módulos de inventario, facturación y reportes.',
    howItWorks: [
      'Módulo de inventario con entradas/salidas',
      'Sistema de facturación integrado',
      'Generador de reportes personalizables',
      'Control de acceso por roles'
    ],
    impact: 'Redujo pérdidas de inventario en 80%, reportes de 4h a 5min.'
  },
  {
    id: 14,
    title: 'Inventario',
    description: 'Software de escritorio para gestión completa de inventarios y facturación.',
    image: '/inve.webp',
    icon: '/icons/csharp.svg',
    type: 'desktop',
    technologies: [
      { name: 'C#', icon: '/icons/csharp.svg', bgColor: 'bg-purple-600' },
      { name: '.NET Core', icon: '/icons/dotnet.svg', bgColor: 'bg-purple-700' },
      { name: 'SQL Server', icon: '/icons/sql.svg', bgColor: 'bg-red-600' },
    ],
    images: ['/proyectos/dekstop/inventario/logiin.png', '/proyectos/dekstop/inventario/welcome.png', '/proyectos/dekstop/inventario/d2.png', '/proyectos/dekstop/inventario/d3.png', '/proyectos/dekstop/inventario/prove.png', '/proyectos/dekstop/inventario/d1.png', '/proyectos/dekstop/inventario/producto.png', '/proyectos/dekstop/inventario/ventas.png', '/proyectos/dekstop/inventario/admin.png', '/proyectos/dekstop/inventario/admin1.png'],
    color: 'green',
    github: 'https://github.com/Ezequie1Sc/Inventario',
    problem: 'PYMEs sufrían descontrol de inventario con métodos manuales.',
    solution: 'Sistema profesional con control preciso y alertas automáticas.',
    howItWorks: [
      'Escáner de códigos de barras',
      'Alertas de stock mínimo/máximo',
      'Dashboard con KPIs',
      'Historial con auditoría'
    ],
    impact: 'Redujo quiebres de stock en 85% y ahorró 40 horas/mes.'
  }
];

// ===== SKILLS =====
export const skills: Skill[] = [
  {
    id: 1,
    title: 'Desarrollo Móvil',
    category: '01',
    frontGradient: 'from-blue-500 to-purple-600',
    backGradient: 'from-blue-400 to-purple-500',
    badgeText: 'Multiplataforma',
    badgeBorder: 'border-blue-700/50',
    badgeBg: 'bg-blue-900/30',
    badgeColor: 'text-blue-300',
    skills: [
      { name: 'Flutter', icon: '/icons/flutter.svg', containerBg: 'from-blue-500/20 to-blue-600/30' },
      { name: 'Dart', icon: '/icons/dart.svg', containerBg: 'from-blue-400/20 to-blue-500/30' },
      { name: 'Android Studio', icon: '/icons/androidLogo.svg', containerBg: 'from-blue-400/20 to-blue-500/30' },
    ],
    backTitle: 'Desarrollo Móvil',
    backDescription: 'Creación de aplicaciones nativas para iOS y Android con Flutter:',
    backPoints: [
      'Interfaces fluidas con animaciones personalizadas',
      'Conexión en tiempo real con sockets',
      'Integración con APIs y servicios backend',
    ],
    backBadge: 'Hot Reload • BLoC • Firebase',
    backBadgeBg: 'bg-blue-900/50',
  },
  {
    id: 2,
    title: 'Desarrollo Web',
    category: '02',
    frontGradient: 'from-purple-500 to-indigo-600',
    backGradient: 'from-purple-400 to-indigo-500',
    badgeText: 'Full Stack',
    badgeBorder: 'border-purple-700/50',
    badgeBg: 'bg-purple-900/30',
    badgeColor: 'text-purple-300',
    skills: [
      { name: 'HTML', icon: '/icons/html.svg', containerBg: 'from-purple-500/20 to-indigo-600/30' },
      { name: 'CSS', icon: '/icons/css.svg', containerBg: 'from-purple-400/20 to-indigo-500/30' },
      { name: 'React', icon: '/icons/react.svg', containerBg: 'from-indigo-500/20 to-blue-600/30' },
      { name: 'TypeScript', icon: '/icons/tp.svg', containerBg: 'from-indigo-500/20 to-blue-600/30' },
    ],
    backTitle: 'Desarrollo Web',
    backDescription: 'Construcción de aplicaciones web modernas y responsivas:',
    backPoints: [
      'Interfaces interactivas con WebSockets',
      'Diseño adaptable a todos los dispositivos',
      'Optimización de rendimiento y SEO',
    ],
    backBadge: 'React • Tailwind • Node.js',
    backBadgeBg: 'bg-purple-900/50',
  },
  {
    id: 3,
    title: 'Desarrollo Backend',
    category: '03',
    frontGradient: 'from-green-500 to-teal-600',
    backGradient: 'from-green-400 to-teal-500',
    badgeText: 'Servidores • Sockets',
    badgeBorder: 'border-green-700/50',
    badgeBg: 'bg-green-900/30',
    badgeColor: 'text-green-300',
    skills: [
      { name: 'C#', icon: '/icons/csharp.svg', containerBg: 'from-green-500/20 to-teal-600/30' },
      { name: 'Python', icon: '/icons/python.svg', containerBg: 'from-green-400/20 to-teal-500/30' },
      { name: 'Java', icon: '/icons/java.svg', containerBg: 'from-teal-500/20 to-emerald-600/30' },
    ],
    backTitle: 'Desarrollo Backend',
    backDescription: 'Construcción de sistemas backend robustos y escalables:',
    backPoints: [
      'Creación de servidores con conexión en tiempo real',
      'Implementación de WebSockets para interacción',
      'Manejo de conexiones persistentes y eventos',
    ],
    backBadge: '.NET Core • Django • Spring Boot',
    backBadgeBg: 'bg-green-900/50',
  },
  {
    id: 4,
    title: 'Bases de Datos',
    category: '04',
    frontGradient: 'from-yellow-500 to-amber-600',
    backGradient: 'from-yellow-400 to-amber-500',
    badgeText: 'SQL',
    badgeBorder: 'border-yellow-700/50',
    badgeBg: 'bg-yellow-900/30',
    badgeColor: 'text-yellow-300',
    skills: [
      { name: 'SQL Server', icon: '/icons/sql.svg', containerBg: 'from-yellow-500/20 to-amber-600/30' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg', containerBg: 'from-yellow-400/20 to-amber-500/30' },
      { name: 'MySQL', icon: '/icons/mysql.svg', containerBg: 'from-amber-500/20 to-orange-600/30' },
    ],
    backTitle: 'Bases de Datos',
    backDescription: 'Experiencia en diseño y gestión de sistemas de almacenamiento:',
    backPoints: [
      'Creación y diseño de bases de datos relacionales',
      'Migración y transformación de datos',
      'Optimización de consultas y rendimiento',
    ],
    backBadge: 'Creación • Migraciones • Replicación',
    backBadgeBg: 'bg-yellow-900/50',
  },
  {
    id: 5,
    title: 'Hardware y Embebidos',
    category: '05',
    frontGradient: 'from-red-500 to-pink-600',
    backGradient: 'from-red-400 to-pink-500',
    badgeText: 'IoT • Sensores',
    badgeBorder: 'border-red-700/50',
    badgeBg: 'bg-red-900/30',
    badgeColor: 'text-red-300',
    skills: [
      { name: 'Arduino', icon: '/icons/Arduino.png', containerBg: 'from-red-500/20 to-pink-600/30' },
      { name: 'Micropython', icon: '/icons/Micropython.png', containerBg: 'from-red-400/20 to-pink-500/30' },
      { name: 'ESP32', icon: './ep32.png', containerBg: 'from-pink-500/20 to-rose-600/30' },
    ],
    backTitle: 'Hardware y Embebidos',
    backDescription: 'Desarrollo de soluciones IoT y sistemas embebidos:',
    backPoints: [
      'Prototipado rápido con Arduino',
      'Programación en Micropython',
      'Conectividad WiFi/Bluetooth con ESP32',
    ],
    backBadge: 'Sensores • ESP32 • Home Assistant',
    backBadgeBg: 'bg-red-900/50',
  },
  {
    id: 6,
    title: 'Herramientas',
    category: '06',
    frontGradient: 'from-indigo-500 to-violet-600',
    backGradient: 'from-indigo-400 to-violet-500',
    badgeText: 'DevOps • CI/CD',
    badgeBorder: 'border-indigo-700/50',
    badgeBg: 'bg-indigo-900/30',
    badgeColor: 'text-indigo-300',
    skills: [
      { name: 'GitHub', icon: '/icons/github.svg', containerBg: 'from-indigo-500/20 to-violet-600/30' },
      { name: 'VS Code', icon: '/icons/vscode.svg', containerBg: 'from-indigo-400/20 to-violet-500/30' },
      { name: 'Visual Studio', icon: '/icons/visual.svg', containerBg: 'from-violet-500/20 to-purple-600/30' },
    ],
    backTitle: 'Herramientas',
    backDescription: 'Dominio de herramientas esenciales para el desarrollo moderno:',
    backPoints: [
      'Control de versiones con Git/GitHub',
      'Entornos de desarrollo (VS Code, Visual Studio)',
      'Integración y despliegue continuo',
    ],
    backBadge: 'Git • GitHub • CI/CD',
    backBadgeBg: 'bg-indigo-900/50',
  },
];