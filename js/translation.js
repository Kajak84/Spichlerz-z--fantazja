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
    subtitle: "Tradition, taste and atmosphere in the heart of Braniewo",
    aboutTitle: "About us",
    aboutText: "‘Granary with Imagination’ is a unique place combining history with modernity...",
    scan: "📲 Scan to view the menu",
    footer: "© 2025 Granary with Imagination – Portowa 6, Braniewo"
  },
  de: {
    title: "Speicher mit Fantasie",
    subtitle: "Tradition, Geschmack und Atmosphäre im Herzen von Braniewo",
    aboutTitle: "Über uns",
    aboutText: "Das Restaurant 'Speicher mit Fantasie' verbindet Geschichte mit Moderne...",
    scan: "📲 Scannen Sie, um das Menü anzusehen",
    footer: "© 2025 Speicher mit Fantasie – Portowa 6, Braniewo"
  },
  ua: {
    title: "Комора з фантазією",
    subtitle: "Традиції, смак і атмосфера в самому серці Бранева",
    aboutTitle: "Про нас",
    aboutText: "Ресторан «Комора з фантазією» — це унікальне місце, що поєднує історію з сучасністю...",
    scan: "📲 Скануйте, щоб переглянути меню",
    footer: "© 2025 Комора з фантазією – вул. Портова 6, Бранево"
  }
};

function setLanguage(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const lang = localStorage.getItem('lang') || 'pl';
  setLanguage(lang);
});
