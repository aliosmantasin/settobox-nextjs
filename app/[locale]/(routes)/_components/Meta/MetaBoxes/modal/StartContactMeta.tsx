

import { Button } from '@/components/ui/button';
import { Mails, MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';


export default function StartContactMeta() {

  const t = useTranslations("MetaPage")

  return (
    <div className="w-full max-w-full bg-white dark:bg-gray-900 p-2 rounded-md shadow">
          <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            
              <li className='flex p-1'>
                <Button variant="ghost">
                  <Link href={t("formLink")} className="flex items-center gap-2" >
                      <Mails className="h-5 w-5 text-blue-500" /> {t("span2")}
                  </Link>
                  </Button>
              </li>

              <li   className='flex p-1'>

          <Button variant="ghost">
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
