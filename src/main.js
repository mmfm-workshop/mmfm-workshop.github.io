const speakers = [
  {
    name: "Serena Yeung-Levy",
    affiliation: "Stanford University",
    bio: "Assistant Professor focused on computer vision and deep learning in healthcare.",
    link: "https://ai.stanford.edu/~syyeung/",
    image: "./assets/speakers/serena.jpg"
  },
  {
    name: "Saining Xie",
    affiliation: "New York University",
    bio: "Assistant Professor at NYU Courant, expert in representation learning.",
    link: "https://www.sainingxie.com/",
    image: "./assets/speakers/Saining-Xie-300x300.jpg"
  },
  {
    name: "Hadar Averbuch-Elor",
    affiliation: "Cornell University",
    bio: "Assistant Professor focused on graphics and vision with structured modalities.",
    link: "https://www.hadarelor.com/",
    image: "./assets/speakers/hadar.jpg"
  },
  {
    name: "Trevor Darrell",
    affiliation: "UC Berkeley",
    bio: "Professor and co-lead of BAIR lab, pioneer in computer vision and multimodal learning.",
    link: "https://people.eecs.berkeley.edu/~trevor/",
    image: "./assets/speakers/trevor_v2.png"
  }
];

const organizers = [
  { name: "Edson Araujo", affiliation: "University of Tübingen", link: "https://edsonroteia.github.io/", image: "./assets/organizers/edson.jpeg" },
  { name: "Roei Herzig", affiliation: "MIT-IBM Lab / UC Berkeley", link: "https://roeiherz.github.io/", image: "./assets/organizers/roei_square_bio.png" },
  { name: "David Chan", affiliation: "UC Berkeley", link: "https://dchan.cc/", image: "./assets/organizers/david.jpeg" },
  { name: "Bo Wu", affiliation: "MIT-IBM Watson AI Lab", link: "https://bobbywu.com/", image: "./assets/organizers/bobbywu.jpg" },
  { name: "Tsung-Han (Patrick) Wu", affiliation: "UC Berkeley", link: "https://tsunghan-wu.github.io/", image: "./assets/organizers/patrick.jpg" },
  { name: "Dantong Niu", affiliation: "UC Berkeley", link: "https://dantong88.github.io/", image: "./assets/organizers/dantong.jpeg" },
  { name: "Jiaxin Ge", affiliation: "UC Berkeley", link: "https://gejiaxin.org/", image: "./assets/organizers/jiaxin.jpg" },
  { name: "Eli Schwartz", affiliation: "IBM Research / TAU", link: "https://eli-schwartz.com/", image: "./assets/organizers/eli.jpg" },
  { name: "Nimrod Shabtay", affiliation: "IBM Reasearch / Tel-Aviv University", link: "https://www.linkedin.com/in/nimrod-shabtay/", image: "./assets/organizers/nimrod.jpeg" },
  { name: "Sivan Doveh", affiliation: "Stanford University", link: "https://sivandoveh.github.io/", image: "./assets/organizers/sivan.jpeg" },
  { name: "Jehanzeb Mirza", affiliation: "MIT CSAIL", link: "https://jmiemirza.github.io/", image: "./assets/organizers/mirza.png" },
  { name: "Rogerio Feris", affiliation: "MIT-IBM Lab", link: "http://www.rogerioferis.org", image: "./assets/organizers/rogerio.avif" },
  { name: "Hilde Kuehne", affiliation: "Tuebingen AI Center / MIT-IBM", link: "https://hildekuehne.github.io/", image: "./assets/organizers/Hilde.jpg" }
];

const schedule = [
  { time: "08:30 AM", title: "Welcome & Opening Remarks", description: "Edson Araujo (University of Tübingen)" },
  { time: "08:35 AM", title: "Keynote Talk 1", speakerIndex: 0, duration: "25min + 5min Q&A" },
  { time: "09:05 AM", title: "Keynote Talk 2", speakerIndex: 1, duration: "25min + 5min Q&A" },
  { time: "09:35 AM", type: "break", title: "Poster Session & Coffee Break", description: "1h 15min of networking and poster presentations" },
  { time: "10:50 AM", title: "Keynote Talk 3", speakerIndex: 2, duration: "25min + 5min Q&A" },
  { time: "11:20 AM", title: "Keynote Talk 4", speakerIndex: 3, duration: "25min + 5min Q&A" },
  { time: "11:50 AM", type: "highlight", title: "Panel Discussion: What is Next in Multimodal Foundation Models?", description: "Moderator: Edson Araujo. Panelists: All invited speakers." },
  { time: "12:50 PM", title: "Concluding Remarks", description: "10min summary" }
];

const LINK_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="external-link-icon">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
`;

function renderSpeakers() {
  const grid = document.getElementById('speakers-grid');
  if (!grid) return;

  grid.innerHTML = speakers.map(s => `
    <div class="speaker-card">
      <div class="speaker-avatar">
        <img src="${s.image}" alt="${s.name}" class="speaker-img">
      </div>
      <div class="speaker-info">
        <h3><a href="${s.link}" target="_blank" class="name-link">${s.name}</a></h3>
        <p class="affiliation">${s.affiliation}</p>
        <p class="bio">${s.bio}</p>
      </div>
      <a href="${s.link}" target="_blank" class="card-link-icon" title="Visit Website">${LINK_ICON}</a>
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
      speakerImg = `<img src="${speaker.image}" alt="${speaker.name}" class="schedule-speaker-img">`;
    } else if (item.type === 'highlight') {
      content += `<p>${item.description}</p>`;
      speakerImg = `
        <div class="panel-grid">
          ${speakers.slice(0, 4).map(s => `
            <img src="${s.image}" alt="${s.name}" class="panel-img" title="${s.name}">
          `).join('')}
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
        ${o.image ? `<img src="${o.image}" alt="${o.name}" class="organizer-img">` : `<div class="organizer-placeholder">${o.name.charAt(0)}</div>`}
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
