import { seoData } from "@/lib/seo";
import type { Metadata } from "next";


type Params = Promise<{ sektor: "hizmetsektoru" | "egitimsektoru" | "sagliksektoru" }>;


// Layout Component'i
export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const resolvedParams = await params; // 🚀 params artık Promise, burada await kullanıyoruz
  console.log("Layout için params:", resolvedParams);

  return <>{children}</>;
}



// generateStaticParams fonksiyonu
export async function generateStaticParams(): Promise<{ sektor: "hizmetsektoru" | "egitimsektoru" | "sagliksektoru" }[]> {
  return [
    { sektor: "hizmetsektoru" },
    { sektor: "egitimsektoru" },
    { sektor: "sagliksektoru" },
  ];
}




// SEO Metadata oluşturma fonksiyonu
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const resolvedParams = await params; // 🚀 params artık Promise, bu yüzden await kullanıyoruz
  const sectorKey = `dijital-pazarlama-donusum-kutusu/${resolvedParams.sektor}`;

  console.log("✅ layout.tsx içinde generateMetadata çalıştı!");
  console.log("SEO Key:", sectorKey);
  console.log("SEO Data for Key:", seoData[sectorKey]);

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






