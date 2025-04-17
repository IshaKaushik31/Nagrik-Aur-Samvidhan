// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "explore_constitution": "Explore the Constitution with joy",
      "download_constitution": "Download Constitution",
      "simplify_title": "Simplifying the Constitution",
      "simplify_desc": "Learn about the Preamble, Fundamental Rights, Directive Principles of State Policy, and Fundamental Duties in a simplified manner through engaging content.",
      "gamified_title": "Gamified Learning Experience",
      "gamified_desc": "Engage with the Constitution through various games like Spin a Wheel, Board Games, and more, making learning fun and interactive for all age groups.",
      "judiciary_title": "Judiciary Tour",
      "judiciary_desc": "Take a virtual tour of the Indian Judiciary system, understand its functioning, and learn about landmark cases that shaped the Constitution.",
      "write_title": "Write & Share",
      "write_desc": "Contribute to our blog by writing about different articles of the Constitution, share your insights, and read others' perspectives.",
      "read_more": "Read More",
      "learn_more": "Learn More",
      "explore_now": "Explore Now",
      "contribute": "Contribute"
    },
  },
  hi: {
    translation: {
      "explore_constitution": "संविधान का आनंद और उत्साह के साथ अन्वेषण करें",
      "download_constitution": "संविधान डाउनलोड करें",
      "simplify_title": "संविधान को सरल बनाना",
      "simplify_desc": "प्रस्तावना, मौलिक अधिकारों, राज्य नीति के निदेशक सिद्धांतों और मौलिक कर्तव्यों के बारे में रोचक सामग्री के माध्यम से सरल तरीके से जानें।",
      "gamified_title": "खेल के माध्यम से सीखने का अनुभव",
      "gamified_desc": "स्पिन ए व्हील, बोर्ड गेम्स और अन्य के माध्यम से संविधान के साथ जुड़ें, जो सभी उम्र के समूहों के लिए सीखने को मजेदार और इंटरैक्टिव बनाता है।",
      "judiciary_title": "न्यायपालिका यात्रा",
      "judiciary_desc": "भारतीय न्यायपालिका प्रणाली का आभासी दौरा करें, इसके कामकाज को समझें और संविधान को आकार देने वाले ऐतिहासिक मामलों के बारे में जानें।",
      "write_title": "लिखें और साझा करें",
      "write_desc": "संविधान के विभिन्न अनुच्छेदों के बारे में लिखकर हमारे ब्लॉग में योगदान करें, अपने विचार साझा करें और दूसरों के दृष्टिकोण पढ़ें।",
      "read_more": "अधिक पढ़ें",
      "learn_more": "और जानें",
      "explore_now": "अभी अन्वेषण करें",
      "contribute": "योगदान करें"
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
