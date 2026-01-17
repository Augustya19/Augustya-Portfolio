import { Experience, Project, CaseStudy } from './types';

export const PORTFOLIO_OWNER = "Augustya";
export const PORTFOLIO_SUMMARY = `I’m a Computer Science graduate, now exploring roles in Graphic Design and Product Management where creativity meets structured problem-solving. Through my academic and internship experience, I’ve worked on data visualization, predictive modeling, and product oriented projects, which shaped the way I think about users, insights, and impact. Alongside this, I’ve developed strong interests and hands-on skills in graphic design focusing on visual storytelling, clarity, and usability.`;

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: '1',
    company: 'Learning Routes',
    role: 'Management Trainee',
    period: 'June 2025 - July 2025',
    description: 'Supported sales and operations teams by managing leads, maintaining client databases, and improving follow-up processes. Worked closely with senior managers to understand business workflows, sales pipelines, and customer retention strategies. Developed strong communication, negotiation, and CRM tool skills through cross-functional collaboration.'
  },
  {
    id: '2',
    company: 'Celebal Technologies',
    role: 'Data Science Intern',
    period: 'May 2024 - July 2024',
    description: 'Led the development of a CNN-based image classification model, achieving 92% accuracy across 10,000+ images. Improved model performance by 30% through effective data preprocessing and augmentation, aligning technical outcomes with stakeholder requirements. Conducted predictive modeling for house price estimation, delivering an 84.73% improvement in accuracy and demonstrating strong analytical and problem-solving skills.'
  }
];

export const DESIGN_PROJECTS: Project[] = [
  {
    id: 'd3',
    title: 'The Process',
    category: 'Digital Art',
    imageUrl: '/art1.jpg',
    link: 'https://www.behance.net/gallery/241962553/The-Process-Modern-Digital-Illustration'
  },
  {
    id: 'd1',
    title: 'A Visual Study',
    category: 'Illustrations',
    imageUrl: '/art.png',
    link: 'https://www.behance.net/gallery/241410213/A-Visual-Study'
  },
  
  {
    id: 'd4',
    title: 'A Moment of Calm',
    category: 'Digital Art',
    imageUrl: '/art2.JPG',
    link: 'https://www.behance.net/gallery/241962693/A-Moment-of-Calm-Digital-Artwork?share=1'
  },
  {
    id: 'd2',
    title: 'Shush',
    category: 'Web Design',
    imageUrl: '/shush.jpg',
    link: 'https://shush-health.vercel.app/'
  }
];

export const PM_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'pm1',
    title: 'AI-Fitness Coach',
    role: 'Product Strategy',
    summary: 'Designed a fast, habit-first AI Fitness Coach MVP in a 10-day simulation, defining PRD, user flows, feature prioritization, and execution strategy to validate personalized daily coaching.',
    metric: '',
    tags: ['Discovery', 'Mobile', 'User Research'],
    link: 'https://www.notion.so/AI-FITNESS-COACH-2c5be2d7216a8071a375fd5e6d48221e?source=copy_link'
  },
  {
    id: 'pm2',
    title: 'Fare Transparency at the Finish Line (Uber)',
    role: 'Design',
    summary: 'A product case study focused on improving pricing transparency in ride-hailing apps by surfacing real-time fare revisions and clear system-generated explanations at trip completion, reducing user confusion, disputes, and trust gaps.',
    metric: '',
    tags: ['UI/UX', 'System Design'],
    link: 'https://www.notion.so/Case-Study-Real-Time-Fare-Revision-Transparency-for-Ride-Hailing-Apps-Uber-2cabe2d7216a80ce845bd86145758bec?source=copy_link'
  },
  {
    id: 'pm3',
    title: 'Serenova: AI-Powered Personalized Travel Planner',
    role: 'Product Owner',
    summary: 'Serenova is a smart travel planning mobile application designed to create highly personalized travel experiences across India.The app generates customized destination and itinerary recommendations based on user preferences such as budget, location, number of travelers, travel month, and interests',
    metric: '',
    tags: ['UI/UX', 'Web Design', 'Discovery'],
    link: 'https://www.notion.so/Serenova-AI-Powered-Personalized-Travel-Planner-2e5be2d7216a8034a3cbdf65ba064ecc?source=copy_link'
  },
   {
    id: 'pm4',
    title: 'Spotify: Focus Mode Intelligence',
    role: 'Product Strategy',
    summary: 'This case study explores how Spotify could automatically adapt music based on what the user is doing—coding, reading, or relaxing. The focus is on designing a simple, non-intrusive UI that keeps users in flow while still giving them control.',
    metric: '',
    tags: ['Mobile', 'UI Design', 'Research'],
    link: 'https://www.notion.so/Spotify-Focus-Mode-Intelligence-2ebbe2d7216a80cf8bcee6c78ddf1395?source=copy_link'
  } 
];

export const SKILLS_MARQUEE = [
  "Product Strategy", "Visual Identity", "User Research", "Prototyping", "Data Analysis", "Figma", "React", "System Design", "Typography", "Storytelling", "A/B Testing"
];

export const PORTFOLIO_CONTEXT = `You are a helpful AI assistant for ${PORTFOLIO_OWNER}'s portfolio website.`;
