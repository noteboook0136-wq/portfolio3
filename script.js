// ====== MENU (mobil uchun) ======
const menuToggle = document.querySelector(".menu-toggle");
const navMobile = document.querySelector(".nav-mobile");
const overlay = document.querySelector(".menu-overlay");
const body = document.body;

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navMobile.classList.toggle("active");
    overlay.classList.toggle("active");
    body.classList.toggle("menu-open");
});

overlay.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navMobile.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("menu-open");
});

document.querySelectorAll(".nav-mobile a").forEach((link) => {
    link.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navMobile.classList.remove("active");
        overlay.classList.remove("active");
        body.classList.remove("menu-open");
    });
});

// ====== HEADER SCROLL EFFECT ======
window.addEventListener("scroll", () => {
    document.querySelector("header").classList.toggle("scrolled", window.scrollY > 50);
});

// ====== TELEGRAM BOT ULANISHI ======
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const BOT_TOKEN = "8248091238:AAF9_vrI1S0KiZmLisatMYdg1FECL9KHNoQ";
    const CHAT_ID = "5165340806";

    function isValidEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        return re.test(email);
    }

    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const websiteType = document.getElementById("websiteType").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("⚠️ Iltimos, barcha maydonlarni to‘ldiring!");
            return;
        }

        if (!isValidEmail(email)) {
            alert("❌ Email formati noto‘g‘ri!");
            return;
        }

        const text = `
📩 <b>Yangi xabar:</b>

👤 <b>Ism:</b> ${name}

📧 <b>Email:</b> ${email}

💻 <b>Sayt turi:</b> ${websiteType}

📝 <b>Xabar:</b> ${message}

📱 <b>Telefon: +998 </b>${phone}
`;

        try {
            const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: text,
                    parse_mode: "HTML",
                }),
            });

            const data = await res.json();
            if (data.ok) {
                console.log("✅ Xabaringiz yuborildi! Tez orada javob olasiz.");
                contactForm.reset();
            } else {
                console.log("⚠️ Xabar yuborishda xatolik yuz berdi. Keyinroq urinib ko‘ring.");
            }
        } catch {
            alert("⚠️ Internet yoki bot bilan aloqa yo‘q.");
        }
    });
});
const translations = {
    uz: {
        about: "Men haqimda",
        services: "Xizmatlar",
        projects: "Loyihalar",
        contact: "Bog‘lanish",
        heroTitle: "Salom, men Asadbek",
        heroDesc: "Front-End Developer | UI/UX Designer ",
        heroBtn: "Ko‘proq bilish",
        aboutTitle: "Men haqimda",
        bioTitle: "Biografiya",
        bioText1:
            "   Mening Ismim Asadbek Men“Mars IT” akademiyasini bitirgan yosh dasturchiman. 15 yoshdaman va frontend yo‘nalishida faol rivojlanib borayapman. Har bir loyihamda dizayn, qulaylik va samaradorlikka e’tibor beraman. Texnologiyalar bilan ishlashni, yangi g‘oyalarni kod orqali hayotga tatbiq etishni yoqtiraman.",
        bioText2:
            "Har bir loyiha men uchun yangi imkoniyat — foydalanuvchilar uchun qulay, chiroyli va tezkor tajriba yaratish.",
        skillsTitle: "Ko‘nikmalar",
        servicesTitle: "Xizmatlar",
        srv1Title: "Front-End Development",
        srv1Desc:
            "React, Vue, Svelte bilan zamonaviy, tezkor va responsiv veb-ilovalar yarataman.",
        srv2Title: "UI/UX Design",
        srv2Desc:
            "Foydalanuvchi tajribasiga asoslangan dizaynlar, prototiplar va animatsiyalar.",
        srv3Title: "Mobil moslashuv",
        srv3Desc:
            "iOS va Android uchun to‘liq moslashuvchan interfeyslar, PWA yechimlari.",
        srv4Title: "SEO & Performance",
        srv4Desc:
            "Tez yuklanadigan, qidiruv tizimlarida yuqori o‘rin egallaydigan saytlar.",
        projectsTitle: "Loyihalar",
        contactTitle: "Bog‘lanish",
        contactDesc:
            "Yangi loyihalar, hamkorlik yoki shunchaki salomlashish uchun — xabar yuboring!",
        nameLabel: "Ismingiz",
        emailLabel: "Email",
        biznesLabel: "Sizga qanday turdagi veb-sayt kerak",
        msgLabel: "Xabar",
        sendBtn: "Yuborish",
        footerNav: "Navigatsiya",
        footerSocial: "Ijtimoiy tarmoqlar",
        footerContact: "Kontakt",
        rights: "Barcha huquqlar himoyalangan.",
        aboutTitle: "Biz haqimizda",
        aboutText:
            "Biz veb-dasturlash, dizayn va IT xizmatlari sohasida faoliyat yuritamiz. Maqsadimiz — zamonaviy va ishonchli yechimlar yaratish.",
        linksTitle: "Foydali havolalar",
        home: "Bosh sahifa",
        services: "Xizmatlar",
        portfolio: "Portfolio",
        contact: "Bog‘lanish",
        contactTitle: "Aloqa",
        address: "Toshkent, O‘zbekiston",
        newsTitle: "Yangiliklar",
        newsText: "So‘nggi loyihalar va yangiliklardan xabardor bo‘ling:",
        copyright:
            "© 2025 Asadbek Toirov. Barcha huquqlar himoyalangan.",
        backTop: "Tepaga qaytish",
    },
    ru: {
        about: "Обо мне",
        services: "Услуги",
        projects: "Проекты",
        contact: "Контакты",
        heroTitle: "Привет, я Асадбек",
        heroDesc: "Front-End разработчик | UI/UX дизайнер ",
        heroBtn: "Узнать больше",
        aboutTitle: "Обо мне",
        biznesLabel: "Какой тип веб-сайта вам нужен?",
        bioTitle: "Биография",
        bioText1:
            " Меня зовут Асадбек. Я молодой программист, выпускник Mars IT Academy. Мне 15 лет,и я активно развиваюсь в направлении frontend.В каждом своем проекте я уделяю внимание дизайну, удобству использования и эффективности. Мне нравится работать с технологиями, воплощать новые идеи через код.",
        bioText2:
            "Каждый проект — это новая возможность создать удобный, красивый и быстрый опыт для пользователей.",
        skillsTitle: "Навыки",
        servicesTitle: "Услуги",
        srv1Title: "Front-End разработка",
        srv1Desc:
            "Создаю современные, быстрые и адаптивные веб-приложения на React, Vue, Svelte.",
        srv2Title: "UI/UX дизайн",
        srv2Desc:
            "Дизайн, ориентированный на пользователя, прототипы и анимации.",
        srv3Title: "Мобильная адаптация",
        srv3Desc:
            "Полностью адаптивные интерфейсы для iOS и Android, PWA-решения.",
        srv4Title: "SEO & Производительность",
        srv4Desc:
            "Быстро загружаемые сайты, высокоранговые в поисковых системах.",
        projectsTitle: "Проекты",
        contactTitle: "Контакты",
        contactDesc:
            "Для новых проектов, сотрудничества или просто приветствия — отправьте сообщение!",
        nameLabel: "Ваше имя",
        emailLabel: "Email",
        msgLabel: "Сообщение",
        sendBtn: "Отправить",
        footerNav: "Навигация",
        footerSocial: "Социальные сети",
        footerContact: "Контакты",
        rights: "Все права защищены.",
        aboutTitle: "О нас",
        aboutText:
            "Мы работаем в области веб-разработки, дизайна и IT-услуг. Наша цель — создавать современные и надежные решения.",
        linksTitle: "Полезные ссылки",
        home: "Главная",
        services: "Услуги",
        portfolio: "Портфолио",
        contact: "Контакты",
        contactTitle: "Связаться",
        address: "Ташкент, Узбекистан",
        newsTitle: "Новости",
        newsText: "Будьте в курсе последних проектов и новостей:",
        copyright:
            "© 2025 Asadbek Toirov. Все права защищены.",
        backTop: "Наверх",
    },
    en: {
        about: "About",
        services: "Services",
        projects: "Projects",
        contact: "Contact",
        heroTitle: "Hi, I'm Asadbek",
        heroDesc: "Front-End Developer | UI/UX Designer ",
        heroBtn: "Learn More",
        aboutTitle: "About Me",
        bioTitle: "Biography",
        biznesLabel: "What type of website do you need?",
        bioText1:
            "My name is Asadbek. I am a young programmer who graduated from the Mars IT Academy. I am 15 years oldand I am actively developing in the frontend direction. In eachof my projects, I pay attention to design, usability and efficiency.I like working with technologies, implementing new ideas through code.",
        bioText2:
            "Every project is a new opportunity to create a convenient, beautiful, and fast experience for users.",
        skillsTitle: "Skills",
        servicesTitle: "Services",
        srv1Title: "Front-End Development",
        srv1Desc:
            "I build modern, fast, and responsive web apps with React, Vue, Svelte.",
        srv2Title: "UI/UX Design",
        srv2Desc: "User-centered designs, prototypes, and animations.",
        srv3Title: "Mobile Adaptation",
        srv3Desc:
            "Fully responsive interfaces for iOS & Android, PWA solutions.",
        srv4Title: "SEO & Performance",
        srv4Desc: "Fast-loading, high-ranking websites in search engines.",
        projectsTitle: "Projects",
        contactTitle: "Contact",
        contactDesc:
            "For new projects, collaboration, or just a hello — send a message!",
        nameLabel: "Your Name",
        emailLabel: "Email",
        msgLabel: "Message",
        sendBtn: "Send",
        footerNav: "Navigation",
        footerSocial: "Social Media",
        footerContact: "Contact",
        rights: "All rights reserved.",
        aboutTitle: "About Us",
        aboutText:
            "We work in web development, design, and IT services. Our goal is to create modern and reliable solutions.",
        linksTitle: "Useful Links",
        home: "Home",
        services: "Services",
        portfolio: "Portfolio",
        contact: "Contact",
        contactTitle: "Contact",
        address: "Tashkent, Uzbekistan",
        newsTitle: "News",
        newsText: "Stay informed about our latest projects and updates:",
        copyright:
            "© 2025 Asadbek Toirov. All rights reserved.",
        backTop: "Back to Top",
    },
};

document.querySelectorAll(".lang").forEach((el) => {
    el.addEventListener("click", () => {
        const lang = el.dataset.lang;
        document.documentElement.lang = lang;
        document.querySelectorAll("[data-tr]").forEach((elem) => {
            const key = elem.dataset.tr;
            if (translations[lang][key]) {
                elem.textContent = translations[lang][key];
            }
        });
        document.querySelectorAll(".lang").forEach((l) => l.classList.remove("active"));
        el.classList.add("active");
    });
});

// ====== SCROLL ANIMATIONS ======
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) e.target.classList.add("animated");
        });
    },
    { threshold: 0.1 }
);
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));

// ====== SKILL ANIMATIONS ======
const skillObs = new IntersectionObserver(
    (entries) => {
        entries.forEach((e) => {
            if (e.isIntersecting) {
                e.target.querySelectorAll(".skill-progress").forEach((bar) => {
                    const width = bar.style.width;
                    bar.style.width = "0%";
                    setTimeout(() => (bar.style.width = width), 100);
                });
                skillObs.unobserve(e.target);
            }
        });
    },
    { threshold: 0.5 }
);
document.querySelectorAll(".skills").forEach((s) => skillObs.observe(s));

// ====== PROJECT ANIMATION ======
const projectCards = document.querySelectorAll(".project-card");
const projectObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show");
                }, index * 150);
                projectObserver.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.2 }
);
projectCards.forEach((card) => projectObserver.observe(card));

// ====== YIL AVTOMATIK ======
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initStars();
}

function initStars() {
    stars = [];
    const starCount = Math.floor(window.innerWidth / 6); // ekran o‘lchamiga qarab
    for (let i = 0; i < starCount; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 4.4 + 0.1,
            d: Math.random() * 1000
        });
    }
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00d4ff";
    ctx.beginPath();
    for (const s of stars) {
        ctx.moveTo(s.x, s.y);
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 310);
    }
    ctx.fill();
    moveStars();
}

let angle = 0;
function moveStars() {
    angle += 0.01;
    for (const s of stars) {
        s.y += Math.cos(angle + s.d) + 2 + s.r / 50;
        s.x += Math.sin(angle) * 0.1;
        if (s.y > canvas.height) {
            s.y = 0;
            s.x = Math.random() * canvas.width;
        }
    }
}

function animate() {
    drawStars();
    requestAnimationFrame(animate);
}
// 🎨 SERVICES BACKGROUND ANIMATION
const sCanvas = document.getElementById('services-bg');
if (sCanvas) {
    const sCtx = sCanvas.getContext('2d');
    let particles = [];

    function resizeServicesCanvas() {
        sCanvas.width = sCanvas.offsetWidth;
        sCanvas.height = sCanvas.offsetHeight;
        createParticles();
    }

    window.addEventListener('resize', resizeServicesCanvas);
    resizeServicesCanvas();

    function createParticles() {
        particles = [];
        const count = Math.floor(sCanvas.width / 15);
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * sCanvas.width,
                y: Math.random() * sCanvas.height,
                r: Math.random() * 7 + 1,
                dx: (Math.random() - 0.5) * 1,
                dy: (Math.random() - 0.5) * 0.8,
                color: `hsla(${Math.random() * 360}, 80%, 60%, 0.8)`
            });
        }
    }
    const phoneInput = document.getElementById('phone');

    phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 9) value = value.slice(0, 9);

        let formatted = '';
        if (value.length > 0) formatted = '(' + value.substring(0, 2);
        if (value.length >= 2) formatted += ')-' + value.substring(2, 5);
        if (value.length >= 5) formatted += '-' + value.substring(5, 7);
        if (value.length >= 7) formatted += '-' + value.substring(7, 9);

        e.target.value = formatted;
    });

    phoneInput.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && phoneInput.selectionStart === phoneInput.value.length) {
            let clean = phoneInput.value.replace(/\D/g, '');
            clean = clean.slice(0, clean.length - 1);
            let formatted = '';
            if (clean.length > 0) formatted = '(' + clean.substring(0, 2);
            if (clean.length >= 2) formatted += ')-' + clean.substring(2, 5);
            if (clean.length >= 5) formatted += '-' + clean.substring(5, 7);
            if (clean.length >= 7) formatted += '-' + clean.substring(7, 9);
            phoneInput.value = formatted;
            e.preventDefault();
        }
    });

    function drawParticles() {
        sCtx.clearRect(0, 0, sCanvas.width, sCanvas.height);
        for (const p of particles) {
            sCtx.beginPath();
            sCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            sCtx.fillStyle = p.color;
            sCtx.fill();

            p.x += p.dx;
            p.y += p.dy;

            if (p.x < 0 || p.x > sCanvas.width) p.dx *= -3;
            if (p.y < 0 || p.y > sCanvas.height) p.dy *= -1;
        }
        requestAnimationFrame(drawParticles);
    }

    drawParticles();
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
animate();