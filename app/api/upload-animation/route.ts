import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

/**
 * Animasyon dosyasını Vercel Blob'a yükleyen API route
 * Bu route, public/data klasöründeki animasyon dosyalarını Vercel Blob'a yükler
 */
export async function POST(request: Request): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename');
    
    if (!filename) {
      return NextResponse.json(
        { error: 'Filename is required' },
        { status: 400 }
      );
    }

    // Animasyon dosyasının yolunu oluştur
    const filePath = path.join(process.cwd(), 'public', 'data', filename);
    
    // Dosyanın varlığını kontrol et
    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        { error: `File ${filename} not found` },
        { status: 404 }
      );
    }

    // Dosyayı oku
    const fileContent = fs.readFileSync(filePath);
    
    // Vercel Blob'a yükle
    const blob = await put(filename, fileContent, {
      access: 'public',
    });

    return NextResponse.json(blob);
  } catch (error) {
    console.error('Error uploading animation:', error);
    return NextResponse.json(
      { error: 'Failed to upload animation' },
      { status: 500 }
    );
  }
} 