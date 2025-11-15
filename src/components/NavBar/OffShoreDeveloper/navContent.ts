export type TabKey =
  | "Backend_Developer"
  | "Frontend_Developer" 
  | "Mobile_App_Developer" 
  | "AI_Engineer"
  | "Devops_Engineer"
  | "Platforms";

export const navContent: Record<
  TabKey,
  { title: string; sections: string[] }
> = {
  Backend_Developer: {
    title: "Backend Developer",
    sections: [ "Node.js Developer",
        "Golang Developer",
        ".Net Developer",
        "SQL Developer",  
        "PHP Developer",
        "Java Developer",
        "Python Developer",
        "Spring Boot Developers",
        "Express jS Developer",
        "Django Developer"],
  },
  Frontend_Developer: {
    title: "Frontend Developer",
    sections: [
       "ReactJS Developer",
       "JavaScript Developer",
       "Angular Developer",
       "TypeScript Developer",
       "VueJS Developer",
       "NextJS Developer"
    ],
  },
  Mobile_App_Developer: {
    title: "Mobile App Developer",
    sections: ["React Native Developer",
       "Full Stack Developer",
       "Flutter Developer",
       "Java Developer",
       "Java Developer"],
  },
  AI_Engineer: {
    title: "AI Engineer",
    sections: [ "AI Development Teams",
       "Computer Vision Engineers",
       "Generative AI Engineers",
       "NLP Engineers",
       "AI Team Augumentation Services",
       "LLM Engineers"],
  },
  Devops_Engineer: {
    title: "Devops Engineer",
    sections: ["AWS Developer",
       "Azure Developer",
       "Google Cloud Developer"],
  },
  Platforms: {
    title: "Platforms",
    sections: [ "SalesForce Developer",
       "MS Power Apps Developer",
       "Metaverse Developer"],
  },
};