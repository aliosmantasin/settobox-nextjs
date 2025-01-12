

import { Button } from '@/components/ui/button';
import { Mails, MessageCircle } from 'lucide-react';
import Link from 'next/link';


export default function StartContactWeb() {

  return (
    <div className="w-full max-w-full bg-white dark:bg-gray-900 p-2 rounded-md shadow">
          <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            
              <li className='flex p-1'>
                <Button variant="ghost">
                  <Link href="/bilgi-alma-formu" className="flex items-center gap-2" >
                      <Mails className="h-5 w-5 text-blue-500" /> Başvuru Formu Gönder
                  </Link>
                  </Button>
              </li>

              <li   className='flex p-1'>

              <Button variant="ghost">
                  <Link
                      href="https://api.whatsapp.com/send?phone=05437214839&amp;text=Merhabalar SetToBox web sitesinden iletişime geçiyorum.."
                      target="_blank"
                      rel="noopener noreferrer"
                      className='flex gap-2'
                  >
                      <MessageCircle className="h-5 w-5 text-green-500" />  WhatsApp Konuşması Başlat

                  </Link>
                  </Button>
              </li>
          </ul>
    </div>
  );
}
