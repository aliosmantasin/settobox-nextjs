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
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Suspense, useState } from "react"

const LoadingFallback = () => (
  <div className="w-[350px] h-[400px] animate-pulse bg-gray-200 rounded-lg" />
)

const RightComponentContactUs = () => {
  const t = useTranslations("ExplationVideoGoogle")
  const whatsappText = encodeURIComponent(t("whatsappText"))
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Card className="w-[350px] border border-indigo-700 mx-auto">
        <div className="text-center">
          <CardHeader>
            <div className="w-32 h-32 mx-auto overflow-hidden rounded-full">
              <Image
                className="object-cover w-full h-full"
                src="/images/teamLeader.webp"
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
            <Button variant="outline" onClick={() => setIsVideoModalOpen(true)}>
              {t("videoButton") || "Video İzle"}
            </Button>
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

      {/* Video Modal */}
      <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
        <DialogContent>
          <DialogTitle className="text-lg font-bold">Video Önizlemesi</DialogTitle>
          <div className="relative rounded-lg p-4 shadow-lg max-w-xl w-full">
            <video
              src="https://res.cloudinary.com/dydji2imy/video/upload/v1744549340/GoogleAdsKutuTan%C4%B1t%C4%B1mVideosu_zuvcc8.mp4"
              className="w-full h-auto rounded-lg"
              controls
              preload="none"
              title="Google Ads Reklam Yönetimi Tanıtım Videosu"
              aria-label="Google Ads reklam yönetimi hizmetlerimizin bilgilendime videosu"
              poster="https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/LocatedDijitalMarketing/LocatedContactComp/Kapak-2-100-JDlK8hSPyPeeMe8HtuMLhAwt9mA5VZ.jpg"
            >
              <track
                kind="captions"
                label="Türkçe"
                srcLang="tr"
                src="/captions/google-ads-tanitim.vtt"
                default
              />
              Tarayıcınız video formatını desteklemiyor.
            </video>

            

            {/* Video Schema Markup */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "VideoObject",
                "name": "Google Ads Reklam Yönetimi - Tanıtım Videosu",
                "description": "Google Ads reklam yönetimi hizmetlerimizin bilgilendime videosu",
                "thumbnailUrl": "https://res.cloudinary.com/dydji2imy/video/upload/v1744549340/GoogleAdsKutuTan%C4%B1t%C4%B1mVideosu_zuvcc8.jpg",
                "uploadDate": "2025-05-01",
                "contentUrl": "https://res.cloudinary.com/dydji2imy/video/upload/v1744549340/GoogleAdsKutuTan%C4%B1t%C4%B1mVideosu_zuvcc8.mp4",
                "duration": "PT2M30S",
                "inLanguage": "tr"
              })
            }} />
          </div>
        </DialogContent>
      </Dialog>
    </Suspense>
  )
}

export default RightComponentContactUs 