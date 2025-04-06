import { Card } from "@/components/ui/card";

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
          <ul className="list-disc pl-6 text-lg">
            <li>Temel Çerezler: Web sitesinin düzgün çalışmasını sağlayan çerezler.</li>
            <li>Performans Çerezleri: Web sitesinin nasıl kullanıldığını analiz etmek için kullanılır.</li>
            <li>İşlevsellik Çerezleri: Kullanıcı tercihlerini saklamak için kullanılır.</li>
            <li>Reklam Çerezleri: Kullanıcıları hedeflemek için kullanılır.</li>
          </ul>
        </Card>
        <Card className="p-4 shadow-md">
          <h2 className="text-2xl font-semibold">Çerezleri Nasıl Yönetebilirsiniz?</h2>
          <p className="text-lg">
            Tarayıcı ayarları aracılığıyla çerezleri yönetebilir veya silebilirsiniz.
          </p>
        </Card>
      </section>
      <footer className="mt-8 text-center text-sm">
        <p>© 2025 SetTo Box - Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { locale: 'tr' },
  ]
}