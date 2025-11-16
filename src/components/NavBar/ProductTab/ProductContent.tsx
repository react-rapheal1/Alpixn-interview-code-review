import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
interface ProductMenuProps {
  label: string;
  title: string;
  description: string[];
  sections: string[];
  buttonText?: string;
  onButtonClick?: () => void;
  illustrationSrc?: any;
  illustrationAlt?: string;
  topOffset?: string;
  gradientColors?: {
    from: string;
    to: string;
  };
  mobile?: boolean;
}

export default function ProductContent({
  label,
  title,
  description,
  sections,
  buttonText = "Let's Talk",
  onButtonClick,
  illustrationSrc,
  illustrationAlt = "illustration",
  topOffset = "top-[72px]",
  gradientColors = {
    from: "#00172F",
    to: "#00070E",
  },
  mobile = false,
}: ProductMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  if (mobile) {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="products" className="border-b border-gray-700">
          <AccordionTrigger className="text-white font-medium text-base py-3 hover:no-underline">
            {label}
          </AccordionTrigger>
          <AccordionContent>
            <div className="pl-4 pb-3 space-y-2">
              {sections.map((section, idx) => (
                <div
                  key={idx}
                  className="flex items-center space-x-2 cursor-pointer py-2"
                >
                  <span className="text-gray-400 text-xs">—</span>
                  <span className="text-gray-300 text-sm hover:text-white transition-colors">
                    {section}
                  </span>
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
        variant="outline"
        className="border-none bg-color-none text-sm text-black hover:text-blue-400"
      >
        <span className="font-medium text-base">{label}</span>
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
          onMouseEnter={() => setIsOpen(true)} 
          onMouseLeave={() => setIsOpen(false)}
          className={`fixed left-0 right-0 ${topOffset} shadow-2xl z-50`}
        >
          <div className="mx-auto w-[1400px]">
            <div
              className="p-8 shadow-2xl border border-purple-700"
              style={{
                background: `linear-gradient(to bottom right, ${gradientColors.from}, ${gradientColors.to})`,
              }}
            >
              <div className="grid grid-cols-2">
                <div className="flex flex-col gap-7">
                  <h2 className="font-medium text-lg text-white">{title}</h2>
                  {description.map((paragraph, idx) => (
                    <p key={idx} className="w-[525px] text-gray-300">
                      {paragraph}
                    </p>
                  ))}
                  <Button
                    className="flex flex-row bg-blue-400 w-fit gap-2 hover:bg-blue-500"
                    onClick={handleButtonClick}
                  >
                    {buttonText}
                    <ArrowRight />
                  </Button>
                </div>
                <div className="h-[385px] absolute left-1/2 top-0 bottom-0 w-px bg-gray-700 transform -translate-x-1/2"></div>
                <div className="flex">
                  <div>
                    {sections.map((section, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-3 space-y-3 text-left group cursor-pointer pl-16"
                      >
                        <span className="text-gray-400">—</span>
                        <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                          {section}
                        </span>
                      </div>
                    ))}
                  </div>
                  {illustrationSrc && (
                    <Image
                      src={illustrationSrc}
                      alt={illustrationAlt}
                      className="pl-7"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}