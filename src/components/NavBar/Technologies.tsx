import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export default function Technologies() {
  type TabKey = "Backend" | "Frontend" | "Framework" | "Mobile" | "DevOps" | "More";
  const [tabState, setTabState] = useState<TabKey>("Backend");
  const [isOpen, setIsOpen] = useState(false);

  const menuContent: Record<
    TabKey,
    { title: string; sections: string[] }
  > = {
    Backend: {
      title: "Backend",
      sections: [
        ".Net",
        "SQL",  
        "PHP",
        "Java",
        "Python",
        "Node.js",
        "Golang",
      ],
    },
    Frontend: {
      title: "Frontend",
      sections: [
       "React JS",
       "JavaScript",
       "Angular",
       "TypeScript",
       "Vue JS",
       "Next JS"
      ],
    },
    Framework: {
      title: "Framework",
      sections: [
       "Django",
       "Express",
       "Spring Boot",
      ],
    },
     Mobile: {
      title: "Mobile",
      sections: [
       "Flutter",
       "Java",
       "React Native",
      ],
    },
     DevOps: {
      title: "DevOps",
      sections: [
       "AWS",
       "Azure",
       "Google Cloud",
      ],
    },
     More: {
      title: "More",
      sections: [
       "SalesForce",
       "MS Power Apps",
       "Metaverse",
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
        <span className="font-medium text-base">Technologies</span>
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
                    value= "Backend"
                    className="text-left"
                  >
                   <div className="flex flex-col text-left whitespace-normal hover:text-blue-600">
                    <h3 className="text-lg font-semibold mb-1">Backend</h3>
                  </div>                  
                  </TabsTrigger>
                  <TabsTrigger
                    value="Frontend" 
                    className="text-center"
                  >
                  <div className="flex flex-col text-left whitespace-normal hover:text-blue-600">
                    <h3 className="text-lg font-semibold mb-1">Frontend</h3>
                  </div>  
                  </TabsTrigger>
                  <TabsTrigger
                    value="Framework"
                    className="text-right"
                  >
                    <div className="flex flex-col text-left whitespace-normal hover:text-blue-600">
                      <h3 className="text-lg font-semibold mb-1">Framework</h3>
                  </div> 
                  </TabsTrigger>
                   <TabsTrigger
                    value="Mobile" 
                    className="text-right"
                  >
                    <div className="flex flex-col text-left whitespace-normal hover:text-blue-600">
                      <h3 className="text-lg font-semibold mb-1">Mobile</h3>
                  </div> 
                  </TabsTrigger>
                   <TabsTrigger
                    value="DevOps"
                    className="text-right"
                  >
                    <div className="flex flex-col text-left whitespace-normal hover:text-blue-600">
                      <h3 className="text-lg font-semibold mb-1">DevOps</h3>
                  </div> 
                  </TabsTrigger>
                    <TabsTrigger
                    value="More"
                    className="text-right"
                  >
                    <div className="flex flex-col text-left whitespace-normal hover:text-blue-600">
                      <h3 className="text-lg font-semibold mb-1">More</h3>
                  </div> 
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="Backend">
                  <div className="">
                    <div className="p-8">
                      <Separator  className="border-gray-700 my-4 border"/>
                      <div className="grid grid-cols-3 gap-x-12 gap-y-4 relative">
                        <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gray-700"></div>
                          <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gray-700"></div>
                              {menuContent.Backend.sections.map((section, idx) => (
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
                
                <TabsContent value="Frontend">
                  <div className="">
                    <div className="p-8">
                       <Separator className="border-gray-700 my-4 border" />
                      <div className="grid grid-cols-3 gap-x-12 gap-y-4 relative">
                         <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gray-700"></div>
                          <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gray-700"></div>
                        {menuContent.Frontend.sections.map((section, idx) => (
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

                <TabsContent value="Framework">
                  <div className="">
                    <div className="p-8">
                       <Separator className="border-gray-700 my-4 border" />
                      <div className="grid grid-cols-3 gap-x-12 gap-y-4 relative">
                          <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gray-700"></div>
                          <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gray-700"></div>
                        {menuContent.Framework.sections.map((section, idx) => (
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
                <TabsContent value="Mobile">
                  <div className="">
                    <div className="p-8">
                       <Separator className="border-gray-700 my-4 border" />
                      <div className="grid grid-cols-3 gap-x-12 gap-y-4 relative">
                          <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gray-700"></div>
                          <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gray-700"></div>
                        {menuContent.Mobile.sections.map((section, idx) => (
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
                <TabsContent value="DevOps">
                  <div className="">
                    <div className="p-8">
                       <Separator className="border-gray-700 my-4 border" />
                      <div className="grid grid-cols-3 gap-x-12 gap-y-4 relative">
                          <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gray-700"></div>
                          <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gray-700"></div>
                        {menuContent.DevOps.sections.map((section, idx) => (
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
                <TabsContent value="More">
                  <div className="">
                    <div className="p-8">
                       <Separator className="border-gray-700 my-4 border" />
                      <div className="grid grid-cols-3 gap-x-12 gap-y-4 relative">
                          <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gray-700"></div>
                          <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gray-700"></div>
                        {menuContent.More.sections.map((section, idx) => (
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