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
import {serviceLinkData } from "../Menu/Data/data";
import Image from "next/image"
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
  )
})
ListItem.displayName = "ListItem"
export function MobilMenu() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  return (
    <div className="block sm:hidden space-y-5">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">Menü</Button>
        </SheetTrigger>
        <SheetContent className="w-full p-2 h-full snap-y overflow-y-auto max-h-[100vh]">
          <div className="flex space-x-5 mt-5 border-b-2 p-2 border-black-500">
            <div><ModeToggle /></div>
            <Link href="/dijital-pazarlama-baslagic-kilavuzu">
            <Button onClick={handleClose}>Başlangıç ​​Kılavuzu</Button>
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
                    Ana Sayfa
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem className="flex w-full max-w-96">
                <NavigationMenuTrigger className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-transparent text-[1rem]")}>
                  Hizmetler
                </NavigationMenuTrigger>
                <NavigationMenuContent className="">
                  <ul className="grid gap-3 p-4">
                    <li className="row-span-3">
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                        onClick={handleClose}
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
                          {serviceLinkData.convertionBox.map((item) => (
                            <ListItem
                              key={item.title}
                              title={item.title}
                              href={item.href}
                              onClick={handleClose}
                            >
                              <p className="text-sm leading-tight text-muted-foreground text-center">
                                {item.description}
                              </p>
                            </ListItem>
                          ))}
                        </div>
                      </Link>
                    </li>
                    {serviceLinkData.singleService.map((item) => (
                      <ListItem
                        key={item.title}
                        href={item.href}
                        title={item.title}
                        className="row-span-4"
                        onClick={handleClose}
                      >
                        <p>{item.description}</p>
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* <NavigationMenuItem className="flex w-full max-w-96">
                <NavigationMenuTrigger className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-transparent text-[1rem]")}>
                  Sektörler
                </NavigationMenuTrigger>
                <NavigationMenuContent className="overflow-y-auto max-h-[60vh]">
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {menuLinksData.map((item) => (
                      <ListItem
                        key={item.title}
                        title={item.title}
                        href={item.href}
                        onClick={handleClose}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem> */}
              <NavigationMenuItem className="flex w-full max-w-96">
                <Link href="/settobox-referanslar" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-transparent text-[1rem]")}
                    onClick={handleClose}
                  >
                    Referanslar
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