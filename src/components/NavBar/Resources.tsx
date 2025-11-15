import { useState } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from 'lucide-react';
import { product } from "@/assets/images";
import { resource } from "@/assets/images";
import Image from "next/image";

export default function Resources() {
  type TabKey = "Resources" ;
  const [isOpen, setIsOpen] = useState(false);

  const menuContent: Record<
    TabKey,
    { title: string; sections: string[] }
  > = {
     Resources: {
      title: "Resources",
      sections: [
       "Internship Alumni",
       "Our Team",
       "Career",
       "Blog and Articles",
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
        <span className="font-medium text-base">Resources</span>
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
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col gap-7">
                            <h2 className="font-medium text-lg text-white">Resource Library</h2>
                            <p className="w-[525px]">
                               Access in-depth guides, blogs, ebooks, real world case studies created by our subject matter experts, 
                               designed to empower you and your team with the right resources and stay ahead.
                            </p>
                            <Button className="flex flex-row bg-blue-400 w-fit gap-2">
                                Read More
                                <ArrowRight/>
                            </Button>
                        </div>
                           <div className="h-[400px] absolute left-1/2 top-0 bottom-0 w-px bg-gray-700 transform -translate-x-1/2"></div>
                        <div className="flex gap-x-3">
                            <div>
                             {menuContent.Resources.sections.map((section, idx) => (
                                    <div key={idx} className="flex items-center space-x-3 space-y-3 text-left group cursor-pointer pl-16">
                                        <span className="text-gray-400">—</span>
                                        <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                                            {section}
                                        </span>
                                    </div>
                                ))}
                            </div>                           
                           <Image src={resource} alt="resource_illustration_logo" className="pl-7"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )}
    </div>
  );
}