"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Toast, ToastAction } from "@/components/ui/toast";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { useCookieConsent } from "../libs/CookieConsent/CookieConsentContext";
import { sendMetaEvent } from "@/lib/meta";


// ✅ Zod Schema ile Form Validasyonu
const formSchema = z.object({
  firstName: z.string().min(3, "İsim en az 3 karakter olmalı"),
  lastName: z.string().min(3, "Soyisim en az 3 karakter olmalı"),
  phone: z.string().regex(/^\d{10,15}$/, "Geçerli bir telefon numarası girin"),
  email: z.string().email("Geçerli bir email girin"),
  service: z.string().min(1, "Hizmet seçimi zorunludur"),
  recaptchaToken: z.string().min(1, "Lütfen reCAPTCHA doğrulamasını yapın"),
});

const InfoForm = () => {
  const t = useTranslations("InfoForm");
  const { consent } = useCookieConsent(); // Rıza durumunu al
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage] = useState("");
  const [toastSeverity] = useState<"default" | "destructive">("default");
  const [selectedService, setSelectedService] = useState("");


  
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      service: "",
      recaptchaToken: "",
    },
  });

  
const sendEmail = async (data: z.infer<typeof formSchema>) => {
  try {
    const res = await axios.post("/api/send-email", data, {
      headers: { "Content-Type": "application/json" },
    });

    if (res.status === 200) {
      toast({
        title: "Başarılı",
        description: "✅ Email başarıyla gönderildi.",
        variant: "default",
      });
    } else {
      throw new Error();
    }

    // Meta CAPI'ye "Lead" olayı gönder
    if (consent.marketing) {
      console.log("Pazarlama izni var, Meta CAPI olayı gönderiliyor...");
      try {
        const userData = {
          email: data.email,
          phone: data.phone,
          firstName: data.firstName,
          lastName: data.lastName,
        };
        
        const { success, eventId } = await sendMetaEvent({
          eventName: "Lead",
          userData: userData,
          customData: {
            content_name: 'Bilgi Alma Formu',
            form_service_selection: data.service,
          }
        });

        if (success) {
          console.log("Meta CAPI 'Lead' olayı başarıyla gönderildi. Event ID:", eventId);
          // İsteğe bağlı: Bu eventId'yi GTM'e bir dataLayer push ile gönderebilirsiniz.
          // window.dataLayer.push({
          //   event: 'fb_lead_capi',
          //   fb_event_id: eventId 
          // });
        } else {
          console.error("Meta CAPI olayı gönderilemedi.");
        }
      } catch (capiError) {
        console.error("Meta CAPI gönderiminde kritik hata:", capiError);
      }
    } else {
      console.log("Pazarlama izni yok, Meta CAPI olayı gönderilmedi.");
    }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (erro) {
    toast({
      title: "Hata",
      description: "❌ Email gönderilirken bir hata oluştu.",
      variant: "destructive",
    });
  }
};

  return (

      <section className="flex items-center justify-center relative my-10">
        <div className="w-full max-w-md p-6 rounded shadow-md">
          <h2 className="text-2xl font-bold text-center mb-4">{t("title")}</h2>

          <form onSubmit={handleSubmit(sendEmail)}  id="formSubmission">
            <div className="mb-4">
              <Label htmlFor="firstName">{t("name")}</Label>
              <Input {...register("firstName")} />
              {errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}
            </div>

            <div className="mb-4">
              <Label htmlFor="lastName">{t("lastName")}</Label>
              <Input {...register("lastName")} />
              {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
            </div>

            <div className="mb-4">
              <Label htmlFor="service">{t("selectService")}</Label>

            <Select onValueChange={(value) => {
              setValue("service", value);
              setSelectedService(value); // Seçili hizmeti güncelle
            }}>
              <SelectTrigger>
                <span>{selectedService || t("select")}</span>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Meta Yönetimi">{t("meta")}</SelectItem>
                <SelectItem value="Google Yönetimi">{t("google")}</SelectItem>
                <SelectItem value="Web Tasarim">{t("web")}</SelectItem>
                <SelectItem value="Makro | Dijital Dönüşüm Kutusu Yönetim">{t("conversionBox")}</SelectItem>
                <SelectItem value="Mikro | Yerel Dijital Pazarlama Yönetim">{t("mikroMarketing1")}</SelectItem>
                <SelectItem value="Genel Bilgilendirme">{t("generalInfo")}</SelectItem>
              </SelectContent>
            </Select>
              
              {errors.service && <p className="text-red-500">{errors.service.message}</p>}
            </div>

            <div className="mb-4">
              <Label htmlFor="phone">{t("phone")}</Label>
              <Input {...register("phone")} type="tel" />
              {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
            </div>

            <div className="mb-4">
              <Label htmlFor="email">{t("mail")}</Label>
              <Input {...register("email")} type="email" />
              {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>

            <div className="mb-4">
              <ReCAPTCHA
                sitekey={process.env.RECAPTCHA_SITE_KEY || ""}
                onChange={(token) => setValue("recaptchaToken", token || "")}
              />
              {errors.recaptchaToken && <p className="text-red-500">{errors.recaptchaToken.message}</p>}
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Gönderiliyor..." : t("send")}
            </Button>
          </form>
        </div>

        {toastOpen && (
          <Toast open={toastOpen} onOpenChange={setToastOpen} variant={toastSeverity}>
            {toastMessage}
            <ToastAction altText="Kapat" onClick={() => setToastOpen(false)}>
              Kapat
            </ToastAction>
          </Toast>
        )}

      
      </section>
   
  );
};

export default InfoForm;