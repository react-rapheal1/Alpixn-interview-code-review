import { useState } from "react";
import { Button } from "@/components/ui/button";
import OffShoreTabs from "./OffShoreTabs";
import { TabKey } from "./navContent";
import { ChevronDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { navContent } from "./navContent";

interface OffShoreDeveloperTabProps {
  mobile?: boolean;
}
export default function OffShoreDeveloperTab({ mobile = false }: OffShoreDeveloperTabProps) {
  const [tabState, setTabState] = useState<TabKey>("Backend_Developer");
  const [isOpen, setIsOpen] = useState(false);

    if (mobile) {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="offshore" className="border-b border-gray-700">
          <AccordionTrigger className="text-white font-medium text-base py-3 hover:no-underline">
            OffShore Developer
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              {(Object.keys(navContent) as TabKey[]).map((key) => (
                <div key={key} className="space-y-2">
                  <h4 className="text-white font-medium text-sm pl-4">
                    {navContent[key].title}
                  </h4>
                  <div className="pl-6 space-y-2">
                    {navContent[key].sections.map((section, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 cursor-pointer py-1"
                      >
                        <span className="text-gray-400 text-xs">—</span>
                        <span className="text-gray-300 text-sm hover:text-white transition-colors">
                          {section}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
    >
      <Button
        variant="ghost"
        className="text-sm text-black hover:text-blue-400 hover:bg-transparent px-4"
      >
        <span className="font-medium text-base">OffShore Developer</span>
        <ChevronDown
          className={`w-4 h-4 ml-2 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </Button>

      {isOpen && (
        <div
         onMouseEnter={() => setIsOpen(true)}
         onMouseLeave={() => setIsOpen(false)} 
        className="fixed left-0 right-0 top-[72px] shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200"
        >
          <div className="mx-auto max-w-[1400px] w-full px-4">
            <div
              className="rounded-lg shadow-2xl border border-purple-700/50 backdrop-blur-sm"
              style={{
                background: "linear-gradient(to bottom right, #00172F, #00070E)",
              }}
            >
              <div className="p-8">
                <OffShoreTabs tabState={tabState} setTabState={setTabState} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}