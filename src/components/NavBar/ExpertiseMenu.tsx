import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function ExpertiseMenu() {
  type TabKey = "software" | "ai" | "industries";
  const [tabState, setTabState] = useState<TabKey>("software");
  const [isOpen, setIsOpen] = useState(false);

  const menuContent: Record<
    TabKey,
    { title: string; desc: string; sections: string[] }
  > = {
    software: {
      title: "Software Solution",
      desc: "Top-tier software solutions to modernize, optimize, and scale your digital operations.",
      sections: [
        "Software Development",
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
        "Cloud Consulting",
      ],
    },
    ai: {
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
        "NLP Development Services",
      ],
    },
    industries: {
      title: "Industries",
      desc: "Transforming businesses across industries with scalable and customized tech-driven strategies.",
      sections: [
        "FinTech",
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
        "Media and Entertainment",
      ],
    },
  };

  return (
    <div 
    className="relative inline-block"
     onMouseEnter={() => setIsOpen(true)}
    onMouseLeave={() => setIsOpen(false)}
    >
      <Button 
        variant="outline"
        className="border-none bg-color-none text-sm text-black hover:text-blue-400"
      >
        <span className="font-medium text-base">Our Expertise</span>
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </Button>

      {isOpen && (
        <div
          onMouseLeave={() => setIsOpen(false)}
          className="fixed left-0 right-0 top-[72px] shadow-2xl z-50"
        >
          <div className="mx-auto h-[481px] w-[1400px]">
            <div className="p-8 shadow-2xl border border-purple-700"
            style={{ background: 'linear-gradient(to bottom right, #00172F, #00070E)' }}
            >
              <Tabs defaultValue="software" className="border-none"
               onValueChange={(value) => setTabState(value as TabKey)}
                value={tabState}
              >
               <TabsList className="flex justify-between items-center p-6 w-full">
                  <TabsTrigger
                    value="software"
                    className="text-left"
                  >
                   <div className="flex flex-col w-[315px] text-left whitespace-normal hover:text-blue-600">
                    <h3 className="text-lg font-semibold mb-1">Software Solution</h3>
                    <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                      Top-tier software solutions to modernize, 
                      optimize, and scale your digital operations.
                    </p>
                  </div>                  
                  </TabsTrigger>
                  <TabsTrigger
                    value="ai"
                    className="text-center"
                  >
                  <div className="flex flex-col w-[315px] text-left whitespace-normal hover:text-blue-600">
                    <h3 className="text-lg font-semibold mb-1">Artificial Intelligence</h3>
                    <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                     Intelligent AI solutions to automate, 
                     personalize, and future-proof your business.
                    </p>
                  </div>  
                  </TabsTrigger>
                  <TabsTrigger
                    value="industries"
                    className="text-right"
                  >
                    <div className="flex flex-col w-[315px] text-left whitespace-normal hover:text-blue-600">
                      <h3 className="text-lg font-semibold mb-1">Industries</h3>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                        Transforming businesses across 
                        industries with scalable and customized 
                        tech-driven strategies.
                        </p>
                  </div> 
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="software">
                  <div className="">
                    <div className="p-8">
                      <Separator  className="border-gray-700 my-4 border"/>
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-10">
                        OUR OFFERINGS
                      </p>
                      <div className="grid grid-cols-3 gap-x-12 gap-y-4 relative">
                        <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gray-700"></div>
                          <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gray-700"></div>
                              {menuContent.software.sections.map((section, idx) => (
                                  <div key={idx} className="flex items-center space-x-3 text-left group cursor-pointer pl-16">
                                    <span className="text-gray-400">—</span>
                                      <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                                        {section}
                                      </span>
                                  </div>
                              ))}
                          </div>
                        </div>
                      </div>
                </TabsContent>
                
                <TabsContent value="ai">
                  <div className="">
                    <div className="p-8">
                       <Separator className="border-gray-700 my-4 border" />
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">
                        AI THAT WORKS FOR YOU
                      </p>
                      <div className="grid grid-cols-3 gap-x-12 gap-y-4 relative">
                         <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gray-700"></div>
                          <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gray-700"></div>
                        {menuContent.ai.sections.map((section, idx) => (
                              <div key={idx} className="flex items-center space-x-3 text-left group cursor-pointer pl-16">
                                <span className="text-gray-400">—</span>
                                  <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                                    {section}
                                  </span>
                              </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="industries">
                  <div className="">
                    <div className="p-8">
                       <Separator className="border-gray-700 my-4 border" />
                      <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">
                        INDUSTRIES WE SERVE
                      </p>
                      <div className="grid grid-cols-3 gap-x-12 gap-y-4 relative">
                          <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gray-700"></div>
                          <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gray-700"></div>
                        {menuContent.industries.sections.map((section, idx) => (
                              <div key={idx} className="flex items-center space-x-3 text-left group cursor-pointer pl-16">
                                <span className="text-gray-400">—</span>
                                  <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                                    {section}
                                  </span>
                              </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}