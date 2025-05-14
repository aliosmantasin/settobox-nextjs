"use client"
import * as React from "react"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Suspense, useState } from "react"

const LoadingFallback = () => (
  <div className="w-full h-[200px] animate-pulse bg-gray-200 rounded-lg" />
)

const LocatedContact = () => {
  const t = useTranslations("ExplationVideoGoogle")
  const whatsappText = encodeURIComponent(t("whatsappText"))
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  return (
    <Suspense fallback={<LoadingFallback />}>
      <section className="w-full">
        <div className="container mx-auto bg-gradient-to-r from-indigo-50 to-indigo-300  dark:from-slate-800 dark:to-slate-900 rounded-xl shadow-lg p-6 my-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Section - Image and Info */}
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full border-4 border-white shadow-lg">
                <Image
                  className="object-cover w-full h-full"
                  src="/images/teamLeader.webp"
                  alt={t("name")}
                  width={128}
                  height={128}
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-indigo-900">{t("name")}</h3>
                <p className="text-indigo-700 font-medium">{t("title")}</p>
                <p className="text-gray-600 max-w-md">{t("description")}</p>
              </div>
            </div>

            {/* Right Section - Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="outline" 
                onClick={() => setIsVideoModalOpen(true)}
                className="bg-white hover:bg-indigo-50 text-indigo-700 border-indigo-200"
              >
                {t("videoButton") || "Video İzle"}
              </Button>
              <Button className="bg-indigo-600 hover:bg-indigo-700">
                <a
                  href={`https://wa.me/905437214839?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <span>{t("whatsappButton")}</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={isVideoModalOpen} onOpenChange={setIsVideoModalOpen}>
        <DialogContent>
          <DialogTitle className="text-lg font-bold">Video Önizlemesi</DialogTitle>
          <div className="relative rounded-lg p-4 shadow-lg max-w-xl w-full">
            <video
              src="https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/LocatedDijitalMarketing/LocatedContactComp/Markalar%C4%B1nDijitalVarl%C4%B1klar%C4%B1n%C4%B1Yo%CC%88netiyorveBu%CC%88yu%CC%88tu%CC%88yoruz-fu6RlWVrplaRc13lTvDQCfYX8A06vw.mp4"
              className="w-full h-auto rounded-lg"
              controls
              preload="none"
              title="Yerel Dijital Pazarlama Tanıtım Videosu"
              aria-label="Yerel Dijital Pazarlama hizmetlerimizin bilgilendime videosu"
              poster="https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/LocatedDijitalMarketing/LocatedContactComp/Kapak-2-100-JDlK8hSPyPeeMe8HtuMLhAwt9mA5VZ.jpg"
            >
              <track
                kind="captions"
                label="Türkçe"
                srcLang="tr"
                src="/captions/yerel-dijital-pazarlama.vtt"
                default
              />
              Tarayıcınız video formatını desteklemiyor.
            </video>

            {/* Video Schema Markup */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "VideoObject",
                "name": "Yerel Dijital Pazarlama Tanıtım Videosu",
                "description": "Yerel Dijital Pazarlama hizmetlerimizin bilgilendime videosu",
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

export default LocatedContact 