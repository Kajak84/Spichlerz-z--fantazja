const translations = {
  pl: {
    title: "Spichlerz z Fantazją",
    subtitle: "Tradycja, smak i atmosfera w samym sercu Braniewa",
    aboutTitle: "O nas",
    aboutText: "Restauracja „Spichlerz z Fantazją” to wyjątkowe miejsce, łączące historię z nowoczesnością...",
    scan: "📲 Zeskanuj, aby zobaczyć menu",
    footer: "© 2025 Spichlerz z Fantazją – ul. Portowa 6, Braniewo",
    menuTitle: "Menu",
    menuDescription: "Zapraszamy do zapoznania się z naszym menu...",
    kontaktTitle: "Kontakt",
    kontaktSubtitle: "Zapraszamy do kontaktu z nami",
    phone: "Telefon: 123 456 789",
    visitUs: "Odwiedź nas",
    address: "ul. Portowa 6, 14-500 Braniewo",
    writeUs: "Napisz do nas"
    // Dodaj inne potrzebne klucze...
  },
  en: {
    title: "Granary with Imagination",
    subtitle: "Tradition, flavor and atmosphere in the heart of Braniewo",
    aboutTitle: "About us",
    aboutText: "“Granary with Imagination” is a unique place combining history with modernity...",
    scan: "📲 Scan to view the menu",
    footer: "© 2025 Granary with Imagination – Portowa 6, Braniewo",
    menuTitle: "Menu",
    menuDescription: "Welcome to explore our menu...",
    kontaktTitle: "Contact",
    kontaktSubtitle: "Feel free to reach out to us",
    phone: "Phone: +48 123 456 789",
    visitUs: "Visit us",
    address: "6 Portowa Street, 14-500 Braniewo",
    writeUs: "Write to us"
    // Dodaj inne potrzebne klucze...
  },
  de: {
    title: "Speicher mit Fantasie",
    subtitle: "Tradition, Geschmack und Atmosphäre im Herzen von Braniewo",
    aboutTitle: "Über uns",
    aboutText: "Das Restaurant „Speicher mit Fantasie“ ist ein besonderer Ort, der Geschichte mit Moderne verbindet...",
    scan: "📲 Scannen, um das Menü zu sehen",
    footer: "© 2025 Speicher mit Fantasie – Portowa 6, Braniewo",
    menuTitle: "Speisekarte",
    menuDescription: "Willkommen in unserer Speisekarte...",
    kontaktTitle: "Kontakt",
    kontaktSubtitle: "Kontaktieren Sie uns gerne",
    phone: "Telefon: +48 123 456 789",
    visitUs: "Besuchen Sie uns",
    address: "Portowa 6, 14-500 Braniewo",
    writeUs: "Schreiben Sie uns"
    // Dodaj inne potrzebne klucze...
  },
  ua: {
    title: "Комора з фантазією",
    subtitle: "Традиції, смак та атмосфера в самому серці Бранево",
    aboutTitle: "Про нас",
    aboutText: "Ресторан «Комора з фантазією» — це унікальне місце, де поєднується історія з сучасністю...",
    scan: "📲 Скануйте, щоб переглянути меню",
    footer: "© 2025 Комора з фантазією – вул. Портова 6, Бранево",
    menuTitle: "Меню",
    menuDescription: "Запрошуємо ознайомитися з нашим меню...",
    kontaktTitle: "Контакт",
    kontaktSubtitle: "Зв'яжіться з нами",
    phone: "Телефон: +48 123 456 789",
    visitUs: "Відвідайте нас",
    address: "вул. Портова 6, 14-500 Бранево",
    writeUs: "Напишіть нам"
    // Dodaj inne potrzebne klucze...
  }
};

function setLanguage(lang) {
  localStorage.setItem('lang', lang); // zapamiętaj wybór
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Ustaw język przy załadowaniu strony
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'pl';
  setLanguage(savedLang);
});

