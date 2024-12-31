import { useTheme } from "next-themes";
import Image from "next/image";

export const MaskSvg = () => {
  const { theme, resolvedTheme } = useTheme();
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
