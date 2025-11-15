export type TabKey =
  | "Backend"
  | "Frontend"
  | "Framework"
  | "Mobile"
  | "DevOps"
  | "More";

export const navContent: Record<
  TabKey,
  { title: string; sections: string[] }
> = {
  Backend: {
    title: "Backend",
    sections: [".Net", "SQL", "PHP", "Java", "Python", "Node.js", "Golang"],
  },
  Frontend: {
    title: "Frontend",
    sections: [
      "React JS",
      "JavaScript",
      "Angular",
      "TypeScript",
      "Vue JS",
      "Next JS",
    ],
  },
  Framework: {
    title: "Framework",
    sections: ["Django", "Express", "Spring Boot"],
  },
  Mobile: {
    title: "Mobile",
    sections: ["Flutter", "Java", "React Native"],
  },
  DevOps: {
    title: "DevOps",
    sections: ["AWS", "Azure", "Google Cloud"],
  },
  More: {
    title: "More",
    sections: ["SalesForce", "MS Power Apps", "Metaverse"],
  },
};