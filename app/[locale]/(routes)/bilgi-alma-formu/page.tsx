import React from 'react'
import InfoForm from '../_components/Register/form'
import { seoData } from '@/lib/seo';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale ?? "tr";
  const pagePath = locale === "en" ? "information-form" : "bilgi-alma-formu";

  const seo = seoData[pagePath] || {
    title: locale === "en" ? "Information Request Form | SettoBox" : "Bilgi Alma Formu | SettoBox",
    description: locale === "en" ? "SettoBox Information Form" : "SettoBox Bilgi Alma Formu",
  };

  // BASE URL'ni ayarla
  const baseUrl = "https://www.settobox.com";
  const canonical = `${baseUrl}/${locale}`;

  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
    },
    twitter: {
      title: seo.title,
      description: seo.description,
    },
    alternates: {
      canonical,
      languages: {
        'en': `${baseUrl}/en/information-form`,
        'tr': `${baseUrl}/tr/bilgi-alma-formu`,
      },
    },
  };
}

const InfoFormPage = () => {
  return (
    <>
     <InfoForm/>
    </>
  )
}

export default InfoFormPage

export async function generateStaticParams() {
  return [
    { locale: 'tr' },
    { locale: 'en' },
  ]
}