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
import {menuLinksData, serviceLinkData} from "../Menu/Data/data";

// ListItem bileşeni
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

// Menu bileşeni
export function Menu() {
  return (
    <div className="hidden sm:flex mx-auto items-center">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent hover:bg-transparent text-[1rem]"
                )}
              >
                Ana Sayfa
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
              Hizmetler
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[800px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/dijital-pazarlama-donusum-kutusu"
                  >
                    <div className="mx-auto">
                      <Image
                        src="/DigitalDonusumKutusu.webp"
                        alt="Dijital Dönüşüm Kutusu"
                        width={200}
                        height={200}
                      />
                    </div>

                    <div className="mb-2 mt-4 text-lg font-medium text-center">
                      {/*Dijital Donusum */}
                      {serviceLinkData.convertionBox.map((item) => (
                        <ListItem key={item.title} title={item.title} href={item.href}>
                          <p className="text-sm leading-tight text-muted-foreground text-center">
                            {item.description}
                          </p>
                        </ListItem>
                      ))}

                    </div>
               
                  </Link>
                </li>

                {serviceLinkData.singleService.map((item) =>(
                      <ListItem key={item.title}
                      href={item.href}
                      title={item.title}
                      className="row-span-4"
                    >
                      <p>{item.description}</p>
                    </ListItem>
                ))}
                
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
            
            <NavigationMenuContent>
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
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/referans" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent hover:bg-transparent text-[1rem]"
                )}
              >
                Referanslar
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
