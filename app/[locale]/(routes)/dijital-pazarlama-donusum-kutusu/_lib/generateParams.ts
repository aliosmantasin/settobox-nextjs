export const validSectors = ['hizmetsektoru', 'egitimsektoru', 'sagliksektoru'] as const;
export type Sector = typeof validSectors[number];
export const locales = ['tr', 'en'] as const;

export function generateStaticParams() {
  const params = locales.flatMap(locale => 
    validSectors.map(sektor => ({
      locale,
      sektor,
    }))
  );
  
  console.log('Debug - Generated static params:', params);
  return params;
} 