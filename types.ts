export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  link: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  role: string;
  summary: string;
  metric: string;
  tags: string[];
  link: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  

}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}