"use client"

import { memo } from "react";
import './GradientEffect.css'
import { useTheme } from "next-themes";

const GradientEffect = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div className="flex items-center">
      <div className={`${isDark ? "b-gridlineDark" : "b-gridline"}`}></div>
      <div className="gradient-efect">
        <div className="boxPurple purple-grad"></div>
        <div className="boxBlue blue-grad"></div>
      </div>
    </div>
  );
};

// memo ile gereksiz yeniden render'ları engelliyoruz
export default memo(GradientEffect);