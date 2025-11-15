// TabTriggers.tsx
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { navContent, TabKey } from "../NavBar/Technologies/navContent";

interface Props {
  value: TabKey; 
}
export default function TabTriggers({ value }: Props) {
  const tabs: TabKey[] = [
    "Backend",
    "Frontend",
    "Framework",
    "Mobile",
    "DevOps",
    "More",
  ];

  return (
    <TabsList className="flex justify-between items-center p-6 w-full">
      {tabs.map((tab) => (
        <TabsTrigger
          key={tab}
          value={tab}
          data-state={value === tab ? "active" : "inactive"}
          className="text-left"
        >
          <div className="flex flex-col text-left whitespace-normal hover:text-blue-600">
            <h3 className="text-lg font-semibold mb-1">
              {navContent[tab].title}
            </h3>
          </div>
        </TabsTrigger>
      ))}
    </TabsList>
  );
}