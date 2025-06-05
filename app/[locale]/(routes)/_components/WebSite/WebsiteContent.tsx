"use client"
import React from 'react';

const WebsiteContent = () => {
  return (
    <section className="my-16 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 rounded-2xl shadow-lg p-8 md:p-12">
        <div className="space-y-12">
          {/* İlk Bölüm */}
          <div className="border-b border-gray-200 dark:border-gray-800 pb-10">
            <h2 id="website-what" className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Kurumsal Web Sitesi Nedir?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Kurumsal web sitesi, işletmenizin dijital dünyada profesyonel yüzünü temsil eden, <strong>marka kimliğinizi yansıtan</strong> ve <strong>potansiyel müşterilerinizle etkileşim kurmanızı sağlayan</strong> dijital bir platformdur. Modern bir kurumsal web sitesi, <strong>SEO uyumlu yapısı</strong>, <strong>dijital pazarlama entegrasyonları</strong> ve <strong>kullanıcı dostu arayüzü</strong> ile işletmenizin büyümesine katkıda bulunur.
            </p>
            
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-8 mb-4">
              İşletmeniz İçin Neden Önemlidir?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Günümüzde potansiyel müşterileriniz bir işletme ile çalışmaya karar vermeden önce ilk olarak web sitesini ziyaret eder. Profesyonel bir web sitesi, <strong>kurumsal güvenilirliğinizi artırır</strong>, <strong>7/24 erişilebilir bir vitrin</strong> sunar ve <strong>müşteri etkileşimlerini kolaylaştırır</strong>. Ayrıca, <strong>dijital pazarlama stratejilerinizin merkezi</strong> olarak hizmet eder ve <strong>müşteri dönüşümlerini artırır</strong>.
            </p>
          </div>

          {/* İkinci Bölüm */}
          <div className="border-b border-gray-200 dark:border-gray-800 pb-10">
            <h2 id="website-seo" className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              SEO Dostu Web Sitesi Yapısı
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              SEO dostu bir web sitesi, arama motorlarında daha iyi sıralamalara ulaşmanızı ve organik trafiğinizi artırmanızı sağlar. Modern web sitesi geliştirme sürecinde SEO, tasarımın temel bir parçasıdır.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  Teknik SEO Optimizasyonu
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Web siteniz <strong>hızlı sayfa yükleme süreleri</strong>, <strong>mobil uyumluluk</strong>, <strong>güvenli SSL sertifikası</strong> ve <strong>temiz URL yapısı</strong> ile optimize edilir. Ayrıca <strong>XML site haritası</strong>, <strong>robots.txt</strong> ve <strong>meta etiketleri</strong> gibi teknik SEO gereksinimleri profesyonel şekilde yapılandırılır.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  İçerik Optimizasyonu
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  SEO odaklı içerik stratejisi ile <strong>anahtar kelime araştırması</strong>, <strong>içerik planlaması</strong> ve <strong>meta açıklamalar</strong> optimize edilir. Her sayfa için <strong>özgün ve değerli içerik</strong> oluşturulur, <strong>başlık hiyerarşisi</strong> düzenlenir ve <strong>içsel bağlantılar</strong> kurulur.
                </p>
              </div>
            </div>
          </div>

          {/* Üçüncü Bölüm */}
          <div className="border-b border-gray-200 dark:border-gray-800 pb-10">
            <h2 id="website-integration" className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Dijital Pazarlama Entegrasyonları
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Modern bir web sitesi, dijital pazarlama araçlarıyla entegre çalışarak işletmenizin online performansını maksimize eder. Bu entegrasyonlar, pazarlama stratejilerinizi daha etkili hale getirir.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  Google Entegrasyonları
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Web siteniz <strong>Google Analytics 4</strong>, <strong>Google Search Console</strong> ve <strong>Google Tag Manager</strong> ile entegre edilir. Bu araçlar sayesinde <strong>ziyaretçi davranışlarını analiz edebilir</strong>, <strong>arama performansını takip edebilir</strong> ve <strong>dönüşüm izlemesi</strong> yapabilirsiniz.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  Sosyal Medya ve Reklam Entegrasyonları
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Meta Pixel</strong>, <strong>LinkedIn Insight Tag</strong> ve diğer sosyal medya araçları entegrasyonu ile <strong>reklam kampanyalarınızı optimize edebilir</strong>, <strong>hedef kitlenizi segmentlere ayırabilir</strong> ve <strong>yeniden pazarlama kampanyaları</strong> oluşturabilirsiniz.
                </p>
              </div>
            </div>
          </div>

          {/* Dördüncü Bölüm */}
          <div className="border-b border-gray-200 dark:border-gray-800 pb-10">
            <h2 id="website-conversion" className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Dönüşüm Optimizasyonu
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Web sitenizin ziyaretçileri müşteriye dönüştürmesi için optimize edilmesi kritik öneme sahiptir. Dönüşüm odaklı tasarım ve özellikler, satışlarınızı artırır.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  İletişim ve Etkileşim Araçları
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Web siteniz <strong>WhatsApp iletişim butonu</strong>, <strong>canlı sohbet desteği</strong>, <strong>iletişim formu</strong> ve <strong>çağrı merkezi entegrasyonu</strong> gibi araçlarla donatılır. Bu özellikler, potansiyel müşterilerinizin sizinle <strong>hızlı ve kolay iletişim kurmasını</strong> sağlar.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  Rezervasyon ve Randevu Sistemleri
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Hizmet sektöründeki işletmeler için <strong>online rezervasyon sistemi</strong>, <strong>randevu takvimi</strong> ve <strong>otomatik hatırlatma sistemleri</strong> entegre edilir. Bu sistemler <strong>müşteri memnuniyetini artırır</strong> ve <strong>operasyonel verimliliği yükseltir</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Beşinci Bölüm */}
          <div className="border-b border-gray-200 dark:border-gray-800 pb-10">
            <h2 id="website-performance" className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Performans ve Kullanıcı Deneyimi
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Yüksek performanslı ve kullanıcı dostu bir web sitesi, ziyaretçilerinizin memnuniyetini artırır ve dönüşüm oranlarınızı yükseltir.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  Hız Optimizasyonu
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Web siteniz <strong>Core Web Vitals</strong> metriklerine uygun olarak optimize edilir. <strong>Resim optimizasyonu</strong>, <strong>kod minifikasyonu</strong>, <strong>önbellek yönetimi</strong> ve <strong>CDN kullanımı</strong> ile maksimum performans sağlanır. Hızlı yüklenen sayfalar, hem <strong>kullanıcı deneyimini iyileştirir</strong> hem de <strong>SEO sıralamalarınızı yükseltir</strong>.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  Mobil Öncelikli Tasarım
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Tüm sayfalar <strong>mobil öncelikli tasarım</strong> prensibiyle geliştirilir. <strong>Responsive tasarım</strong>, <strong>dokunmatik ekran optimizasyonu</strong> ve <strong>mobil navigasyon</strong> özellikleri ile her cihazda mükemmel görüntüleme ve kullanım deneyimi sağlanır.
                </p>
              </div>
            </div>
          </div>

          {/* Altıncı Bölüm */}
          <div className="border-b border-gray-200 dark:border-gray-800 pb-10">
            <h2 id="website-security" className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Güvenlik ve Bakım
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Web sitenizin güvenliği ve düzenli bakımı, kesintisiz hizmet sunmanız için kritik öneme sahiptir.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  Güvenlik Önlemleri
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Web siteniz <strong>SSL sertifikası</strong>, <strong>güvenlik duvarı</strong>, <strong>DDoS koruması</strong> ve <strong>düzenli güvenlik taramaları</strong> ile korunur. <strong>Veri şifreleme</strong>, <strong>güvenli form işleme</strong> ve <strong>kullanıcı verisi koruması</strong> ile KVKK uyumluluğu sağlanır.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  Düzenli Bakım ve Güncelleme
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Düzenli yedekleme</strong>, <strong>sistem güncellemeleri</strong>, <strong>performans izleme</strong> ve <strong>hata düzeltmeleri</strong> ile web sitenizin kesintisiz çalışması sağlanır. <strong>7/24 teknik destek</strong> ile olası sorunlara hızlı müdahale edilir.
                </p>
              </div>
            </div>
          </div>

          {/* Yedinci Bölüm */}
          <div>
            <h2 id="website-funnel" className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Dijital Pazarlama Hunisi Stratejisi
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Web siteniz, dijital pazarlama hunisinizin merkezinde yer alır ve potansiyel müşterilerinizi adım adım satışa yönlendirir.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  Farkındalık ve İlgi Aşaması
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Web siteniz <strong>SEO odaklı blog içerikleri</strong>, <strong>bilgilendirici sayfalar</strong> ve <strong>sosyal medya entegrasyonları</strong> ile potansiyel müşterilerin dikkatini çeker. <strong>İçerik pazarlaması stratejisi</strong> ile markanızın uzmanlığını gösterir ve <strong>organik trafik</strong> oluşturursunuz.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  Değerlendirme ve Satın Alma Aşaması
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  <strong>Detaylı hizmet sayfaları</strong>, <strong>müşteri yorumları</strong>, <strong>vaka çalışmaları</strong> ve <strong>fiyatlandırma bilgileri</strong> ile potansiyel müşterilerin karar vermesini kolaylaştırırsınız. <strong>WhatsApp iletişim</strong>, <strong>online randevu</strong> ve <strong>teklif formu</strong> gibi araçlarla satışa dönüşüm sağlarsınız.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteContent; 