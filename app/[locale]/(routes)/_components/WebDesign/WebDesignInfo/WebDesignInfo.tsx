import { useTranslations } from "next-intl";
import WebDesignManageAnimasyonJson from "../../AnimasyonData/WebDesignManageAnimasyonJson";




const WebDesignInfo = () => {

  const t = useTranslations("WebsitePage")

  return (
    <section className="py-10 relative">
      <div className="container mx-auto flex flex-wrap justify-center">
        {/* Text Section */}
        <div className="flex col-span-12 text-center justify-center my-5">
        <div className=" w-2/2 sm:w-1/2">
          <h2  className="text-3xl font-extrabold primary tracking-wider my-5">
            {t("webDesignInfo.title")}
          </h2>
          <p className="mt-4">
          {t("webDesignInfo.description")}
          </p>
        </div>
        </div>
        {/* Animation Section */}
        <div className="flex col-span-12 my-5">
        <div className='flex w-2/2 sm:w-2/2'>
          <WebDesignManageAnimasyonJson 
            useBlob={true}
          />
        </div>
        </div>   
      </div>
    </section>
  );
};

export default WebDesignInfo;
