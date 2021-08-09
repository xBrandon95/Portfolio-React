import {
  faWhatsapp,
  // faFacebookF,
  // faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

import {
  faEnvelope,
  faBriefcase,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';

export const dataSocialIcons = [
  {
    id: 'whatsapp',
    url: 'https://wa.me/59177703553?text=Buenas, me interesa sus servicios!!!',
    icon: faWhatsapp,
  },
  // {
  //   id: 'facebook',
  //   url: 'https://www.facebook.com/xBrandon95',
  //   icon: faFacebookF,
  // },
  {
    id: 'gmail',
    url: 'mailto:jbticona2@gmail.com',
    icon: faEnvelope,
  },
  {
    id: 'github',
    url: 'https://github.com/xBrandon95',
    icon: faGithub,
  },
  // {
  //   id: 'linkedIn',
  //   url: 'https://www.linkedin.com/in/john-brandon-ticona-apaza-09a738189',
  //   icon: faLinkedin,
  // },
];

export const listTabs = [
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'education',
    title: 'Educación',
  },
  // {
  //   id: 'experience',
  //   title: 'Experience',
  // },
];

export const listSkills = [
  {
    id: '1',
    name: 'HTML',
    icon: 'img/skills/html-5.svg',
  },
  {
    id: '2',
    name: 'CSS',
    icon: 'img/skills/css-3.svg',
  },
  {
    id: '3',
    name: 'JAVASCRIPT',
    icon: 'img/skills/javascript.svg',
  },
  {
    id: '4',
    name: 'REACT',
    icon: 'img/skills/react.svg',
  },
  {
    id: '5',
    name: 'GIT',
    icon: 'img/skills/git-icon.svg',
  },
  {
    id: '6',
    name: 'BOOTSTRAP',
    icon: 'img/skills/bootstrap.svg',
  },
  {
    id: '7',
    name: 'NODE JS',
    icon: 'img/skills/nodejs.svg',
  },
  {
    id: '8',
    name: 'MONGODB',
    icon: 'img/skills/mongo.svg',
  },
];

export const dataEducations = [
  {
    id: 1,
    job: 'Estudiante - INFORMÁTICA',
    company: 'Universidad Mayor de San Andrés',
    date: '2017 - 2021',
    icon: faGraduationCap,
  },
  {
    id: 2,
    job: 'Tecnico Medio - Sistemas Computacionales',
    company: 'CEA - DON BOSCO',
    date: '2018 - 2020',
    icon: faGraduationCap,
  },
];

export const dataExperience = [
  {
    id: 1,
    job: 'Full Stack Developer',
    company: 'Soft, La Paz',
    date: 'Ene, 2018 - Abr, 2020',
    icon: faBriefcase,
  },
  {
    id: 2,
    job: 'Web Designer',
    company: 'Vista, La Paz',
    date: 'Sep, 2017 - Dic, 2017',
    icon: faBriefcase,
  },
  {
    id: 2,
    job: 'Frontend Developer',
    company: 'Market, La Paz',
    date: 'Jun, 2015 - Marzo 2016',
    icon: faBriefcase,
  },
];
