import * as React from "react"
import ExpertiseMenu from "./ExpertiseMenu"
import OffShoreDeveloper from "./OffshoreDeveloper"
import Technologies from "./Technologies"
import Products from "./Product"
import Resources from "./Resources"

export function NavItems() {
  return (
    <div className="flex flex-row gap-x-5 items-center">
      <h3 className="font-medium text-base text-black">Home</h3>
      <h3 className="font-medium text-base text-black">About</h3>
      <OffShoreDeveloper />
      <Products />
      <ExpertiseMenu />
      <Technologies />
      <Resources />
    </div>
  )
   }