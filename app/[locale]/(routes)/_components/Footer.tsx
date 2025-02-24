import Link from "next/link";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";




const Footer = () => {

  const t = useTranslations("Footer")

  return (
    <footer className="border-t border-gray-300 py-10 ">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Brand and Description */}
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logoImage/SetToBoxLogo.webp" alt="SetToBox Logo" width={100} height={100}/>
            </Link>
            <p className="mt-4 text-sm footerHeaderColor">
              {t("slogan")}
            </p>
          </div>

          {/* Pages */}
          <div>
            <div className="font-semibold text-lg footerHeaderColor mb-2">
              {t("sub1")}
              </div>
            <ul className="space-y-2">

                <li >
                  <Link href={t("linkA1")} className="footerTextColor hover:underline">
                    {t("span1")}
                  </Link>
                </li>

                <li >
                  <Link href={t("linkA2")} className="footerTextColor hover:underline">
                    {t("span2")}
                  </Link>
                </li>
          
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="font-semibold text-lg footerHeaderColor mb-2">
              {t("sub2")}
            </div>
            <ul className="space-y-4">
            
                <li>
                  <Link href={t("linkB1")} className="footerTextColor hover:underline">
                    {t("span3")}
                  </Link>
                </li>

                <li>
                  <Link href={t("linkB2")} className="footerTextColor hover:underline">
                    {t("span4")}
                  </Link>
                </li>
         
                <li>
                  <Link href={t("linkB3")} className="footerTextColor hover:underline">
                    {t("span5")}
                  </Link>
                </li>
         
            
         
         
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-semibold text-lg footerHeaderColor mb-2">
              {t("sub3")}
            </div>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=05437214839&amp;text=Merhabalar SetToBox web sitesinden iletişime geçiyorum.."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 footerTextColor hover:underline"
                >
                  {/* <Whatsapp className="w-5 h-5" /> */}
                  <span>
                    {t("span6")}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@settobox.com"
                  className="footerTextColor hover:underline"
                >
                  info@settobox.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-10">
          <h3 className="font-semibold text-lg footerHeaderColor mb-4">Sosyal Medya Hesaplarımız</h3>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/" target="_blank">
              <Facebook className="w-6 h-6 footerIconColor hover:text-blue-600" />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank">
              <Instagram className="w-6 h-6 footerIconColor hover:text-pink-600" />
            </Link>
            <Link href="https://www.linkedin.com/" target="_blank">
              <Linkedin className="w-6 h-6 footerIconColor hover:text-blue-700" />
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center text-sm text-gray-500">
          <p>© 2025 SetToBox Dijital Pazarlama Ajansı. Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
