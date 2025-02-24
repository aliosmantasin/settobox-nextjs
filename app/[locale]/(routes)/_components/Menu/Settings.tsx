"use client";

import { usePathname, useRouter } from "next/navigation";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import React from "react";
import { MobilMenu } from "./MobilMenu";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { urlMap } from "@/lib/i18n";
import { useTranslations } from "next-intl";

const Settings = () => {
  const router = useRouter();
  const pathname = usePathname(); 
  const currentLocale = pathname.startsWith("/en") ? "en" : "tr";
  const t = useTranslations("Navbar")

  
  const changeLanguage = (newLocale: "tr" | "en") => {
    if (pathname === "/tr" || pathname === "/en") {
      router.push(`/${newLocale}`);
      return;
    }
  
    const cleanPath = pathname.replace(/^\/(tr|en)(\/|$)/, "");
  
    if (!cleanPath) {
      router.push(`/${newLocale}`);
      return;
    }
  
    // Önce doğrudan `urlMap` içinde arama yap
    let newPageSlug = urlMap[cleanPath]?.[newLocale];
  
    // Eğer doğrudan eşleşme yoksa, ters çeviri yaparak sayfayı bulmaya çalış
    if (!newPageSlug) {
      const matchedKey = Object.keys(urlMap).find(
        (key) => urlMap[key as keyof typeof urlMap][currentLocale] === cleanPath
      );
      if (matchedKey) {
        newPageSlug = urlMap[matchedKey as keyof typeof urlMap][newLocale];
      }
    }
  
    router.push(`/${newLocale}/${newPageSlug || cleanPath}`);
  };
  
  

  return (
    <div className="flex items-center space-x-3 relative">
      {/* Dil Seçici */}
      <Select onValueChange={changeLanguage} value={currentLocale}>
        <SelectTrigger className="theme">
          <SelectValue placeholder="Dil Seçin" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="tr">Türkçe 🇹🇷</SelectItem>
            <SelectItem value="en">English 🇬🇧</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      {/* Tema Değiştirici */}
      <div className="hidden sm:flex mx-auto items-center">
        <ModeToggle />
      </div>

      {/* Mobil Menü */}
      <MobilMenu />

      {/* Başlangıç Kılavuzu Butonu */}
      <Link href={t("guideLink")}>
        <Button className="hidden sm:flex mx-auto items-center">
          {t("Guide")}
        </Button>
      </Link>
    </div>
  );
};

export default Settings;
