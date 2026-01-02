/* ========= CONFIG ========= */
const CONTACT_EMAIL = "nehirbektas159@gmail.com";

/* ========= i18n ========= */
const i18n = {
  tr: {
    nav_home: "Home",
    nav_cv: "CV",
    nav_page2: "2. Sayfa",

    hero_title: "Web Design Final Projesi",
    hero_desc:
      "Bu site Web Design dersi final projesi için hazırlanmıştır. HTML, CSS ve JavaScript kullanılmıştır.",
    hero_quick: "Hızlı Linkler",
    hero_quick_desc: "Timeline, ders programı, form, news/publications ve istatistik içerir.",
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
    skill_level: "Seviye",
    s_html: "HTML",
    s_css: "CSS",
    s_js: "JavaScript",
    lvl_mix: "Başlangıç - İyi",

    activities_title: "Faaliyetler",
    art_title: "Sanatsal",
    sport_title: "Sportif",
    art1: "Dijital tasarıma ilgi",
    art2: "Müzik dinleme",
    sport1: "Yoga",
    sport2: "Yürüyüş",

    stats_title: "Statistical Engine",
    stats_desc: "Basit sayaç: sayfa ziyaretleri ve form gönderimleri (localStorage).",
    stat_visits: "Ziyaret",
    stat_submits: "Form Gönderimi",

    footer: "© 2026 Nehir Bektaş – Web Design Final Projesi",

    /* page2 */
    p2_title: "2. Sayfa",
    timeline_title: "Timeline (Template)",
    tl1_title: "Hafta 1",
    tl1_desc: "Proje planlaması yapıldı ve HTML iskeleti oluşturuldu.",
    tl2_title: "Hafta 2",
    tl2_desc: "CSS ile tasarım, kart yapıları ve responsive düzen eklendi.",
    tl3_title: "Hafta 3",
    tl3_desc: "Timeline, ders programı tablosu ve içerik blokları oluşturuldu.",
    tl4_title: "Hafta 4",
    tl4_desc: "Form, spam koruma, çok dilli yapı, istatistik ve yayınlama yapıldı.",

    tl_feedback_title: "Timeline Feedback (Spam korumalı)",
    fb_desc: "Kısa bir geri bildirim bırakabilirsin (robot kontrolü var).",
    fb_name: "Ad",
    fb_msg: "Mesaj",
    fb_robot: "Ben robot değilim",
    fb_math: "Soru: 2 + 3 = ?",
    fb_send: "Gönder",
    fb_note: "Not: Bu demo mailto ile e-posta uygulamasını açar.",

    schedule_title: "Ders Programı",
    schedule_desc: "Sadece ders kodu, ders adı ve saat bilgisi.",
    col_time: "Saat",
    mon: "Pzt",
    tue: "Sal",
    wed: "Çar",
    thu: "Per",
    fri: "Cum",

    form_title: "Form Sayfası (Checkbox + Iframe + JS mail)",
    form_desc: "Veri toplama formu: checkbox + spam koruma + mailto.",
    f_fullname: "Ad Soyad",
    f_email: "E-mail",
    f_interests: "İlgi Alanları",
    f_i1: "Web Tasarım",
    f_i2: "UI/UX",
    f_i3: "Yoga / Yürüyüş",
    f_consent: "Bilgilerimin proje kapsamında kullanılmasını kabul ediyorum",
    f_math: "Soru: 7 - 2 = ?",
    f_send: "Submit",

    iframe_title: "Iframe (Örnek Harita)",
    news_title: "News / Publications",
    n1_t: "Final proje yayına alındı",
    n1_d: "GitHub Pages + domain bağlantısı tamamlandı.",
    n2_t: "TR/EN dil sistemi eklendi",
    n2_d: "Buton ile tüm metinler otomatik değişir.",
    n3_t: "Form + Spam koruma tamamlandı",
    n3_d: "Honeypot + checkbox + basit doğrulama ile."
  },

  en: {
    nav_home: "Home",
    nav_cv: "CV",
    nav_page2: "Page 2",

    hero_title: "Web Design Final Project",
    hero_desc:
      "This website was prepared for the Web Design course final project. Built with HTML, CSS and JavaScript.",
    hero_quick: "Quick Links",
    hero_quick_desc: "Includes timeline, schedule table, form, news/publications and statistics.",
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
    skill_level: "Level",
    s_html: "HTML",
    s_css: "CSS",
    s_js: "JavaScript",
    lvl_mix: "Beginner - Good",

    activities_title: "Activities",
    art_title: "Artistic",
    sport_title: "Sports",
    art1: "Interest in digital design",
    art2: "Listening to music",
    sport1: "Yoga",
    sport2: "Walking",

    stats_title: "Statistical Engine",
    stats_desc: "Simple counters: page visits and form submits (localStorage).",
    stat_visits: "Visits",
    stat_submits: "Form submits",

    footer: "© 2026 Nehir Bektaş – Web Design Final Project",

    /* page2 */
    p2_title: "Page 2",
    timeline_title: "Timeline (Template)",
    tl1_title: "Week 1",
    tl1_desc: "Planned the project and created the HTML skeleton.",
    tl2_title: "Week 2",
    tl2_desc: "Added CSS design, card layout, and responsive structure.",
    tl3_title: "Week 3",
    tl3_desc: "Built the timeline, schedule table, and content blocks.",
    tl4_title: "Week 4",
    tl4_desc: "Implemented form, spam protection, bilingual UI, stats and deployment.",

    tl_feedback_title: "Timeline Feedback (Anti-spam)",
    fb_desc: "Leave a short feedback (robot check enabled).",
    fb_name: "Name",
    fb_msg: "Message",
    fb_robot: "I am not a robot",
    fb_math: "Question: 2 + 3 = ?",
    fb_send: "Send",
    fb_note: "Note: This demo uses mailto to open your email app.",

    schedule_title: "Schedule",
    schedule_desc: "Only course code, course name and time.",
    col_time: "Time",
    mon: "Mon",
    tue: "Tue",
    wed: "Wed",
    thu: "Thu",
    fri: "Fri",

    form_title: "Form Page (Checkbox + Iframe + JS mail)",
    form_desc: "Data collection form: checkboxes + spam protection + mailto.",
    f_fullname: "Full Name",
    f_email: "E-mail",
    f_interests: "Interests",
    f_i1: "Web Design",
    f_i2: "UI/UX",
    f_i3: "Yoga / Walking",
    f_consent: "I consent to use my data for this project",
    f_math: "Question: 7 - 2 = ?",
    f_send: "Submit",

    iframe_title: "Iframe (Sample Map)",
    news_title: "News / Publications",
    n1_t: "Final project published",
    n1_d: "GitHub Pages + custom domain completed.",
    n2_t: "TR/EN language system added",
    n2_d: "Buttons switch all texts instantly.",
    n3_t: "Form + anti-spam done",
    n3_d: "Honeypot + checkbox + simple validation."
  }
};

function setLang(lang){
  const dict = i18n[lang] || i18n.tr;

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    if(dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    const key = el.getAttribute("data-i18n-placeholder");
    if(dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
  });

  document.querySelectorAll(".lang button").forEach(b=>{
    b.classList.toggle("active", b.dataset.lang === lang);
  });

  localStorage.setItem("lang", lang);
}

/* ========= stats (statistical engine) ========= */
function bumpCounter(key){
  const v = Number(localStorage.getItem(key) || "0") + 1;
  localStorage.setItem(key, String(v));
  return v;
}
function setText(id, value){
  const el = document.getElementById(id);
  if(el) el.textContent = String(value);
}

/* ========= spam checks ========= */
function isSpam(honeypotValue){
  return (honeypotValue || "").trim().length > 0;
}
function openMail(subject, body){
  const url = `mailto:${encodeURIComponent(CONTACT_EMAIL)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
}

/* ========= init ========= */
document.addEventListener("DOMContentLoaded", ()=>{
  const savedLang = localStorage.getItem("lang") || "tr";
  setLang(savedLang);

  // visits per page
  const pageKey = "visits:" + (location.pathname || "home");
  const visits = bumpCounter(pageKey);
  setText("visitCount", visits);

  const totalVisits = bumpCounter("visits:total") - 1; // don't double count total on same load logic
  localStorage.setItem("visits:total", String(totalVisits + 1));
  setText("totalVisits", totalVisits + 1);

  const submits = Number(localStorage.getItem("submits:total") || "0");
  setText("submitCount", submits);

  // language buttons
  document.querySelectorAll(".lang button").forEach(btn=>{
    btn.addEventListener("click", ()=> setLang(btn.dataset.lang));
  });

  // Contact form (page2)
  const contactForm = document.getElementById("contactForm");
  const contactMsg = document.getElementById("contactMsg");
  if(contactForm){
    contactForm.addEventListener("submit", (e)=>{
      e.preventDefault();

      const fd = new FormData(contactForm);
      const fullname = (fd.get("fullname")||"").toString().trim();
      const email = (fd.get("email")||"").toString().trim();
      const consent = fd.get("consent") === "on";
      const hp = (fd.get("website")||"").toString(); // honeypot
      const math = (fd.get("math")||"").toString().trim();

      const interests = []
      ;["i1","i2","i3"].forEach(k=>{
        if(fd.get(k)==="on") interests.push(k);
      });

      if(isSpam(hp)){
        contactMsg.textContent = "Spam algılandı.";
        return;
      }
      if(!fullname || !email){
        contactMsg.textContent = "Lütfen ad ve e-mail doldur.";
        return;
      }
      if(!consent){
        contactMsg.textContent = "Lütfen onay kutusunu işaretle.";
        return;
      }
      if(math !== "5"){
        contactMsg.textContent = "Doğrulama sorusu yanlış.";
        return;
      }

      // count submit
      const newSubmits = bumpCounter("submits:total");
      setText("submitCount", newSubmits);

      const lang = localStorage.getItem("lang") || "tr";
      const subject = (lang==="en") ? "Final Project Form Submission" : "Final Projesi Form Gönderimi";
      const body =
`Fullname: ${fullname}
Email: ${email}
Interests: ${interests.join(", ") || "-"}
Page: ${location.href}
Time: ${new Date().toString()}
`;

      openMail(subject, body);
      contactMsg.textContent = (lang==="en") ? "Opening your email app..." : "E-posta uygulaması açılıyor...";
      contactForm.reset();
    });
  }

  // Timeline feedback form (page2)
  const tlForm = document.getElementById("timelineForm");
  const tlMsg = document.getElementById("timelineMsg");
  if(tlForm){
    tlForm.addEventListener("submit", (e)=>{
      e.preventDefault();

      const fd = new FormData(tlForm);
      const name = (fd.get("name")||"").toString().trim();
      const msg = (fd.get("msg")||"").toString().trim();
      const robot = fd.get("robot") === "on";
      const hp = (fd.get("website")||"").toString();
      const math = (fd.get("math")||"").toString().trim();

      if(isSpam(hp)){
        tlMsg.textContent = "Spam algılandı.";
        return;
      }
      if(!name || !msg){
        tlMsg.textContent = "Lütfen ad ve mesaj yaz.";
        return;
      }
      if(!robot){
        tlMsg.textContent = "Lütfen robot olmadığını doğrula.";
        return;
      }
      if(math !== "5"){
        tlMsg.textContent = "Doğrulama sorusu yanlış.";
        return;
      }

      const newSubmits = bumpCounter("submits:total");
      setText("submitCount", newSubmits);

      const lang = localStorage.getItem("lang") || "tr";
      const subject = (lang==="en") ? "Timeline Feedback" : "Timeline Geri Bildirim";
      const body =
`Name: ${name}
Message: ${msg}
Page: ${location.href}
Time: ${new Date().toString()}
`;

      openMail(subject, body);
      tlMsg.textContent = (lang==="en") ? "Opening your email app..." : "E-posta uygulaması açılıyor...";
      tlForm.reset();
    });
  }
});
