"use client"

import React from 'react'
import InfoForm from '../_components/Register/form'

// Metadata'yı bu dosyadan kaldırıp, layout veya üst bir seviyeye taşıyabiliriz.
// Şimdilik, sadece istemci bileşeni olarak çalışmasını sağlayalım.

// type Props = {
//   params: Promise<{ locale: string }>;
// };

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
// ... (metadata code will be commented out or moved)
// }

const InfoFormPage = () => {
  return (
    <>
     <InfoForm/>
    </>
  )
}

export default InfoFormPage

// generateStaticParams da sunucu taraflı olduğu için şimdilik kaldırılabilir.
// export async function generateStaticParams() {
//   return [
//     { locale: 'tr' },
//     { locale: 'en' },
//   ]
// }