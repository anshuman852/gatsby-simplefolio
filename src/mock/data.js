import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Ansuman Mishra', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ansuman Mishra',
  subtitle: 'I am an Android Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Will Surely',
  paragraphTwo: 'Write Something',
  paragraphThree: 'Very Cool',
  resume: 'https://drive.google.com/file/d/17WzGf13ocGpNA9Fhzu-JZ03zgceefeBO/view', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Timetable App',
    info: 'Timetable and Attendancer Checker App for GIFT CSE and AG students',
    info2: 'Written in Java, uses firebase to store the timetable information',
    url: 'https://bit.ly/GIFTAPP',
    repo: 'https://github.com/anshuman852/GIFT-CSE-APP', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'REST API for timetable app',
    info: 'Rest api written in Nodejs to scrape data from our CMS(cms.gift.edu.in)',
    info2: '',
    url: 'github.com/anshuman852',
    repo: 'github.com/anshuman852', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'anshuman852@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/anshuman852',
    },
    {
      id: uuidv1(),
      name: 'facebook',
      url: 'https://facebook.com/nshuman852',
    },
    {
      id: uuidv1(),
      name: 'telegram',
      url: 'https://t.me/anshuman852',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/anshuman852',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
