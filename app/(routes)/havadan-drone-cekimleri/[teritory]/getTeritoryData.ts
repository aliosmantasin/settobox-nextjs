// app/(routes)/havadan-drone-cekimleri/[teritory]/getTeritoryData.ts
interface TeritoryData {
    title: string;
    description: string;
    keywords: string;
    headerDrone: {
      headerTitle: string;
      headerDescription: string;
      alt: string;
    };
    droneVideoComponent: {
      title: string;
      subtitle: string[];
      description: string;
    };
    mapVideoComponent: {
      title: string;
      subtitle: string[];
      description: string;
    };
    SSSComponent: {
      header: string;
    };
  }

  const data: Record<string, TeritoryData> = {
    manavgat: {

        title:'Manavgat Havadan Drone Çekimleri ve Kurumsal Video | SetToBox',
        description:'Manavgat`ta işletmeniz için drone ve prodüksiyon çekimleri ve özelleştirilmiş kurumsal marka bilinirliğini artıran tanıtım videoları için bizimle iletişime geçin',
        keywords: 'manavgat havadan drone çekim fiyatları, manavgat kiralık drone operator, manavgat prodüksiyon, manavgat arsa drone çekimleri, manavgat inşaat drone operator',

        headerDrone: {
            headerTitle: 'Manavgat Drone Çekimleri İçin Bizimle İletişime Geçin',
            headerDescription: 'Manavgat ilçesi ve çevresindeki işletmeler için profesyonel drone çekimleri, etkileyici video prodüksiyonları ve kreatif animasyon düzenlemeleriyle marka bilinirliğinizi artırmanıza yardımcı oluyoruz. Kaliteli görsellerle işinizi bir adım öne taşıyın!',
            alt:'Manavgat Drone Çekimleri - SetToBox Dijital Pazarlama',
        },

        droneVideoComponent: {
                title: 'İşinizi Gösterin',
                subtitle: [
                    'İş sürecinden video kesitleri', 'İş yerinizden + personelinizden video kesitleri', 'Konumsal Bilgilendirmeler',
                ],
                description: `Referans olarak gösterdiğimiz videoda işletmenin marka bilinirliğini artırmak için kısa bir video oluşturduk. Bu süreçte markanın <strong> havadan drone çekimi </strong> dahil iş sürecini ele aldık ve bu işin hangi sempte yapıldığını betimlemiş olduk. Bu tarz videolar ve görseller <strong> manavgat bölgesinde </strong> organik veya ücretli reklamlarla ile markanızı hedef kitlenize gösterebiliriz.`,
        },

        mapVideoComponent: {
            title: 'Adresiniz Tam Olarak Nerede?',
            subtitle: [
                'Video Animasyon', 'Kanca Metin', 'Kanca Görsel',
            ],
            description: `Bu örnek videoda bölgesel olarak hizmet veren internet servis sağlayıcısı firmanın, hizmet verdiği bölgede konumunu tam olarak gösteren bir animasyon tasarlandı. Bölgede yaşayanlar tarafından bilinen Manavgat Köprüsü baz alınarak ve yine ilçenin ismini kullanarak yani "Manavgat" kanca başlığı kullanılmıştır. Bu videonun benzerinde tasarladığımız videoları belirli zaman dilimlerinde marka bilinirliğini artırmak maksatlı <strong> manavgat ilçesinde </strong> reklam gösterimi yapabiliriz.`,

         },

         SSSComponent:{
            header: '2025 Drone Çekim Fiyatları Manavgat'
         }

    },

    alanya: {

        title:'Alanya Havadan Drone Çekimleri ve Kurumsal Video | SetToBox',
        description:'Alanya`da işletmeniz için drone ve prodüksiyon çekimleri ve özelleştirilmiş kurumsal marka bilinirliğini artıran tanıtım videoları için bizimle iletişime geçin',
        keywords: 'alanya havadan drone çekim fiyatları, alanya kiralık drone operator, alanya prodüksiyon, alanya arsa drone çekimleri, alanya inşaat drone operator',

        headerDrone: {
            headerTitle: 'Alanya Drone Çekimleri İçin Bizimle İletişime Geçin',
            headerDescription: 'Alanya ilçesi ve çevresindeki işletmeler için profesyonel drone çekimleri, etkileyici video prodüksiyonları ve kreatif animasyon düzenlemeleriyle marka bilinirliğinizi artırmanıza yardımcı oluyoruz. Kaliteli görsellerle işinizi bir adım öne taşıyın!',
            alt:'Alanya Drone Çekimleri - SetToBox Dijital Pazarlama',
        },
        droneVideoComponent: {
            title: 'İşinizi Gösterin',
            subtitle: [
                'İş sürecinden video kesitleri', 'İş yerinizden + personelinizden video kesitleri', 'Konumsal Bilgilendirmeler',
            ],
            description: `Referans olarak gösterdiğimiz videoda işletmenin marka bilinirliğini artırmak için kısa bir video oluşturduk. Bu süreçte markanın <strong> havadan drone çekimi </strong> dahil iş sürecini ele aldık ve bu işin hangi sempte yapıldığını betimlemiş olduk. Bu tarz videolar ve görseller <strong> alanya bölgesinde </strong> organik veya ücretli reklamlarla ile markanızı hedef kitlenize gösterebiliriz.`,
        },
        mapVideoComponent: {
            title: 'Adresiniz Tam Olarak Nerede?',
            subtitle: [
                'Video Animasyon', 'Kanca Metin', 'Kanca Görsel',
            ],
            description: `Bu örnek videoda bölgesel olarak hizmet veren internet servis sağlayıcısı firmanın, hizmet verdiği bölgede konumunu tam olarak gösteren bir animasyon tasarlandı. Bölgede yaşayanlar tarafından bilinen Manavgat Köprüsü baz alınarak ve yine ilçenin ismini kullanarak yani "Manavgat" kanca başlığı kullanılmıştır. Bu videonun benzerinde tasarladığımız videoları belirli zaman dilimlerinde marka bilinirliğini artırmak maksatlı <strong> alanya ilçesinde </strong> reklam gösterimi yapabiliriz.`,

         },

         SSSComponent:{
            header: '2025 Drone Çekim Fiyatları Alanya'
         }
    },

    serik: {

        title:'Serik Havadan Drone Çekimleri ve Kurumsal Video | SetToBox',
        description:'Serik`te işletmeniz için drone ve prodüksiyon çekimleri ve özelleştirilmiş kurumsal marka bilinirliğini artıran tanıtım videoları için bizimle iletişime geçin',
        keywords: 'serik havadan drone çekim fiyatları, serik kiralık drone operator, serik prodüksiyon, serik arsa drone çekimleri, serik inşaat drone operator',


        headerDrone: {
            headerTitle: 'Serik Drone Çekimleri İçin Bizimle İletişime Geçin',
            headerDescription: 'Serik ilçesi ve çevresindeki işletmeler için profesyonel drone çekimleri, etkileyici video prodüksiyonları ve kreatif animasyon düzenlemeleriyle marka bilinirliğinizi artırmanıza yardımcı oluyoruz. Kaliteli görsellerle işinizi bir adım öne taşıyın!',
            alt:'Serik Drone Çekimleri - SetToBox Dijital Pazarlama',
        },
        droneVideoComponent: {
            title: 'İşinizi Gösterin',
            subtitle: [
                'İş sürecinden video kesitleri', 'İş yerinizden + personelinizden video kesitleri', 'Konumsal Bilgilendirmeler',
            ],
            description: `Referans olarak gösterdiğimiz videoda işletmenin marka bilinirliğini artırmak için kısa bir video oluşturduk. Bu süreçte markanın <strong> havadan drone çekimi </strong> dahil iş sürecini ele aldık ve bu işin hangi sempte yapıldığını betimlemiş olduk. Bu tarz videolar ve görseller <strong> serik bölgesinde </strong> organik veya ücretli reklamlarla ile markanızı hedef kitlenize gösterebiliriz.`,
        },

        mapVideoComponent: {
            title: 'Adresiniz Tam Olarak Nerede?',
            subtitle: [
                'Video Animasyon', 'Kanca Metin', 'Kanca Görsel',
            ],
            description: `Bu örnek videoda bölgesel olarak hizmet veren internet servis sağlayıcısı firmanın, hizmet verdiği bölgede konumunu tam olarak gösteren bir animasyon tasarlandı. Bölgede yaşayanlar tarafından bilinen Manavgat Köprüsü baz alınarak ve yine ilçenin ismini kullanarak yani "Manavgat" kanca başlığı kullanılmıştır. Bu videonun benzerinde tasarladığımız videoları belirli zaman dilimlerinde marka bilinirliğini artırmak maksatlı <strong> serik ilçesinde </strong> reklam gösterimi yapabiliriz.`,

         },

         SSSComponent:{
            header: '2025 Drone Çekim Fiyatları Serik'
         }
    },
};

export const getTeritoryData = (teritory: string): TeritoryData | null => {
  return data[teritory.toLowerCase()] || null;
};