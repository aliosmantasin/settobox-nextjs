import Link from "next/link";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import Image from "next/image";


const services = [
  { name: "İnstagram Sponsorlu Reklam", path: "instagram-sponsorlu-reklam" },
  { name: "Google Ads Reklam Yönetimi", path: "google-ads-reklam-yonetimi" },
  { name: "Website Tasarım Hizmeti", path: "web-sitesi-yaptirma" },
  { name: "Drone Çekimleri ve Prodüksiyon", path: "#" },
];

const pages = [
  { name: "Ana Sayfa", path: "/" },
  { name: "Referanslar", path: "settobox-referanslar" },
  { name: "Hizmetlerimiz", path: "#" },
  { name: "SetToBox İletişim", path: "#" },
];

const Footer = () => {
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
              Dijitalde Yolculuğunuzu Şekillendiriyoruz
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-semibold text-lg footerHeaderColor mb-4">Kurumsal</h3>
            <ul className="space-y-2">
              {pages.map((page) => (
                <li key={page.name}>
                  <Link href={page.path} className="footerTextColor hover:underline">
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg footerHeaderColor mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={`/${service.path}`} className="footerTextColor hover:underline">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg footerHeaderColor mb-4">Size Yardımcı Olabiliriz?</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=05437214839&amp;text=Merhabalar SetToBox web sitesinden iletişime geçiyorum.."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 footerTextColor hover:underline"
                >
                  {/* <Whatsapp className="w-5 h-5" /> */}
                  <span>WhatsApp Destek</span>
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
          <p>© 2024 SetToBox Dijital Pazarlama Ajansı. Tüm Hakları Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
