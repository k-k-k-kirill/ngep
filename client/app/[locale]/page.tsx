import { useLocale } from "next-intl";
import HeroSection from "./components/HeroSection";

async function getData(locale: string = "en") {
  const res = await fetch(
    `${process.env.API_URL}/api/home-page?populate[Sections][populate]=*&locale=${locale}`,
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
};

export default async function Home() {
  const locale = useLocale();
  const data = await getData(locale);

  return (
    <main>
      {data.attributes.Sections.map((section: any, index: number) => {
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
