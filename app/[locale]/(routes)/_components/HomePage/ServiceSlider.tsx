"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { motion } from "framer-motion"
import { Suspense } from "react"

const LoadingFallback = () => (
  <div className="w-full h-[400px] animate-pulse bg-gray-200" />
)

const ServiceSlider = () => {
  const t = useTranslations("ServiceSlider")

  const services = [
    {
      title: t("service1.title"),
      description: t("service1.description"),
      image: "/images/service1.jpg",
    },
    {
      title: t("service2.title"),
      description: t("service2.description"),
      image: "/images/service2.jpg",
    },
    // ... diğer servisler
  ]

  return (
    <Suspense fallback={<LoadingFallback />}>
      <div className="w-full overflow-hidden py-12">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-8"
          >
            {t("title")}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    loading="lazy"
                    quality={75}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Suspense>
  )
}

export default ServiceSlider 