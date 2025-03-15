"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { useTranslations } from "next-intl";
// import { FcShop } from "react-icons/fc";

// ListItem bileşeni
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <span
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <div className="line-clamp-4 text-sm leading-snug text-muted-foreground cursor-pointer">
            {children}
          </div>
        </span>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

// Menu bileşeni
export function Menu() {

  const t = useTranslations("Navbar")


  return (
    <div className="hidden sm:flex mx-auto items-center">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="mr-5">
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink 
              
              >
                {t("HomePage")}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent hover:bg-transparent text-[1rem]"
              )}
            >
              {t("Services")}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[800px] lg:grid-cols-[.75fr_1fr]">
                <span className="row-span-3">
                <Link href={t("link1")}  
                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                >
            
        
              

                    <div className="mb-2 mt-4 text-lg font-medium text-center flex justify-center">
                      {/*Dijital Donusum */}
                
                        <ListItem>

                          <Image
                            src="/DigitalDonusumKutusu.webp"
                            alt="Dijital Dönüşüm Kutusu"
                            width={200}
                            height={200}
                            className="mx-auto"
                          />
                        <div className="mt-3">
                        <span className="text-lg font-semibold primary">{t("span1")}</span>
                          <p className="text-sm leading-tight text-muted-foreground text-center">
                            {t("descrition1")}
                          </p>
                        </div>
                        
                        </ListItem>
                

                    </div>
               
                  </Link>
                </span>

                    <Link href={t("link2")}>
                      <ListItem className="flex-col">
                      <span className="font-semibold primary-light">{t("span2")}</span>
                      <p>{t("description2")}</p>
                    </ListItem>
                    </Link>

                    <Link href={t("link3")}>
                    <ListItem className="row-span-4">
                      <span className="font-semibold primary-light">{t("span3")}</span>
                      <p>{t("description3")}</p>
                    </ListItem>
                    </Link>

                    <Link href={t("link4")}>
                    <ListItem className="row-span-4">
                      <span className="font-semibold primary-light">{t("span4")}</span>
                      <p>{t("description4")}</p>
                    </ListItem>
                    </Link>

                    {/* <Link href="/#" className="border border-indigo-100 rounded-lg">
                    <ListItem className="row-span-4">
                      <div className="flex item-center">
                      <span>
                      <FcShop className="text-5xl m-2"/>
                      </span>
                      <div>
                      <span className="font-semibold">Bölgesel Hizmet Veren Firmalar</span>
                      <p>Markanızı bölgesel rekabetin önüne geçirebilecek yöntemlerimizi inceleyin</p>
                      </div>                     
                      </div>                
                    </ListItem>
                    </Link>

                    <Link href="/#" className="border border-indigo-100 rounded-lg">
                    <ListItem className="row-span-4">
                      <div className="flex item-center">
                      <span>
                      <FcShop className="text-5xl m-2"/>
                      </span>
                      <div>
                      <span className="font-semibold">Bölgesel Hizmet Veren Firmalar</span>
                      <p>Markanızı bölgesel rekabetin önüne geçirebilecek yöntemlerimizi inceleyin</p>
                      </div>                     
                      </div>                
                    </ListItem>
                    </Link> */}


              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            {/* <NavigationMenuTrigger
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent hover:bg-transparent text-[1rem]"
              )}
            >
              Sektörler
            </NavigationMenuTrigger> */}
            
            {/* <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {menuLinksData.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                  >
                    {item.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent> */}
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href={t("refLink")} legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent hover:bg-transparent text-[1rem]"
                )}
              >
                {t("Referance")}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
