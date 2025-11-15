import { Separator } from "@/components/ui/separator";


interface Props {
  title: string;
  sections: string[];
}
export default function TabMenuContent({ title, sections }: Props) {
  return (
    <div className="py-4">
      <Separator className="bg-gray-700 mb-6" />

      <div className="grid grid-cols-3 gap-x-12 gap-y-4 relative">
        
        <div className="absolute left-1/3 top-0 bottom-0 w-px bg-gray-700" />
        <div className="absolute left-2/3 top-0 bottom-0 w-px bg-gray-700" />

        {sections.map((section, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-3 text-left group cursor-pointer px-6 py-2 rounded hover:bg-gray-800/30 transition-colors"
          >
            <span className="text-gray-500 group-hover:text-blue-400 transition-colors">
              —
            </span>
            <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
              {section}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

