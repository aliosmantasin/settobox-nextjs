import { seoData } from "@/lib/seo";
import type { Metadata } from "next";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ sektor: "hizmetsektoru" | "egitimsektoru" | "sagliksektoru" }>;
}

export default async function Layout({ children, params }: LayoutProps) {
  const resolvedParams = await params; // ✅ params artık Promise değil
  console.log("Layout için params:", resolvedParams);

  return <>{children}</>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ sektor: "hizmetsektoru" | "egitimsektoru" | "sagliksektoru" }>;
}): Promise<Metadata> {
  const resolvedParams = await params; // ✅ Promise çözümlendi
  const sectorKey = `dijital-pazarlama-donusum-kutusu/${resolvedParams.sektor}`;

  if (seoData[sectorKey]) {
    return {
      title: seoData[sectorKey].title,
      description: seoData[sectorKey].description,
    };
  }

  return {
    title: `SetToBox | ${resolvedParams.sektor} Dijital Pazarlama`,
    description: `${resolvedParams.sektor} için dijital pazarlama hizmetleri hakkında bilgi alın.`,
  };
}
