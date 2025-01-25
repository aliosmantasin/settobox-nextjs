type Sector = "hizmetsektoru" | "egitimsektoru" | "sagliksektoru";

// Statik parametreleri oluştur
export async function generateStaticParams() {
  const sectors: Sector[] = ["hizmetsektoru", "egitimsektoru", "sagliksektoru"];
  return sectors.map((sector) => ({ sektor: sector }));
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
