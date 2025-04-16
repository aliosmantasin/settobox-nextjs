# SetToBox Proje Kuralları

## Paket Yönetimi
- Paket yönetimi için `pnpm` kullanılacaktır
- Yeni paket eklerken `pnpm add` komutu kullanılacaktır
- Paket versiyonları `package.json` dosyasında belirtilecektir

## TypeScript Kullanımı
- Tüm yeni dosyalar TypeScript (.ts veya .tsx) olarak oluşturulacaktır
- Tip tanımlamaları mümkün olduğunca spesifik olmalıdır
- `any` tipinden kaçınılmalıdır

## Kod Stili
- Fonksiyonlar ve bileşenler için açıklayıcı isimler kullanılacaktır
- Karmaşık mantık için yorum satırları eklenmelidir
- Kod tekrarından kaçınılmalıdır

## Performans
- Büyük dosyalar (animasyonlar, görseller vb.) için Vercel Blob kullanılacaktır
- Gereksiz render'lardan kaçınılmalıdır
- Lazy loading kullanılmalıdır

## Kod Değişiklikleri
- Mevcut kodlar asla kaldırılmamalıdır, sadece ekleme veya düzenleme yapılmalıdır
- Kaldırılması gereken kodlar için mutlaka kullanıcıdan onay alınmalıdır
- Yapılan her değişiklik açıkça belirtilmelidir
- Değişiklik önerileri "öneri" olarak sunulmalıdır, doğrudan uygulanmamalıdır
- Kod değişiklikleri yapmadan önce kullanıcıya detaylı açıklama yapılmalıdır
- Kullanıcının onayı olmadan hiçbir kod kaldırılmamalıdır

## Vercel Blob Kullanımı
- Büyük dosyalar (animasyonlar, görseller vb.) Vercel Blob'da saklanacaktır
- Blob URL'leri `AnimationUrls.ts` dosyasında tanımlanacaktır
- Animasyonlar için `useBlob` prop'u kullanılacaktır

## Dil Kullanımı
- Tüm iletişim ve yanıtlar Türkçe olarak yapılacaktır
- Teknik terimler gerektiğinde İngilizce olarak kullanılabilir
- Kod içi yorumlar ve değişken isimleri İngilizce kalabilir 