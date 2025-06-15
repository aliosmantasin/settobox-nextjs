# Gelişmiş İzin Yönetim Sistemi (Cookie Consent)

Bu belge, bu projedeki Google İzin Modu v2 (Consent Mode v2) uyumlu çerez yönetim sisteminin hem kod tabanı (Next.js/React) hem de Google Etiket Yöneticisi (GTM) tarafındaki yapılandırmasını detaylı bir şekilde açıklar. Amaç, sistemi hiç bilmeyen bir geliştiricinin bile anlayabilmesini, bakımını yapabilmesini ve yeni projelere uyarlayabilmesini sağlamaktır.

## Genel Bakış ve Çalışma Prensibi

Sistem, kullanıcıların web sitesindeki çerezler ve takip teknolojileri üzerindeki kontrolünü sağlamak amacıyla GDPR ve KVKK gibi gizlilik yönetmeliklerine uyumlu olarak tasarlanmıştır.

**Temel Prensip:** Varsayılan olarak hiçbir izne dayalı takip teknolojisi (çerezler vb.) çalışmaz. Etiketler, yalnızca kullanıcı açıkça izin verdikten sonra tam fonksiyonlu olarak ateşlenir. Sistem, Google'ın İzin Modu v2'sini kullanarak, izin verilmediği durumlarda bile Google etiketlerinden anonim "ping"ler göndererek veri kaybını modelleme yoluyla azaltır.

## Bölüm 1: Kod Tabanı Yapısı (`/CookieConsent`)

Tüm çerez yönetimi mantığı ve arayüz bileşenleri `app/[locale]/(routes)/_components/libs/CookieConsent/` klasörü altında bulunur.

### `CookieConsentContext.tsx`
Bu dosya, sistemin beynidir. Bir React Context Provider'ı oluşturur ve tüm izin durumunu yönetir.
*   **Sorumlulukları:**
    *   `consent` state'ini tutar (örn: `{ analytics: true, marketing: false }`).
    *   Kullanıcının bir seçim yapıp yapmadığını (`hasInteracted`) ve tercih modalının açık olup olmadığını (`isPreferencesOpen`) yönetir.
    *   `acceptAll`, `rejectAll`, `updateConsent` gibi fonksiyonlarla izin durumunu günceller.
    *   Yapılan tercihleri kullanıcının tarayıcısındaki `localStorage`'a kaydeder ve bir sonraki ziyaretinde hatırlar.
    *   Kullanıcı bir seçim yaptığında (`acceptAll`, `rejectAll` vb.), GTM'i bilgilendirmek için `dataLayer`'a `consent_updated` adında özel bir olay (event) gönderir.
    *   Banner veya modal açıkken arka planın kaydırılmasını engellemek için `<body>` etiketinin stilini yönetir.

### `ConditionalScripts.tsx`
Bu bileşen, GTM ve İzin Modu'nun web sitesine entegrasyonunu sağlar.
*   **Sorumlulukları:**
    *   GTM ana betiğini (`gtm.js`) sayfaya ekler.
    *   **En Kritik Görev:** `gtag('consent', 'default', ...)` komutunu kullanarak, kullanıcı bir seçim yapmadan *önce* tüm izin kategorilerini varsayılan olarak `denied` (reddedilmiş) durumuna ayarlar.
    *   `CookieConsentContext`'teki izin durumu (`consent` state'i) her değiştiğinde, `gtag('consent', 'update', ...)` komutunu çalıştırarak GTM'in dahili izin durumunu günceller.

### `CookieConsentBanner.tsx` ve `ClientCookieBanner.tsx`
Bu bileşenler, kullanıcı siteye ilk girdiğinde gösterilen alt banner'ı oluşturur.
*   `CookieConsentBanner.tsx`: Çeviri metinlerini (`i18n`) alır ve `ClientCookieBanner`'ı render eder.
*   `ClientCookieBanner.tsx`: Banner'ın arayüzünü (HTML/CSS) ve butonların (`acceptAll`, `rejectAll`, `showPreferences`) işlevselliğini içerir. Dark/light mode için stil tanımlamaları burada yapılır.

### `CookiePreferencesModal.tsx` ve `ClientCookiePreferencesModal.tsx`
Bu bileşenler, "Tercihleri Ayarla" butonuna tıklandığında açılan detaylı tercih penceresini oluşturur.
*   **Sorumlulukları:**
    *   Her bir izin kategorisi (Analitik, Pazarlama vb.) için ayrı ayrı açma/kapama butonları sunar.
    *   Kullanıcının yaptığı seçimleri `updateConsent` fonksiyonu aracılığıyla `CookieConsentContext`'e iletir.
    *   Arayüzün dark/light mode uyumlu stil tanımlamalarını içerir.

## Bölüm 2: Google Etiket Yöneticisi (GTM) Yapılandırması

Kod tabanı doğru sinyalleri gönderse bile, GTM'in bu sinyalleri doğru yorumlaması kritik öneme sahiptir. Bu projede, eski manuel tetikleyici mantığı yerine GTM'in modern ve **otomatik İzin Modu** mekanizması kullanılmaktadır.

### Adım 1: GTM'de İzin Modunu Etkinleştirme (Kritik)
*   GTM'de **Yönetici -> Kapsayıcı Ayarları**'na gidin.
*   **"İzin özetini etkinleştir"** seçeneğini işaretleyin.
*   Bu ayar olmadan, GTM'in yerleşik izin denetimleri çalışmaz.

### Adım 2: Etiketlerin İzin Ayarları
*   **Google Etiketleri (GA4, Google Ads):**
    *   Bu etiketlerin `Gelişmiş Ayarlar -> İzin Ayarları` bölümünde **"Ek İzin Gerekmiyor"** seçili olmalıdır. GTM, bu etiketlerin hangi izinlere ihtiyacı olduğunu (`analytics_storage`, `ad_storage`) zaten bilir ve durumu otomatik yönetir.
*   **Üçüncü Taraf Etiketler (Facebook Pixel, Clarity vb.):**
    *   Bu etiketlerin `Gelişmiş Ayarlar -> İzin Ayarları` bölümünde **"Ek İzin Gerekli"** seçeneği işaretlenmelidir.
    *   Açılan kutucuğa, etiketin çalışması için gereken izin türü eklenmelidir. (Örn: Facebook Pixel için `ad_storage`, Clarity için `analytics_storage`).

### Adım 3: Çok Dilli ve SPA Uyumlu Tetikleyici Stratejisi
Single Page Application (SPA) yapılarında ve çok dilli sitelerde etiketlerin doğru zamanda ateşlenmesi için **üçlü tetikleyici stratejisi** uygulanmalıdır. Her bir dil için (örn: `Fb Pixel TR` ve `Fb Pixel EN`) bu üç tetikleyici grubu oluşturulur.

*   **Tetikleyici 1: Başlatma (Initialization / Page View)**
    *   **Tür:** `Başlatma` veya `Sayfa Görüntüleme`.
    *   **Amaç:** Kullanıcı doğrudan o dile ait bir URL'ye (`/tr`, `/en`) geldiğinde etiketi ateşler.
    *   **Koşul:** `Page Path` **şunu içerir** `/tr` (veya `/en`).

*   **Tetikleyici 2: İzin Güncelleme (Consent Update)**
    *   **Tür:** `Özel Etkinlik (Custom Event)`.
    *   **Amaç:** Kullanıcı sayfa yüklendikten *sonra* çerez iznini verdiğinde (veya değiştirdiğinde) etiketi ateşler. "Kaçırılan treni yakalamasını" sağlar.
    *   **Etkinlik Adı:** `consent_updated` (Kodda gönderdiğimiz olay).
    *   **Koşul:** `Page Path` **şunu içerir** `/tr` (veya `/en`).

*   **Tetikleyici 3: Navigasyon (History Change)**
    *   **Tür:** `Geçmiş Değişikliği (History Change)`.
    *   **Amaç:** Kullanıcı site içinde sayfayı yeniden yüklemeden dil değiştirdiğinde (`/tr`'den `/en`'e geçtiğinde) etiketi ateşler. SPA'lar için kritiktir.
    *   **Koşul:** `Page Path` **şunu içerir** `/tr` (veya `/en`).

Bu üç tetikleyiciyi bir etikete (`VE` yerine `VEYA` mantığıyla) bağladığınızda, etiket her koşulda doğru zamanda ve doğru sayfada ateşlenmek için bir sinyal alır. GTM'in İzin Modu ise bu sinyal geldiğinde iznin verilip verilmediğini kontrol ederek son kararı verir.

## Bölüm 3: Çeviri (i18n) Yönetimi
*   Tüm kullanıcı arayüzü metinleri `messages/tr.json` ve `messages/en.json` dosyalarından gelir.
*   Çerez sistemiyle ilgili metinler `CookieBanner` ve `CookiePreferences` ana anahtarları altında toplanmıştır. Yeni bir metin eklemek veya mevcut bir metni değiştirmek için bu iki nesne düzenlenmelidir. 