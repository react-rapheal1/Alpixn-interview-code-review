
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { navContent, TabKey } from "./navContent";
import { TabsTrigger, TabsList } from "@/components/ui/tabs";
import TabMenuContent from "./TabMenuContent";

interface Props {
  tabState: TabKey;
  setTabState: (tab: TabKey) => void;
}

export default function TechTabs({ tabState, setTabState }: Props) {
  const tabKeys = Object.keys(navContent) as TabKey[];

  return (
    <Tabs
      value={tabState}
      onValueChange={(v) => setTabState(v as TabKey)}
      className="w-full"
    >
      <TabsList className="w-full bg-transparent border-none h-auto p-0 mb-6 flex justify-between">
        {tabKeys.map((key) => (
          <TabsTrigger
            key={key}
            value={key}
            className="bg-transparent border-none data-[state=active]:bg-transparent data-[state=active]:shadow-none 
                       text-gray-400 data-[state=active]:text-white text-base font-medium
                       hover:text-white transition-colors duration-200
                       data-[state=active]:border-b-2 data-[state=active]:border-blue-500 
                       rounded-none pb-2 px-0"
          >
            {navContent[key].title}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabKeys.map((key) => (
        <TabsContent key={key} value={key} className="mt-0">
          <TabMenuContent
            title={navContent[key].title}
            sections={navContent[key].sections}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}
