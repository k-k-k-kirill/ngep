import { useLocale } from "next-intl";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProcessSection from "./components/ProcessSection";
import CTASection from "./components/CTASection";
import IndustriesSection from "./components/IndustriesSection/IndustriesSection";

async function getData(locale: string = "en") {
  const res = await fetch(
    `${process.env.API_URL}/api/home-page?populate=deep,10&locale=${locale}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const parsedResponse = await res.json();

  return parsedResponse.data;
}

const sectionComponentsMap: { [key: string]: React.FC<{ data: any }> } = {
  ["hero-section"]: HeroSection,
  ["about-section"]: AboutSection,
  ["process-section"]: ProcessSection,
  ["cta-section"]: CTASection,
  ["industries-section"]: IndustriesSection,
};

export default async function Home() {
  const locale = useLocale();
  const data = await getData(locale);

  return (
    <main className="container mx-auto px-4">
      {data.attributes.Sections?.map((section: any, index: number) => {
        const SectionComponent =
          sectionComponentsMap[section.__component.replace("sections.", "")];
        if (!SectionComponent) {
          // Handle unknown section type
          return null;
        }
        return <SectionComponent key={index} data={section} />;
      })}
    </main>
  );
}
