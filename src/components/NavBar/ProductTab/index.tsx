import React from "react"
import ProductContent from "./ProductContent"
import { product } from "@/assets/images"


export default function Product() {
  return (
    <ProductContent
  label="Products"
  title="Innovative Products Lineup"
  description={[
    "Discover a diverse suite of advanced products crafted to revolutionize how businesses operate. Each product is engineered with precision, blending cutting-edge technology and user-centric design to optimize performance and drive tangible growth.",
    "From automating complex workflows to enhancing efficiency and scalability, our products are designed to empower organizations with seamless, intuitive solutions."
  ]}
  sections={[
    "Salon Management",
    "Multilingual AI",
    "AI Powered instant website and app builder",
    "AI HR and Payroll",
    "AI Taxation Management",
    "AI Design Studio",
    "AI project and task management",
  ]}
  buttonText="Let's Talk"
  onButtonClick={() => console.log("Button clicked")}
  illustrationSrc={product}
  illustrationAlt="product_illustration_logo"
  topOffset="top-[72px]"
  gradientColors={{
    from: "#00172F",
    to: "#00070E",
  }}
/>

  );
}
