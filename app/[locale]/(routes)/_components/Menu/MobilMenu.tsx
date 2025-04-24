"use client"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/components/ModeToggle"

import Image from "next/image"
import { useTranslations } from "next-intl"
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
          <p className="line-clamp-4 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </span>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
export function MobilMenu() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const t = useTranslations("Navbar")
  return (
    <div className="block sm:hidden space-y-5 ">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">
              {t("menu")}
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full p-2 h-full snap-y overflow-y-auto max-h-[100vh]">
          <div className="flex space-x-5 mt-5 border-b-2 p-2 border-black-500 ">
            <div><ModeToggle /></div>
            <Link href="/dijital-pazarlama-baslagic-kilavuzu">
            <Button onClick={handleClose}>
            {t("Guide")}
            </Button>
            </Link>
          </div>
          <NavigationMenu className="flex justify-start w-full max-w-96">
            <NavigationMenuList className="flex flex-col space-y-5 mt-8 w-full">
              <NavigationMenuItem className="flex w-full max-w-96">
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-transparent text-[1rem]")}
                    onClick={handleClose}
                  >
                    {t("HomePage")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="flex w-full max-w-96">
                <NavigationMenuTrigger className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-transparent text-[1rem]")}>
                {t("Services")}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="">
                  <ul className="grid gap-3 p-4 mb-5">
                    <span className="row-span-3">
                    <Link href={t("link1")}  
                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                >
            
                    <div className="mb-2 text-lg font-medium text-center flex justify-center">
                      {/*Dijital Donusum */}
                
                        <ListItem>

                          <Image
                            src="/DigitalDonusumKutusu.webp"
                            alt="Dijital Dönüşüm Kutusu"
                            width={200}
                            height={200}
                            className="mx-auto"
                            onClick={handleClose}
                          />
       
                          <span className="font-semibold primary">{t("span1")}</span>
                          <p className="text-sm leading-tight text-muted-foreground text-center" onClick={handleClose}>
                            {t("descrition1")}
                          </p>
                        </ListItem>
                

                    </div>
               
                  </Link>
                    </span>
                    <Link href={t("mikroLink")}>
                      <ListItem className="flex-col" onClick={handleClose}>
                      <span className="font-semibold primary-light">{t("mikroTitle")}</span>
                      <p>{t("mikroDescription")}</p>
                    </ListItem>
                    </Link>
                    <Link href={t("link2")}>
                      <ListItem className="flex-col" onClick={handleClose}>
                      <span className="font-semibold primary-light">{t("span2")}</span>
                      <p>{t("description2")}</p>
                    </ListItem>
                    </Link>

                    <Link href={t("link3")}>
                    <ListItem className="row-span-4" onClick={handleClose}>
                      <span className="font-semibold primary-light">{t("span3")}</span>
                      <p>{t("description3")}</p>
                    </ListItem>
                    </Link>

                    <Link href={t("link4")}>
                    <ListItem className="row-span-4" onClick={handleClose}>
                      <span className="font-semibold primary-light">{t("span4")}</span>
                      <p>{t("description4")}</p>
                    </ListItem>
                    </Link>

                    {/* <Link href={t("link4")}>
                    <ListItem className="row-span-4" onClick={handleClose}>
                      <span className="font-bold">{t("span4")}</span>
                      <p>Bölgesel Hizmet Veren İşletmeler</p>
                    </ListItem>
                    </Link> */}

                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

          
              <NavigationMenuItem className="flex w-full max-w-96">
                <Link href={t("refLink")} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-transparent text-[1rem]")}
                    onClick={handleClose}
                  >
                      {t("Referance")}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </SheetContent>
      </Sheet>
    </div>
  )
}