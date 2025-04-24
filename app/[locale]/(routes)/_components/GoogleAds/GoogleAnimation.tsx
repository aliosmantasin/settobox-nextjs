"use client"
import React from 'react'
import GoogleManageAnimasyonJson from '../AnimasyonData/GoogleManageAnimasyonJson';
import { useTranslations } from 'next-intl';

interface GoogleAnimationProps {
  onLoad?: () => void;
}

const GoogleAnimation: React.FC<GoogleAnimationProps> = ({ onLoad }) => {
  const t = useTranslations('GooglePage.googleAnimation');

  return (
    <section className='my-10' aria-labelledby="google-animation-section">
       <div className='container mx-auto justify-center'>
      <div className='py-6'>
      <h2 id="google-animation-section" className='bg-[#1f77bb] text-white text-center mx-auto font-semibold text-xl sm:text-2xl md:text-2xl px-4 py-2 shadow-lg max-w-md'>{t('title')}</h2>
      <p className='styled-paragraph my-6 mx-auto max-w-3xl px-4'>
        {t('description')}
      </p>
      </div>
    
      <div className='w-full sm:w-2/3 mx-auto'> 
        
      <p className='flex items-center justify-center'>
            <span className="inline-flex items-center px-3 py-1 mr-2 mb-2 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/30">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.5 3C4.67 3 4 3.67 4 4.5V5h12V4.5C16 3.67 15.33 3 14.5 3h-9zM17 6H3v9.5c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5V16h2V6z"/>
              </svg>
              {t('features.mobile')}
            </span>
            <span className="inline-flex items-center px-3 py-1 mr-2 mb-2 text-sm font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 border border-green-300 dark:border-green-700">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              {t('features.seo')}
            </span>
            <span className="inline-flex items-center px-3 py-1 mr-2 mb-2 text-sm font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 border border-blue-300 dark:border-blue-700">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {t('features.businessProfile')}
            </span>
            <span className="inline-flex items-center px-3 py-1 mr-2 mb-2 text-sm font-medium rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 border border-purple-300 dark:border-purple-700">
              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 1.977l-2.838.908a.5.5 0 00-.35.603l.17.88a.5.5 0 00.42.388l4.052.576a.5.5 0 00.57-.41l.23-.981A4 4 0 0011 5z" clipRule="evenodd" />
              </svg>
              {t('features.adsManagement')}
            </span>
          </p>

          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
      </div>

     
        <div className="w-2/2 sm:w-1/2 min-h-auto sm:min-h-[600] mx-auto">
          <GoogleManageAnimasyonJson 
            onLoad={onLoad}
            useBlob={true}
            aria-hidden="true"
          />
       </div>
    
         
 
       
      </div>
    </section>
  )
}

export default GoogleAnimation