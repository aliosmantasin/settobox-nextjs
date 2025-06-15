import { v4 as uuidv4 } from 'uuid';

// --- Arayüzler (Interfaces) ---
// Bu bölüm, fonksiyonlarımıza göndereceğimiz verilerin yapısını ve tiplerini tanımlar.
// TypeScript'in doğru veri tiplerini kontrol etmesini sağlayarak hataları önler.

/**
 * Meta'ya gönderilecek temel kullanıcı bilgilerini tanımlar.
 * Tüm alanlar opsiyoneldir, böylece sadece mevcut olan verileri gönderebiliriz.
 */
interface UserData {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  country?: string;
  zipCode?: string;
}

/**
 * Olayla ilgili ek, özel verileri tanımlar.
 * Örneğin bir 'Purchase' olayında para birimi ve değeri gibi.
 */
interface CustomData {
  value?: number;
  currency?: string;
  content_name?: string;
  content_ids?: string[];
  [key: string]: string | number | boolean | string[] | undefined;
}

/**
 * Ana fonksiyonumuz olan sendMetaEvent'in alacağı tüm parametreleri bir araya getirir.
 */
interface SendMetaEventParams {
  eventName: string;
  userData: UserData;
  customData?: CustomData;
  eventUrl?: string;
}

/**
 * sendMetaEvent fonksiyonunun geri döndüreceği objenin yapısını tanımlar.
 * İşlemin başarılı olup olmadığını ve oluşturulan eventId'yi içerir.
 */
interface SendMetaEventResponse {
  success: boolean;
  eventId?: string;
  error?: string;
}

// --- Yardımcı Fonksiyonlar ---

/**
 * Tarayıcıdaki çerezleri isme göre okumak için bir yardımcı fonksiyon.
 * Meta'nın 'fbp' ve 'fbc' kimliklerini almak için kullanılır.
 * @param name Okunacak çerezin adı (örn: "_fbp")
 * @returns {string | null} Çerezin değeri veya bulunamazsa null.
 */
const getCookie = (name: string): string | null => {
  if (typeof document === 'undefined') {
    return null;
  }
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift() || null;
  }
  return null;
};


// --- Ana Fonksiyon ---

/**
 * Bir olayı sunucu tarafı CAPI'ye gönderir ve tarayıcıdaki Pixel ile tekilleştirme
 * (deduplication) için kullanılacak olan benzersiz eventId'yi döndürür.
 * @param params - Olay adı, kullanıcı verileri ve diğer özel verileri içeren obje.
 * @returns {Promise<SendMetaEventResponse>} - İşlem sonucunu ve eventId'yi içeren bir Promise.
 */
export const sendMetaEvent = async ({
  eventName,
  userData,
  customData = {},
  eventUrl = window.location.href,
}: SendMetaEventParams): Promise<SendMetaEventResponse> => {
  try {
    // 1. Olay Tekilleştirme için Benzersiz ID Oluştur
    // Hem CAPI hem de Pixel olayına aynı ID'yi vererek Meta'nın mükerrer sayımı önlemesini sağlar.
    const eventId = uuidv4();

    // 2. Meta Çerezlerini Oku
    // Eşleştirme kalitesini önemli ölçüde artıran fbp (tarayıcı) ve fbc (tıklama) kimliklerini alır.
    const fbp = getCookie('_fbp');
    const fbc = getCookie('_fbc');

    // 3. Sunucu API'sine İstek Gönder
    // Tüm verileri, sunucudaki /api/meta-events yoluna POST isteği ile gönderir.
    const response = await fetch('/api/meta-events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        eventId,
        userData,
        customData,
        eventUrl,
        fbp, // Okunan çerezleri de payload'a ekle
        fbc,
      }),
    });

    // 4. Cevabı Kontrol Et
    // Sunucudan gelen cevap başarılı değilse (örn: 500 hatası), bir hata fırlat.
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.details || 'Failed to send event to server');
    }

    // 5. Başarılı Sonucu Döndür
    // Her şey yolunda giderse, bu eventId'nin tarayıcıdaki Pixel olayı için de
    // kullanılması amacıyla başarılı bir sonuç ve eventId'yi döndür.
    return { success: true, eventId };
  } catch (error) {
    console.error('Error sending Meta CAPI event:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return { success: false, error: errorMessage };
  }
}; 