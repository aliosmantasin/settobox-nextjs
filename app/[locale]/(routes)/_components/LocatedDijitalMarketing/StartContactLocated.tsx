

import { Button } from '@/components/ui/button';
import { Mails, MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';


export default function StartContactLocated() {

  const t = useTranslations("MetaPage")

  return (
    <div className="p-2 rounded-md">
          <ul className=" space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 block sm:flex ">
            
              <li className='flex p-1 mt-1'>
                <Button variant="ghost" className='mx-auto w-full'>
                  <Link href={t("formLink")} className="flex items-center gap-2" >
                      <Mails className="h-5 w-5 text-blue-500" /> {t("span2")}
                  </Link>
                  </Button>
              </li>

        <li className='flex p-1 mt-1'>
          <Button variant="ghost" className='animate-pulse mx-auto w-full'>
            <Link
              href="https://wa.me/905437214839?text=Merhabalar%20SetToBox%20web%20sitesinden%20iletişime%20geçiyorum.."
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2"
            >
              <MessageCircle className="h-5 w-5 text-green-500" /> {t("span3")}
            </Link>
          </Button>

        </li>
          </ul>
    </div>
  );
}
