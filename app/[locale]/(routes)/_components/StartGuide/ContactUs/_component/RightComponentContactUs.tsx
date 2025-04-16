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
            <Image
              className="rounded-full w-24 h-24 mx-auto"
              src="/images/teamLeader.jpeg"
              alt={t("name")}
              width={96}
              height={96}
              unoptimized={true}
              sizes="(max-width: 768px) 96px, 96px"
            />
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
            >
              Tarayıcınız video formatını desteklemiyor.
            </video>
          </div>
        </DialogContent>
      </Dialog>
    </Suspense>
  )
}

export default RightComponentContactUs 