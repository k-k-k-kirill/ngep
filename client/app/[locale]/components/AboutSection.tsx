import React, { useState, useEffect } from "react";
import Section from "./Section";
import SectionImage from "./SectionImage";
import markdownToHtml from "../utils/markdownToHtml";
import RichContent from "./RichContent";

interface AboutSectionProps {
  data: any;
}

const AboutSection: React.FC<AboutSectionProps> = async ({ data }) => {
  const { Title, Content, Image } = data;

  const htmlContent = await markdownToHtml(Content);

  return (
    <Section className="mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col">
          {Title && <h2 className="mb-3 order-2 lg:order-1">{Title}</h2>}
          {Image && (
            <div className="order-1 lg:order-2 mb-3 lg:mb-0">
              <SectionImage image={Image} />
            </div>
          )}
        </div>
        <div className="flex flex-col justify-center">
          <RichContent content={Content} />
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
