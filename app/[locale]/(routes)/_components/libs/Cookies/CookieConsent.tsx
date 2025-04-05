// "use client";

// import { useState, useEffect } from "react";
// import Cookies from "js-cookie";
// import { CookieIcon } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button"; // Shadcn UI buton bileşeni
// import Link from "next/link";

// export default function CookieConsent() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hide, setHide] = useState(false);

//   useEffect(() => {
//     const consent = Cookies.get("user_consent");
//     if (!consent) {
//       setIsOpen(true);
//     }
//   }, []);

//   const acceptCookies = () => {
//     Cookies.set("user_consent", "true", { expires: 365 });
//     setIsOpen(false);
//     setTimeout(() => {
//       setHide(true);
//     }, 700);
//     window.location.reload(); // GTM tekrar yüklenmesi için sayfayı yenile
//   };

//   const rejectCookies = () => {
//     Cookies.set("user_consent", "false", { expires: 365 });
//     setIsOpen(false);
//     setTimeout(() => {
//       setHide(true);
//     }, 700);
//   };

//   if (!isOpen) return null;

  

//   return (
// <div className={cn("fixed z-[200] bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md", !isOpen ? "transition-[opacity,transform] translate-y-8 opacity-0" : "transition-[opacity,transform] translate-y-0 opacity-100", hide && "hidden")}>
//       <div className="dark:bg-card bg-background rounded-md m-3 border border-border shadow-lg">
//         <div className="grid gap-2">
//           <div className="border-b border-border h-14 flex items-center justify-between p-4">
//             <h1 className="text-lg font-medium">Çerezleri Kullanıyoruz</h1>
//             <CookieIcon className="h-[1.2rem] w-[1.2rem]" />
//           </div>
//           <div className="p-4">
//             <p className="text-sm font-normal text-start">
//             Sizlere özelleştirilmiş kampanyalar ve diğer faydalı özellikler sunabilmek amacıyla çerezler kullanmaktayız. Çerez kullanımını kabul etmediğiniz takdirde, bazı özelliklere erişim kısıtlanabilir.
//               <br />
//               <br />
//               <span className="text-xs">&quot;Kabul Et&quot; tıklayarak çerez kullanımımızı kabul etmiş olursunuz.</span>
//               <br />
//               <Link href="/cerez-politikasi" className="text-xs underline">Daha fazla bilgi.</Link>
//             </p>
//           </div>
//           <div className="flex gap-2 p-4 py-5 border-t border-border dark:bg-background/20">
//             <Button onClick={rejectCookies} className="w-full" variant="secondary">Reddet</Button>
//             <Button onClick={acceptCookies} className="w-full">Kabul Et</Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
