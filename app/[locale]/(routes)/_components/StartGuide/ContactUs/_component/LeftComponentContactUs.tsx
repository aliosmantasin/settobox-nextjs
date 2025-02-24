import * as React from "react"

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
import TeamLeader from '@/public/images/teamLeader.jpeg'
import Link from "next/link"


 const LeftComponentContactUs = () => {
  return (
    <Card className="w-[350px] border border-indigo-700">
      <div className="text-center">
      <CardHeader className="">
        <Image className="rounded-full w-24 h-24 mx-auto" src={TeamLeader} alt="Takım Lideri" width={150} height={150}/>
        <CardTitle>Ali Osman Taşın</CardTitle>
        <CardDescription>Dijital Pazarlama Danışmanı</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center">
            <p>Dijital pazarlamaya giriş ve online varlıklarınızın yönetimi gibi konularda sizlerle beraber bir yol haritası oluşturabiliriz.</p>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href="/bilgi-alma-formu">
        <Button variant="outline">Bilgi Al</Button></Link>
        <Button>
        <a href="https://api.whatsapp.com/send?phone=05437214839&amp;text=Merhabalar SetToBox web sitesinden iletişime geçiyorum.." target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2  hover:underline"><span>WhatsApp İletişim</span></a>
        </Button>
      </CardFooter>
      </div>
    </Card>
  )
}
export default LeftComponentContactUs