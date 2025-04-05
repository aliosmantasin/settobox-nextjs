// import Script from "next/script";
// import Cookies from "js-cookie";

// const GTM_ID = "GTM-NRSTMB28"; // Kendi GTM ID'ni ekle

// export default function TrackingScripts() {
//   const userConsent = Cookies.get("user_consent") === "true";

//   if (!userConsent) return null; // Kullanıcı izin vermediyse GTM yüklenmez

//   return (
//     <>
//       {/* Google Tag Manager - Script */}
//       <Script id="gtm-script" strategy="afterInteractive">
//         {`
//           (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//           new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//           j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//           'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//           })(window,document,'script','dataLayer','${GTM_ID}');
//         `}
//       </Script>

//       {/* Google Tag Manager - NoScript */}
//       <noscript>
//         <iframe
//           src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
//           height="0"
//           width="0"
//           style={{ display: "none", visibility: "hidden" }}
//         ></iframe>
//       </noscript>
//     </>
//   );
// }
