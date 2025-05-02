import { Suspense } from 'react';
import SectorClientPage from "./SectorClientPage";
import { generateStaticParams, validSectors, type Sector } from '../_lib/generateParams';

interface PageProps {
  params: Promise<{ sektor: string; locale: string }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  console.log('Debug - Page component params:', resolvedParams);
  
  // Server-side validation
  const isValidSector = validSectors.includes(resolvedParams.sektor as Sector);
  console.log('Debug - Server-side validation:', { 
    sektor: resolvedParams.sektor, 
    isValid: isValidSector,
    validSectors 
  });

  // If invalid on server-side, redirect properly
  if (!isValidSector) {
    const notFoundPath = `/${resolvedParams.locale}/dijital-pazarlama-donusum-kutusu/404`;
    return (
      <div>
        <p>Redirecting to 404...</p>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.location.href = '${notFoundPath}'`
          }}
        />
      </div>
    );
  }
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SectorClientPage params={resolvedParams} />
    </Suspense>
  );
}

export { generateStaticParams };
