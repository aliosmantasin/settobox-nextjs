"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Laptop, Code, Zap, TrendingUp } from 'lucide-react';
import { FaCode } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

interface Feature {
  title: string;
  description: string;
}

const WebsiteCTA = () => {
  const t = useTranslations("WebsitePage.websiteCTA");

  return (
    <section className="py-12 md:py-16" >
      <div className="container mx-auto px-4">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl bg-[#373737] shadow-xl">
          <div className="absolute inset-0 opacity-10 blur-xl">
            <svg className="h-full w-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="50" width="100" height="100" rx="20" fill="#3B82F6" />
              <rect x="250" y="50" width="100" height="100" rx="20" fill="#10B981" />
              <rect x="50" y="250" width="100" height="100" rx="20" fill="#6366F1" />
              <rect x="250" y="250" width="100" height="100" rx="20" fill="#8B5CF6" />
            </svg>
          </div>
          
          <div className="relative z-10 grid gap-8 p-8 md:p-12 lg:grid-cols-2 lg:p-16">
            <div className="text-center lg:text-left">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-white md:text-3xl lg:text-4xl"
              >
                {t("title")} <br /> 
                <span className="bg-gradient-to-r from-blue-200 to-indigo-300 bg-clip-text text-transparent">
                  {t("highlight")}
                </span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-4 text-[#f3f4f6]"
              >
                {t("description")}
              </motion.p>
              
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {t.raw("features").map((feature: Feature, index: number) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 rounded-lg bg-white/10 p-3 backdrop-blur-sm"
                    style={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}}
                  >
                    {index === 0 && <Laptop className="mt-1 h-5 w-5 flex-shrink-0 text-[#93c5fd]" />}
                    {index === 1 && <Code className="mt-1 h-5 w-5 flex-shrink-0 text-[#93c5fd]" />}
                    {index === 2 && <Zap className="mt-1 h-5 w-5 flex-shrink-0 text-[#93c5fd]" />}
                    {index === 3 && <TrendingUp className="mt-1 h-5 w-5 flex-shrink-0 text-[#93c5fd]" />}
                    <div>
                      <h3 className="font-medium text-white">{feature.title}</h3>
                      <p className="mt-1 text-sm text-[#e5e7eb]">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mx-auto flex max-w-md flex-col items-center justify-center rounded-xl bg-white/10 p-8 text-center backdrop-blur-sm lg:ml-auto"
              style={{backgroundColor: 'rgba(255, 255, 255, 0.1)'}}
            >
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600">
                <FaCode className='text-4xl text-white'/>
              </div>
              
              <h3 className="text-xl font-bold text-white">{t("cta.title")}</h3>
              <p className="mt-2 text-[#e5e7eb]">{t("cta.description")}</p>
              
              <div className="mt-8 w-full">
                <Link href="/bilgi-alma-formu" passHref>
                  <Button className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-white px-6 py-3 text-lg font-bold text-[#1e40af] transition duration-300 ease-out hover:scale-105">
                    <span className="absolute right-0 translate-x-full opacity-0 transition-transform duration-300 ease-out group-hover:-translate-x-4 group-hover:opacity-100">
                      <ArrowRight className="h-5 w-5" />
                    </span>
                    <span className="transition-transform duration-300 ease-out group-hover:-translate-x-4">
                      {t("cta.button")}
                    </span>
                  </Button>
                </Link>
                
                <Link href="tel:+905437214839" passHref className="mt-4 inline-block w-full text-center text-sm text-[#e5e7eb] underline decoration-dotted hover:text-white">
                  {t("cta.phone")}
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteCTA; 