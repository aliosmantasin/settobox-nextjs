import React from "react";
import { getTeritoryData } from "./getTeritoryData";
import DronePageTemplate from "@/app/(routes)/_components/DronePageTemplate/DronePageTemplate";
import { notFound } from "next/navigation";


export async function generateStaticParams() {
  return [
    { teritory: "manavgat" },
    { teritory: "alanya" },
    { teritory: "serik" },
  ];
}

const TeritoryPage = async ({ params }: { params: Promise<{ teritory: string }> }) => {
  const { teritory } = await params; // `params`'ı çözümlemek için `await` kullanılıyor
  const data = getTeritoryData(teritory);

  if (!data) {
    notFound();
  }

  return <DronePageTemplate data={data} />;
};

export default TeritoryPage;
