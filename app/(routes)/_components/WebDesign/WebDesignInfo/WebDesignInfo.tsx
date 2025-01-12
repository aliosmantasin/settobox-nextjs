import WebDesignManageAnimasyonJson from "../../AnimasyonData/WebDesignManageAnimasyonJson";




const WebDesignInfo = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto flex flex-wrap justify-center">
        {/* Text Section */}
        <div className="flex col-span-12 text-center justify-center my-5">
        <div className=" w-2/2 sm:w-1/2">
          <h2  className="text-3xl font-extrabold primary tracking-wider my-5">
            İhtiyacınıza Göre Web Site Tasarım Hizmeti
          </h2>
          <p className="mt-4">
            İşletmenizin dijital dünyada öne çıkmasını sağlayacak web sitesi tasarımlarını ihtiyacınıza göre şekillendiriyoruz. 
            Hedef kitlenize en etkili şekilde ulaşmak için özelleştirilebilir web tasarım paketlerimizle profesyonel ve kullanıcı dostu çözümler sunuyoruz.
          </p>
        </div>
        </div>
        {/* Animation Section */}
        <div className="flex col-span-12 my-5 ">
        <div className='flex w-2/2 sm:w-2/2  '>
        <WebDesignManageAnimasyonJson/>
        </div>
        </div>   
      </div>
    </section>
  );
};

export default WebDesignInfo;
