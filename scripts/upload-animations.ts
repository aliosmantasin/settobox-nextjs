/**
 * Bu script, public/data klasöründeki animasyon dosyalarını Vercel Blob'a yükler
 * ve AnimationUrls.ts dosyasını günceller.
 * 
 * Kullanım:
 * pnpm tsx scripts/upload-animations.ts
 */

import fs from 'fs';
import path from 'path';
import { ANIMATION_PATHS } from '../app/[locale]/(routes)/_components/libs/LottiePlayer';

// Animasyon dosyalarının yollarını al
const animationPaths = Object.values(ANIMATION_PATHS);

// Her bir animasyon dosyası için
async function uploadAnimations() {
  console.log('Animasyon dosyaları yükleniyor...');
  
  const results: Record<string, string> = {};
  
  for (const animationPath of animationPaths) {
    // Dosya adını al
    const filename = path.basename(animationPath);
    
    try {
      // API'ye istek gönder
      const response = await fetch(`/api/upload-animation?filename=${filename}`, {
        method: 'POST',
      });
      
      if (!response.ok) {
        const error = await response.json();
        console.error(`Error uploading ${filename}:`, error);
        continue;
      }
      
      const blob = await response.json();
      console.log(`Uploaded ${filename} to ${blob.url}`);
      
      // Sonuçları sakla
      const key = Object.keys(ANIMATION_PATHS).find(
        (k) => ANIMATION_PATHS[k as keyof typeof ANIMATION_PATHS] === animationPath
      );
      
      if (key) {
        results[key] = blob.url;
      }
    } catch (error) {
      console.error(`Error uploading ${filename}:`, error);
    }
  }
  
  // AnimationUrls.ts dosyasını güncelle
  updateAnimationUrlsFile(results);
  
  console.log('Animasyon dosyaları yükleme işlemi tamamlandı.');
}

// AnimationUrls.ts dosyasını güncelle
function updateAnimationUrlsFile(results: Record<string, string>) {
  const filePath = path.join(process.cwd(), 'app', '[locale]', '(routes)', '_components', 'libs', 'AnimationUrls.ts');
  
  let fileContent = fs.readFileSync(filePath, 'utf8');
  
  // ANIMATION_URLS nesnesini güncelle
  const urlEntries = Object.entries(results)
    .map(([key, url]) => `  ${key}: '${url}',`)
    .join('\n');
  
  // ANIMATION_URLS nesnesini bul ve güncelle
  const urlRegex = /export const ANIMATION_URLS: Record<AnimationPathKey, string> = {([^}]*)}/;
  fileContent = fileContent.replace(urlRegex, `export const ANIMATION_URLS: Record<AnimationPathKey, string> = {\n${urlEntries}\n}`);
  
  // Dosyayı kaydet
  fs.writeFileSync(filePath, fileContent);
  
  console.log('AnimationUrls.ts dosyası güncellendi.');
}

// Scripti çalıştır
uploadAnimations().catch(console.error); 