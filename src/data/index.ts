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
  },// En el array de certificates, agrega un nuevo certificado de SQL Server:
]

export const certificates: Certificate[] = [
  // 1️⃣ PROGRAMACIÓN
  {
    id: 1,
    title: 'Python Programming',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    image: '/Certificates/python.png',
    credentialUrl: '/Certificates/PythonEssentials.pdf',
    skills: ['Python', 'Automatización', 'Scripting', 'Fundamentos'],
    category: 'programacion'
  },
  // 2️⃣ CIBERSEGURIDAD
  {
    id: 2,
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    date: '2024',
    image: '/Certificates/IntroductionCibersecurity.png',
    credentialUrl: '/Certificates/cybersecurity.pdf',
    skills: ['Seguridad Informática', 'Protección de Redes', 'Ciberseguridad'],
    category: 'ciberseguridad'
  },
  // 3️⃣ INTELIGENCIA ARTIFICIAL
  {
    id: 3,
    title: 'Modern AI',
    issuer: 'Coursera',
    date: '2024',
    image: '/Certificates/modernIA.png',
    credentialUrl: '/Certificates/IntrotoModernAI.pdf',
    skills: ['Inteligencia Artificial', 'Machine Learning', 'IA Moderna'],
    category: 'ia'
  },
  {
    id: 4,
    title: 'Teaching with AI',
    issuer: 'Tec',
    date: '2024',
    image: '/Certificates/diplomaenseñanzaconIA.png',
    credentialUrl: '/Certificates/DIPLOMA.pdf',
    skills: ['IA Educativa', 'Herramientas IA', 'Prompt Engineering'],
    category: 'ia'
  },
  // 4️⃣ IDIOMAS
  {
    id: 5,
    title: 'English Level B1 Certification',
    issuer: 'Cambridge Assessment',
    date: '2024',
    image: '/Certificates/constanciaB1ingles.png',
    credentialUrl: '/Certificates/constancia.pdf',
    skills: ['Inglés Intermedio', 'Comprensión', 'Comunicación'],
    category: 'idiomas'
  },
  // 5️⃣ PROFESIONAL
  {
    id: 6,
    title: 'Professional Communication',
    issuer: 'LinkedIn Learning',
    date: '2024',
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
  image: '/Certificates/AdvancedSQL.png', // imagen del certificado
  credentialUrl: '/Certificates/AdvancedSQL.png', // PDF del certificado
  skills: [
    'Advanced SQL',
    'JOINs',
    'UNION',
    'Window Functions',
    'Query Optimization',
    'BigQuery'
  ],
  category: 'datos'
},

{
  id: 8,
  title: 'Intro to SQL',
  issuer: 'Kaggle',
  date: '2026',
  image: '/Certificates/IntrotoSQL.png', // imagen del certificado
  credentialUrl: '/Certificates/IntrotoSQL.png', // PDF del certificado
  skills: [
    'SQL',
    'BigQuery',
    'SELECT',
    'GROUP BY',
    'JOIN',
    'Query Fundamentals'
  ],
  category: 'datos'
}
];



// ===== PROYECTOS =====
export const projects: Project[] = [
  // ===== APLICACIONES MÓVILES (5 proyectos) =====
  {
    id: 1,
    title: 'Sigel ITC Mobile',
    description: 'Aplicación móvil para gestión académica que permite a estudiantes y profesores administrar inventario de laboratorios, entregar trabajos prácticos y realizar un seguimiento de las asignaciones de forma eficiente.',
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
    images: [
      '/proyectos/9.png',
      '/proyectos/3.png',
      '/proyectos/4.png',
      '/proyectos/D_3.png',
      '/proyectos/D_4.png',
      '/proyectos/D_5.png',
      '/proyectos/D_6.png',
    ],
    color: 'blue',
    github: 'https://github.com/Ezequie1Sc/SIGEL',
  },
  {
    id: 2,
    title: 'Barber Shop App',
    description: 'Aplicación integral para barberías que facilita la reserva de turnos, la compra de productos de cuidado personal y la gestión de clientes, con notificaciones y recordatorios automáticos.',
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
    images: [
      '/proyectos/barberia/b_2.png',
      '/proyectos/barberia/b_3.png',
      '/proyectos/barberia/b_4.png',
      '/proyectos/barberia/b_5.png',
    ],
    color: 'purple',
    github: 'https://github.com/Ezequie1Sc/BarberApk',
  },
  {
    id: 3,
    title: 'Invernadero Mobile',
    description: 'Sistema de monitoreo para invernaderos que permite visualizar en tiempo real la temperatura, humedad del ambiente y del suelo, además de controlar automáticamente el sistema de riego mediante sensores conectados.',
    image: '/proyectos/Invernadero/i_1.png',
    icon: '/icons/flutter.svg',
    type: 'mobile',
    technologies: [
      { name: 'Flutter', icon: '/icons/flutter.svg', bgColor: 'bg-blue-600' },
      { name: 'Dart', icon: '/icons/dart.svg', bgColor: 'bg-blue-500' },
      { name: 'Flask', icon: '/icons/flask.svg', bgColor: 'bg-gray-600' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg', bgColor: 'bg-blue-700' },
      { name: 'Python', icon: '/icons/python.svg', bgColor: 'bg-green-600' },
    ],
    images: [
      '/proyectos/Invernadero/i_2.png',
      '/proyectos/Invernadero/i_3.png',
    ],
    color: 'green',
    github: 'https://github.com/Ezequie1Sc/InvernaderoApk',
  },
  {
    id: 4,
    title: 'Vodka App Mobile',
    description: 'Aplicación para la organización y seguimiento de torneos de fútbol que permite registrar equipos, gestionar resultados en tiempo real, calcular estadísticas y mantener una tabla de posiciones actualizada automáticamente.',
    image: '/v_1.png',
    icon: '/icons/flutter.svg',
    type: 'mobile',
    technologies: [
      { name: 'Flutter', icon: '/icons/flutter.svg', bgColor: 'bg-blue-600' },
      { name: 'Dart', icon: '/icons/dart.svg', bgColor: 'bg-blue-500' },
      { name: 'Flask', icon: '/icons/flask.svg', bgColor: 'bg-gray-600' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg', bgColor: 'bg-blue-700' },
      { name: 'Python', icon: '/icons/python.svg', bgColor: 'bg-green-600' },
    ],
    images: [
      './v_1.png',
    ],
    color: 'green',
    github: 'https://github.com/Ezequie1Sc',
  },
  {
    id: 5,
    title: 'VideoJuego',
    description: 'Juego arcade desarrollado en Flutter donde controlas un personaje que debe atrapar la mayor cantidad de regalos mientras esquiva objetos peligrosos, con sistema de vidas, puntajes y niveles de dificultad progresiva.',
    image: '/game.png',
    icon: '/icons/flutter.svg',
    type: 'mobile',
    technologies: [
      { name: 'Flutter', icon: '/icons/flutter.svg', bgColor: 'bg-blue-600' },
      { name: 'Dart', icon: '/icons/dart.svg', bgColor: 'bg-blue-500' },
    ],
    images: [
      '/game1.png',
    ],
    color: 'orange',
    github: 'https://github.com/Ezequie1Sc/love_apk',
  },

  {
    id: 6,
    title: 'Células Plenum',
    description: 'Plataforma web informativa para el programa de formación "Células Plenum" que presenta módulos académicos, objetivos del programa, estadísticas institucionales y una navegación organizada por unidades temáticas para facilitar el aprendizaje.',
    image: '/proyectos/web/image1.png',
    icon: '/icons/bootstrap.svg',
    type: 'web',
    technologies: [
      { name: 'HTML', icon: '/icons/html.svg', bgColor: 'bg-orange-600' },
      { name: 'CSS', icon: '/icons/css.svg', bgColor: 'bg-blue-600' },
      { name: 'Bootstrap', icon: '/icons/bootstrap.svg', bgColor: 'bg-purple-600' },
    ],
    images: [
      '/proyectos/plenum/1.png',
      '/proyectos/plenum/2.png',
      '/proyectos/plenum/3.png',
    ],
    color: 'blue',
    github: 'https://github.com/Ezequie1Sc/Practica-Web',
    demoUrl: 'https://practica-web-kappa.vercel.app/', // <-- CAMBIA ESTA URL
  },
  {
    id: 7,
    title: 'JavaScript Laboratory',
    description: 'Laboratorio interactivo de programación con 27 ejercicios de lógica en JavaScript, diseñado como una herramienta educativa que permite visualizar, ejecutar y probar código directamente desde el navegador con una interfaz moderna y amigable.',
    image: '/proyectos/web/image2.png',
    icon: '/icons/javascript.svg',
    type: 'web',
    technologies: [
      { name: 'HTML', icon: '/icons/html.svg', bgColor: 'bg-orange-600' },
      { name: 'CSS', icon: '/icons/css.svg', bgColor: 'bg-blue-600' },
      { name: 'Tailwind', icon: '/icons/tailwind.svg', bgColor: 'bg-cyan-600' },
      { name: 'JavaScript', icon: '/icons/javascript.svg', bgColor: 'bg-yellow-600' },
    ],
    images: [
      '/proyectos/js-lab/1.png',
      '/proyectos/js-lab/2.png',
      '/proyectos/js-lab/3.png',
      '/proyectos/js-lab/4.png',
    ],
    color: 'purple',
    github: 'https://github.com/Ezequie1Sc/Ejercicios-de-Javascript',
    demoUrl: 'https://ejercicios-de-javascript.vercel.app/', // <-- CAMBIA ESTA URL
  },
  {
    id: 8,
    title: 'Portafolio Web',
    description: 'Portafolio profesional desarrollado con React y TypeScript, implementando una arquitectura basada en componentes reutilizables y tipado estático para garantizar escalabilidad, mantenibilidad y un rendimiento óptimo en todo momento.',
    image: '/proyectos/web/image3.png',
    icon: '/icons/react.svg',
    type: 'web',
    technologies: [
      { name: 'React', icon: '/icons/react.svg', bgColor: 'bg-cyan-600' },
      { name: 'TypeScript', icon: '/icons/tp.svg', bgColor: 'bg-blue-600' },
      { name: 'CSS', icon: '/icons/css.svg', bgColor: 'bg-blue-600' },
    ],
    images: [
      '/proyectos/portafolio/1.png',
      '/proyectos/portafolio/2.png',
      '/proyectos/portafolio/3.png',
    ],
    color: 'green',
    github: 'https://github.com/Ezequie1Sc',
    demoUrl: 'https://portafolio-phi-six-35.vercel.app/', // <-- CAMBIA ESTA URL
  },

  // ===== PROYECTOS BACKEND (3 proyectos) =====
  {
    id: 9,
    title: 'API Sigel ITC',
    description: 'Backend desarrollado en Python con Flask para el sistema de organización académica, implementando autenticación mediante JWT, endpoints RESTful y una arquitectura escalable que maneja solicitudes de manera eficiente y segura.',
    image: '/proyectos/backend/sigelServer.png',
    icon: '/icons/python.svg',
    type: 'backend',
    technologies: [
      { name: 'Python', icon: '/icons/python.svg', bgColor: 'bg-green-600' },
      { name: 'Flask', icon: '/icons/flask.svg', bgColor: 'bg-gray-600' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg', bgColor: 'bg-blue-700' },
    ],
    images: [
      '/proyectos/backend/sigelServer.png',
      '/proyectos/backend/sigel4.png',
      '/proyectos/backend/sigel3.png',
      '/proyectos/backend/sigel5.png',
      '/proyectos/backend/ss.png',
    ],
    color: 'blue',
    github: 'https://github.com/Ezequie1Sc/SIGEL/tree/main/Backend/server',
  },
  {
    id: 10,
    title: 'API Invernadero',
    description: 'API RESTful para el monitoreo y control de invernaderos que gestiona sensores de temperatura, humedad y suelo, controla la bomba de riego y almacena datos históricos para su posterior análisis y visualización.',
    image: '/proyectos/backend/inverServer.png',
    icon: '/icons/python.svg',
    type: 'backend',
    technologies: [
      { name: 'Python', icon: '/icons/python.svg', bgColor: 'bg-green-600' },
      { name: 'Flask', icon: '/icons/flask.svg', bgColor: 'bg-gray-600' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg', bgColor: 'bg-blue-700' },
    ],
    images: [
      '/proyectos/backend/inverServer.png',
      '/proyectos/backend/inver1.png',
    ],
    color: 'green',
    github: 'https://github.com/Ezequie1Sc/ServerInvernadero',
  },
  {
    id: 11,
    title: 'API Barber',
    description: 'API para gestión de barberías con sistema de reservaciones, control de usuarios y auditoría de accesos, implementando validación de disponibilidad horaria y registro detallado de actividad para garantizar un servicio confiable.',
    image: '/proyectos/backend/baServer.png',
    icon: '/icons/python.svg',
    type: 'backend',
    technologies: [
      { name: 'Python', icon: '/icons/python.svg', bgColor: 'bg-green-600' },
      { name: 'Flask', icon: '/icons/flask.svg', bgColor: 'bg-gray-600' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.svg', bgColor: 'bg-blue-700' },
    ],
    images: [
      '/proyectos/backend/baServer.png',
      '/proyectos/backend/ba01.png',
      '/proyectos/backend/ba0.png',
      '/proyectos/backend/ba4.png',
      '/proyectos/backend/ba3.png',
      '/proyectos/backend/ba2.png',
      '/proyectos/backend/ba1.png',
    ],
    color: 'purple',
    github: 'https://github.com/Ezequie1Sc/BarberServer',
  },

  // ===== APLICACIONES DESKTOP (3 proyectos) =====
  {
    id: 12,
    title: 'Barbería Desktop',
    description: 'Sistema de escritorio integral para barberías desarrollado en C# que permite agendar citas, gestionar información de clientes, controlar inventario de productos y realizar un seguimiento detallado de las ventas diarias.',
    image: '/v_2.png',
    icon: '/icons/csharp.svg',
    type: 'desktop',
    technologies: [
      { name: 'C#', icon: '/icons/csharp.svg', bgColor: 'bg-purple-600' },
      { name: '.NET', icon: '/icons/dotnet.svg', bgColor: 'bg-purple-700' },
      { name: 'SQL Server', icon: '/icons/sql.svg', bgColor: 'bg-red-600' },
    ],
    images: [
      '/proyectos/dekstop/barber/ba0.jpg',
      '/proyectos/dekstop/barber/ba1.png',
      '/proyectos/dekstop/barber/ba2.png',
      '/proyectos/dekstop/barber/ba3.png',
      '/proyectos/dekstop/barber/ba4.png',
      '/proyectos/dekstop/barber/ba5.png',
      '/proyectos/dekstop/barber/b6Admin.png',
    ],
    color: 'orange',
    github: 'https://github.com/Ezequie1Sc/Barberia',
  },
  {
    id: 13,
    title: 'Control Escolar',
    description: 'Aplicación de escritorio para instituciones educativas que facilita la gestión de inventarios, el control de stock de materiales, la generación de reportes académicos y administrativos, y el proceso de facturación.',
    image: '/proyectos/control.png',
    icon: '/icons/java.svg',
    type: 'desktop',
    technologies: [
      { name: 'Java', icon: '/icons/java.svg', bgColor: 'bg-orange-600' },
      { name: 'Swing', icon: '/icons/java.svg', bgColor: 'bg-orange-700' },
      { name: 'MySQL', icon: '/icons/mysql.svg', bgColor: 'bg-blue-600' },
    ],
    images: [
      '/proyectos/dekstop/escuela/es1.png',
      '/proyectos/dekstop/escuela/es2.png',
      '/proyectos/dekstop/escuela/es3.png',
      '/proyectos/dekstop/escuela/es4.png',
      '/proyectos/dekstop/escuela/es5.png',
      '/proyectos/dekstop/escuela/es6.png',
      '/proyectos/dekstop/escuela/es7.png',
      '/proyectos/dekstop/escuela/es8.png',
      '/proyectos/dekstop/escuela/es9.png',
      '/proyectos/dekstop/escuela/es10.png',
    ],
    color: 'purple',
    github: 'https://github.com/Ezequie1Sc/ControlEscolar',
  },
  {
    id: 14,
    title: 'Inventario',
    description: 'Software de escritorio para la gestión completa de inventarios que permite controlar entradas y salidas de productos, generar facturas, producir reportes detallados y mantener un registro histórico de todas las operaciones.',
    image: '/inve.png',
    icon: '/icons/csharp.svg',
    type: 'desktop',
    technologies: [
      { name: 'C#', icon: '/icons/csharp.svg', bgColor: 'bg-purple-600' },
      { name: '.NET Core', icon: '/icons/dotnet.svg', bgColor: 'bg-purple-700' },
      { name: 'SQL Server', icon: '/icons/sql.svg', bgColor: 'bg-red-600' },
    ],
    images: [
      '/proyectos/dekstop/inventario/logiin.png',
      '/proyectos/dekstop/inventario/welcome.png',
      '/proyectos/dekstop/inventario/d2.png',
      '/proyectos/dekstop/inventario/d3.png',
      '/proyectos/dekstop/inventario/prove.png',
      '/proyectos/dekstop/inventario/d1.png',
      '/proyectos/dekstop/inventario/producto.png',
      '/proyectos/dekstop/inventario/ventas.png',
      '/proyectos/dekstop/inventario/admin.png',
      '/proyectos/dekstop/inventario/admin1.png',
    ],
    color: 'green',
    github: 'https://github.com/Ezequie1Sc/Inventario',
  },
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