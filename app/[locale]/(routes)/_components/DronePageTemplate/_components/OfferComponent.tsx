import { useTheme } from 'next-themes';
import React from 'react'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import OfferImage from '@/public/images/offer.webp'



interface OfferComponentProps {
    teritory: string;
}


const OfferComponent: React.FC<OfferComponentProps> = ({ teritory }) => {

    const { theme, resolvedTheme } = useTheme();
    const currentTheme = typeof window === "undefined" ? "light" : theme === "system" ? resolvedTheme : theme;

    const t = useTranslations("DronePage")

    return (
        <section className="py-10">
            <div className="container flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-6">

                {/* Sol Kutu */}
                <div className={`flex w-full sm:w-3/4 md:w-3/4 lg:w-2/5 p-0 sm:p-5  justify-center items-center mx-auto ${currentTheme === "dark" ? "gridBoxDark" : "gridBox"} relative`}>
                    <Image src={OfferImage} alt='Kampanya Görseli' width={500} height={500} />
                    <div className="boxContent">
                        <span className="w-2/4 boxBlueContent" />
                        <span className="w-2/4 boxPurpleContent" />
                    </div>
                </div>


                <div className="w-full sm:w-3/4 md:w-3/4 lg:w-2/5 p-0 sm:p-5 justify-center items-center mx-auto">

                    <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4">
                    {t(`${teritory}.offerComponent.title`)}
                    </h2>

                    {/* Açıklama */}
                    <p>
                    {t(`${teritory}.offerComponent.description`)}
                    </p>

                   

                    {/* Uyarı Mesajı */}
                 
                </div>

            </div>
        </section>
    );
};

export default OfferComponent;
