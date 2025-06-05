"use client"
import React from 'react'
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import WebDesignManageAnimasyonJson from '../AnimasyonData/WebDesignManageAnimasyonJson';


interface WebsiteAnimationProps {
  onLoad?: () => void;
}

const FeatureTag = ({ icon, text, className }: { icon: React.ReactNode, text: string, className: string }) => (
  <motion.span
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className={`inline-flex items-center px-4 py-2 mr-3 mb-3 text-sm font-medium rounded-full ${className} backdrop-blur-sm shadow-lg hover:scale-105 transition-transform cursor-default`}
  >
    {icon}
    <span className="ml-2">{text}</span>
  </motion.span>
);

const WebsiteAnimation: React.FC<WebsiteAnimationProps> = ({ onLoad }) => {
  const t = useTranslations('WebsitePage');

  return (
    <section className='py-20 relative overflow-hidden' aria-labelledby="website-animation-section">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 -z-10" />
      
      <div className='container mx-auto px-4'>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className='text-center max-w-3xl mx-auto mb-16'
        >
          <h2 
            id="website-animation-section" 
            className='text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text'
          >
            {t('websiteAnimation.title')}
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-300 leading-relaxed'>
            {t('websiteAnimation.description')}
          </p>
        </motion.div>
    
        <div className='max-w-4xl mx-auto'> 
          <div className='flex flex-wrap justify-center gap-2 mb-12'>
            <FeatureTag
              icon={
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.5 3C4.67 3 4 3.67 4 4.5V5h12V4.5C16 3.67 15.33 3 14.5 3h-9zM17 6H3v9.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V16h2V6z"/>
                </svg>
              }
              text={t('websiteAnimation.features.mobile')}
              className="bg-primary/10 text-primary border border-primary/30"
            />
            <FeatureTag
              icon={
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              }
              text={t('websiteAnimation.features.seo')}
              className="bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200 border border-green-300 dark:border-green-700"
            />
            <FeatureTag
              icon={
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              }
              text={t('websiteAnimation.features.integration')}
              className="bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border border-blue-300 dark:border-blue-700"
            />
            <FeatureTag
              icon={
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 1.977l-2.838.908a.5.5 0 00-.35.603l.17.88a.5.5 0 00.42.388l4.052.576a.5.5 0 00.57-.41l.23-.981A4 4 0 0011 5z" clipRule="evenodd" />
                </svg>
              }
              text={t('websiteAnimation.features.technology')}
              className="bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 border border-purple-300 dark:border-purple-700"
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5" />
            <WebDesignManageAnimasyonJson
              onLoad={onLoad}
              useBlob={true}
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WebsiteAnimation 