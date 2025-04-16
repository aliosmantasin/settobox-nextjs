"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"

const LoadingFallback = () => (
  <div className="w-[350px] h-[400px] animate-pulse bg-gray-200 rounded-lg" />
)

const LeftComponentContactUs = () => {
  const t = useTranslations("ContactCard")
  const whatsappText = encodeURIComponent(t("whatsappText"))

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Card className="w-[350px] border border-indigo-700">
        <div className="text-center">
          <CardHeader>
            <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden">
              <Image
                className="rounded-full object-cover"
                src="/images/teamLeader.jpeg"
                alt={t("name")}
                width={96}
                height={96}
               
              />
            </div>
            <CardTitle>{t("name")}</CardTitle>
            <CardDescription>{t("title")}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center">
              <p>{t("description")}</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/bilgi-alma-formu" prefetch={true}>
              <Button variant="outline">{t("infoButton")}</Button>
            </Link>
            <Button>
              <a
                href={`https://wa.me/905437214839?text=${whatsappText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:underline"
              >
                <span>{t("whatsappButton")}</span>
              </a>
            </Button>
          </CardFooter>
        </div>
      </Card>
    </Suspense>
  )
}

export default LeftComponentContactUs
