"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { MessageCircle } from 'lucide-react';

export function LeftComponentContactUs() {
  const t = useTranslations('dashboard');

  return (
    <Card
      className="h-full w-full dark:bg-default-50/5 flex flex-col items-center justify-center space-y-3 py-5 p-4 min-h-[300px]"
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
          variant="default"
          asChild
          className="w-full"
        >
          <Link href="/bilgi-alma-formu">
            {t('contactForm.btnInfo')}
          </Link>
        </Button>
        <Button
          variant="outline"
          asChild
          className="w-full"
        >
          <Link
            href="https://wa.me/905077313514"
            target="_blank"
            className="flex items-center gap-2"
          >
            <MessageCircle className="h-5 w-5" /> Whatsapp
          </Link>
        </Button>
      </div>
    </Card>
  );
} 