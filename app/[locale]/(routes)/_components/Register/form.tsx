"use client"

import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Toast, ToastAction } from "@/components/ui/toast";
import { useTranslations } from "next-intl";

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  service?: string;
  recaptchaToken?: string;
}

const InfoForm = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    service: "",
    recaptchaToken: "",
  });
  const [loading, setLoading] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastSeverity, setToastSeverity] = useState<"default" | "destructive">("default");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleReCAPTCHAChange = (token: string | null) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      recaptchaToken: token || "",
    }));
  };

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const apiUrl = "/api/send-email";

    try {
      const res = await axios.post(apiUrl, formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.status === 200) {
        setToastMessage("Email başarıyla gönderildi");
        setToastSeverity("default");
        setToastOpen(true);

        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          service: "",
          recaptchaToken: "",
        });
      } else {
        setToastMessage("Email gönderilirken hata oluştu");
        setToastSeverity("destructive");
        setToastOpen(true);
      }
    } catch (error) {
      setToastMessage("Email gönderilirken hata oluştu");
      setToastSeverity("destructive");
      setToastOpen(true);
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleToastClose = () => {
    setToastOpen(false);
  };

  const t = useTranslations("InfoForm")

  return (
    <section className="flex items-center justify-center relative mt-10">
      <div className="w-full max-w-md p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">{t("title")}</h2>

        <form onSubmit={sendEmail}>
          <div className="mb-4">
            <Label htmlFor="firstName">{t("name")}</Label>
            <Input
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="lastName">{t("lastName")}</Label>
            <Input
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="service">{t("selectService")}</Label>
            <Select
              name="service"
              value={formData.service || ""}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, service: value }))
              }
            >
              <SelectTrigger>
                <span>{formData.service || t("select")}</span>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="meta">{t("meta")}</SelectItem>
                <SelectItem value="google">{t("google")}</SelectItem>
                <SelectItem value="web">{t("web")}</SelectItem>
                <SelectItem value="donusumKutusu">{t("conversionBox")}</SelectItem>
                <SelectItem value="general">{t("generalInfo")}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mb-4">
            <Label htmlFor="phone">{t("phone")}</Label>
            <Input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <Label htmlFor="email">{t("mail")}</Label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4">
            <ReCAPTCHA
              sitekey={process.env.RECAPTCHA_SITE_KEY || ""}
              onChange={handleReCAPTCHAChange}
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Gönderiliyor..." : t("send")}
          </Button>
        </form>
      </div>

      <Toast open={toastOpen} onOpenChange={setToastOpen} variant={toastSeverity}>
        {toastMessage}
        <ToastAction altText="Kapat" onClick={handleToastClose}>
          Kapat
        </ToastAction>
      </Toast>
    </section>
  );
};

export default InfoForm;
