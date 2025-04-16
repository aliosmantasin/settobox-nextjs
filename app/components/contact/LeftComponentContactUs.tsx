import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { Button } from '@nextui-org/react';
import { Card } from '@/components/ui/card';
import { MdWhatsapp } from 'react-icons/md';

export function LeftComponentContactUs() {
  const { t } = useTranslation('dashboard');

  return (
    <Card
      className="h-full w-full dark:bg-default-50/5 flex flex-col items-center justify-center space-y-3 py-5 p-4 min-h-[300px]"
      radius="lg"
    >
      <div className="w-full flex flex-col items-center justify-center space-y-2">
        <div className="relative w-32 h-32 overflow-hidden rounded-full border-2 border-primary">
          <Image
            src="/images/teamLeader.jpeg"
            alt="Team Leader"
            width={96}
            height={96}
            quality={80}
            priority
            className="object-cover"
            sizes="96px"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-xl font-bold capitalize flex items-center">
            Ali Osman
          </h1>
          <span className="text-xs text-default-600/60 font-medium">
            {t('contactForm.title')}
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col space-y-2 mt-3">
        <Button
          color="primary"
          as={Link}
          href="/contact-us/form"
          className="w-full"
          variant="flat"
        >
          {t('contactForm.btnInfo')}
        </Button>
        <Button
          as={Link}
          href="https://wa.me/905077313514"
          target="_blank"
          className="w-full"
          color="success"
          variant="flat"
          startContent={<MdWhatsapp className="text-xl" />}
        >
          Whatsapp
        </Button>
      </div>
    </Card>
  );
} 