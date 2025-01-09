'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

import { X } from 'lucide-react';

export default function SocialMediaManageModalPro() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const contentData = [
    { type: 'Görsel Paylaşımı', frequency: '2 - 3' },
    { type: 'Reels Paylaşımı', frequency: '0 - 1' },
    { type: 'Story Paylaşımı', frequency: '4' },
    { type: 'Sizden Gelenler', frequency: '+' },
    { type: 'Özel Günler Paylaşımı', frequency: 'Mevcut' },
  ];

  return (
    <>
      <Button
        variant="link"
        className="p-1 sm:p-1 my-2  text-start cursor-pointer w-full"
        onClick={handleOpen}
      >
              <div id="alert-" className="flex items-center p-3 mb-1 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-blue-400 border border-green-400 w-full" role="alert">
                  <svg className="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                 
                  
                      Sosyal Medya Yönetim İçeriği
                 
              </div>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg w-full max-h-[90vh] overflow-auto">
          <DialogHeader>
            <div className="flex justify-between items-center">
              <DialogTitle className="flex items-center text-blue-600">
                Sosyal Medya İçerik Yönetimi
              </DialogTitle>
              <button
                onClick={handleClose}
                className="text-gray-500 hover:text-gray-800 focus:outline-none"
              >
                <X size={20} />
              </button>
            </div>
          </DialogHeader>

          <DialogDescription className="mt-2 text-gray-700">
            Her işletmede olduğu gibi SetToBox içerik yönetiminde de instagram ve facebook uygulamalarında özelleştirmeler olmaktadır. İçeriklerimizi bir bütünlük içerisinde 
            bir hedef doğrultusunda yönetiyoruz.
          </DialogDescription>

          <div className="mt-4">
            <h6 className="text-center text-lg font-medium">İçerik Yapısı</h6>
            <Table className="mt-2 border">
              <TableHeader>
                <TableRow>
                  <TableHead className="text-blue-600">İçerik Türü</TableHead>
                  <TableHead>Haftalık</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contentData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.type}</TableCell>
                    <TableCell>{row.frequency}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <DialogDescription className="mt-4 text-gray-700">
            Hazırlanacak reklam kreatifi bunların dışındadır.
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
}
