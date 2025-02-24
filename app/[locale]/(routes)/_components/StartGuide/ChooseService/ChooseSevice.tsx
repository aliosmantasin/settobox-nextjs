"use client"
import { useState } from "react";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import DijitalDonusumKutu from '@/public/DigitalDonusumKutusu.webp';
import { SingleServiceComponent } from "./_component/SingleServiceComponent";
import { DijitalConversionComponent } from "./_component/DijitalConversion";

const imageSlides = [
    { src: "/MetaMiniBox.webp", alt: "Meta Mini Box", label: "Meta Mini Box" },
    { src: "/MetaMegaBox.webp", alt: "Meta Mega Box", label: "Meta Mega Box" },
    { src: "/MetaProBox.webp", alt: "Meta Pro Box", label: "Meta ProBox" },
    { src: "/GoogleMiniBox.webp", alt: "Google Mini Box", label: "Google Mini Box" },
    { src: "/GoogleMegaBox.webp", alt: "Google Mega Box", label: "Google Mega Box" },
    { src: "/GoogleProBox.webp", alt: "Google Pro Box", label: "Google Pro Box" },
    { src: "/BasicWeb.webp", alt: "Basic Web", label: "Basic Web Box" },
    { src: "/BusinessWeb.webp", alt: "Business Web", label: "Business Web Box" },
];

const ChooseService = () => {
    const [activeTab, setActiveTab] = useState("singleService");

    return (
        <section className="mx-auto bg-cover  bg-center bg-no-repeat bg-[url(/images/BrandId.webp)] ocean-shadow">
            <div>
               
            </div>

            <Tabs defaultValue="singleService" className="container mx-auto flex flex-wrap p-5 ">
                <TabsList className="flex space-x-4 ">
                    <TabsTrigger
                        value="singleService"
                        onClick={() => setActiveTab("singleService")}
                        className={`py-2 rounded-md transition ${
                            activeTab === "singleService"
                                ? "text-blue-600 font-bold border-b-2 border-blue-600 w-[150px]"
                                : "text-gray-600"
                        }`}
                    >
                        Tekil Hizmetler
                    </TabsTrigger>

                    <TabsTrigger
                        value="digitalConversion"
                        onClick={() => setActiveTab("digitalConversion")}
                        className={` py-2 rounded-md transition ${
                            activeTab === "digitalConversion"
                                ? "text-blue-600 font-bold border-b-2 border-blue-600"
                                : "text-gray-600"
                        }`}
                    >
                        Dijital Dönüşüm Kutusu
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="singleService" className="container flex flex-wrap justify-center items-center ">
                    <div className="w-full sm:w-2/5 mx-auto ">
                        <SingleServiceComponent />
                    </div>
                    <div className="w-full sm:w-1/2 flex justify-center">
                        <Carousel className="w-full max-w-sm">
                            <CarouselContent>
                                {imageSlides.map((item, index) => (
                                    <CarouselItem key={index}>
                                     
                                            <Card>
                                                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                                                    <div>
                                                        <Image src={item.src} alt={item.alt} width={1080} height={1080} />
                                                        <Badge className="mt-2">{item.label}</Badge>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                    
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
                </TabsContent>

                <TabsContent value="digitalConversion" className="container flex flex-wrap justify-center item-center">
                    <div className="w-full sm:w-2/5 flex item-center ">
                        <DijitalConversionComponent />
                    </div>
                    <div className="w-full sm:w-1/2 md:w-2/5 flex justify-center">
                        <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                <Image src={DijitalDonusumKutu} alt="Dijital Dönüşüm Kutusu" width={350} height={350} />
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>


            
        </section>
    );
};

export default ChooseService;
