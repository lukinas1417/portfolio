// Troca de idioma (português por padrão) e animação de entrada das seções.
// O HTML já traz o português, então a página funciona sem JavaScript; aqui ficam só as traduções.

const EN = {
  'nav.projects': 'Projects',
  'nav.experience': 'Experience',
  'nav.stack': 'Stack',
  'nav.contact': 'Contact',

  'hero.eyebrow': 'Rio Grande do Sul, Brazil',
  'hero.role': 'Full Stack Developer · Process Automation · Integrations',
  'hero.p1':
    'I build corporate systems, mobile apps and web platforms with complex business rules. I work end to end: from requirements analysis to development, integration, deployment and production maintenance.',
  'hero.p2':
    'I have experience with process automation, third-party APIs and hardware, in solutions used every day by different departments.',
  'hero.cta_projects': 'View projects',
  'hero.cta_cv': 'Download résumé',
  'hero.photo_alt': 'Portrait of Lucas de Mélo Berra',

  'sec1.title': 'Public projects',
  'sec1.lead': 'Open source, live, and open to anyone.',
  'radar.kind': 'Public project · open source',
  'radar.desc':
    'A full-screen map of accumulated rainfall and river status for every municipality in Rio Grande do Sul, using near real-time data from CEMADEN and the state Civil Defense. Built to be understood at a glance: your city, the rain and the river, no spreadsheets.',
  'radar.b1':
    'Scheduled collection on GitHub Actions, tolerant of unreliable sources: it retries, reuses the last data and warns when it is stale.',
  'radar.b2': 'Separates “no data” from “no rain” and never reports normal conditions when there is no reading.',
  'radar.b3': 'Optional 3D terrain, location that never leaves the browser, keyboard search and a mobile layout.',
  'radar.tag_data': 'Open data',
  'radar.live': 'View live',
  'radar.code': 'View code',
  'radar.note': 'Portfolio project: it does not replace the official Civil Defense alerts.',
  'radar.open': 'Open Radar de Chuva RS',
  'radar.img_alt': 'Map of Rio Grande do Sul with rainfall per municipality and glowing outlines on rivers at risk',

  'sec2.title': 'Private projects',
  'sec2.lead':
    'Production systems whose code is private. I describe the problem and the stack, without exposing internal data.',
  'rejoga.badge': 'In production · private code',
  'rejoga.kind': 'Boardgame marketplace',
  'rejoga.desc':
    'A boardgame marketplace for the Brazilian market, with listings, orders, logistics, notifications, support, mediation and an admin dashboard.',
  'rejoga.visit': 'Visit rejoga.com.br',
  'private.badge': 'Private code',
  'ind.title': 'Systems for the industrial sector',
  'ind.kind': 'Custom solutions · since 2022',
  'ind.desc':
    'I build custom systems for the operation of a manufacturing company: I automate processes, integrate web systems with physical devices and reduce manual work. I maintain and evolve mission-critical systems used every day, with fewer errors and more operational reliability.',
  'ind.b1': 'Item traceability and verification, with QR Code scanning.',
  'ind.b2': 'Integration between web systems, scanners and label printers.',
  'ind.b3': 'Mobile apps for operational routines, from pickups and deliveries to inspections.',
  'ind.b4': 'Internal web applications, with custom business rules.',
  's.rest': 'REST APIs',
  's.hw': 'Hardware integrations',

  'sec3.title': 'Experience',
  'exp1.when': '2022 – present',
  'exp1.role': 'Senior Systems Technician',
  'exp1.company': '· Industrial sector',
  'exp1.desc':
    'Custom solutions for specific departments, automating processes, integrating systems and reducing manual work. Maintenance and evolution of mission-critical systems used daily, reducing errors and increasing operational reliability.',
  'exp2.when': 'Private project in production',
  'exp2.role': 'Full Stack Developer',
  'exp2.desc':
    'Development and evolution of a boardgame marketplace focused on delivering the best experience and service quality to the Brazilian market. Front end in React and Tailwind CSS, back end in Node.js with REST APIs, and payments and operations with Mercado Pago, Melhor Envio, SuperFrete and SendPulse.',

  'sec4.title': 'Stack',
  'stack.lang': 'Languages',
  'stack.front': 'Front end and mobile',
  'stack.back': 'Back end',
  'stack.infra': 'Data and infrastructure',
  'stack.other': 'Other',
  'lang.title': 'Languages',
  'lang.pt': 'Portuguese: native',
  'lang.en': 'English: upper-intermediate, for technical reading and written communication',
  'edu.title': 'Education',
  'edu.v': 'High school diploma (completed)',

  'sec5.title': 'Contact',
  'contact.lead': 'Available for opportunities in systems development and digital products.',
  'contact.cv_pt': 'Résumé in Portuguese (PDF)',
  'contact.cv_en': 'Résumé in English (PDF)',
  'footer.text': 'Handcrafted with HTML, CSS and JavaScript, no frameworks.',
};

const TITULO = {
  pt: 'Lucas de Mélo Berra · Desenvolvedor Full Stack',
  en: 'Lucas de Mélo Berra · Full Stack Developer',
};
const DESCRICAO = {
  pt: 'Portfólio de Lucas de Mélo Berra, desenvolvedor Full Stack com foco em automação de processos e integrações. Projetos públicos e privados, experiência e contato.',
  en: 'Portfolio of Lucas de Mélo Berra, Full Stack developer focused on process automation and integrations. Public and private projects, experience and contact.',
};
const CURRICULO = {
  pt: 'assets/curriculo-lucas-berra-pt.pdf',
  en: 'assets/resume-lucas-berra-en.pdf',
};

// Guarda o português que já está no HTML, para poder voltar a ele.
const PT = {};
document.querySelectorAll('[data-i18n]').forEach((el) => {
  PT[el.dataset.i18n] ??= el.textContent;
});
const ATRIBUTOS_PT = new Map();
document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
  ATRIBUTOS_PT.set(el, Object.fromEntries(pares(el).map(([attr]) => [attr, el.getAttribute(attr)])));
});

// "alt:hero.photo_alt;aria-label:radar.open" -> [["alt","hero.photo_alt"], ["aria-label","radar.open"]]
function pares(el) {
  return el.dataset.i18nAttr.split(';').map((p) => p.split(':'));
}

const CHAVE = 'portfolio-idioma';
function lembrar(lang) {
  try { localStorage.setItem(CHAVE, lang); } catch { /* navegação privada */ }
}
function lembrado() {
  try { return localStorage.getItem(CHAVE); } catch { return null; }
}

function aplicar(lang) {
  const en = lang === 'en';
  document.documentElement.lang = en ? 'en' : 'pt-BR';
  document.title = TITULO[lang];
  document.querySelector('meta[name="description"]').setAttribute('content', DESCRICAO[lang]);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const chave = el.dataset.i18n;
    el.textContent = (en ? EN[chave] : PT[chave]) ?? PT[chave];
  });
  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    for (const [attr, chave] of pares(el)) {
      el.setAttribute(attr, (en ? EN[chave] : undefined) ?? ATRIBUTOS_PT.get(el)[attr]);
    }
  });

  $cv.setAttribute('href', CURRICULO[lang]);
  document.querySelectorAll('.idioma button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
}

const $cv = document.getElementById('cv-principal');
document.querySelector('.idioma').addEventListener('click', (ev) => {
  const botao = ev.target.closest('button[data-lang]');
  if (!botao) return;
  aplicar(botao.dataset.lang);
  lembrar(botao.dataset.lang);
});

// Português por padrão; ?lang=en compartilha a versão em inglês; a escolha do visitante é lembrada.
const pedido = new URLSearchParams(location.search).get('lang');
const inicial = ['pt', 'en'].includes(pedido) ? pedido : lembrado();
if (inicial === 'en') aplicar('en');

// Entrada suave das seções ao rolar (sem JavaScript, tudo já está visível).
const secoes = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const olho = new IntersectionObserver(
    (entradas) => {
      for (const e of entradas) {
        if (e.isIntersecting) {
          e.target.classList.add('visto');
          olho.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  secoes.forEach((s) => olho.observe(s));
} else {
  secoes.forEach((s) => s.classList.add('visto'));
}
