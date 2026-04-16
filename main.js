/* =============================================
  PORTFOLIO — main.js
   ============================================= */

// ==============================
// TRANSLATIONS
// ==============================
const translations = {
  fr: {
    "page.title":        "Portfolio — Développeur Front-End",
    "nav.about":         "À propos",
    "nav.skills":        "Compétences",
    "nav.projects":      "Projets",
    "nav.contact":       "Contact",

    "hero.available":    "Disponible pour missions freelance",
    "hero.title1":       "Développeur",
    "hero.title3":       "& UI Craft",
    "hero.desc":         "Je m'appelle Masy Cedric et transforme des idées en interfaces web <strong>rapides, modernes et mémorables</strong> — HTML, CSS, JS, SCSS & React.",
    "hero.cta1":         "Voir mes projets",
    "hero.cta2":         "Travaillons ensemble →",
    "hero.code.status":  '"dispo"',

    "about.tag":         "— Qui suis-je",
    "about.title":       "Je code des <em>expériences</em>,<br>pas juste des pages.",
    "about.p1":          "Fraîchement formé au développement front-end, je suis passionné par la création d'interfaces qui allient performance technique et beauté visuelle.",
    "about.p2":          "Mon objectif : accompagner des entrepreneurs, startups et créatifs dans la construction de leur présence web, en livrant du code propre et des designs qui convertissent.",
    "about.cta":         "Démarrons un projet",
    "about.stat1":       "Projets réalisés",
    "about.stat2":       "Mois d'expérience",
    "about.stat3":       "% Investissement",
    "about.badge":       "Freelance Open",

    "skills.tag":        "— Mon Stack",
    "skills.title":      "Compétences &<br><em>Technologies</em>",
    "skills.html":       "Sémantique, accessibilité, structure solide.",
    "skills.css":        "Flexbox, Grid, animations, responsive design.",
    "skills.js":         "ES6+, DOM, fetch, logique applicative.",
    "skills.scss":       "Variables, mixins, nesting, architecture BEM.",
    "skills.react":      "Components, Hooks, state management, props.",
    "skills.git":        "Versioning, branches, GitHub, collaboration.",
    "skills.more":       "+ Outils & méthodes",

    "projects.tag":      "— Réalisations",
    "projects.title":    "Mes Projets",
    "projects.demo":     "Démo →",
    "projects.p1.title": "Landing Page SaaS",
    "projects.p1.desc":  "Page d'accueil moderne pour une app fictive. Ideal pour une presentation simple et moderne d'un produit ou d'une service.",
    "projects.p2.title": "Landing page pour une application",
    "projects.p2.desc":  "Presentation d'un logiciel de gestion de fichier et de sauvegarde en ligne sur le cloud. Avec un style de fond sombre.",
    "projects.p3.title": "Space tourism multi-page website",
    "projects.p3.desc":  "Un site web multi-page qui presente un projet fictive de voyage spatial. Les elements sont interactives et responsives.",

    "services.tag":      "— Ce que je propose",
    "services.title":    "Services <em>Freelance</em>",
    "services.s1.title": "Création de sites web",
    "services.s1.desc":  "Vitrine, portfolio, landing page — du design à la mise en ligne.",
    "services.s2.title": "Intégration UI/UX",
    "services.s2.desc":  "Transformation de maquettes Figma en code HTML/CSS pixel-perfect.",
    "services.s3.title": "Composants React",
    "services.s3.desc":  "Développement d'interfaces interactives et d'apps single-page.",
    "services.s4.title": "Optimisation & Refonte",
    "services.s4.desc":  "Amélioration des performances, du responsive et du design de sites existants.",

    "contact.tag":            "— Contact",
    "contact.title":          "Démarrons votre<br><em>projet ensemble.</em>",
    "contact.sub":            "Disponible pour des missions freelance. Réponse sous 24h.",
    "contact.form.name":      "Nom",
    "contact.form.namePh":    "Votre nom",
    "contact.form.emailPh":   "votre@email.com",
    "contact.form.project":   "Votre projet",
    "contact.form.projectPh": "Décrivez votre besoin...",
    "contact.form.send":      "Envoyer le message",
    "contact.form.success":   "✓ Message envoyé ! Je vous réponds rapidement.",
    "contact.form.error":     "⚠ Remplissez tous les champs",

    "footer.copy": "© 2026 — Développé avec ♥ en HTML, CSS & JS",
    "footer.back": "↑ Retour en haut",
  },

  en: {
    "page.title":        "Portfolio — Front-End Developer",
    "nav.about":         "About",
    "nav.skills":        "Skills",
    "nav.projects":      "Projects",
    "nav.contact":       "Contact",

    "hero.available":    "Available for freelance projects",
    "hero.title1":       "Developer",
    "hero.title3":       "& UI Craft",
    "hero.desc":         "My name is Masy Cedric and I turn ideas into <strong>fast, modern & memorable</strong> web interfaces — HTML, CSS, JS, SCSS & React.",
    "hero.cta1":         "View my projects",
    "hero.cta2":         "Let's work together →",
    "hero.code.status":  '"available"',

    "about.tag":         "— Who am I",
    "about.title":       "I craft <em>experiences</em>,<br>not just pages.",
    "about.p1":          "Freshly trained in front-end development, I'm passionate about building interfaces that combine technical performance and visual beauty.",
    "about.p2":          "My goal: help entrepreneurs, startups and creatives build their web presence by delivering clean code and designs that convert.",
    "about.cta":         "Start a project",
    "about.stat1":       "Projects delivered",
    "about.stat2":       "Months of experience",
    "about.stat3":       "% Commitment",
    "about.badge":       "Freelance Open",

    "skills.tag":        "— My Stack",
    "skills.title":      "Skills &<br><em>Technologies</em>",
    "skills.html":       "Semantics, accessibility, solid structure.",
    "skills.css":        "Flexbox, Grid, animations, responsive design.",
    "skills.js":         "ES6+, DOM, fetch, application logic.",
    "skills.scss":       "Variables, mixins, nesting, BEM architecture.",
    "skills.react":      "Components, Hooks, state management, props.",
    "skills.git":        "Versioning, branches, GitHub, collaboration.",
    "skills.more":       "+ Tools & methods",

    "projects.tag":      "— Work",
    "projects.title":    "My Projects",
    "projects.demo":     "Demo →",
    "projects.p1.title": "SaaS Landing Page",
    "projects.p1.desc":  "Modern homepage for a fictional app. Ideal for a simple, modern presentation of a product or service.",
    "projects.p2.title": "Landing page for an app",
    "projects.p2.desc":  "Presentation of cloud-based file management and online backup software. Featuring a dark background.",
    "projects.p3.title": "Space tourism multi-page website",
    "projects.p3.desc":  "A multi-page website showcasing a fictional space travel project. The elements are interactive and responsive.",

    "services.tag":      "— What I offer",
    "services.title":    "<em>Freelance</em> Services",
    "services.s1.title": "Website Creation",
    "services.s1.desc":  "Showcase, portfolio, landing page — from design to deployment.",
    "services.s2.title": "UI/UX Integration",
    "services.s2.desc":  "Turning Figma mockups into pixel-perfect HTML/CSS code.",
    "services.s3.title": "React Components",
    "services.s3.desc":  "Building interactive interfaces and single-page applications.",
    "services.s4.title": "Optimization & Redesign",
    "services.s4.desc":  "Improving performance, responsiveness and design of existing websites.",

    "contact.tag":            "— Contact",
    "contact.title":          "Let's start your<br><em>project together.</em>",
    "contact.sub":            "Available for freelance missions. Reply within 24h.",
    "contact.form.name":      "Name",
    "contact.form.namePh":    "Your name",
    "contact.form.emailPh":   "your@email.com",
    "contact.form.project":   "Your project",
    "contact.form.projectPh": "Describe your needs...",
    "contact.form.send":      "Send message",
    "contact.form.success":   "✓ Message sent! I'll get back to you shortly.",
    "contact.form.error":     "⚠ Please fill in all fields",

    "footer.copy": "© 2026 — Built with ♥ in HTML, CSS & JS",
    "footer.back": "↑ Back to top",
  }
};

// ==============================
// i18n ENGINE
// ==============================
let currentLang = localStorage.getItem('lang') || 'fr';

function t(key) {
  return translations[currentLang][key] || translations['fr'][key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.dataset.i18nHtml);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    el.textContent = t(el.dataset.i18nAttr);
  });
  document.documentElement.lang = currentLang;
  document.title = t('page.title');
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

function switchLang(lang) {
  if (lang === currentLang) return;
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.body.classList.add('lang-transitioning');
  setTimeout(() => {
    applyTranslations();
    document.body.classList.remove('lang-transitioning');
  }, 180);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => switchLang(btn.dataset.lang));
});

applyTranslations();

// ==============================
// CURSOR
// ==============================
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursorFollower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';
});

function animateFollower() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  follower.style.left = followerX + 'px';
  follower.style.top  = followerY + 'px';
  requestAnimationFrame(animateFollower);
}
animateFollower();

// ==============================
// NAV SCROLL
// ==============================
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
});

// ==============================
// MOBILE MENU
// ==============================
const navToggle  = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

document.querySelectorAll('.mobile-menu__link').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ==============================
// REVEAL ON SCROLL
// ==============================
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const delay = el.dataset.delay || 0;
      setTimeout(() => el.classList.add('visible'), parseInt(delay));
      revealObserver.unobserve(el);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ==============================
// SKILL BARS
// ==============================
const barObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const fill = entry.target;
      setTimeout(() => { fill.style.width = fill.dataset.width + '%'; }, 300);
      barObserver.unobserve(fill);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-card__fill').forEach(bar => barObserver.observe(bar));

// ==============================
// COUNTER ANIMATION
// ==============================
function animateCounter(el) {
  const target   = parseInt(el.dataset.target);
  const duration = 1500;
  const start    = performance.now();
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  }
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.7 });

document.querySelectorAll('.about__stat-num').forEach(el => counterObserver.observe(el));

// ==============================
// SMOOTH SCROLL
// ==============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      const offset = nav.offsetHeight;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    }
  });
});

// ==============================
// ACTIVE NAV LINK
// ==============================
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav__link');

sections.forEach(sec => {
  new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          link.style.color = link.getAttribute('href') === `#${id}` ? 'var(--text)' : '';
        });
      }
    });
  }, { threshold: 0.5 }).observe(sec);
});

// ==============================
// EMAILJS CONFIG
// ==============================
const EMAILJS_PUBLIC_KEY  = 'xPDiv9mMuJE_a5g8_';
const EMAILJS_SERVICE_ID  = 'service_ox2h9r9';
const EMAILJS_TEMPLATE_ID = 'template_ps58py4';

emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });

// ==============================
// CONTACT FORM
// ==============================
const sendBtn     = document.getElementById('sendBtn');
const formSuccess = document.getElementById('formSuccess');

sendBtn.addEventListener('click', () => {
  const nameVal    = document.getElementById('name').value.trim();
  const emailVal   = document.getElementById('email').value.trim();
  const projectVal = document.getElementById('project').value.trim();

  if (!nameVal || !emailVal || !projectVal) {
    sendBtn.style.background = 'rgba(255,80,80,0.15)';
    sendBtn.querySelector('[data-i18n]').textContent = t('contact.form.error');
    setTimeout(() => {
      sendBtn.style.background = '';
      sendBtn.querySelector('[data-i18n]').textContent = t('contact.form.send');
    }, 2500);
    return;
  }

  sendBtn.disabled = true;
  sendBtn.style.opacity = '0.6';
  sendBtn.querySelector('[data-i18n]').textContent = currentLang === 'fr' ? 'Envoi en cours...' : 'Sending...';

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    from_name:  nameVal,
    from_email: emailVal,
    message:    projectVal,
    to_email:   'masycm12@gmail.com',
  })
  .then(() => {
    sendBtn.style.display = 'none';
    formSuccess.textContent = t('contact.form.success');
    formSuccess.classList.add('show');
    document.getElementById('name').value    = '';
    document.getElementById('email').value   = '';
    document.getElementById('project').value = '';
  })
  .catch((err) => {
    console.error('EmailJS error:', err);
    sendBtn.disabled = false;
    sendBtn.style.opacity = '1';
    sendBtn.style.background = 'rgba(255,80,80,0.15)';
    sendBtn.querySelector('[data-i18n]').textContent =
      currentLang === 'fr' ? '✗ Erreur, réessaie' : '✗ Error, try again';
    setTimeout(() => {
      sendBtn.style.background = '';
      sendBtn.querySelector('[data-i18n]').textContent = t('contact.form.send');
    }, 3000);
  });
});

// ==============================
// HERO CODE PARALLAX
// ==============================
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const code1 = document.querySelector('.hero__code--1');
  const code2 = document.querySelector('.hero__code--2');
  if (code1) code1.style.transform = `translateY(${scrollY * 0.12}px)`;
  if (code2) code2.style.transform = `translateY(${scrollY * 0.08}px)`;
});

// ==============================
// INITIAL HERO REVEAL
// ==============================
window.addEventListener('load', () => {
  document.querySelectorAll('.hero .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 200 + i * 120);
  });
});