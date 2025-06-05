"use client";

import { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations, useLocale } from "next-intl";

// Validasyon şeması
const formSchema = z.object({
  answer: z.string()
    .min(1, "BotProtection.validation.answerRequired")
    .refine((value) => value.toLowerCase() === "paris", {
      message: "BotProtection.validation.answerIncorrect"
    }),
  recaptchaToken: z.string({
    required_error: "BotProtection.validation.recaptchaRequired"
  })
});

type FormData = z.infer<typeof formSchema>;

export function BotProtection() {
  const [showModal, setShowModal] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const locale = useLocale();
  const t = useTranslations("BotProtection");

  // Debug: Log the current locale
  console.log("Current locale:", locale);

  // Scroll'u engellemek için useEffect
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  const { 
    register, 
    handleSubmit, 
    setValue, 
    formState: { errors, isValid }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      answer: "",
      recaptchaToken: "",
    },
    mode: "onChange" // Değişiklik olduğunda validasyon yapması için
  });

  // Reset verification state when locale changes
  useEffect(() => {
    // Force reset verification state when locale changes
    setIsVerified(false);
    setShowModal(true);
    
    // Clear any existing verification for this locale
    localStorage.removeItem(`isUserVerified_${locale}`);
    
    console.log("Locale changed, resetting verification state for:", locale);
  }, [locale]);

  const onSubmit = () => {
    // Form başarıyla doğrulandığında çalışacak
    setIsVerified(true);
    setShowModal(false);
    // Locale'e özgü bir localStorage anahtarı kullan
    localStorage.setItem(`isUserVerified_${locale}`, "true");
    console.log("User verified for locale:", locale);
  };

  const onRecaptchaChange = (token: string | null) => {
    setValue("recaptchaToken", token || "", { shouldValidate: true });
  };

  if (!showModal || isVerified) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 overflow-y-auto overflow-x-hidden">
      <div className="relative p-4 w-full max-w-md max-h-full">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {t("welcome")}
            </h3>
          </div>
          
          {/* Modal body */}
          <div className="p-4 md:p-5 space-y-4">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {t("description")}
            </p>
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  {t("question")}
                </label>
                <input
                  type="text"
                  {...register("answer")}
                  className="w-full p-2 border rounded-md dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  placeholder={t("answerPlaceholder")}
                />
                {errors.answer && (
                  <p className="mt-1 text-sm text-red-500">
                    {t(errors.answer.message as string)}
                  </p>
                )}
              </div>
              
              <div className="mb-6">
                <ReCAPTCHA
                  sitekey={process.env.RECAPTCHA_SITE_KEY || ""}
                  onChange={onRecaptchaChange}
                />
                {errors.recaptchaToken && (
                  <p className="mt-1 text-sm text-red-500">
                    {t(errors.recaptchaToken.message as string)}
                  </p>
                )}
              </div>
              
              {/* Modal footer */}
              <div className="flex items-center pt-4 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  type="submit"
                  disabled={!isValid}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {t("verifyButton")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 