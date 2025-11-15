import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function OffShoreDeveloper() {
  type TabKey = "Backend_Developer" | "Frontend_Developer" | "Mobile_App_Developer" | "AI_Engineer" | "Devops_Engineer" | "Platforms";
  const [tabState, setTabState] = useState<TabKey>("Backend_Developer");
  const [isOpen, setIsOpen] = useState(false);

  const menuContent: Record<
    TabKey,
    { title: string; sections: string[] }
  > = {
    Backend_Developer: {
      title: "Backend Developer",
      sections: [
        "Node.js Developer",
        "Golang Developer",
        ".Net Developer",
        "SQL Developer",  
        "PHP Developer",
        "Java Developer",
        "Python Developer",
        "Spring Boot Developers",
        "Express jS Developer",
        "Django Developer",
      ],
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
      title: " Mobile App Developer",
      sections: [
       "React Native Developer",
       "Full Stack Developer",
       "Flutter Developer",
       "Java Developer",
       "Java Developer",
      ],
    },
     AI_Engineer: {
      title: "AI Engineer",
      sections: [
       "AI Development Teams",
       "Computer Vision Engineers",
       "Generative AI Engineers",
       "NLP Engineers",
       "AI Team Augumentation Services",
       "LLM Engineers",
      ],
    },
     Devops_Engineer: {
      title: "Devops Engineer",
      sections: [
       "AWS Developer",
       "Azure Developer",
       "Google Cloud Developer",
      ],
    },
     Platforms: {
      title: "Platforms",
      sections: [
       "SalesForce Developer",
       "MS Power Apps Developer",
       "Metaverse Developer",
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
        <span className="font-medium text-base">OffShore Developer</span>
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
          <div className="mx-auto h-[481px] w-full">
            <div className="p-8 shadow-2xl border border-purple-700"
            style={{ background: 'linear-gradient(to bottom right, #00172F, #00070E)' }}
            >
              <Tabs defaultValue="software" className="border-none"
               onValueChange={(value) => setTabState(value as TabKey)}
                value={tabState}
              >
               <TabsList className="flex justify-between items-center p-6 w-full">
                  <TabsTrigger
                    value= "Backend_Developer"
                    className="text-left"
                  >
                   <div className="flex flex-col text-left whitespace-normal hover:text-blue-600">
                    <h3 className="text-lg font-semibold mb-1">Backend_Developer</h3>
                  </div>                  
                  </TabsTrigger>
                  <TabsTrigger
                    value="Frontend_Developer" 
                    className="text-center"
                  >
                  <div className="flex flex-col text-left whitespace-normal hover:text-blue-600">
                    <h3 className="text-lg font-semibold mb-1">Frontend_Developer</h3>
                  </div>  
                  </TabsTrigger>
                  <TabsTrigger
                    value="Mobile_App_Developer"
                    className="text-right"
                  >
                    <div className="flex flex-col text-left whitespace-normal hover:text-blue-600">
                      <h3 className="text-lg font-semibold mb-1">Mobile_App_Developer</h3>
                  </div> 
                  </TabsTrigger>
                   <TabsTrigger
                    value="AI_Engineer" 
                    className="text-right"
                  >
                    <div className="flex flex-col text-left whitespace-normal hover:text-blue-600">
                      <h3 className="text-lg font-semibold mb-1">AI_Engineer</h3>
                  </div> 
                  </TabsTrigger>
                   <TabsTrigger
                    value="Devops_Engineer"
                    className="text-right"
                  >
                    <div className="flex flex-col text-left whitespace-normal hover:text-blue-600">
                      <h3 className="text-lg font-semibold mb-1">Devops_Engineer</h3>
                  </div> 
                  </TabsTrigger>
                    <TabsTrigger
                    value="Platforms"
                    className="text-right"
                  >
                    <div className="flex flex-col text-left whitespace-normal hover:text-blue-600">
                      <h3 className="text-lg font-semibold mb-1">Platforms</h3>
                  </div> 
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="Backend_Developer">
                  <div className="">
                    <div className="p-8">
                      <Separator  className="border-gray-700 my-4 border"/>
                      <div className="grid grid-cols-3 gap-x-12 gap-y-4 relative">
                        <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gray-700"></div>
                          <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gray-700"></div>
                              {menuContent.Backend_Developer.sections.map((section, idx) => (
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
                
                <TabsContent value="Frontend_Developer">
                  <div className="">
                    <div className="p-8">
                       <Separator className="border-gray-700 my-4 border" />
                      <div className="grid grid-cols-3 gap-x-12 gap-y-4 relative">
                         <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gray-700"></div>
                          <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gray-700"></div>
                        {menuContent.Frontend_Developer.sections.map((section, idx) => (
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

                <TabsContent value="Mobile_App_Developer">
                  <div className="">
                    <div className="p-8">
                       <Separator className="border-gray-700 my-4 border" />
                      <div className="grid grid-cols-3 gap-x-12 gap-y-4 relative">
                          <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gray-700"></div>
                          <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gray-700"></div>
                        {menuContent.Mobile_App_Developer.sections.map((section, idx) => (
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
                <TabsContent value="AI_Engineer">
                  <div className="">
                    <div className="p-8">
                       <Separator className="border-gray-700 my-4 border" />
                      <div className="grid grid-cols-3 gap-x-12 gap-y-4 relative">
                          <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gray-700"></div>
                          <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gray-700"></div>
                        {menuContent.AI_Engineer.sections.map((section, idx) => (
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
                <TabsContent value="Devops_Engineer">
                  <div className="">
                    <div className="p-8">
                       <Separator className="border-gray-700 my-4 border" />
                      <div className="grid grid-cols-3 gap-x-12 gap-y-4 relative">
                          <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gray-700"></div>
                          <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gray-700"></div>
                        {menuContent.Devops_Engineer.sections.map((section, idx) => (
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
                <TabsContent value="Platforms">
                  <div className="">
                    <div className="p-8">
                       <Separator className="border-gray-700 my-4 border" />
                      <div className="grid grid-cols-3 gap-x-12 gap-y-4 relative">
                          <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gray-700"></div>
                          <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gray-700"></div>
                        {menuContent.Platforms.sections.map((section, idx) => (
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