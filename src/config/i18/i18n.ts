import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["en", "pl"],
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "cookie"],
      caches: ["cookie", "localStorage"],
    },
    resources: {
      pl: {
        translations: require("../../locales/pl.json"),
      },
      en: {
        translations: require("../../locales/en.json"),
      },
    },
    ns: ["translations"],
    react: {
      useSuspense: false,
    },
  });

export default i18n;
