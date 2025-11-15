import React from "react"
import { resource } from "@/assets/images";
import ResourceMenu from "./ResourceContent";

export default function Resource() {
  return (
    <ResourceMenu
    label="Resources"
    title="Resource Library"
    description={[
        "Access in-depth guides, blogs, ebooks, real world case studies created by our subject matter experts, designed to empower you and your team with the right resources and stay ahead."
    ]}
    sections={[
        "Internship Alumni",
        "Our Team",
        "Career",
        "Blog and Articles",
    ]}
    buttonText="Read More"
    onButtonClick={() => console.log("Read more clicked")}
    illustrationSrc={resource}
    illustrationAlt="resource_illustration_logo"
    topOffset="top-[72px]"
    gradientColors={{
        from: "#00172F",
        to: "#00070E",
    }}
    />
  );
}
