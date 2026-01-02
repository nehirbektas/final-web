document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    tr: {
      nav_home: "Ana Sayfa",
      nav_schedule: "Program & Timeline",
      title_activities: "Faaliyetler",
      artistic: "Sanatsal",
      sport: "Sportif",

      artistic_1: "Dijital tasarıma ilgi",
      artistic_2: "Müzik dinleme",

      sport_1: "Yoga",
      sport_2: "Yürüyüş",

      about_title: "Hakkımda",
      about_text:
        "Yönetim Bilişim Sistemleri (İngilizce) bölümünde öğrenim gören bir öğrenciyim. Web tasarım ve front-end geliştirme alanlarına ilgi duyuyorum. Bu proje Web Design dersi final projesi kapsamında hazırlanmıştır.",

      skills_title: "Teknik Yetenekler",

      timeline_title: "Proje Zaman Çizelgesi",
      t1: "Hafta 1: Proje planlaması ve HTML iskeleti oluşturuldu",
      t2: "Hafta 2: CSS tasarım ve responsive yapı geliştirildi",
      t3: "Hafta 3: Ders programı tablosu ve timeline yapısı eklendi",
      t4: "Hafta 4: JavaScript, çok dilli yapı ve yayınlama işlemleri yapıldı"
    },

    en: {
      nav_home: "Home",
      nav_schedule: "Schedule & Timeline",
      title_activities: "Activities",
      artistic: "Artistic",
      sport: "Sportive",

      artistic_1: "Interest in digital design",
      artistic_2: "Listening to music",

      sport_1: "Yoga",
      sport_2: "Walking",

      about_title: "About Me",
      about_text:
        "I am a student in the Management Information Systems (English) department. I am interested in web design and front-end development. This project was prepared as part of the Web Design course final project.",

      skills_title: "Technical Skills",

      timeline_title: "Project Timeline",
      t1: "Week 1: Project planning and HTML structure",
      t2: "Week 2: CSS design and responsive layout",
      t3: "Week 3: Course schedule table and timeline added",
      t4: "Week 4: JavaScript, multilingual structure and deployment"
    }
  };

  function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll("[data-lang]").forEach(btn =>
      btn.classList.remove("active")
    );
    document
      .querySelector(`[data-lang="${lang}"]`)
      .classList.add("active");
  }

  document.querySelectorAll("[data-lang]").forEach(button => {
    button.addEventListener("click", () => {
      setLanguage(button.getAttribute("data-lang"));
    });
  });

  // default language
  setLanguage("tr");
});
