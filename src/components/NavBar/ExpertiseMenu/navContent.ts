export type TabKey =
  | "Software" 
  | "Ai" 
  | "Industries" 

export const navContent: Record<
  TabKey,
  { title: string; desc: string; sections: string[] }
> = {
  Software: {
     title: "Software Solution",
     desc: "Top-tier software solutions to modernize, optimize, and scale your digital operations.",
    sections: [ "Software Development",
        "Web App Development",
        "Web App Development",
        "API Integration",
        "Application modernization",
        "Hire Software Developers",
        "Staff Augumentation",
        "UI/UX Services",
        "SaaS Development",
        "Data Analysis",
        "Enterprice Software",
        "Software Outsourcing",
        "Devops Services",
        "CRM Development",
        "Low-Code/No-Code",
        "ERP Software",
        "Cloud Consulting"],
     },
  Ai: {
     title: "Artificial Intelligence",
     desc: "Intelligent AI solutions to automate, personalize, and future-proof your business.",
    sections: [
       "AI Data Annotation",
        "LLMs Development",
        "GenAI Integration",
        "AI Consulting Services",
        "LLM Fine-Tuning",
        "ChatGPT Integration",
        "AI Annotation",
        "GenAI Consulting",
        "LLM Fine Tuning",
        "GenAI Development",
        "AI Development",
        "AI Agent Development",
        "AI Automation Services",
        "AI Software Development",
        "AI Chatbot Development",
        "Computer Vision Development",
        "Mistral AI Integration",
        "NLP Development Services"
    ],
  },
  Industries: {
    title: "Industries",
    desc: "Transforming businesses across industries with scalable and customized tech-driven strategies.",
    sections: [ "FinTech",
        "Retail",
        "PropTech",
        "Automotive",
        "AI Data Annotation",
        "Facility Management",
        "Transport",
        "Telecom",
        "EdTech",
        "InsureTech",
        "HealthTech",
        "Media and Entertainment"],
    },
 };