import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdWhatsapp } from "react-icons/md";
import Cookies from "js-cookie";

const MODAL_KEY = "discountModalSeen";
const MODAL_EXPIRY_DAYS = 7;

export default function DiscountModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Çerezleri kontrol et
    const userConsent = Cookies.get("user_consent");

    // Eğer kullanıcı çerezleri reddettiyse veya çerez değeri belirli değilse, modal açılmasın
    if (!userConsent || userConsent === "false") {
      return;
    }

    // Kampanya modalının daha önce görülüp görülmediğini kontrol et
    const lastSeen = localStorage.getItem(MODAL_KEY);
    if (lastSeen) {
      const lastSeenDate = new Date(parseInt(lastSeen, 10));
      const now = new Date();
      const diffDays = (now.getTime() - lastSeenDate.getTime()) / (1000 * 60 * 60 * 24);
      if (diffDays < MODAL_EXPIRY_DAYS) return;
    }

    // Kullanıcı çerezleri kabul etmişse ve süresi dolmuşsa modalı göster
    const timer = setTimeout(() => setOpen(true), 25000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem(MODAL_KEY, Date.now().toString());
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg dark:bg-gray-700 w-96 sm:w-[400px] md:w-[500px] p-5">
        <div className="flex justify-between items-center border-b pb-3">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
           <span className="primary-light">Google Ads Fırsat Kampanyası</span> 
          </h3>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            &#x2715;
          </button>
        </div>
        <div className="mt-4 text-gray-500 dark:text-gray-400 text-sm">
          <p>Yeni başlayan veya bütçesi sınırlı markalar için Google Ads Reklamlarına ilk adımı atabilmeleri için özelleştirilmiş bir kampanya düzenledik </p>
        </div>

        <span className="mt-4 flex justify-end uppercase text-[0.5rem] p-2 text-red-500 dark:text-red-300 animate-pulse">sınırlı süreli</span>
        <div className=" space-y-3">
          <a href="#" className="flex items-center p-3 bg-gray-100 rounded-lg dark:bg-gray-600 hover:bg-gray-200">
            <span className="flex-1">Başlagıç Paketi <span className="text-xs primary">(MiniBox Google)</span></span>
            <span>  <span className="text-lg text-green-500 dark:text-green-400">4.500₺</span> <span className="text-[12px] text-gray-700 dark:text-green-400">(Aylık)</span>  </span>
          </a>
          <a href="#" className="flex items-center p-3 bg-gray-100 rounded-lg dark:bg-gray-600 hover:bg-gray-200">
            <span className="flex-1">Web Tasarım Hizmeti</span>
            <span> <span className="text-red-500 dark:text-red-400 line-through text-xs">6.000₺</span> <span className="text-lg text-green-500 dark:text-green-400">4.500₺</span></span>

          </a>
        </div>
        <div className="my-1 ml-1">
          <Link href="/settobox-kampanyalar" className="inline-flex items-center text-xs font-normal text-blue-500 hover:underline dark:text-blue-400">
            Tüm kampanyaları incele!</Link>
        </div>
        <div className="flex item-center justify-evenly border-t-2 pt-2">
          <p className="flex my-auto tracking-widest text-gray-500 md:text-lg dark:text-gray-400">Başvuru İçin:</p>
          <Button variant="ghost">
            <Link
              href="https://wa.me/905437214839?text=Merhaba%20Google%20Ads%20Fırsat%20Kampanyasından%20faydalanmak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2"
            >
              <MdWhatsapp className="h-5 w-5 text-green-500" /> Whatsapp İletişim!
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
