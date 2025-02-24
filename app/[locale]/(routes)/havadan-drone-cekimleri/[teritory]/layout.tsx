import { Metadata } from "next";
import { notFound } from "next/navigation";
import { seoData } from "@/lib/seo";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ teritory: "manavgat" | "alanya" | "serik" }>;
}): Promise<Metadata> {
  const resolvedParams = await params; // ✅ Promise çözümlendi
  const key = `havadan-drone-cekimleri/${resolvedParams.teritory}`;

  if (!seoData[key]) {
    notFound();
  }

  return {
    title: seoData[key].title,
    description: seoData[key].description,
  };
}

export default function TeritoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
