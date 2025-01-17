import React from "react";
import { Metadata } from "next";
import { getTeritoryData } from "./getTeritoryData";
import DronePageTemplate from "@/app/(routes)/_components/DronePageTemplate/DronePageTemplate";
import { notFound } from "next/navigation";

// Statik parametreleri oluştur
export async function generateStaticParams() {
  return [
    { teritory: "manavgat" },
    { teritory: "alanya" },
    { teritory: "serik" },
  ];
}

// Dinamik metadata oluştur
export async function generateMetadata({
  params,
}: {
  params: Promise<{ teritory: string }>; // params artık Promise tipinde
}): Promise<Metadata> {
  const { teritory } = await params; // params asenkron olduğu için await kullanılıyor
  const data = getTeritoryData(teritory);

  if (!data) {
    notFound();
  }

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
  };
}

// Sayfa bileşeni
const TeritoryPage = async ({
  params,
}: {
  params: Promise<{ teritory: string }>; // params artık Promise tipinde
}) => {
  const { teritory } = await params; // params asenkron olduğu için await kullanılıyor
  const data = getTeritoryData(teritory);

  if (!data) {
    notFound();
  }

  return <DronePageTemplate data={data} />;
};

export default TeritoryPage;
