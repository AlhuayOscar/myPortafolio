import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en", // Idioma por defecto
  resources: {
    en: {
      translation: {
        heyText: "Hey, I'm Oscar!",
        introText: "I'm a",
        positionText: "Full Stack Junior Developer",
        experienceText: "with",
        yearsText: "3 years",
        enjoyText: "I enjoy creating",
        createText: "custom websites",
        connectText: "and finding new ways to connect the world.",
        focusText: "My focus is on",
        reactNextText: "React (Next.js)",
        reactNativeText: "React Native",
        andText: "and",
      },
    },  },
});

export default i18n;
