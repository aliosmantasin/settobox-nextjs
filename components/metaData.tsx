import { Metadata } from 'next';
import Head from 'next/head';  // Next.js Head bileşeni
import { seoData } from '@/lib/seo';

type MetaDataProps = {
  page: string;
};

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const seo = seoData[params.id] || {
    title: "Default Title",
    description: "Default description",
  };

  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
      images: ["/path/to/og-image.jpg"],
    },
    twitter: {
      title: seo.title,
      description: seo.description,
    },
  };
}

const MetaData: React.FC<MetaDataProps> = ({ page }) => {
  const seo = seoData[page] || {
    title: "Default Title",
    description: "Default description",
  };

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
    </Head>
  );
};

export default MetaData;
