'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';



export default function SocialMediaManageModalPro() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
 

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
        className="p-1 sm:p-1 my-2  text-start cursor-pointer underline w-full"
        onClick={handleOpen}
      >
        <div id="alert-1" className="w-full flex items-center p-3 mb-1 text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400">
          <svg className="me-2 h-3 w-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
            <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
          </svg>

          <div className="ms-3 text-sm font-medium">
            Sosyal Medya Yönetim İçeriği
          </div>
        </div>

      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-lg w-full max-h-[90vh] overflow-auto">
          <DialogHeader>
            <div className="flex justify-between items-center">
              <DialogTitle className="flex items-center text-blue-600">
                Sosyal Medya İçerik Yönetimi
              </DialogTitle>
           
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
