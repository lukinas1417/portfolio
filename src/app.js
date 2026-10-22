// Troca de idioma (português por padrão). O HTML já traz o português, então a página funciona sem
// JavaScript; aqui ficam só as traduções para o inglês.

const EN = {
  'bar.label': 'Portfolio · 2026',

  'hero.role': 'Full Stack Developer · Process Automation · Integrations',
  'hero.lead':
    'Before writing code, I look for what the system needs in order to really work: reliable data, anticipated failures, clear business rules and simple operations.',
  'f.role.k': 'Role',
  'f.role.v': 'Corporate systems, mobile apps and web platforms',
  'f.focus.k': 'Focus',
  'f.focus.v': 'Process automation and integrations',
  'f.where.k': 'Location',
  'f.where.v': 'Rio Grande do Sul, Brazil',
  'f.status.k': 'Status',
  'f.status.v': 'Available for opportunities in systems development and digital products',
  'f.contact.k': 'Contact',
  'f.cv.k': 'Résumé',
  'cv.pt': 'Portuguese (PDF)',
  'cv.en': 'English (PDF)',

  'sec.who': 'About',
  'who.alt': 'Portrait of Lucas de Mélo Berra',
  'who.cap': 'Fig. 1 · Lucas de Mélo Berra',
  'who.p1':
    'I am a Full Stack developer and I build corporate systems, mobile apps and web platforms with complex business rules. I work end to end: from requirements analysis to development, integration, deployment and production maintenance.',
  'who.p2':
    'I have experience with process automation, third-party APIs and hardware, in solutions used every day by different departments.',

  'sec.systems': 'Systems',
  'radar.kind': 'Case study · open source',
  'radar.desc':
    'A full-screen map of accumulated rainfall and river status for every municipality in Rio Grande do Sul, using near real-time data from CEMADEN and the state Civil Defense. Built to be understood at a glance: your city, the rain and the river, no spreadsheets.',
  'radar.open': 'Open Radar de Chuva RS',
  'radar.img_alt': 'Map of Rio Grande do Sul with rainfall per municipality and glowing outlines on rivers at risk',
  'radar.fig': 'Fig. 2 · Radar de Chuva RS, live',
  'r.ctx.k': 'Context',
  'r.ctx.v':
    'Two official sources, with no formal agreement with either: CEMADEN (a public, undocumented endpoint) and the Rio Grande do Sul Civil Defense API. People looking at the map may make decisions based on it.',
  'r.req.k': 'Requirements',
  'r.rq1': 'Never lie: missing or stale data must never look normal.',
  'r.rq2': 'Keep working with unreliable sources.',
  'r.rq3': 'Minimal operations: no server and no fixed cost.',
  'r.rq4': 'Respect each source’s limits and terms.',
  'r.rq5': 'Privacy of the user’s location.',
  'r.dec.k': 'Decisions',
  'r.d1t': 'Static site and scheduled collection, no backend.',
  'r.d1': 'Zero cost and no server attack surface. The price is latency and dependence on the scheduler.',
  'r.d2t': '“No data” is not zero.',
  'r.d2': 'The map shows where there is no rain gauge, instead of painting everything as “no rain”.',
  'r.d3t': 'Freshness measured against the collection, not the clock.',
  'r.d3': 'A real bug showed that an unknown state must never become “normal”.',
  'r.d4t': 'Protections are not bypassed.',
  'r.d4': 'Captchas and certificate verification are limits of the system, not obstacles.',
  'r.fail.k': 'Failures handled',
  'r.f1t': 'CEMADEN refuses the connection.',
  'r.f1': 'It retries and reuses the last published data.',
  'r.f2t': 'Civil Defense API with an expired certificate.',
  'r.f2': 'It keeps the last data and says how old it is, without disabling verification.',
  'r.f3t': 'Irregular GitHub scheduler.',
  'r.f3': 'A free external trigger, documented in the repository.',
  'r.test.k': 'Verification',
  'r.test.v':
    '40 automated tests (geometry, source normalization and data rules). I injected defects on purpose, including the real “false normal” bug, to confirm that the tests fail.',
  'r.lim.k': 'Limits',
  'r.lim.v':
    'No interface or contract tests against the sources, no collection monitoring of its own, and fewer than half of the municipalities have a rain gauge in the networks consulted (the map shows the gap).',
  'r.stack.k': 'Stack',
  'r.tag': 'Open data',
  'radar.live': 'View live',
  'radar.code': 'View code',
  'radar.arch': 'Architecture and decisions',

  'sec.others': 'Other systems',
  'others.lead': 'Private code: I describe the problem and the stack, without exposing internal data.',
  'o.rejoga.tag': 'in production · private code',
  'o.rejoga.kind': 'Boardgame marketplace',
  'o.rejoga.d':
    'A boardgame marketplace for the Brazilian market, with listings, orders, logistics, notifications, support, mediation and an admin dashboard.',
  'o.rejoga.visit': 'Visit rejoga.com.br',
  'o.ind.t': 'Systems for the industrial sector',
  'o.ind.tag': 'private code',
  'o.ind.kind': 'Custom solutions · since 2022',
  'o.ind.d':
    'I build custom systems for the operation of a manufacturing company: I automate processes, integrate web systems with physical devices and reduce manual work. I maintain and evolve mission-critical systems used every day, with fewer errors and more operational reliability.',
  'o.ind.b1': 'Item traceability and verification, with QR Code scanning.',
  'o.ind.b2': 'Integration between web systems, scanners and label printers.',
  'o.ind.b3': 'Mobile apps for operational routines, from pickups and deliveries to inspections.',
  'o.ind.b4': 'Internal web applications, with custom business rules.',
  's.rest': 'REST APIs',
  's.hw': 'Hardware integrations',

  'sec.exp': 'Experience',
  'exp1.when': '2022 – present',
  'exp1.role': 'Senior Systems Technician',
  'exp1.company': '· Industrial sector',
  'exp1.desc':
    'Custom solutions for specific departments, automating processes, integrating systems and reducing manual work. Maintenance and evolution of mission-critical systems used daily, reducing errors and increasing operational reliability.',
  'exp2.when': 'Private project in production',
  'exp2.role': 'Full Stack Developer',
  'exp2.desc':
    'Development and evolution of a boardgame marketplace focused on delivering the best experience and service quality to the Brazilian market. Front end in React and Tailwind CSS, back end in Node.js with REST APIs, and payments and operations with Mercado Pago, Melhor Envio, SuperFrete and SendPulse.',

  'sec.stack': 'Stack',
  'stack.lang': 'Languages',
  'stack.front': 'Front end and mobile',
  'stack.back': 'Back end',
  'stack.infra': 'Data and infrastructure',
  'stack.other': 'Other',

  'sec.contact': 'Contact',
  'contact.lead': 'Available for opportunities in systems development and digital products.',
  'footer.text': 'Handcrafted with HTML, CSS and JavaScript, no frameworks.',
};

const TITULO = {
  pt: 'Lucas de Mélo Berra · Desenvolvedor Full Stack',
  en: 'Lucas de Mélo Berra · Full Stack Developer',
};
const DESCRICAO = {
  pt: 'Portfólio de Lucas de Mélo Berra, desenvolvedor Full Stack com foco em automação de processos e integrações. Estudo de caso, sistemas, experiência e contato.',
  en: 'Portfolio of Lucas de Mélo Berra, Full Stack developer focused on process automation and integrations. Case study, systems, experience and contact.',
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
  document.querySelectorAll('.idioma button').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
}

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
