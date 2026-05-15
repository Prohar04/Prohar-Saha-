import { Company, PersonalDetails, Project } from './types';

export const PERSONAL_DETAILS: PersonalDetails = {
  name: 'Prohar Saha Polak',
  logo: '/images/ps_logo.svg',
  about: 'Where clean code meets real-world impact.',
  socialMedia: [
    {
      link: 'https://github.com/Prohar04',
      image_file: '/images/icons/github.svg',
      alt_text: 'GitHub'
    },
    {
      link: 'https://www.linkedin.com/in/prohor04/',
      image_file: '/images/icons/linkedin.svg',
      alt_text: 'LinkedIn'
    },
    {
      link: 'mailto:sahaprohar10@gmail.com',
      image_file: '/images/icons/mail.svg',
      alt_text: 'Email'
    },
    {
      link: 'https://leetcode.com/u/Prohor04/',
      image_file: '/images/icons/leetcode.svg',
      alt_text: 'LeetCode'
    },
    {
      link: 'https://www.hackerrank.com/profile/prohar_04',
      image_file: '/images/icons/hackerrank.svg',
      alt_text: 'HackerRank'
    }
  ],
  work: {
    company: 'BRAC University',
    designation: 'Full Stack Developer (Open to Opportunities)',
    logo: '/images/companies/brac_logo.svg'
  },
  resume: '/resume.pdf',
  profile_img: '/images/bob.png',
  calendyUrl: ''
};

export const PROJECTS: Project[] = [
  {
    slug: 'eventnest',
    name: 'EventNest',
    tagline: 'A full-service event marketplace built for Bangladesh',
    description:
      'EventNest connects people with trusted professionals across photography, catering, event management, and printing — all on one platform. Users can browse services, book by date and time, track orders through an integrated e-commerce store, and receive real-time notifications. Every detail is localized for the Bangladesh market, from BDT pricing to +880 phone validation, making it a practical solution for a genuinely underserved space.',
    img: '/images/projects/eventnest.svg',
    tags: ['Python', 'Django', 'JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/Prohar04/EventNest',
    url: 'https://eventnest00.pythonanywhere.com',
    category: ['web', 'fullstack'],
    featured: true
  },
  {
    slug: 'educai',
    name: 'EducAI',
    tagline: 'Your AI co-pilot for studying abroad',
    description:
      'EducAI takes the overwhelming process of applying to universities abroad and turns it into a guided, intelligent experience. It matches students to programs and scholarships, generates personalized SOPs and CVs, maps out visa timelines, and surfaces relevant professors — all powered by a multi-LLM backend with automatic fallback. Deployed across three independent services with a full CI/CD pipeline, it represents the kind of end-to-end engineering that goes far beyond a typical student project.',
    img: '/images/projects/educai.svg',
    tags: ['NextJS', 'React', 'TypeScript', 'FastAPI', 'Python', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/Prohar04/EducAI',
    url: 'https://educai-web.vercel.app',
    category: ['web', 'fullstack', 'ai'],
    featured: true
  },
  {
    slug: 'fuelflow',
    name: 'FuelFlow',
    tagline: 'Straightforward fuel inventory and sales tracking',
    description:
      'A clean web application for managing day-to-day gas station operations, covering fuel inventory levels, sales records, and station activity in one simple interface. Built to be practical and easy to navigate without unnecessary complexity.',
    img: '/images/projects/fuelflow.svg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Prohar04/FuelFlow',
    category: ['web'],
    featured: false
  },
  {
    slug: 'university-search-api',
    name: 'University Search API',
    tagline: 'Smart search and recommendations for university discovery',
    description:
      'A lightweight REST API that accepts student queries and returns relevant university recommendations using intelligent filtering logic. Designed as a reusable backend service that can plug into any student-facing application needing university data.',
    img: '/images/projects/university-search-api.svg',
    tags: ['Python'],
    github: 'https://github.com/Prohar04/University-Search-API',
    category: ['backend', 'api'],
    featured: false
  }
];

export const COMPANIES: Company[] = [
  {
    name: 'Seeking Internship / Junior Role',
    featured: true,
    position: 'Full Stack Developer (Open to Opportunities)',
    startDate: '2025',
    responsibilities: [
      'Actively seeking internship and entry-level full stack developer positions',
      'Available for Django, MERN, or Python backend roles — remote or Dhaka-based',
      'Strong portfolio of independently shipped projects available for review'
    ]
  }
];
