(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();const o=[{name:"Serena Yeung-Levy",affiliation:"Stanford University",bio:"Assistant Professor focused on computer vision and deep learning in healthcare.",link:"https://ai.stanford.edu/~syyeung/",image:"./assets/speakers/serena.jpg"},{name:"Saining Xie",affiliation:"New York University",bio:"Assistant Professor at NYU Courant, expert in representation learning.",link:"https://www.sainingxie.com/",image:"./assets/speakers/Saining-Xie-300x300.jpg"},{name:"Hadar Averbuch-Elor",affiliation:"Cornell University",bio:"Assistant Professor focused on graphics and vision with structured modalities.",link:"https://www.hadarelor.com/",image:"./assets/speakers/hadar.jpg"},{name:"Trevor Darrell",affiliation:"UC Berkeley",bio:"Professor and co-lead of BAIR lab, pioneer in computer vision and multimodal learning.",link:"https://people.eecs.berkeley.edu/~trevor/",image:"./assets/speakers/trevor_v2.png"}],c=[{name:"Edson Araujo",affiliation:"University of Tübingen",link:"https://edsonroteia.github.io/",image:"./assets/organizers/edson.jpeg"},{name:"Roei Herzig",affiliation:"MIT-IBM Lab / UC Berkeley",link:"https://roeiherz.github.io/",image:"./assets/organizers/roei_square_bio.png"},{name:"David Chan",affiliation:"UC Berkeley",link:"https://dchan.cc/",image:"./assets/organizers/david.jpeg"},{name:"Bo Wu",affiliation:"MIT-IBM Watson AI Lab",link:"https://bobbywu.com/",image:"./assets/organizers/bobbywu.jpg"},{name:"Tsung-Han (Patrick) Wu",affiliation:"UC Berkeley",link:"https://tsunghan-wu.github.io/",image:"./assets/organizers/patrick.jpg"},{name:"Dantong Niu",affiliation:"UC Berkeley",link:"https://dantong88.github.io/",image:"./assets/organizers/dantong.jpeg"},{name:"Jiaxin Ge",affiliation:"UC Berkeley",link:"https://gejiaxin.org/",image:"./assets/organizers/jiaxin.jpg"},{name:"Eli Schwartz",affiliation:"IBM Research / TAU",link:"https://eli-schwartz.com/",image:"./assets/organizers/eli.jpg"},{name:"Nimrod Shabtay",affiliation:"IBM Reasearch / Tel-Aviv University",link:"https://www.linkedin.com/in/nimrod-shabtay/",image:"./assets/organizers/nimrod.jpeg"},{name:"Sivan Doveh",affiliation:"Stanford University",link:"https://sivandoveh.github.io/",image:"./assets/organizers/sivan.jpeg"},{name:"Jehanzeb Mirza",affiliation:"MIT CSAIL",link:"https://jmiemirza.github.io/",image:"./assets/organizers/mirza.png"},{name:"Rogerio Feris",affiliation:"MIT-IBM Lab",link:"http://www.rogerioferis.org",image:"./assets/organizers/rogerio.avif"},{name:"Hilde Kuehne",affiliation:"Tuebingen AI Center / MIT-IBM",link:"https://hildekuehne.github.io/",image:"./assets/organizers/Hilde.jpg"}],d=[{time:"08:30 AM",title:"Welcome & Opening Remarks",description:"Edson Araujo (University of Tübingen)"},{time:"08:35 AM",title:"Keynote Talk 1",speakerIndex:0,duration:"25min + 5min Q&A"},{time:"09:05 AM",title:"Keynote Talk 2",speakerIndex:1,duration:"25min + 5min Q&A"},{time:"09:35 AM",type:"break",title:"Poster Session & Coffee Break",description:"1h 15min of networking and poster presentations"},{time:"10:50 AM",title:"Keynote Talk 3",speakerIndex:2,duration:"25min + 5min Q&A"},{time:"11:20 AM",title:"Keynote Talk 4",speakerIndex:3,duration:"25min + 5min Q&A"},{time:"11:50 AM",type:"highlight",title:"Panel Discussion: What is Next in Multimodal Foundation Models?",description:"Moderator: Edson Araujo. Panelists: All invited speakers."},{time:"12:50 PM",title:"Concluding Remarks",description:"10min summary"}],l=`
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="external-link-icon">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
`;function g(){const n=document.getElementById("speakers-grid");n&&(n.innerHTML=o.map(e=>`
    <div class="speaker-card">
      <div class="speaker-avatar">
        <img src="${e.image}" alt="${e.name}" class="speaker-img">
      </div>
      <div class="speaker-info">
        <h3><a href="${e.link}" target="_blank" class="name-link">${e.name}</a></h3>
        <p class="affiliation">${e.affiliation}</p>
        <p class="bio">${e.bio}</p>
      </div>
      <a href="${e.link}" target="_blank" class="card-link-icon" title="Visit Website">${l}</a>
    </div>
  `).join(""))}function m(){const n=document.getElementById("schedule-container");n&&(n.innerHTML=d.map(e=>{let t=`<h4>${e.title}</h4>`,s="";if(e.speakerIndex!==void 0){const i=o[e.speakerIndex];t+=`<p>${i.name} (${i.affiliation})<br>${e.duration}</p>`,s=`<img src="${i.image}" alt="${i.name}" class="schedule-speaker-img">`}else e.type==="highlight"?(t+=`<p>${e.description}</p>`,s=`
        <div class="panel-grid">
          ${o.slice(0,4).map(i=>`
            <img src="${i.image}" alt="${i.name}" class="panel-img" title="${i.name}">
          `).join("")}
        </div>
      `):t+=`<p>${e.description}</p>`;const a=["schedule-item"];return e.type&&a.push(e.type),`
      <div class="${a.join(" ")}">
        <span class="time">${e.time}</span>
        <div class="content">
          ${t}
        </div>
        ${s}
      </div>
    `}).join(""))}function p(){const n=document.getElementById("organizers-grid");n&&(n.innerHTML=c.map(e=>`
    <div class="organizer-card">
      <div class="organizer-avatar">
        ${e.image?`<img src="${e.image}" alt="${e.name}" class="organizer-img">`:`<div class="organizer-placeholder">${e.name.charAt(0)}</div>`}
      </div>
      <div class="organizer-info">
        <h4><a href="${e.link}" target="_blank" class="name-link">${e.name}</a></h4>
        <p>${e.affiliation}</p>
      </div>
      <a href="${e.link}" target="_blank" class="card-link-icon" title="Visit Website">${l}</a>
    </div>
  `).join(""))}document.addEventListener("DOMContentLoaded",()=>{g(),m(),p();const n=document.querySelector(".mobile-menu-btn"),e=document.querySelector(".nav-links"),t=document.querySelectorAll(".nav-links a");n&&e&&(n.addEventListener("click",()=>{n.classList.toggle("active"),e.classList.toggle("active"),document.body.style.overflow=e.classList.contains("active")?"hidden":""}),t.forEach(s=>{s.addEventListener("click",()=>{n.classList.remove("active"),e.classList.remove("active"),document.body.style.overflow=""})}))});window.addEventListener("scroll",()=>{const n=document.querySelector(".navbar"),e=window.scrollY;e>50?n.classList.add("scrolled"):n.classList.remove("scrolled"),e>150?n.classList.add("show-tag"):n.classList.remove("show-tag")});
