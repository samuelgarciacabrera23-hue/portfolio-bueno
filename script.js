const $ = (s) => document.querySelector(s);
const save = (k, v) => { try { localStorage.setItem(k, v); } catch (e) {} };
const load = (k) => { try { return localStorage.getItem(k); } catch (e) { return null; } };
$('#anio').textContent = new Date().getFullYear();

/* ---------- Idiomas ----------
   El español se lee del propio HTML. Para añadir un idioma: copia una línea de T,
   tradúcela (mismo orden que K) y añade su <option> en el selector de index.html. */
const K = ['nav_about','nav_cv','nav_proj','nav_sk','nav_ct','role','dl','contact','about_t','about_1','about_2','cv_t','job','intern','job_d','now','edu1','edu2','dl2','proj_t','p1_t','p1_d','p2_t','p2_d','p3_t','p3_d','sk_t','sk_tech','c1','c2','c3','c4','sk_tools','sk_lang','n_es','l_es','n_en','l_en','ct_t','ct_p','f_name','f_mail','f_msg','f_send','err','ok'];
const T = {
 en:['About me','Résumé','Projects','Skills','Contact','Student of Microcomputer Systems and Networks (Intermediate VET)','Download CV (PDF)','Get in touch','About me',
  'I am an organised, responsible person eager to start my professional career. I study Microcomputer Systems and Networks at San Juan Bosco and worked with real equipment and networks during my internship at the FEMEPA Foundation.',
  'I am looking for a job where I can contribute what I have learned and keep growing. I am available to relocate to Olmedo (Valladolid).','Résumé','Microcomputer technician','Internship contract',
  'Configuration of switches, routers, firewalls and VPNs. Installation and maintenance of computer equipment.','Present','Intermediate VET in Microcomputer Systems and Networks','Compulsory Secondary Education (ESO)','Download full CV (PDF)','Projects',
  'FEMEPA internship','Configuring switches, routers, firewalls and VPNs, and installing and maintaining equipment in a professional environment.','ERASMUS+ project','Volunteer and participant in the European project of IES El Batán, between Las Palmas de Gran Canaria and France (2025–2026).',
  'Your next project','Add a network lab, a PC build or any class project here. Edit this block in index.html.','Skills','Technical','PC assembly and maintenance','Local networks','Switches and routers','Firewalls and VPNs','Tools','Languages','Spanish','Native','English','A2 · Basic','Contact',
  'Have an offer or want to know more? Write to me and I will reply as soon as possible.','Name','Your email','Message','Send message','Fill in your name, a valid email and a message.','Opening your email app…'],
 fr:['À propos','CV','Projets','Compétences','Contact','Étudiant en Systèmes microinformatiques et réseaux (CAP/BTS niveau intermédiaire)','Télécharger le CV (PDF)','Me contacter','À propos de moi',
  'Je suis une personne organisée et responsable, motivée pour débuter ma carrière. J’étudie les systèmes microinformatiques et réseaux à San Juan Bosco et j’ai travaillé sur du matériel et des réseaux réels lors de mon stage à la Fondation FEMEPA.',
  'Je cherche un emploi où apporter mes connaissances et continuer à progresser. Je suis disponible pour déménager à Olmedo (Valladolid).','CV','Technicien microinformatique','Contrat de stage',
  'Configuration de switchs, routeurs, pare-feu et VPN. Installation et maintenance du matériel informatique.','Aujourd’hui','Cycle moyen en Systèmes microinformatiques et réseaux','Enseignement secondaire obligatoire (ESO)','Télécharger le CV complet (PDF)','Projets',
  'Stage chez FEMEPA','Configuration de switchs, routeurs, pare-feu et VPN, installation et maintenance de matériel en milieu professionnel.','Projet ERASMUS+','Bénévole et participant au projet européen de l’IES El Batán, entre Las Palmas de Gran Canaria et la France (2025–2026).',
  'Votre prochain projet','Ajoutez ici un labo réseau, un montage de PC ou un projet de cours. Modifiez ce bloc dans index.html.','Compétences','Techniques','Montage et maintenance de PC','Réseaux locaux','Switchs et routeurs','Pare-feu et VPN','Outils','Langues','Espagnol','Langue maternelle','Anglais','A2 · Élémentaire','Contact',
  'Une offre ou une question ? Écrivez-moi, je réponds dès que possible.','Nom','Votre e-mail','Message','Envoyer le message','Indiquez votre nom, un e-mail valide et un message.','Ouverture de votre messagerie…'],
 de:['Über mich','Lebenslauf','Projekte','Fähigkeiten','Kontakt','Student für Mikrocomputersysteme und Netzwerke (mittlere Berufsausbildung)','Lebenslauf herunterladen (PDF)','Kontakt aufnehmen','Über mich',
  'Ich bin organisiert und verantwortungsbewusst und möchte meine berufliche Laufbahn beginnen. Ich studiere Mikrocomputersysteme und Netzwerke an der San Juan Bosco und habe im Praktikum bei der FEMEPA-Stiftung mit echter Hardware und Netzwerken gearbeitet.',
  'Ich suche eine Stelle, in der ich mein Wissen einbringen und weiterlernen kann. Ich kann nach Olmedo (Valladolid) umziehen.','Lebenslauf','Mikrocomputer-Techniker','Praktikumsvertrag',
  'Konfiguration von Switches, Routern, Firewalls und VPNs. Installation und Wartung von Computern.','heute','Mittlere Ausbildung in Mikrocomputersystemen und Netzwerken','Pflichtschulbildung (ESO)','Vollständigen Lebenslauf herunterladen (PDF)','Projekte',
  'Praktikum bei FEMEPA','Konfiguration von Switches, Routern, Firewalls und VPNs sowie Installation und Wartung von Geräten in einem professionellen Umfeld.','ERASMUS+-Projekt','Freiwilliger und Teilnehmer am europäischen Projekt des IES El Batán zwischen Las Palmas de Gran Canaria und Frankreich (2025–2026).',
  'Dein nächstes Projekt','Füge hier ein Netzwerklabor, einen PC-Aufbau oder ein Schulprojekt hinzu. Bearbeite diesen Block in index.html.','Fähigkeiten','Technisch','PC-Montage und -Wartung','Lokale Netzwerke','Switches und Router','Firewalls und VPNs','Werkzeuge','Sprachen','Spanisch','Muttersprache','Englisch','A2 · Grundkenntnisse','Kontakt',
  'Ein Angebot oder Fragen? Schreib mir, ich antworte so schnell wie möglich.','Name','Deine E-Mail','Nachricht','Nachricht senden','Gib Namen, eine gültige E-Mail und eine Nachricht ein.','Dein E-Mail-Programm wird geöffnet…'],
 it:['Chi sono','Curriculum','Progetti','Competenze','Contatto','Studente di Sistemi Microinformatici e Reti (ciclo medio)','Scarica il CV (PDF)','Contattami','Chi sono',
  'Sono una persona organizzata e responsabile, motivata a iniziare il proprio percorso professionale. Studio Sistemi Microinformatici e Reti a San Juan Bosco e ho lavorato con apparecchiature e reti reali durante il tirocinio alla Fondazione FEMEPA.',
  'Cerco un’opportunità di lavoro in cui mettere a frutto ciò che ho imparato e continuare a crescere. Sono disponibile a trasferirmi a Olmedo (Valladolid).','Curriculum','Tecnico microinformatico','Contratto di tirocinio',
  'Configurazione di switch, router, firewall e VPN. Installazione e manutenzione di apparecchiature informatiche.','Attuale','Ciclo medio in Sistemi Microinformatici e Reti','Istruzione secondaria obbligatoria (ESO)','Scarica il CV completo (PDF)','Progetti',
  'Tirocinio in FEMEPA','Configurazione di switch, router, firewall e VPN, installazione e manutenzione di apparecchiature in un ambiente professionale.','Progetto ERASMUS+','Volontario e partecipante al progetto europeo dell’IES El Batán, tra Las Palmas de Gran Canaria e la Francia (2025–2026).',
  'Il tuo prossimo progetto','Aggiungi qui un laboratorio di reti, un assemblaggio di PC o un progetto scolastico. Modifica questo blocco in index.html.','Competenze','Tecniche','Assemblaggio e manutenzione di PC','Reti locali','Switch e router','Firewall e VPN','Strumenti','Lingue','Spagnolo','Madrelingua','Inglese','A2 · Base','Contatto',
  'Hai un’offerta o vuoi saperne di più? Scrivimi e ti risponderò il prima possibile.','Nome','La tua e-mail','Messaggio','Invia messaggio','Inserisci nome, un’e-mail valida e un messaggio.','Apertura del programma di posta…'],
 pt:['Sobre mim','Currículo','Projetos','Competências','Contacto','Estudante de Sistemas Microinformáticos e Redes (ciclo médio)','Descarregar CV (PDF)','Contactar','Sobre mim',
  'Sou uma pessoa organizada e responsável, motivada para iniciar o meu percurso profissional. Estudo Sistemas Microinformáticos e Redes em San Juan Bosco e trabalhei com equipamentos e redes reais durante o estágio na Fundação FEMEPA.',
  'Procuro uma oportunidade de trabalho onde possa aplicar o que aprendi e continuar a crescer. Tenho disponibilidade para me mudar para Olmedo (Valladolid).','Currículo','Técnico microinformático','Contrato de estágio',
  'Configuração de switches, routers, firewalls e VPNs. Instalação e manutenção de equipamentos informáticos.','Atualidade','Ciclo médio em Sistemas Microinformáticos e Redes','Ensino Secundário Obrigatório (ESO)','Descarregar CV completo (PDF)','Projetos',
  'Estágio na FEMEPA','Configuração de switches, routers, firewalls e VPNs, e instalação e manutenção de equipamentos num ambiente profissional.','Projeto ERASMUS+','Voluntário e participante no projeto europeu do IES El Batán, entre Las Palmas de Gran Canaria e França (2025–2026).',
  'O teu próximo projeto','Adiciona aqui um laboratório de redes, a montagem de um PC ou um trabalho do curso. Edita este bloco em index.html.','Competências','Técnicas','Montagem e manutenção de PCs','Redes locais','Switches e routers','Firewalls e VPNs','Ferramentas','Idiomas','Espanhol','Língua materna','Inglês','A2 · Básico','Contacto',
  'Tens uma oferta ou queres saber mais? Escreve-me e respondo o mais depressa possível.','Nome','O teu e-mail','Mensagem','Enviar mensagem','Indica o teu nome, um e-mail válido e uma mensagem.','A abrir a tua aplicação de correio…']
};
const els = [...document.querySelectorAll('[data-i18n]')];
const dict = { es: {} };
els.forEach((el) => { dict.es[el.dataset.i18n] = el.textContent; });
dict.es.err = 'Rellena tu nombre, un email válido y el mensaje.';
dict.es.ok = 'Abriendo tu aplicación de correo…';
for (const l in T) dict[l] = Object.fromEntries(K.map((k, i) => [k, T[l][i]]));
let lang = 'es';
function setLang(l) {
  if (!dict[l]) l = 'es';
  lang = l; document.documentElement.lang = l; $('#lang').value = l; save('lang', l);
  els.forEach((el) => { el.textContent = dict[l][el.dataset.i18n] ?? dict.es[el.dataset.i18n]; });
}
$('#lang').addEventListener('change', (e) => setLang(e.target.value));
setLang(load('lang') || (navigator.language || 'es').slice(0, 2));

/* ---------- Tema claro / oscuro ---------- */
function setTheme(t) {
  document.documentElement.dataset.theme = t; $('#theme').textContent = t === 'dark' ? '☀️' : '🌙'; save('theme', t);
}
$('#theme').addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
setTheme(load('theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

/* ---------- Fondos ---------- */
const pal = $('#pal');
function setBg(b) {
  document.body.dataset.bg = b; save('bg', b);
  pal.querySelectorAll('button').forEach((x) => x.classList.toggle('on', x.dataset.bg === b));
  (b === 'red' || b === 'matrix') ? net.start(b) : net.stop();
}
$('#bgbtn').addEventListener('click', () => { pal.hidden = !pal.hidden; });
pal.addEventListener('click', (e) => { if (e.target.dataset.bg) setBg(e.target.dataset.bg); });

/* Fondos animados en canvas: "red" (nodos conectados) y "matrix" (lluvia de código) */
const net = (() => {
  const cv = $('#net'), cx = cv.getContext('2d'); let pts = [], cols = [], raf = 0, mode = 'red';
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const CH = '01{}<>/;=#$ABCDEF';
  function size() {
    cv.width = innerWidth; cv.height = innerHeight;
    pts = Array.from({ length: Math.round(innerWidth * innerHeight / 18000) + 20 }, () =>
      ({ x: Math.random() * cv.width, y: Math.random() * cv.height, vx: (Math.random() - .5) * .5, vy: (Math.random() - .5) * .5 }));
    cols = Array.from({ length: Math.ceil(innerWidth / 16) }, () => Math.random() * innerHeight / 16);
  }
  function drawNet() {
    cx.clearRect(0, 0, cv.width, cv.height);
    for (const p of pts) {
      if (!calm) { p.x += p.vx; p.y += p.vy; if (p.x < 0 || p.x > cv.width) p.vx *= -1; if (p.y < 0 || p.y > cv.height) p.vy *= -1; }
      cx.fillStyle = '#5fd9c8'; cx.beginPath(); cx.arc(p.x, p.y, 2.2, 0, 7); cx.fill();
    }
    for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
      const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
      if (d < 140) { cx.strokeStyle = `rgba(95,217,200,${1 - d / 140})`; cx.beginPath(); cx.moveTo(pts[i].x, pts[i].y); cx.lineTo(pts[j].x, pts[j].y); cx.stroke(); }
    }
  }
  function drawMatrix() {
    cx.fillStyle = 'rgba(2,10,5,.12)'; cx.fillRect(0, 0, cv.width, cv.height);
    cx.font = '15px monospace'; cx.fillStyle = '#00ff66';
    cols.forEach((y, i) => {
      cx.fillText(CH[Math.floor(Math.random() * CH.length)], i * 16, y * 16);
      cols[i] = y * 16 > cv.height && Math.random() > .975 ? 0 : y + 1;
    });
  }
  function loop() { (mode === 'matrix' ? drawMatrix : drawNet)(); if (!calm) raf = requestAnimationFrame(loop); }
  addEventListener('resize', () => { if (raf || calm) { size(); calm && loop(); } });
  return {
    start(m) { mode = m; size(); cancelAnimationFrame(raf); cx.clearRect(0, 0, cv.width, cv.height);
      if (m === 'matrix' && calm) { for (let k = 0; k < 40; k++) drawMatrix(); } else loop(); },
    stop() { cancelAnimationFrame(raf); raf = 0; }
  };
})();
setBg(load('bg') || 'circuito');

/* ---------- Formulario: abre el correo del visitante con el mensaje preparado ---------- */
const EMAIL = 'samuelgarciacabrera32@gmail.com';
const form = $('#form'), estado = $('#estado');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(form));
  const ok = d.nombre.trim() && /\S+@\S+\.\S+/.test(d.email) && d.mensaje.trim();
  estado.className = ok ? '' : 'error';
  if (!ok) { estado.textContent = dict[lang].err; return; }
  estado.textContent = dict[lang].ok;
  const asunto = encodeURIComponent('Portfolio: ' + d.nombre);
  const cuerpo = encodeURIComponent(d.mensaje + '\n\n' + d.nombre + ' (' + d.email + ')');
  location.href = `mailto:${EMAIL}?subject=${asunto}&body=${cuerpo}`;
});
