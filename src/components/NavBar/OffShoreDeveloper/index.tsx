import { useState } from "react";
import { Button } from "@/components/ui/button";
import OffShoreTabs from "./OffShoreTabs";
import { TabKey } from "./navContent";
import { ChevronDown } from "lucide-react";

export default function OffShoreDeveloperTab() {
  const [tabState, setTabState] = useState<TabKey>("Backend_Developer");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
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
        <div className="fixed left-0 right-0 top-[72px] shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
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