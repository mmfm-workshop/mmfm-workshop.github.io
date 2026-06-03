const speakers = [
  {
    name: "Serena Yeung-Levy",
    affiliation: "Stanford University",
    bio: "Assistant Professor of Biomedical Data Science and, by courtesy, of Computer Science and Electrical Engineering at Stanford University, and a Chan Zuckerberg Biohub San Francisco Investigator. Her research spans deep learning, computer vision, and multimodal modeling, with applications to biomedicine.",
    link: "https://ai.stanford.edu/~syyeung/",
    image: "./public/assets/speakers/serena.jpg",
    talkTitle: "Multimodal Generative Models Towards Generating Biomedical Insights",
    talkAbstract: "This talk will discuss where we are and where we still need to go towards multimodal generative models that can provide utility in generating scientific insights in biomedicine. It will explore two major directions: VQA models that can aid in data interpretation, and image generative virtual cell models that can visually simulate the effect of genetic and drug perturbations."
  },
  {
    name: "Vincent Sitzmann",
    affiliation: "MIT EECS",
    bio: "Assistant Professor at MIT leading the Scene Representation Group at CSAIL, focused on world models for graphics, vision, and robotics.",
    link: "https://www.vincentsitzmann.com/",
    image: "./public/assets/speakers/vincent.jpg"
  },
  {
    name: "Hadar Averbuch-Elor",
    affiliation: "Cornell University",
    bio: "Assistant Professor in Computer Science at Cornell University and Cornell Tech. Her research combines images, language, and 3D geometry to build multimodal perception systems for the full complexity of the real 3D world.",
    link: "https://www.hadarelor.com/",
    image: "./public/assets/speakers/hadar.jpg",
    talkTitle: "What Do Multimodal Foundation Models Learn Beyond What We Ask?",
    talkAbstract: "Multimodal foundation models have rapidly transformed computer vision and graphics, driving major advances across a wide range of visual tasks. But beyond their impressive performance on standard benchmarks, what additional structure and capabilities emerge during large-scale pretraining? In this talk, I will present two case studies that explore this question across two very different types of multimodal foundation models: text-to-image generative models on the one hand and 3D reconstruction models on the other. Together, these studies suggest that multimodal foundation models often acquire latent structure beyond what they were explicitly trained for, opening up new opportunities to uncover and leverage such emergent capabilities."
  },
  {
    name: "Trevor Darrell",
    affiliation: "UC Berkeley",
    bio: "Professor and co-lead of BAIR lab, pioneer in computer vision and multimodal learning.",
    link: "https://people.eecs.berkeley.edu/~trevor/",
    image: "./public/assets/speakers/trevor_v2.png"
  },
  {
    name: "Shuai Bai",
    affiliation: "Alibaba Group",
    bio: "Technical lead of Qwen-VL at the Qwen Team, Alibaba. His work focuses on multimodal foundation models, including visual understanding, multimodal reasoning, and visual agents, and on the Qwen-VL series across real-world multimodal scenarios.",
    link: "https://scholar.google.com/citations?user=ylhI1JsAAAAJ",
    image: "./public/assets/speakers/shuai-bai.jpg",
    talkTitle: "From Multimodal Understanding to Agentic Visual Intelligence",
    talkAbstract: "Multimodal foundation models are rapidly evolving from systems that understand visual inputs into systems that can reason, use tools, and act in complex real-world environments. In this talk, I will discuss this transition from perception to reasoning and agentic action, drawing on our experience building Qwen-VL. I will cover several emerging directions, including real-world visual understanding, multimodal reasoning, visual coding, GUI agents, document and video agents, and multimodal search. I will also discuss why evaluation needs to move beyond isolated benchmarks toward task-oriented, workflow-level, and agentic assessments. Finally, I will share some perspectives on what may come next for multimodal foundation models and how these systems can become more useful in real-world applications."
  }
];

const organizers = [
  { name: "Edson Araujo", affiliation: "University of Tübingen", link: "https://edsonroteia.github.io/", image: "./public/assets/organizers/edson.jpeg" },
  { name: "Roei Herzig", affiliation: "MIT-IBM Lab / UC Berkeley", link: "https://roeiherz.github.io/", image: "./public/assets/organizers/roei_square_bio.jpg" },
  { name: "David Chan", affiliation: "UC Berkeley", link: "https://dchan.cc/", image: "./public/assets/organizers/david.jpeg" },
  { name: "Bo Wu", affiliation: "MIT-IBM Watson AI Lab", link: "https://bobbywu.com/", image: "./public/assets/organizers/bobbywu.jpg" },
  { name: "Tsung-Han (Patrick) Wu", affiliation: "UC Berkeley", link: "https://tsunghan-wu.github.io/", image: "./public/assets/organizers/patrick.jpg" },
  { name: "Dantong Niu", affiliation: "UC Berkeley", link: "https://dantong88.github.io/", image: "./public/assets/organizers/dantong.jpeg" },
  { name: "Jiaxin Ge", affiliation: "UC Berkeley", link: "https://gejiaxin.org/", image: "./public/assets/organizers/jiaxin.jpg" },
  { name: "Eli Schwartz", affiliation: "IBM Research / TAU", link: "https://eli-schwartz.com/", image: "./public/assets/organizers/eli.jpg" },
  { name: "Nimrod Shabtay", affiliation: "IBM Reasearch / Tel-Aviv University", link: "https://www.linkedin.com/in/nimrod-shabtay/", image: "./public/assets/organizers/nimrod.jpeg" },
  { name: "Sivan Doveh", affiliation: "Stanford University", link: "https://sivandoveh.github.io/", image: "./public/assets/organizers/sivan.jpeg" },
  { name: "Jehanzeb Mirza", affiliation: "MIT CSAIL", link: "https://jmiemirza.github.io/", image: "./public/assets/organizers/mirza.jpg" },
  { name: "Rogerio Feris", affiliation: "MIT-IBM Lab", link: "http://www.rogerioferis.org", image: "./public/assets/organizers/rogerio.avif" },
  { name: "Hilde Kuehne", affiliation: "Tuebingen AI Center / MIT-IBM", link: "https://hildekuehne.github.io/", image: "./public/assets/organizers/Hilde.jpg" }
];

const LINK_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
`;

const schedule = [
  { time: "01:00 PM", title: "Welcome & Opening Remarks", description: "Edson Araujo (University of Tübingen)" },
  { time: "01:05 PM", title: "Keynote Talk 1", speakerIndex: 0, duration: "25min + 5min Q&A" },
  { time: "01:35 PM", title: "Keynote Talk 2", speakerIndex: 1, duration: "25min + 5min Q&A" },
  { time: "02:05 PM", title: "Keynote Talk 3", speakerIndex: 3, duration: "25min + 5min Q&A" },
  { time: "02:35 PM", type: "break", title: "Poster Session & Coffee Break", description: "Posters & networking; coffee served 3:00–4:00 PM" },
  { time: "04:00 PM", title: "Keynote Talk 4", speakerIndex: 2, duration: "25min + 5min Q&A" },
  { time: "04:30 PM", title: "Keynote Talk 5", speakerIndex: 4, duration: "25min + 5min Q&A" },
  { time: "05:00 PM", type: "highlight", title: "Panel Discussion: What is Next in Multimodal Foundation Models?", description: "Moderator: Edson Araujo. Panelists: All invited speakers." },
  { time: "05:55 PM", title: "Concluding Remarks", description: "5min summary" }
];

function renderSpeakers() {
  const grid = document.getElementById('speakers-grid');
  if (!grid) return;

  grid.innerHTML = speakers.map(s => `
    <div class="speaker-card">
      <div class="speaker-avatar">
        ${s.image
          ? `<img src="${s.image}" alt="${s.name}" class="speaker-img" loading="lazy">`
          : `<div class="speaker-placeholder">TBD</div>`}
      </div>
      <div class="speaker-info">
        <h3>${s.link ? `<a href="${s.link}" target="_blank" class="name-link">${s.name}</a>` : s.name}</h3>
        <p class="affiliation">${s.affiliation}</p>
        ${s.talkTitle ? `<p class="talk-title">&ldquo;${s.talkTitle}&rdquo;</p>` : ''}
        <p class="bio">${s.bio}</p>
        ${s.talkAbstract ? `
          <details class="abstract">
            <summary>Read abstract</summary>
            <p>${s.talkAbstract}</p>
          </details>` : ''}
      </div>
    </div>
  `).join('');
}

function renderSchedule() {
  const container = document.getElementById('schedule-container');
  if (!container) return;

  container.innerHTML = schedule.map(item => {
    let content = `<h4>${item.title}</h4>`;
    let speakerImg = "";

    if (item.speakerIndex !== undefined) {
      const speaker = speakers[item.speakerIndex];
      content += `<p>${speaker.name} (${speaker.affiliation})<br>${item.duration}</p>`;
      speakerImg = speaker.image
        ? `<img src="${speaker.image}" alt="${speaker.name}" class="schedule-speaker-img" loading="lazy">`
        : `<div class="schedule-speaker-img schedule-speaker-placeholder">TBD</div>`;
    } else if (item.type === 'highlight') {
      content += `<p>${item.description}</p>`;
      speakerImg = `
        <div class="panel-grid">
          ${speakers.filter(s => s.name !== "Shuai Bai").map(s => s.image
            ? `<img src="${s.image}" alt="${s.name}" class="panel-img" title="${s.name}" loading="lazy">`
            : `<div class="panel-img panel-img-placeholder" title="${s.name}">TBD</div>`
          ).join('')}
        </div>
      `;
    } else {
      content += `<p>${item.description}</p>`;
    }

    const classes = ['schedule-item'];
    if (item.type) classes.push(item.type);

    return `
      <div class="${classes.join(' ')}">
        <span class="time">${item.time}</span>
        <div class="content">
          ${content}
        </div>
        ${speakerImg}
      </div>
    `;
  }).join('');
}

function renderOrganizers() {
  const grid = document.getElementById('organizers-grid');
  if (!grid) return;

  grid.innerHTML = organizers.map(o => `
    <div class="organizer-card">
      <div class="organizer-avatar">
        ${o.image ? `<img src="${o.image}" alt="${o.name}" class="organizer-img" loading="lazy">` : `<div class="organizer-placeholder">${o.name.charAt(0)}</div>`}
      </div>
      <div class="organizer-info">
        <h4><a href="${o.link}" target="_blank" class="name-link">${o.name}</a></h4>
        <p>${o.affiliation}</p>
      </div>
      <a href="${o.link}" target="_blank" class="card-link-icon" title="Visit Website">${LINK_ICON}</a>
    </div>
  `).join('');
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderSpeakers();
  renderSchedule();
  renderOrganizers();

  // Deadline time tooltips — show local timezone on hover
  const tooltip = document.createElement('span');
  tooltip.className = 'deadline-tooltip';
  document.body.appendChild(tooltip);

  function positionTooltip(el) {
    const rect = el.getBoundingClientRect();
    const tw = tooltip.offsetWidth;
    const th = tooltip.offsetHeight;
    const gap = 6;

    // Prefer above, fall back to below if not enough space
    let top;
    if (rect.top - th - gap >= 0) {
      top = rect.top - th - gap;
    } else {
      top = rect.bottom + gap;
    }

    // Center horizontally, clamp to viewport
    let left = rect.left + rect.width / 2 - tw / 2;
    left = Math.max(8, Math.min(left, window.innerWidth - tw - 8));

    tooltip.style.top = top + 'px';
    tooltip.style.left = left + 'px';
  }

  document.querySelectorAll('.deadline-time[data-utc]').forEach(el => {
    const utc = new Date(el.dataset.utc);
    const local = utc.toLocaleString(undefined, {
      month: 'long', day: 'numeric', year: 'numeric',
      hour: '2-digit', minute: '2-digit', timeZoneName: 'short'
    });
    const text = local + ' (your local time)';

    el.addEventListener('mouseenter', () => {
      tooltip.textContent = text;
      // Allow layout to update before measuring and positioning
      requestAnimationFrame(() => {
        positionTooltip(el);
        tooltip.classList.add('visible');
      });
    });
    el.addEventListener('mouseleave', () => {
      tooltip.classList.remove('visible');
    });
  });

  // Announcement Popup — shown on every page load
  const announceOverlay = document.getElementById('announce-overlay');
  if (announceOverlay) {
    const closeBtn = document.getElementById('announce-close');
    const ctaBtn = document.getElementById('announce-cta');
    let lastFocused = null;

    const openAnnounce = () => {
      lastFocused = document.activeElement;
      announceOverlay.hidden = false;
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => {
        announceOverlay.classList.add('visible');
        ctaBtn?.focus();
      });
    };

    const closeAnnounce = () => {
      announceOverlay.classList.remove('visible');
      document.body.style.overflow = '';
      const onEnd = () => {
        announceOverlay.hidden = true;
        announceOverlay.removeEventListener('transitionend', onEnd);
        if (lastFocused && typeof lastFocused.focus === 'function') lastFocused.focus();
      };
      announceOverlay.addEventListener('transitionend', onEnd);
      // Fallback in case transitionend doesn't fire (e.g. reduced motion)
      setTimeout(onEnd, 400);
    };

    closeBtn?.addEventListener('click', closeAnnounce);
    ctaBtn?.addEventListener('click', closeAnnounce);
    announceOverlay.addEventListener('click', (e) => {
      if (e.target === announceOverlay) closeAnnounce();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !announceOverlay.hidden) closeAnnounce();
    });

    openAnnounce();
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links a');

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  const scrollY = window.scrollY;

  // Navbar aesthetic change (shrink/shadow)
  if (scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }

  // Workshop tag appearance (only after hero badge is scrolled away)
  if (scrollY > 150) {
    nav.classList.add('show-tag');
  } else {
    nav.classList.remove('show-tag');
  }
});
