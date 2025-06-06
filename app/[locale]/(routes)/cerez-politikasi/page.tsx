import { Card } from "@/components/ui/card";
import { seoData } from "@/lib/seo";
import { Metadata } from "next";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale ?? "tr";
  const pagePath = locale === "en" ? "cerez-politikasi" : "cerez-politikasi";

  const seo = seoData[pagePath] || {
    title: locale === "en" ? "Çerez Politikası | SettoBox" : "Çerez Politikası| SettoBox",
    description: locale === "en" ? "Çerez Politikasını incelyebilir ve tarayıcınızda değişiklik yapabilirsiniz" : "Çerez Politikasını incelyebilir ve tarayıcınızda değişiklik yapabilirsiniz",
  };

  // BASE URL'ni ayarla
  const baseUrl = "https://www.settobox.com";
  const canonical = `${baseUrl}/${locale}`;

  return {
    title: seo.title,
    description: seo.description,
    openGraph: {
      title: seo.title,
      description: seo.description,
    },
    twitter: {
      title: seo.title,
      description: seo.description,
    },
    alternates: {
      canonical,
    },
  };
}


export default function CookiePolicyPage() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">Çerez Politikası</h1>
      </header>
      <section className="space-y-6">
        <p className="text-lg">
          Bu Çerez Politikası, SetTo Box tarafından çerezlerin nasıl kullanıldığını, topladığı verileri nasıl işlediğimizi ve çerezleri nasıl yönettiğinizi açıklamaktadır.
        </p>
        <Card className="p-4 shadow-md">
          <h2 className="text-2xl font-semibold">Çerezler Nedir?</h2>
          <p className="text-lg">
            Çerezler, kullanıcılar web sitesi ile etkileşime girdiklerinde tarayıcılarında depolanan küçük veri dosyalarıdır.
          </p>
        </Card>
        <Card className="p-4 shadow-md">
          <h2 className="text-2xl font-semibold">Kullandığımız Çerezler</h2>
          <div className="space-y-4 mt-4">
            <div>
              <h3 className="text-xl font-medium">1. Gerekli Çerezler</h3>
              <p className="text-lg">Web sitesinin düzgün çalışması için gerekli olan çerezlerdir. Bu çerezler olmadan web sitesi düzgün çalışmaz.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium">2. Analitik Çerezler</h3>
              <p className="text-lg">Web sitesinin nasıl kullanıldığını analiz etmek için kullanılır. Bu çerezler sayesinde web sitesi performansını iyileştirebiliriz.</p>
              <ul className="list-disc pl-6 text-lg mt-2">
                <li>Google Analytics</li>
                <li>Microsoft Clarity</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium">3. Pazarlama Çerezleri</h3>
              <p className="text-lg">Reklam ve pazarlama faaliyetleri için kullanılan çerezlerdir.</p>
              <ul className="list-disc pl-6 text-lg mt-2">
                <li>Google Ads</li>
                <li>Facebook Pixel</li>
          </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium">4. İşlevsel Çerezler</h3>
              <p className="text-lg">Web sitesinde gelişmiş işlevsellik ve kişiselleştirme sağlamak için kullanılan çerezlerdir.</p>
            </div>
          </div>
        </Card>
        <Card className="p-4 shadow-md">
          <h2 className="text-2xl font-semibold">Çerezleri Nasıl Yönetebilirsiniz?</h2>
          <div className="space-y-4 mt-4">
            <p className="text-lg">
              Çerez tercihlerinizi web sitemizdeki çerez yönetim panelinden değiştirebilirsiniz. Ayrıca, tarayıcı ayarlarınızdan da çerezleri yönetebilirsiniz.
            </p>
            <p className="text-lg">
              Çerezleri devre dışı bırakmak web sitesinin bazı özelliklerinin çalışmamasına neden olabilir.
            </p>
          </div>
        </Card>
        <Card className="p-4 shadow-md">
          <h2 className="text-2xl font-semibold">GDPR ve KVKK Uyumluluğu</h2>
          <div className="space-y-4 mt-4">
            <p className="text-lg">
              Web sitemiz, Avrupa Birliği Genel Veri Koruma Yönetmeliği (GDPR) ve Kişisel Verilerin Korunması Kanunu (KVKK) gereksinimlerine uygun olarak tasarlanmıştır.
            </p>
          <p className="text-lg">
              Çerez kullanımı için açık rızanız alınmakta ve istediğiniz zaman bu rızayı geri çekebilmektesiniz.
          </p>
          </div>
        </Card>
      </section>
      <footer className="mt-8 text-center text-sm">
        <p>© {new Date().getFullYear()} SetTo Box - Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { locale: 'tr' },
  ]
}