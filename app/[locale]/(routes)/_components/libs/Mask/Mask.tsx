"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const scrollVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

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
    <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.1 }}
    variants={scrollVariants}
    className="flex col-span-12 text-center justify-center"
  >
    <div className="w-full h-auto sm:min-h[350px]">
    <Image
      src={currentTheme === "dark" ? "/svg/hero-mask-dark.svg" : "/svg/hero-mask.svg"}
      alt="Hero Mask"
      width={2560} // Görselin gerçek boyutlarını burada belirtin
      height={330}
      className="w-full h-auto" 
    />
  </div>
  </motion.div>
  );
};
