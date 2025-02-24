"use client";

import React, { useEffect, useState } from "react";
import DronePageTemplate from "../../_components/DronePageTemplate/DronePageTemplate";
import Loading from "../../_components/Loadling/Loading";

interface PageProps {
  params: Promise<{ teritory: string }>; // 🚨 Artık bir Promise!
}

const TeritoryPage = ({ params }: PageProps) => {
  const [teritory, setTeritory] = useState<string | null>(null);

  // ✅ params Promise olduğu için use() ile çözüyoruz
  const resolvedParams = React.use(params);

  useEffect(() => {
    if (resolvedParams) {
      setTeritory(resolvedParams.teritory);
    }
  }, [resolvedParams]);

  if (!teritory) {
    return <div className="min-h-screen flex items-center justify-center">
   <div><Loading/></div>  
    </div>; // ✅ Önce params çözülsün
  }

  return <DronePageTemplate teritory={teritory} />;
};

export default TeritoryPage;
