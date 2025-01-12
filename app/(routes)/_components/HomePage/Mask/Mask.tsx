"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export const MaskSvg = () => {
  const { theme, resolvedTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Mount edilmeden önce bir placeholder render edebilirsiniz
    return null;
  }

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  return (
    <Image
      src={currentTheme === "dark" ? "/svg/hero-mask-dark.svg" : "/svg/hero-mask.svg"}
      alt="Hero Mask"
      width={2560} // Görselin gerçek boyutlarını burada belirtin
      height={330}
      className="w-full h-auto" 
    />
  );
};
