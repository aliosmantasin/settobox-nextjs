// import ArrangementInstagram from '@/public/data/InstagramService.json'
// import ManageGoogleAnimation from '@/public/data//ManageGoogleAnimation.json'
import ReferansWebDurunet from '@/public/images/durunetGorsel/WebDurunet.webp'
// import GoogleDurunetAnimation from '@/public/data/GoogleDurunetAnimation.json'
// import WebSiteManage from '@/public/data/WebsiteManage.json'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import DisPlayAds from '@/public/images/DisplayAds.webp'
import { getAnimationUrl } from '@/app/[locale]/(routes)/_components/libs/AnimationUrls'

type Sector = 'hizmetsektoru' | 'egitimsektoru' | 'sagliksektoru'; // Sektör türlerini tanımlıyoruz.


interface MetricInfo { // Meta Metric
  title: string;
  description: string;
}

interface SectorData {  // Sector Data Ana Veri Types
  title: string;
  description: string;
  keywords: string;
  allInBox: {
    headerTitle: string;
    headerDescription: string;
    animation: string;
  };

  metaManage: {
    title: string;
    generalDefinition: string;
    description: string;
    metricsTitle: string;
    metaMetrics: string[]; //meta metrics 
    animation: string;
  };

  referanceMeta: {   // Meta Referance
    title: string; 
    companyName: string;
    subHeader: string;
    description: string;
    metricsInfo: MetricInfo[]; // Güncellenmiş kısım
  };

  googleManage: null | {
    title: string | undefined;
    generalDefinition: string;
    description: string;
    metricsTitle: string;
    googleMetrics: string[] | null;
    animation: string | null;
    subTitle: string;
  };

  referanceGoogle: null | {
    title: string;
    companyName: string;
    subHeader: string;
    description: string;
    subTitle: string;
    subTitleBody: string;
    animation: string;
    images: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
  };

  webManage: {
    title: string;
    subTitle: string;
    description: string;
    metricsTitle: string;
    webMetrics: string[];
    animation: string | null;
  };

  referanceWeb: {   
    title: string;
    companyName: string;
    subHeader: string;
    metricsInfo: MetricInfo[];
    images: {
      src: string;
      alt: string;
      width: number;
      height: number;
    };
    webname: string;
    webUrl: string;
  };

  instagramService: {
    animation: string;
  };
}

interface SectorState {
  sectorData: Record<Sector, SectorData>; // Sektör verilerini tutmak için Record kullanıyoruz.
  selectedSector: Sector;
}

const initialState: SectorState = {

  sectorData: {
    
    hizmetsektoru: {
      title: 'Hizmet Sektörü Dijital Pazarlama Yönetimi | SetToBox',
      description: 'SetToBox hizmet kutularımız arasında Dijital Dönüşüm kutusu ile hizmet sektörü olan bir firmanın online varlıklarını tümüyle yönetimini ele almaktadır.',
      keywords :'Dijital pazarlama hizmet sektörü',
      
      allInBox : {
        headerTitle: 'Hizmet Sektörü Dijital Pazarlama',
        headerDescription: 'Hizmet sektörü için planladığımız online varlıklarla, orta ve uzun vadede bütçe optimizasyonunu sağlayarak kontrollü bir yönetim süreci hedefliyoruz. Bilgilendirme ve referans dokümanlarımızı inceleyerek izlediğimiz stratejiyi daha ayrıntılı görebilirsiniz.',
        animation: getAnimationUrl('INSTAGRAM_SERVICE'), 
      },
      metaManage: {
        title: 'Meta Yönetimi <span style="color:#1f77bb; font-size: 0.7em;">"Facebook & Instagram"</span>',
        generalDefinition: 'Sosyal medya ve reklam yönetimi dediğimizde aklımıza ilk gelen Meta şirketidir. Facebook ve Instagram geniş kullanıcı kitlesine sahiptir. Yapısı gereği gelişmiş hedeflemeler sunar ve kapsamlı analitik raporlama seçeneğine sahiptir. Çapraz platform desteği vardır. Yani Facebook, Instagram, Messenger ve hatta WhatsaAp gibi platformlar üzerinden entegre çalışarak hedef kitlelerinize ulaşmanızı sağlar.',
        description: 'Hizmet satın alma veya abonelik gibi kavramlardan önce potansiyel bir müşteri öncelikle online varlıklarınızı inceleyerek güvenilirliğinizi anlamaya çalışır. Yorumlar, referanslar ve bilgi alma gibi güven kazanma aşamalarından sonra satın alma aşaması gerçekleşir. Dolayısıyla potansiyel müşterilerinize ilk aşamada güven vermek için aşağıda ki adımları gerçekleştiriyoruz.',
        metricsTitle:'Kullanılan Facebook | Instagram Metrikleri',
        metaMetrics: ['Kurumsal Kimlik', 'Sosyal Medya Yönetimi', 'Meta Reklamları'],
        animation: getAnimationUrl('INSTAGRAM_SERVICE'), 
      },
      referanceMeta: {
        title:'Referans',
        companyName: 'Örnek İşletme - İnternet Firması',
        subHeader: 'Facebook - İnstagram ve Reklam Yönetimi',
        description: 'Facebook & instagram ve reklam yönetimini yaptığımız internet servis sağlayıcısı firmanın kurumsal kimlik ve içerik planlamasını düzenledikten sonra reklam yönetiminide yaptık. Bu proje kapsamında gerçekleştirdiğimiz sosyal medya yönetimi ve kurumsal tasarım çalışmalarıyla ilgili görsellerden bir izlenim edinebilirsiniz. Amacımız, sosyal medya hesaplarınıza giren potansiyel müşterilere hem yapılan iş hakkında bilgi sunmak hem de kurumsal tasarım ile markanıza duyulan güveni artırmaktır.',
        metricsInfo: [
          {
              title: 'Kurumsal Kimlik Oluşturmanın Amacı Nedir?',
              description: 'Renk ve tasarım yapısının özenle hazırlanması, hedef kitleniz üzerinde güçlü bir ilk izlenim bırakmanızı sağlar. Bu sayede, hedef kitleniz işinize verdiğiniz önemi daha net bir şekilde fark eder.',
          },
          {
              title: 'Sosyal Medya Yönetimi: İçerik ve Tasarım Planlamasının Faydaları',
              description: 'Sosyal medya içerik ve tasarım planlaması, ziyaretçilerinize sunduğunuz hizmetlerin nasıl yapıldığını, elde edilen sonuçları, fiyatlandırmaları ve kampanyaları net bir şekilde aktararak potansiyel müşterilerinizde güven oluşturur. İçerik çeşitliliği sağlamak için metinler, animasyonlar, görsel çalışmalar, referanslar ve gerçek kişilere ait fotoğraf ya da videolar kullanılabilir. Bu sayede, mesajlarınız daha etkili bir şekilde hedef kitlenize ulaşır.',
          },
          {
              title: 'Meta Reklamları',
              description: 'Reklam kreatiflerinizi hazırlarken önceliğimiz, marka kimliğinizi vurgulamak ve sosyal medya içeriklerinizle reklam tasarımlarınızı uyumlu hale getirmektir. Potansiyel müşterileriniz, reklamlarınızı gördükten sonra web sitenize veya sosyal medya platformlarınıza yönelir. Bu süreçte, tasarım ve renk uyumu sayesinde müşterilerinizin algısında güçlü ve profesyonel bir kurumsal imaj oluşur. Reklamda yer alan eylem çağrısına tıklayan kullanıcıların, yönlendirildikleri platformda belirlenen hedef doğrultusunda nasıl bir etkileşimde bulunacağı tamamen reklam verenin stratejik planlamasına bağlıdır. Biz, bu süreci titizlikle kurgulayarak hedeflerinize ulaşmanıza yardımcı oluyoruz.',
          }          
      ]

      },

      googleManage: {
        title: 'Google Yönetimi',
        generalDefinition: 'Google, dijital pazarlamada en etkili araçlardan biridir ve işletmelerin çevrimiçi varlıklarını güçlendirmek için birçok farklı hizmet sunar. Google Search Console, Google Ads ve Google İşletme Hesabı gibi araçlar, işletmelerin hem görünürlüğünü artırmalarına hem de hedef kitleleriyle daha etkili etkileşim kurmalarına olanak tanır.Sosyal medya ve reklam yönetimi dediğimizde aklımıza ilk gelen Meta şirketidir. Facebook ve Instagram geniş kullanıcı kitlesine sahiptir. Yapısı gereği gelişmiş hedeflemeler sunar ve kapsamlı analitik raporlama seçeneğine sahiptir. Çapraz platform desteği vardır. Yani Facebook, Instagram, Messenger ve hatta WhatsaAp gibi platformlar üzerinden entegre çalışarak hedef kitlelerinize ulaşmanızı sağlar.',
        description: 'Hizmet satın alma veya abonelik gibi kavramlardan önce potansiyel bir müşteri öncelikle online varlıklarınızı inceleyerek güvenilirliğinizi anlamaya çalışır. Yorumlar, referanslar ve bilgi alma gibi güven kazanma aşamalarından sonra satın alma aşaması gerçekleşir. Dolayısıyla potansiyel müşterilerinize ilk aşamada güven vermek için aşağıda ki adımları gerçekleştiriyoruz.',
        metricsTitle: 'Kullanılan Google Metrikleri',
        googleMetrics: ['Google Search Console (Arama Motoru Optimizasyonu)', 'Google Ads Reklamları', 'Google İşletme Hesabı (Google Haritalar Kaydı)'],
        subTitle: 'Kısacası, Google`ın sunduğu bu araçlar, bir araya geldiğinde dijital pazarlamada güçlü bir strateji oluşturur. Hem organik hem de ücretli kanallarla geniş kitlelere ulaşmak ve işletmenizi dijital dünyada daha görünür kılmak için Google hizmetleri oldukça önemlidir.',
        animation: getAnimationUrl('GOOGLE_MANAGE')
      },
      
      referanceGoogle: {
        title: 'Referans',
        companyName: 'Örnek İşletme',
        subHeader: 'Google Uygulamaları ve Reklam Yönetimi',
        description: 'Bölgesel olarak hizmet veren İSS firmasını organik olarak öne çıkardık. Anahtar kelime olarak "manavgat internet" araması yapan internet kullanıcılarının ilk sıralarda bu firmayı bulmalarını sağladık. Aynı zamanda açtığımız Google İşletme Hesabı ile haritalarda görünürlüğünü artırarak google işletme kaydını yaptık . Bu sayede işletmenin yorumları arttı, iletişim yöntemleri gibi konularda görünür oldu. Bölgesel olarak hizmet almak isteyen potansiyel müşteriler haritaları veya iletişim yöntemlerini kullanarak işletmeye ulaştı, internet başvurusu yaptı ya da bilgi aldılar.',
        subTitle: 'Google Ads Reklam Hizmeti',
        subTitleBody: 'Özellikle evde internet hizmeti gibi potansiyel tüketimi fazla olan herkesin hayatında olan bu tür hizmetlerin rekabeti oldukça fazladır. Bir çok firma organik veya reklam vererek hizmetini / ürünü pazarlamak durumundadır. Google Ads Arama Ağı ve Maksimum Performans reklamlarına odaklanarak firmanın potansiyel müşterilere ulaşmasını sağladık ve bölgesel marka değerini artırdık.',   
        animation: getAnimationUrl('GOOGLE_MANAGE'),
        images: {
          src: DisPlayAds.src,
          width: DisPlayAds.width,
          height: DisPlayAds.height,
          alt: "Google Ads Görsel Reklam Örneği",
        },
      },

      webManage: {
        title: 'Web Site Yönetimi',
        subTitle: 'Kaliteli içerik planlaması ve tasarım yapısısıyla, sosyal medya ve dijital pazarlama yöntemleriyle entegre bir şekilde çalışan web siteleri kodlamaktayız.',
        description: 'Hazırladığımız web sitesinin diğer digital varlıklarınızla entegre edilerek bir plan doğrultusunda yönetilmesini önemsiyoruz. Bütünsel bir yaklaşımla tasarlanan web sitelerinde kurumsal bir yapı ortaya çıkarak kaliteyide ön plan çıkarmış olmaktayız.',
        metricsTitle: 'Uyguladığımız Web Sitesi Metrikleri',
        webMetrics: ['Kullanıcı Deneyimi (UX) Tasarımı', 'Site Hızı ve Arama Motoru Optimizasyonu (SEO)', 'Yazılım Teknolojisi', 'Dijital Pazarlama Entegrasyonları ve Bütünsel Yaklaşım'],
        animation: getAnimationUrl('WEBSITE_MANAGE'),
      },

      referanceWeb: {
        title: 'Referans',
        companyName: 'Örnek İşletme - İnternet Firması',
        subHeader: 'Web Site Tasarımı ve Yönetimi',
        metricsInfo: [
          {
            title: 'Kullanıcı Deneyimi Tasarımı Neden Önemli?',
            description: 'Online varlıklarınızın bütünüyle ele alınarak ortak tasarım kullanabilmektedir. Web sitenizde içerik planlanması planan hedef doğrultusunda yapılır. İnternet kullanıcısının aradığı bilgiye ulaşması kolaylaştırılır, karmaşık bilgilerden uzak kalınarak sade bir içerik ile veririmlilik hedeflenir.',
          },
          {
            title: 'Site Hızı ve Arama Motoru Optimizasyonu Niçin Önemli?',
            description: 'Aslında, bu tür kavramların hepsi tek bir amacı hedefler; ürün satmak, hizmet sunmak ya da abonelik başlatmak. Bu dönüşümlerin gerçekleşmesi için bu kavramlara ihtiyaç vardır. Örneğin, siteniz hızlı değilse, kullanıcılar alternatif hizmet sağlayıcıları tercih edebilir. Arama motoru optimizasyonunuz yeterli ve güncel değilse, arama motorlarında görünürlüğünüz olumsuz etkilenir.',
          },
          {
            title: 'Yazılım Teknolojisi',
            description: 'Tek sayfa(single page) bir web site tasarladığımızda React Vite ve Tailwind teknolojilerini kullanıyoruz. Donanımlı bir web site tasarladığımızda Next.js Typescript ve Tailwind teknolojilerinden faydalanıyoruz. (şu anda kullanılan teknolojiler)',
          },
          {
            title: 'Dijital Pazarlama Entegrasyonları ve Bütünsel Yaklaşımın Önemi',
            description: 'Web siteleri tasarlarken Meta ve Google gibi dijital pazarlama araçlarını entegre ediyoruz. Online varlıkların birbiriyle uyumlu bir şekilde kullanılması, orta ve uzun vadede daha başarılı sonuçlar elde etmemizi sağlıyor. Süreç ilerledikçe, daha hassas hedeflemeler yapabiliyor ve bütçenizi en doğru noktalara yönlendirebiliyoruz. Bu da şu anlama geliyor: <strong>Dijital pazarlama araçlarını bir bütün olarak yönetmek, doğru hedef kitleye ulaşmayı kolaylaştırırken bütçenizden maksimum verim almanızı sağlar.</strong>',
          },
        ],
        images: {
          src: ReferansWebDurunet.src,
          width: ReferansWebDurunet.width,
          height: ReferansWebDurunet.height,
          alt: "Website Tasarım Örneği",
        },
        webname: 'Referans Websitesi',
        webUrl: 'https://durunet.com.tr/',
      },
      instagramService: {
        animation: getAnimationUrl('INSTAGRAM_SERVICE'),
      },
    },

    egitimsektoru: {

      title: 'Eğitim Sektörü Dijital Pazarlama Yönetimi | SetToBox',
      description: 'SetToBox hizmet kutularımız arasında Dijital Dönüşüm kutusu ile eğitim sektörü olan bir firmanın online varlıklarını tümüyle yönetimini ele almaktadır.',
      keywords :'Dijital pazarlama eğitim sektörü',
      
      allInBox : {
        headerTitle: 'Dijital Pazarlama Eğitim Sektörü',
        headerDescription: 'Eğitim sektörü için planladığımız online varlıklarla, orta ve uzun vadede bütçe optimizasyonunu sağlayarak kontrollü bir yönetim süreci hedefliyoruz. Sektörlerin tüm online varlıklarını yönetmek için Dijital Dönüşüm Kutusu hizmetini kullanıyoruz.',
        animation: getAnimationUrl('INSTAGRAM_SERVICE'), 
      },
      metaManage: {
        title: 'Meta Yönetimi',
        generalDefinition: 'Sosyal medya ve reklam yönetimi dediğimizde aklımıza ilk gelen Meta şirketidir. Facebook ve Instagram geniş kullanıcı kitlesine sahiptir. Yapısı gereği gelişmiş hedeflemeler sunar ve kapsamlı analitik raporlama seçeneğine sahiptir. Çapraz platform desteği vardır. Yani Facebook, Instagram, Messenger ve hatta WhatsaAp gibi platformlar üzerinden entegre çalışarak hedef kitlelerinize ulaşmanızı sağlar.',
        description: 'Hizmet satın alma veya abonelik gibi kavramlardan önce potansiyel bir müşteri öncelikle online varlıklarınızı inceleyerek güvenilirliğinizi anlamaya çalışır. Yorumlar, referanslar ve bilgi alma gibi güven kazanma aşamalarından sonra satın alma aşaması gerçekleşir. Dolayısıyla potansiyel müşterilerinize ilk aşamada güven vermek için aşağıda ki adımları gerçekleştiriyoruz.',
        metricsTitle:'Kullanılan Facebook | Instagram Metrikleri',
        metaMetrics: ['Kurumsal Kimlik', 'Sosyal Medya Yönetimi', 'Meta reklamları'],
        animation: getAnimationUrl('INSTAGRAM_SERVICE'), 
      },

     referanceMeta: {
        title:'Referans',
        companyName: 'Örnek İşletme - Eğitim ve Geliştirme Firması',
        subHeader: 'Facebook - İnstagram ve Reklam Yönetimi',
        description: 'Türkiye ve KKTC`de ikamet eden, belirli kriterleri karşılayan Türk vatandaşlarına yönelik, Almanya`da eğitimlerini tamamladıktan sonra anlaşmalı otellerde çalışma imkanı sunan bir start-up projesinde Instagram, Facebook ve reklam yönetimini üstlendik. Bu proje kapsamında gerçekleştirdiğimiz sosyal medya yönetimi ve kurumsal tasarım çalışmalarıyla ilgili görsellerden bir izlenim edinebilirsiniz. Amacımız, sosyal medya hesaplarınıza giren potansiyel müşterilere hem yapılan iş hakkında bilgi sunmak hem de kurumsal tasarım ile markanıza duyulan güveni artırmaktır.',
        metricsInfo: [
          {
              title: 'Kurumsal Kimlik Oluşturmanın Amacı Nedir?',
              description: 'Renk ve tasarım yapısının özenle hazırlanması, hedef kitleniz üzerinde güçlü bir ilk izlenim bırakmanızı sağlar. Bu sayede, hedef kitleniz işinize verdiğiniz önemi daha net bir şekilde fark eder.',
          },
          {
              title: 'Sosyal Medya Yönetimi: İçerik ve Tasarım Planlamasının Faydaları',
              description: 'Sosyal medya içerik ve tasarım planlaması, ziyaretçilerinize sunduğunuz hizmetlerin nasıl yapıldığını, elde edilen sonuçları, fiyatlandırmaları ve kampanyaları net bir şekilde aktararak potansiyel müşterilerinizde güven oluşturur. İçerik çeşitliliği sağlamak için metinler, animasyonlar, görsel çalışmalar, referanslar ve gerçek kişilere ait fotoğraf ya da videolar kullanılabilir. Bu sayede, mesajlarınız daha etkili bir şekilde hedef kitlenize ulaşır.',
          },
          {
              title: 'Meta Reklamları',
              description: 'Reklam kreatiflerinizi hazırlarken önceliğimiz, marka kimliğinizi vurgulamak ve sosyal medya içeriklerinizle reklam tasarımlarınızı uyumlu hale getirmektir. Potansiyel müşterileriniz, reklamlarınızı gördükten sonra web sitenize veya sosyal medya platformlarınıza yönelir. Bu süreçte, tasarım ve renk uyumu sayesinde müşterilerinizin algısında güçlü ve profesyonel bir kurumsal imaj oluşur. Reklamda yer alan eylem çağrısına tıklayan kullanıcıların, yönlendirildikleri platformda belirlenen hedef doğrultusunda nasıl bir etkileşimde bulunacağı tamamen reklam verenin stratejik planlamasına bağlıdır. Biz, bu süreci titizlikle kurgulayarak hedeflerinize ulaşmanıza yardımcı oluyoruz.',
          }
          
      ]
    
      },
      
      googleManage: null,
      referanceGoogle: null,

      webManage: {
        title: 'Web Site Yönetimi',
        subTitle:'Kaliteli içerik planlaması ve tasarım yapısısıyla, sosyal medya ve dijital pazarlama yöntemleriyle entegre bir şekilde çalışan web siteleri kodlamaktayız.',
        description: 'Hazırladığımız web sitesinin diğer digital varlıklarınızla entegre edilerek bir plan doğrultusunda yönetilmesini önemsiyoruz. Bütünsel bir yaklaşımla tasarlanan web sitelerinde kurumsal bir yapı ortaya çıkarak kaliteyide ön plan çıkarmış olmaktayız.',
        metricsTitle:'Uyguladığımız Web Sitesi Metrikleri',
        webMetrics: ['Kullanıcı Deneyimi (UX) Tasarımı', 'Site Hızı ve Arama Motoru Optimizasyonu (SEO)', 'Yazılım Teknolojisi', 'Dijital Pazarlama Entegrasyonları ve Bütünsel Yaklaşım'],
        animation: getAnimationUrl('WEBSITE_MANAGE'),
      },
      referanceWeb: {
        title:'Referans',
        companyName: 'Örnek İşletme - Eğitim ve Geliştirme Firması',
        subHeader: 'Web Site Yönetimi',
        metricsInfo: [
            {
                title: 'Kullanıcı Deneyimi Tasarımı Neden Önemli?',
                description: 'Online varlıklarınızın bütünüyle ele alınarak ortak tasarım kullanabilmektedir. Web sitenizde içerik planlanması planan hedef doğrultusunda yapılır. İnternet kullanıcısının aradığı bilgiye ulaşması kolaylaştırılır, karmaşık bilgilerden uzak kalınarak sade bir içerik ile veririmlilik hedeflenir.',
            },
            {
                title: 'Site Hızı ve Arama Motoru Optimizasyonu Niçin Önemli?',
                description: 'Aslında, bu tür kavramların hepsi tek bir amacı hedefler; ürün satmak, hizmet sunmak ya da abonelik başlatmak. Bu dönüşümlerin gerçekleşmesi için bu kavramlara ihtiyaç vardır. Örneğin, siteniz hızlı değilse, kullanıcılar alternatif hizmet sağlayıcıları tercih edebilir. Arama motoru optimizasyonunuz yeterli ve güncel değilse, arama motorlarında görünürlüğünüz olumsuz etkilenir.',
            },
            {
                title: 'Yazılım Teknolojisi',
                description: 'Tek sayfa(single page) bir web site tasarladığımızda React Vite ve Tailwind teknolojilerini kullanıyoruz. Donanımlı bir web site tasarladığımızda Next.js Typescript ve Tailwind teknolojilerinden faydalanıyoruz. (şu anda kullanılan teknolojiler)',
            },
            {
              title: 'Dijital Pazarlama Entegrasyonları ve Bütünsel Yaklaşımın Önemi',
              description: 'Web siteleri tasarlarken Meta ve Google gibi dijital pazarlama araçlarını entegre ediyoruz. Online varlıkların birbiriyle uyumlu bir şekilde kullanılması, orta ve uzun vadede daha başarılı sonuçlar elde etmemizi sağlıyor. Süreç ilerledikçe, daha hassas hedeflemeler yapabiliyor ve bütçenizi en doğru noktalara yönlendirebiliyoruz. Bu da şu anlama geliyor: <strong>Dijital pazarlama araçlarını bir bütün olarak yönetmek, doğru hedef kitleye ulaşmayı kolaylaştırırken bütçenizden maksimum verim almanızı sağlar.</strong>',
          }
          
            
        ],

        images: {
          src : "/images/durunetGorsel/WebIhc.png",
          width : 500,
          height: 500,
          alt: "Website Tasarım Örneği",
        },
        webname: 'Referans Websitesi',
        webUrl : 'https://ihc-referans.settobox.com/'

      },
      
      instagramService: {
        animation: getAnimationUrl('INSTAGRAM_SERVICE'),
      }
    },

    sagliksektoru: {

      title: 'Sağlık Sektörü Dijital Pazarlama Yönetimi | SetToBox',
      description: 'SetToBox hizmet kutularımız arasında Dijital Dönüşüm kutusu ile sağlık sektörü olan bir firmanın online varlıklarını tümüyle yönetimini ele almaktadır.',
      keywords: 'Dijital pazarlama sağlık sektörü',
      allInBox: {
        headerTitle: 'Sağlık Sektörü',
        headerDescription: 'Eğitim Sektörü için planladığımız online varlıklar ile orta ve uzun vadede bütçe optimizasyonu ve kontrollu yönetim.',
        animation: getAnimationUrl('INSTAGRAM_SERVICE'), 
      },
      metaManage: {
        title: 'Meta Yönetimi',
        generalDefinition: 'Sosyal medya ve reklam yönetimi dediğimizde aklımıza ilk gelen Meta şirketidir. Facebook ve Instagram geniş kullanıcı kitlesine sahiptir. Yapısı gereği gelişmiş hedeflemeler sunar ve kapsamlı analitik raporlama seçeneğine sahiptir. Çapraz platform desteği vardır. Yani Facebook, Instagram, Messenger ve hatta WhatsaAp gibi platformlar üzerinden entegre çalışarak hedef kitlelerinize ulaşmanızı sağlar.',
        description: 'Healthcare sector meta management description.',
        metricsTitle: '',
        metaMetrics: ['Medical Branding', 'Healthcare Social Media', 'Meta Ads for Health'],
        animation: getAnimationUrl('WEBSITE_MANAGE'),
      },
      referanceMeta: {
        title: 'Referans',
        companyName: '*** İNTERNET VE BİLİŞİM TEKNOLOJİLERİ',
        subHeader: 'Facebook - İnstagram ve Reklam Yönetimi',
        description: 'Facebook | Instagram ve reklam yönetimini yaptığımız internet servis sağlayıcısı **** İnternet kurumsal kimlik ve içerik planlamasını düzenledikten sonra reklam yönetiminide yaptık. Sosyal medyada yaptığımız paylaşımların bir kısmını inceleyebilirsiniz.',
        metricsInfo: [
          {
            title: 'Kurumsal Kimliğini Oluşturarak Neyi Hedefliyoruz?',
            description: 'Potansiyel müşterilerinizin güvenebileceği ve hızlı şekilde bilgi edinebileceği yapıyı oluşturmayı hedefliyoruz.',
          },
          {
            title: 'İçerik ve Tasarım Planlaması Neye Fayda Sağlar?',
            description: 'Bu doğrultuda online varlıklarının bütünsel bir yapıda olmasını sağlayarak kullanıcı deneyimini artırır.',
          },
          {
            title: 'Meta Reklamları',
            description: 'Kurumsal kimliğiniz ve online varlıklarınızının ortak içerik yapısı, reklamlar için önemli bir adım oluşturmaktadır. Bu doğrultuda bütünsel bir yaklaşımla meta reklamları planlanmaktadır.',
          },
        ],
      },

      googleManage: {
        title: 'Google Yönetimi',
        generalDefinition: 'Google, dijital pazarlamada en etkili araçlardan biridir ve işletmelerin çevrimiçi varlıklarını güçlendirmek için birçok farklı hizmet sunar. Google Search Console, Google Ads ve Google İşletme Hesabı gibi araçlar, işletmelerin hem görünürlüğünü artırmalarına hem de hedef kitleleriyle daha etkili etkileşim kurmalarına olanak tanır.Sosyal medya ve reklam yönetimi dediğimizde aklımıza ilk gelen Meta şirketidir. Facebook ve Instagram geniş kullanıcı kitlesine sahiptir. Yapısı gereği gelişmiş hedeflemeler sunar ve kapsamlı analitik raporlama seçeneğine sahiptir. Çapraz platform desteği vardır. Yani Facebook, Instagram, Messenger ve hatta WhatsaAp gibi platformlar üzerinden entegre çalışarak hedef kitlelerinize ulaşmanızı sağlar.',
        description: 'Hizmet satın alma veya abonelik gibi kavramlardan önce potansiyel bir müşteri öncelikle online varlıklarınızı inceleyerek güvenilirliğinizi anlamaya çalışır. Yorumlar, referanslar ve bilgi alma gibi güven kazanma aşamalarından sonra satın alma aşaması gerçekleşir. Dolayısıyla potansiyel müşterilerinize ilk aşamada güven vermek için aşağıda ki adımları gerçekleştiriyoruz.',
        metricsTitle:'Kullanılan Google Metrikleri',
        googleMetrics: ['Google Search Console (Arama Motoru Optimizasyonu)', 'Google Ads Reklamları', 'Google İşletme Hesabı (Google Haritalar Kaydı)'],
        subTitle: 'Kısacası, Google`ın sunduğu bu araçlar, bir araya geldiğinde dijital pazarlamada güçlü bir strateji oluşturur. Hem organik hem de ücretli kanallarla geniş kitlelere ulaşmak ve işletmenizi dijital dünyada daha görünür kılmak için Google hizmetleri oldukça önemlidir.',
        animation: getAnimationUrl('GOOGLE_MANAGE'),
      },
      referanceGoogle: {
        title: 'Referans',
        companyName: 'Örnek İşletme',
        subHeader: 'Google Uygulamaları ve Reklam Yönetimi',
        description: 'Bölgesel olarak hizmet veren İSS firmasını organik olarak öne çıkardık. Anahtar kelime olarak "manavgat internet" araması yapan internet kullanıcılarının ilk sıralarda bu firmayı bulmalarını sağladık. Aynı zamanda açtığımız Google İşletme Hesabı ile haritalarda görünürlüğünü artırarak google işletme kaydını yaptık . Bu sayede işletmenin yorumları arttı, iletişim yöntemleri gibi konularda görünür oldu. Bölgesel olarak hizmet almak isteyen potansiyel müşteriler haritaları veya iletişim yöntemlerini kullanarak işletmeye ulaştı, internet başvurusu yaptı ya da bilgi aldılar.',
        subTitle: 'Google Ads Reklam Hizmeti',
        subTitleBody: 'Özellikle evde internet hizmeti gibi potansiyel tüketimi fazla olan herkesin hayatında olan bu tür hizmetlerin rekabeti oldukça fazladır. Bir çok firma organik veya reklam vererek hizmetini / ürünü pazarlamak durumundadır. Google Ads Arama Ağı ve Maksimum Performans reklamlarına odaklanarak firmanın potansiyel müşterilere ulaşmasını sağladık ve bölgesel marka değerini artırdık.',   
        animation: getAnimationUrl('GOOGLE_MANAGE'),
        images: {
          src: DisPlayAds.src,
          width: DisPlayAds.width,
          height: DisPlayAds.height,
          alt: "Google Ads Görsel Reklam Örneği",
        },
      },
      webManage: {
        title: 'Web Site Yönetimi',
        subTitle: 'Kaliteli içerik planlaması ve tasarım yapısısıyla, sosyal medya ve dijital pazarlama yöntemleriyle entegre bir şekilde çalışan web siteleri kodlamaktayız.',
        description: 'Hazırladığımız web sitesinin diğer digital varlıklarınızla entegre edilerek bir plan doğrultusunda yönetilmesini önemsiyoruz. Bütünsel bir yaklaşımla tasarlanan web sitelerinde kurumsal bir yapı ortaya çıkarak kaliteyide ön plan çıkarmış olmaktayız.',
        metricsTitle: 'Uyguladığımız Web Sitesi Metrikleri',
        webMetrics: ['Kullanıcı Deneyimi (UX) Tasarımı', 'Site Hızı ve Arama Motoru Optimizasyonu (SEO)', 'Yazılım Teknolojisi', 'Dijital Pazarlama Entegrasyonları ve Bütünsel Yaklaşım'],
        animation: getAnimationUrl('WEBSITE_MANAGE'),
      },
      referanceWeb: {
        title: 'Referans',
        companyName: 'Örnek İşletme',
        subHeader: 'Web Site Yönetimi',
        metricsInfo: [
          {
            title: 'Kullanıcı Deneyimi Tasarımı Neden Önemli?',
            description: 'Online varlıklarınızın bütünüyle ele alınarak ortak tasarım kullanabilmektedir. Web sitenizde içerik planlanması planan hedef doğrultusunda yapılır. İnternet kullanıcısının aradığı bilgiye ulaşması kolaylaştırılır, karmaşık bilgilerden uzak kalınarak sade bir içerik ile veririmlilik hedeflenir.',
          },
          {
            title: 'Site Hızı ve Arama Motoru Optimizasyonu Niçin Önemli?',
            description: 'Aslında, bu tür kavramların hepsi tek bir amacı hedefler; ürün satmak, hizmet sunmak ya da abonelik başlatmak. Bu dönüşümlerin gerçekleşmesi için bu kavramlara ihtiyaç vardır. Örneğin, siteniz hızlı değilse, kullanıcılar alternatif hizmet sağlayıcıları tercih edebilir. Arama motoru optimizasyonunuz yeterli ve güncel değilse, arama motorlarında görünürlüğünüz olumsuz etkilenir.',
          },
          {
            title: 'Yazılım Teknolojisi',
            description: 'Tek sayfa(single page) bir web site tasarladığımızda React Vite ve Tailwind teknolojilerini kullanıyoruz. Donanımlı bir web site tasarladığımızda Next.js Typescript ve Tailwind teknolojilerinden faydalanıyoruz. (şu anda kullanılan teknolojiler)',
          },
          {
            title: 'Dijital Pazarlama Entegrasyonları ve Bütünsel Yaklaşımın Önemi',
            description: 'Web siteleri tasarlarken Meta ve Google gibi dijital pazarlama araçlarını entegre ediyoruz. Online varlıkların birbiriyle uyumlu bir şekilde kullanılması, orta ve uzun vadede daha başarılı sonuçlar elde etmemizi sağlıyor. Süreç ilerledikçe, daha hassas hedeflemeler yapabiliyor ve bütçenizi en doğru noktalara yönlendirebiliyoruz. Bu da şu anlama geliyor: <strong>Dijital pazarlama araçlarını bir bütün olarak yönetmek, doğru hedef kitleye ulaşmayı kolaylaştırırken bütçenizden maksimum verim almanızı sağlar.</strong>',
          },
        ],
        images: {
          src: "images/durunetGorsel/WebIhc.png",
          width: 500,
          height: 500,
          alt: "Website Tasarım Örneği",
        },
        webname: '',
        webUrl: '/#',
      },
      
      instagramService: {
        animation: getAnimationUrl('INSTAGRAM_SERVICE'),
      }
    },

  },
  
  selectedSector: "hizmetsektoru",
};

const sectorSlice = createSlice({
  name: "sector",
  initialState,
  reducers: {
    setSector: (state, action: PayloadAction<Sector>) => {
      state.selectedSector = action.payload;
    },
  },
});

export const { setSector } = sectorSlice.actions;
export default sectorSlice.reducer;
