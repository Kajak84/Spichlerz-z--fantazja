
const translations = {
  pl: {
    title: "Spichlerz z Fantazją",
    subtitle: "Tradycja, smak i atmosfera w samym sercu Braniewa",
    aboutTitle: "O nas",
    aboutText: "Restauracja „Spichlerz z Fantazją” to wyjątkowe miejsce, łączące historię z nowoczesnością...",
    scan: "📲 Zeskanuj, aby zobaczyć menu",
    footer: "© 2025 Spichlerz z Fantazją – ul. Portowa 6, Braniewo"
  },
  en: {
    title: "Granary with Imagination",
    subtitle: "Tradition, flavor and atmosphere in the heart of Braniewo",
    aboutTitle: "About us",
    aboutText: "“Granary with Imagination” is a unique place combining history with modernity...",
    scan: "📲 Scan to view the menu",
    footer: "© 2025 Granary with Imagination – Portowa 6, Braniewo"
  },
  de: {
    title: "Speicher mit Fantasie",
    subtitle: "Tradition, Geschmack und Atmosphäre im Herzen von Braniewo",
    aboutTitle: "Über uns",
    aboutText: "Das Restaurant „Speicher mit Fantasie“ ist ein besonderer Ort, der Geschichte mit Moderne verbindet...",
    scan: "📲 Scannen, um das Menü zu sehen",
    footer: "© 2025 Speicher mit Fantasie – Portowa 6, Braniewo"
  },
  ua: {
    title: "Комора з фантазією",
    subtitle: "Традиції, смак та атмосфера в самому серці Бранево",
    aboutTitle: "Про нас",
    aboutText: "Ресторан «Комора з фантазією» — це унікальне місце, де поєднується історія з сучасністю...",
    scan: "📲 Скануйте, щоб переглянути меню",
    footer: "© 2025 Комора з фантазією – вул. Портова 6, Бранево"
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
}

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(localStorage.getItem('lang') || 'pl');
});
