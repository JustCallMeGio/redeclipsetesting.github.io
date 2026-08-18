// English translations
import type { Translation } from './es';

export const en: Translation = {
  nav: {
    about: 'About Us',
    work: 'Our Work',
    collaborations: 'Collaborations',
    contact: 'Contact'
  },
  hero: {
    title: 'We Play, We Break. We Improve your game.',
    description: 'Professional testing for indie and AAA games. At Red Eclipse Testing, we analyze, play, and break down your game to ensure a smooth, polished, and bug-free experience before launch. We find the bugs before your players do — so your vision shines exactly as you imagined it.',
    cta: 'Get started now'
  },
  about: {
    title: 'About Us',
    description: [
      'At **Red Eclipse Testing**, we specialize in professional video game testing, offering comprehensive quality assurance services for indie developers and AAA studios.',
      'Our team of experienced testers is dedicated to identifying bugs, performance issues, and user experience flaws before launch.',
      'We use proven methodologies and specialized tools to ensure your game reaches the market in its best version, allowing your creative vision to shine without technical obstacles.'
    ]
  },
  work: {
    title: 'Our Work',
    subtitle: 'What We Do. How We Do It.',
    services: [
      {
        title: 'QUALITY',
        description: 'Our Game Testers consists of well-seasoned testers who have gone through vigorous training and development. The recruits undergo a training process that is relevant and educational. We are experienced in both development and outsourced service providing. QA is our devotion, and our business is quality. We instill passion and enthusiasm into our services and your product.'
      },
      {
        title: 'FLEXIBILITY',
        description: 'Our team consists of testers from development and can manage tight deadlines. We aim to match the reality of development by being as flexible as you want us to be. We are open to time-sensitive requests and can push testing dates with 24 hours notice. We will work until the task is completed, if necessary, into the weekend hours. We accommodate your schedule, so your product doesn\'t have to.'
      },
      {
        title: 'COMMUNICATION',
        description: 'We are accessible in various sorts of communication methods. Our communication style makes us feel like we\'re a part of your immediate team. We provide you all the data you need throughout the test phase. Bugs are entered into databases as they are discovered.'
      },
      {
        title: 'STANDARDISATION',
        description: 'Quality assurance is a critical component in game development, though the video game industry does not have a standard methodology. Until now... Instead, developers and publishers have their methods. Small developers do not generally have QA staff.'
      }
    ],
    techniquesTitle: 'Testing Techniques',
    techniques: [
      {
        title: 'Ad-hoc Testing',
        description: 'Ad-hoc testing technique is free from testing performed without planning and documentation, but can be applied to early scientific experimental studies. The strength of ad hoc testing is that important defects can be found quickly since it\'s not structured.'
      },
      {
        title: 'Progression Testing',
        description: 'Progression testing technique is the task to run the system with existing test cases that were retained from the system tests. The reasoning is that if the test data are held constant and something does not work, it must be due to the changes made to the system. This proves that all of the previous system functions still work.'
      },
      {
        title: 'Regression Testing',
        description: 'Regression testing technique is defined as a type of software testing to validate that a new program or code revision has not negatively affected current features. This testing is performed to make sure that new code changes should not have side effects on the present functionalities. It guarantees that the old code still works once the latest code revisions are completed.'
      }
    ]
  },
  collaborations: {
    title: 'Collaborations',
    testedGame: 'Tested Game',
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
    title: 'Contact',
    name: 'Giovanni Delucchi',
    emails: [
      {
        label: 'General Contact',
        email: 'contacto@redeclipsetesting.com'
      },
      {
        label: 'Business',
        email: 'negocios@redeclipsetesting.com'
      },
      {
        label: 'Business',
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
