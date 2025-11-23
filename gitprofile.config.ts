// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Necookie', // Your GitHub org/user name. (This is the only required config)
  },

  base: '/gitprofile/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [],
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        {
          title: 'Neko-DC AI',
          description:
            'Discord chat bot powered by ChatGPT-4, with discord.py and ChatGPT API integration.',
          imageUrl:
            'https://res.cloudinary.com/dd6gz4moa/image/upload/v1763839319/Neko_DC_Icon_md0jm5.jpg',
          link: 'https://github.com/Necookie/NekoDC_AI',
        },
      ],
    },
  },
  seo: { 
    title: 'Portfolio of Dheyn Michael Orlanda', 
    description: 'Full-stack developer skilled in Python, React, Node.js, and Discord.py', // Add this
    imageURL: '' 
  },
  social: {
    linkedin: 'Dheyn Michael Orlanda',
    x: '@NecookieMonster',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'necookie',
    stackoverflow: '',
    discord: 'necookiedevours',
    telegram: '',
    website: 'Coming Soon!!',
    phone: '63+ 995 492 2742',
    email: 'dheynmichael.orlanda@lspu.edu.ph',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1oya_Lm0-0l6j2wISbC5KvYZ3kddBDZXz/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Discord.py',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'Python Unit Testing',
    'CSS',
    'Antd',
    'Tailwind',
    'Vue.js',
  ],
  experiences: [
    {
      company: 'Pix Master - Pagsanjan [80 hour - Work Immersion]',
      position: 'Computer Attendant',
      from: 'April 1, 2023',
      to: 'May 18, 2023',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'DICT Region 11 - Data Privacy Awareness Webinar',
      body: '4-hour Webinar on Data Privacy Awareness',
      year: 'September 10, 2025',
      link: '',
    },
    {
      name: 'DICT Region 2 - Data Privacy Webinar',
      body: 'Guardians of Privacy Nurturing Data Awareness',
      year: 'April 30, 2024'
    }
  ],
  educations: [
    {
      institution: 'Laguna State Polytechnic University - Sta. Cruz Campus',
      degree: 'Bachelor of Science in Computer Science ',
      from: '2023',
      to: 'Present',
    },
    {
      institution: 'Angelita V. Del Mundo Foundation',
      degree: 'ICT - Programming',
      from: '2021',
      to: '2023',
    },
  ],
  publications: [
    {
      title: 'Coming Soon...',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description:
        'Check back soon for upcoming publications!',
    },
  ],
  blog: {
    source: 'dev', // medium | dev
    username: 'necookie', 
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', 
  },

  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    disableSwitch: false,

    respectPrefersColorScheme: false,

    displayAvatarRing: true,

    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },
};

export default CONFIG;
