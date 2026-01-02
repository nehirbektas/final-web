document.addEventListener("DOMContentLoaded", () => {
  const i18n = {
    tr: {
      nav_home: "Ana Sayfa",
      nav_cv: "CV",
      nav_page2: "2. Sayfa",

      hero_title: "Web Design Final Projesi",
      hero_desc:
        "Bu site Web Design dersi final projesi için hazırlanmıştır. HTML, CSS ve JavaScript kullanılmıştır.",
      hero_quick: "Hızlı Linkler",
      hero_quick_desc:
        "Timeline, ders programı, form, news/publications ve istatistik içerir.",
      hero_btn: "2. Sayfaya Git",

      cv_title: "CV",
      about_title: "Hakkımda",
      about_text:
        "Yönetim Bilişim Sistemleri (İngilizce) bölümünde öğrenim gören bir öğrenciyim. Web tasarım ve front-end geliştirme alanlarına ilgi duyuyorum. HTML, CSS ve JavaScript kullanarak modern ve responsive web siteleri geliştirmekteyim. Bu proje Web Design dersi final projesi kapsamında hazırlanmıştır.",
      info_title: "Bilgiler",
      name: "Ad Soyad",
      school: "Okul / Bölüm",
      city: "Şehir",
      email: "E-mail",

      skills_title: "Teknik Yetenekler",
      lvl_mix: "Başlangıç - İyi",
      s_html: "HTML",
      s_css: "CSS",
      s_js: "JavaScript",

      activities_title: "Faaliyetler",
      art_title: "Sanatsal",
      sport_title: "Sportif",
      art1: "Dijital tasarıma ilgi",
      art2: "Müzik dinleme",
      sport1: "Yoga",
      sport2: "Yürüyüş",

      footer: "© 2026 Nehir Bektaş – Web Design Final Projesi"
    },

    en: {
      nav_home: "Home",
      nav_cv: "CV",
      nav_page2: "Page 2",

      hero_title: "Web Design Final Project",
      hero_desc:
        "This website was prepared for the Web Design course final project. Built with HTML, CSS and JavaScript.",
      hero_quick: "Quick Links",
      hero_quick_desc:
        "Includes timeline, schedule table, form, news/publications and statistics.",
      hero_btn: "Go to Page 2",

      cv_title: "CV",
      about_title: "About Me",
      about_text:
        "I am a student in the Management Information Systems (English) program. I am interested in web design and front-end development. I build modern, responsive websites using HTML, CSS, and JavaScript. This project was created for the Web Design course final.",
      info_title: "Info",
      name: "Full Name",
      school: "School / Program",
      city: "City",
      email: "E-mail",

      skills_title: "Technical Skills",
      lvl_mix: "Beginner - Good",
      s_html: "HTML",
      s_css: "CSS",
      s_js: "JavaScript",

      activities_title: "Activities",
      art_title: "Artistic",
      sport_title: "Sports",
      art1: "Interest in digital design",
      art2: "Listening to music",
      sport1: "Yoga",
      sport2: "Walking",

      footer: "© 2026 Nehir Bektaş – Web Design Final Project"
    }
  };

  function setLang(lang) {
    const dict = i18n[lang] || i18n.tr;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll(".lang button").forEach((b) => {
      b.classList.toggle("active", b.dataset.lang === lang);
    });

    localStorage.setItem("lang", lang);
  }

  // Butonlara tıklama
  document.querySelectorAll(".lang button").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  // Sayfa açılınca seçili dil
  const saved = localStorage.getItem("lang") || "tr";
  setLang(saved);
});

