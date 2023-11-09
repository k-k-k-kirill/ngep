import React from "react";
import Section from "./Section";
import Image from "next/image";
import ButtonLink from "./ButtonLink/ButtonLink";

interface HeroSectionProps {
  data: any;
}

const HeroSection: React.FC<HeroSectionProps> = ({ data }) => {
  const { Title, Content, Image: StrapiImage, CTA } = data;

  return (
    <Section className="mb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {Title && <h1 className="mb-3">{Title}</h1>}
            {Content && <p className="lead mb-4">{Content}</p>}
            {CTA && <ButtonLink data={CTA} />}
          </div>

          {StrapiImage && (
            <div
              className="order-1 lg:order-2 mb-3 lg:mb-0"
              style={{ position: "relative" }}
            >
              <Image
                src={`${process.env.API_URL}${StrapiImage.data.attributes.url}`}
                alt={StrapiImage.data.attributes.alt}
                width={StrapiImage.data.attributes.width}
                height={StrapiImage.data.attributes.height}
              />
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default HeroSection;
