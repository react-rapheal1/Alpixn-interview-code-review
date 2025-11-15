import * as React from "react"
import ExpertiseMenus from "./ExpertiseMenu"
import OffShoreDeveloperTab from "./OffShoreDeveloper"
import Product from "./ProductTab"
import Technology from "./Technologies"
import Resource from "./ResourcesTab"

interface NavItemsProps {
  mobile?: boolean;
}

export function NavItems({ mobile = false }: NavItemsProps) {
  if (mobile) {
    return (
      <div className="flex flex-col gap-y-4">
        <h3 className="font-medium text-base text-white cursor-pointer py-3 border-b border-gray-700">
          Home
        </h3>
        <h3 className="font-medium text-base text-white cursor-pointer py-3 border-b border-gray-700">
          About
        </h3>
        <div className="border-b border-gray-700">
          <OffShoreDeveloperTab mobile />
        </div>
        <div className="border-b border-gray-700">
          <Product mobile />
        </div>
        <div className="border-b border-gray-700">
          <ExpertiseMenus mobile />
        </div>
        <div className="border-b border-gray-700">
          <Technology mobile />
        </div>
        <div className="border-b border-gray-700">
          <Resource mobile />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row gap-x-5 items-center">
      <h3 className="font-medium text-base text-black cursor-pointer">Home</h3>
      <h3 className="font-medium text-base text-black cursor-pointer">About</h3>
      <OffShoreDeveloperTab />
      <Product />
      <ExpertiseMenus />
      <Technology />
      <Resource />
    </div>
  );
}