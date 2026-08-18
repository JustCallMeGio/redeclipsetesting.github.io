// Spanish translations
export const es = {
  nav: {
    about: 'Sobre Nosotros',
    work: 'Nuestro Trabajo',
    collaborations: 'Colaboraciones',
    contact: 'Contacto'
  },
  hero: {
    title: 'Jugamos, Rompemos y Mejoramos tu juego.',
    description: 'Testing profesional para videojuegos indie y AAA.\nEn Red Eclipse Testing analizamos, jugamos y desarmamos tu juego para garantizar una experiencia libre de errores, fluida y pulida antes del lanzamiento.\nEncontramos los bugs antes que tus jugadores, para que tu visión brille tal como la imaginaste.',
    cta: 'Comenzar ahora'
  },
  about: {
    title: 'Sobre Nosotros',
    description: [
      'En **Red Eclipse Testing** nos especializamos en el testing profesional de videojuegos, ofreciendo servicios integrales de aseguramiento de calidad para desarrolladores indie y estudios AAA.',
      'Nuestro equipo de testers experimentados se dedica a identificar bugs, problemas de rendimiento y fallos de experiencia de usuario antes del lanzamiento.',
      'Utilizamos metodologías probadas y herramientas especializadas para garantizar que tu juego llegue al mercado en su mejor versión, permitiendo que tu visión creativa brille sin obstáculos técnicos.'
    ]
  },
  work: {
    title: 'Nuestro Trabajo',
    subtitle: 'Qué Hacemos. Cómo Lo Hacemos.',
    services: [
      {
        title: 'CALIDAD',
        description: 'Nuestro equipo de Game Testers consiste en testers experimentados que han pasado por rigurosos procesos de capacitación y desarrollo. Los reclutas pasan por un proceso de formación relevante y educativo. Tenemos experiencia tanto en desarrollo interno como en servicios tercerizados. QA es nuestra devoción, y nuestro negocio es la calidad. Inculcamos pasión y entusiasmo en nuestros servicios y tu producto.'
      },
      {
        title: 'FLEXIBILIDAD',
        description: 'Nuestro equipo consiste en testers de desarrollo y puede gestionar plazos ajustados. Buscamos adaptarnos a la realidad del desarrollo siendo tan flexibles como necesites. Estamos abiertos a solicitudes urgentes y podemos adelantar fechas de testing con 24 horas de aviso. Trabajaremos hasta completar la tarea, incluso durante fines de semana si es necesario. Nos adaptamos a tu horario, para que tu producto no tenga que hacerlo.'
      },
      {
        title: 'COMUNICACIÓN',
        description: 'Somos accesibles en diversos métodos de comunicación. Nuestro estilo de comunicación nos hace sentir como parte de tu equipo inmediato. Te proporcionamos todos los datos que necesitas durante la fase de testing. Los bugs se registran en bases de datos a medida que se descubren.'
      },
      {
        title: 'ESTANDARIZACIÓN',
        description: 'El aseguramiento de calidad es un componente crítico en el desarrollo de juegos, aunque la industria de videojuegos no tiene una metodología estándar. Hasta ahora... En su lugar, desarrolladores y publicadores tienen sus métodos. Los pequeños desarrolladores generalmente no tienen personal de QA dedicado.'
      }
    ],
    techniquesTitle: 'Técnicas de Testing',
    techniques: [
      {
        title: 'Testing Ad-hoc',
        description: 'La técnica de testing ad-hoc se realiza sin planificación ni documentación, pero puede aplicarse a estudios experimentales científicos tempranos. La fortaleza del testing ad-hoc es que los defectos importantes pueden encontrarse rápidamente ya que no está estructurado.'
      },
      {
        title: 'Testing de Progresión',
        description: 'La técnica de testing de progresión es la tarea de ejecutar el sistema con casos de prueba existentes que se retuvieron de las pruebas del sistema. El razonamiento es que si los datos de prueba se mantienen constantes y algo no funciona, debe deberse a los cambios realizados en el sistema. Esto prueba que todas las funciones anteriores del sistema aún funcionan.'
      },
      {
        title: 'Testing de Regresión',
        description: 'La técnica de testing de regresión se define como un tipo de testing de software para validar que un nuevo programa o revisión de código no haya afectado negativamente las funciones actuales. Este testing se realiza para asegurar que los nuevos cambios de código no tengan efectos secundarios en las funcionalidades presentes. Garantiza que el código antiguo todavía funciona una vez que se completan las últimas revisiones de código.'
      }
    ]
  },
  collaborations: {
    title: 'Colaboraciones',
    testedGame: 'Juego testeado',
    partners: [
      {
        name: 'Tyrant Team 7',
        games: [
          {
            title: 'Tiles in Time',
          }
        ]
      },
      {
        name: 'Rain Cup Games',
        games: [
          {
            title: 'Distress Call',
          }
        ]
      },
      {
        name: 'Astrobard Games',
        games: [
          {
            title: 'The Amazing Crackpots Club!',
          }
        ]
      },
      {
        name: 'Cloud Creature Studios',
        games: [
          {
            title: 'Ink of Fate',
          }
        ]
      },
      {
        name: 'Mekanical Void',
        games: [
          {
            title: 'Kali',
          }
        ]
      },
      {
        name: 'Ibis Interactive',
        games: [
          {
            title: 'Don Pepe y Sus Globos',
          }
        ]
      },
    ]
  },
  contact: {
    title: 'Contacto',
    name: 'Giovanni Delucchi',
    emails: [
      {
        label: 'Contacto General',
        email: 'contacto@redeclipsetesting.com'
      },
      {
        label: 'Negocios',
        email: 'negocios@redeclipsetesting.com'
      },
      {
        label: 'Negocios',
        email: 'business@redeclipsetesting.com'
      }
    ],
    whatsapp: {
      label: 'WhatsApp',
      number: '+56929887892',
      displayNumber: '🇨🇱 +56 9 2988 7892'
    }
  }
};

export type Translation = typeof es;
