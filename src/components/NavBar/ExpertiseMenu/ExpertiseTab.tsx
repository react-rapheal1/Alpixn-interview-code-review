import { Tabs, TabsContent } from "@/components/ui/tabs";
import { navContent, TabKey } from "./navContent";
import { TabsTrigger, TabsList } from "@/components/ui/tabs";
import TabMenuContent from "./TabMenuContent";

interface Props {
  tabState: TabKey;
  setTabState: (tab: TabKey) => void;
}

export default function ExpertiseTabs({ tabState, setTabState }: Props) {
  const tabKeys = Object.keys(navContent) as TabKey[];

  return (
    <Tabs
      value={tabState}
      onValueChange={(v) => setTabState(v as TabKey)}
      className="w-full"
    >
      <TabsList className="w-full items-center bg-transparent border-none h-auto p-0 mb-6 flex justify-between">
        {tabKeys.map((key) => (
            <TabsTrigger
                key={key}
                value={key}
                className="
                    bg-transparent border-none shadow-none
                    data-[state=active]:bg-transparent data-[state=active]:shadow-none 
                    text-left px-0 pb-2 rounded-none
                "
                >
                  <div className="flex flex-col w-[315px] text-left whitespace-normal">
                        <span
                            className="
                            text-gray-400 group-data-[state=active]:text-white
                            hover:text-white transition-colors duration-200
                            pb-1
                            border-b-2 border-transparent
                            data-[state=active]:border-blue-500 text-lg font-semibold mb-1
                            "
                        >
                            {navContent[key].title}
                        </span>

                        <span className="text-sm text-gray-400 leading-relaxed max-w-xs">
                            {navContent[key].desc}
                        </span>
                    </div>
            </TabsTrigger>

        ))}
      </TabsList>

      {tabKeys.map((key) => (
        <TabsContent key={key} value={key} className="mt-0">
          <TabMenuContent
            title={navContent[key].title}
            desc={navContent[key].desc}
            sections={navContent[key].sections}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}