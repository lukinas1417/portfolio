// Troca de idioma (português por padrão). O HTML já traz o português, então a página funciona sem
// JavaScript; aqui ficam só as traduções para o inglês.

const EN = {
  'bar.label': 'Portfolio · 2026',

  'nav.label': 'Page sections',
  'nav.top': 'Start',
  'nav.radar': 'Radar',
  'nav.projects': 'Projects',
  'nav.exp': 'Experience',
  'nav.stack': 'Stack',

  'who.alt': 'Portrait of Lucas de Mélo Berra',
  'hero.role': 'Full Stack Developer · Process Automation · Integrations',
  'hero.lead':
    'I build corporate systems, mobile apps and web platforms with complex business rules, from analysis to production.',
  'hero.meta': 'Rio Grande do Sul, Brazil · Available for opportunities',
  'cv.label': 'Resume (PDF)',

  'radar.kind': 'Featured · public project · open source',
  'radar.live': 'View live',
  'radar.code': 'Code',
  'radar.arch': 'Architecture and decisions',
  'radar.desc':
    'A full-screen map of accumulated rainfall and river status for every municipality in Rio Grande do Sul, using near real-time data from CEMADEN and the state Civil Defense.',
  'radar.open': 'Open Radar de Chuva RS',
  'radar.img_alt': 'Map of Rio Grande do Sul with rainfall per municipality and glowing outlines on rivers at risk',

  'sec.others': 'Other projects',
  'o.rejoga.tag': 'in production · private code',
  'o.rejoga.d':
    'A boardgame marketplace for the Brazilian market: listings, orders, logistics, notifications, support, mediation and an admin dashboard.',
  'o.rejoga.visit': 'Visit rejoga.com.br',
  'o.ind.t': 'Systems for the industrial sector',
  'o.ind.tag': 'private code',
  'o.ind.d':
    'Custom systems for the operation of a manufacturing company: process automation, QR Code traceability, integration between web systems, scanners and label printers, and mobile apps for operational routines.',
  's.rest': 'REST APIs',
  's.hw': 'Hardware integrations',

  'sec.exp': 'Experience',
  'exp1.when': '2022 – 2026',
  'exp1.role': 'Senior Systems Technician',
  'exp1.company': '· Industrial sector',
  'exp1.desc':
    'Custom solutions for specific departments: process automation, systems integration and maintenance of mission-critical systems used daily.',
  'exp2.when': 'Private project in production',
  'exp2.role': 'Full Stack Developer',
  'exp2.desc':
    'Development and evolution of a boardgame marketplace: front end in React and Tailwind CSS, back end in Node.js with REST APIs, and integrated payments and logistics.',

  'sec.stack': 'Stack',
  'stack.lang': 'Languages',
  'stack.front': 'Front end and mobile',
  'stack.back': 'Back end',
  'stack.infra': 'Data and infrastructure',

  'footer.text': 'Handcrafted with HTML, CSS and JavaScript, no frameworks.',
};

const TITULO = {
  pt: 'Lucas de Mélo Berra · Desenvolvedor Full Stack',
  en: 'Lucas de Mélo Berra · Full Stack Developer',
};
const DESCRICAO = {
  pt: 'Portfólio de Lucas de Mélo Berra, desenvolvedor Full Stack com foco em automação de processos e integrações.',
  en: 'Portfolio of Lucas de Mélo Berra, Full Stack developer focused on process automation and integrations.',
};

// O currículo muda junto com o idioma: em português só o PDF em português, em inglês só o em inglês.
const CURRICULO = {
  pt: 'assets/curriculo-lucas-berra-pt.pdf',
  en: 'assets/resume-lucas-berra-en.pdf',
};

// Guarda o português que já está no HTML, para poder voltar a ele.
const PT = {};
document.querySelectorAll('[data-i18n]').forEach((el) => {
  PT[el.dataset.i18n] ??= el.textContent;
});

// "alt:who.alt;aria-label:radar.open" -> [["alt","who.alt"], ["aria-label","radar.open"]]
const pares = (el) => el.dataset.i18nAttr.split(';').map((p) => p.split(':'));
const ATRIBUTOS_PT = new Map();
document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
  ATRIBUTOS_PT.set(el, Object.fromEntries(pares(el).map(([attr]) => [attr, el.getAttribute(attr)])));
});

const CHAVE = 'portfolio-idioma';
const lembrar = (lang) => {
  try { localStorage.setItem(CHAVE, lang); } catch { /* navegação privada */ }
};
const lembrado = () => {
  try { return localStorage.getItem(CHAVE); } catch { return null; }
};

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
  document.getElementById('cv').setAttribute('href', CURRICULO[lang]);
  document.querySelectorAll('.idioma button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
}

document.querySelector('.idioma').addEventListener('click', (ev) => {
  const botao = ev.target.closest('button[data-lang]');
  if (!botao) return;
  aplicar(botao.dataset.lang);
  lembrar(botao.dataset.lang);
});

// ---------- menu flutuante: mostra em que seção a pessoa está e leva a qualquer uma ----------
const trilha = document.querySelector('.trilha');
const itens = [...trilha.querySelectorAll('a')];
const secoes = itens.map((a) => document.querySelector(a.getAttribute('href')));
let agendado = false;

function atualizarTrilha() {
  agendado = false;
  // só aparece depois que a pessoa começa a rolar, para não poluir a primeira tela
  trilha.classList.toggle('visivel', scrollY > 240);
  const referencia = innerHeight * 0.4;
  let atual = 0;
  secoes.forEach((secao, i) => {
    if (secao.getBoundingClientRect().top <= referencia) atual = i;
  });
  if (innerHeight + scrollY >= document.documentElement.scrollHeight - 4) atual = secoes.length - 1;
  itens.forEach((a, i) => (i === atual ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current')));
}
addEventListener(
  'scroll',
  () => {
    if (!agendado) {
      agendado = true;
      requestAnimationFrame(atualizarTrilha);
    }
  },
  { passive: true },
);
addEventListener('resize', atualizarTrilha);
atualizarTrilha();

// Português por padrão; ?lang=en compartilha a versão em inglês; a escolha do visitante é lembrada.
const pedido = new URLSearchParams(location.search).get('lang');
const inicial = ['pt', 'en'].includes(pedido) ? pedido : lembrado();
if (inicial === 'en') aplicar('en');
