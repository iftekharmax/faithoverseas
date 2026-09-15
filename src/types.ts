export interface Sector {
  id: string;
  name: string;
  category: string;
  icon: string;
  image: string;
  description: string;
  roles: string[];
  keyCompetencies: string[];
  demandOverview: string;
}

export interface ProcessStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  icon: string;
  color: string;
}

export interface WhyFeature {
  number: string;
  title: string;
  description: string;
  highlight: string;
  icon: string;
}

export interface ReadinessItem {
  id: string;
  title: string;
  description: string;
  category: 'profile' | 'communication' | 'technical' | 'departure';
}

export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone: string;
  sector: string;
  experienceYears: string;
  highestEducation: string;
  englishLevel: string;
  hasPassport: boolean;
  notes: string;
}
