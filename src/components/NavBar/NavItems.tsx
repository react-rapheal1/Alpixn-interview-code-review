import * as React from "react"
import ExpertiseMenus from "./ExpertiseMenu"
import OffShoreDeveloperTab from "./OffShoreDeveloper"
import Product from "./ProductTab"
import Technology from "./Technologies"
import Resource from "./ResourcesTab"

export function NavItems() {
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
  )
   }