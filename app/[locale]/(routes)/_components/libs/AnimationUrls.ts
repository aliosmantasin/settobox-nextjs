/**
 * Bu dosya, animasyonların Vercel Blob URL'lerini içerir.
 * Animasyonlar, Vercel Blob'da depolanır ve bu URL'ler üzerinden erişilir.
 * Bu sayede, animasyonlar bundle boyutunu artırmaz ve daha hızlı yüklenir.
 */

import { AnimationPathKey } from './LottiePlayer';

// Vercel Blob'da depolanan animasyon dosyalarının URL'lerini içerir
export const ANIMATION_URLS: Record<AnimationPathKey, string> = {
  WEBSITE_MANAGE: 'https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/animationJson/WebsiteManage-QvCLZCtd2FzvxdNjAugCAyoVwoNCJ7.json',
  GOOGLE_ADS: 'https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/animationJson/GoogleDurunetAnimation-R62PfIuDub5D0aJXIPuh8TYUWiahdv.json',
  META_ADS: 'https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/animationJson/InstagramService-NUO0oXUJTsDJh4XNy6aAAIwVZzBmiY.json',
  GOOGLE_MANAGE: 'https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/animationJson/GoogleManageAnimation-zlTS1QTvdYkiMkarhz5zmgz79DfhLq.json',
  INSTAGRAM_SERVICE: 'https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/animationJson/InstagramService-NUO0oXUJTsDJh4XNy6aAAIwVZzBmiY.json',
  CONVERSION: 'https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/animationJson/Conversion-TGkc87UevTltozMQSfyudqu6IbXfUZ.json',
  ALL_IN_SETTOBOX: 'https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/animationJson/All-in-SetToBox-SI4sKFVVbJUfexEmbRovjcIgCV0fpj.json',
  LOADER_BOX: 'https://vr3j8vmadakibxk6.public.blob.vercel-storage.com/animationJson/loaderBox-O0UM5vmblBJHww4RQqoHPbKmnoCRJx.json'
};

/**
 * Verilen anahtar için animasyon URL'sini döndürür
 * @param key - Animasyon anahtarı
 * @returns Animasyon URL'si
 */
export function getAnimationUrl(key: AnimationPathKey): string {
  const url = ANIMATION_URLS[key];
  if (!url) {
    console.error(`Animation URL not found for key: ${key}`);
    return '';
  }
  return url;
} 