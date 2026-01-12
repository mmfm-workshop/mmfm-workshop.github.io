(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}})();const o=[{name:"Serena Yeung-Levy",affiliation:"Stanford University",bio:"Assistant Professor focused on computer vision and deep learning in healthcare.",link:"https://ai.stanford.edu/~syyeung/",image:"/assets/speakers/serena.jpg"},{name:"Saining Xie",affiliation:"New York University",bio:"Assistant Professor at NYU Courant, expert in representation learning.",link:"https://www.sainingxie.com/",image:"/assets/speakers/Saining-Xie-300x300.jpg"},{name:"Hadar Averbuch-Elor",affiliation:"Cornell University",bio:"Assistant Professor focused on graphics and vision with structured modalities.",link:"https://www.cs.cornell.edu/~hadarelor/",image:"/assets/speakers/hadar.jpg"},{name:"Trevor Darrell",affiliation:"UC Berkeley",bio:"Professor and co-lead of BAIR lab, pioneer in computer vision and multimodal learning.",link:"https://people.eecs.berkeley.edu/~trevor/",image:"/assets/speakers/trevor.png"}],d=[{name:"Edson Araujo",affiliation:"University of Tübingen",link:"https://edsonroteia.github.io/",image:"/assets/organizers/edson.jpeg"},{name:"Roei Herzig",affiliation:"MIT-IBM Lab / UC Berkeley",link:"https://roeiherz.github.io/",image:"/assets/organizers/roei_square_bio.png"},{name:"David Chan",affiliation:"UC Berkeley",link:"https://dchan.cc/",image:"/assets/organizers/david.jpeg"},{name:"Bo Wu",affiliation:"MIT-IBM Watson AI Lab",link:"https://bobbywu.com/",image:"/assets/organizers/bobbywu.jpg"},{name:"Tsung-Han (Patrick) Wu",affiliation:"UC Berkeley",link:"https://tsunghan-wu.github.io/",image:"/assets/organizers/patrick.jpg"},{name:"Dantong Niu",affiliation:"UC Berkeley",link:"https://dantong88.github.io/",image:"/assets/organizers/dantong.jpeg"},{name:"Jiaxin Ge",affiliation:"UC Berkeley",link:"https://gejiaxin.org/",image:"/assets/organizers/jiaxin.jpg"},{name:"Eli Schwartz",affiliation:"IBM Research / TAU",link:"https://eli-schwartz.com/",image:"/assets/organizers/eli.jpg"},{name:"Nimrod Shabtay",affiliation:"Tel Aviv University",link:"https://www.linkedin.com/in/nimrod-shabtay/",image:"/assets/organizers/nimrod.jpeg"},{name:"Sivan Doveh",affiliation:"Stanford University",link:"https://sivandoveh.github.io/",image:"/assets/organizers/sivan.jpeg"},{name:"Jehanzeb Mirza",affiliation:"MIT CSAIL",link:"https://jmiemirza.github.io/",image:"/assets/organizers/mirza.png"},{name:"Rogerio Feris",affiliation:"MIT-IBM Lab",link:"http://www.rogerioferis.org",image:"/assets/organizers/rogerio.avif"},{name:"Hilde Kuehne",affiliation:"Tuebingen AI Center / MIT-IBM",link:"https://hildekuehne.github.io/",image:"/assets/organizers/Hilde.jpg"}],c=[{time:"08:30 AM",title:"Welcome & Opening Remarks",description:"Edson Araujo (University of Tübingen)"},{time:"08:35 AM",title:"Keynote Talk 1",speakerIndex:0,duration:"25min + 5min Q&A"},{time:"09:05 AM",title:"Keynote Talk 2",speakerIndex:1,duration:"25min + 5min Q&A"},{time:"09:35 AM",type:"break",title:"Poster Session & Coffee Break",description:"1h 15min of networking and poster presentations"},{time:"10:50 AM",title:"Keynote Talk 3",speakerIndex:2,duration:"25min + 5min Q&A"},{time:"11:20 AM",title:"Keynote Talk 4",speakerIndex:3,duration:"25min + 5min Q&A"},{time:"11:50 AM",type:"highlight",title:"Panel Discussion: What is Next in Multimodal Foundation Models?",description:"Moderator: Edson Araujo. Panelists: All invited speakers."},{time:"12:50 PM",title:"Concluding Remarks",description:"10min summary"}],l=`
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="external-link-icon">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
`;function g(){const a=document.getElementById("speakers-grid");a&&(a.innerHTML=o.map(e=>`
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
  `).join(""))}function p(){const a=document.getElementById("schedule-container");a&&(a.innerHTML=c.map(e=>{let s=`<h4>${e.title}</h4>`,t="";if(e.speakerIndex!==void 0){const i=o[e.speakerIndex];s+=`<p>${i.name} (${i.affiliation})<br>${e.duration}</p>`,t=`<img src="${i.image}" alt="${i.name}" class="schedule-speaker-img">`}else e.type==="highlight"?(s+=`<p>${e.description}</p>`,t=`
        <div class="panel-grid">
          ${o.slice(0,4).map(i=>`
            <img src="${i.image}" alt="${i.name}" class="panel-img" title="${i.name}">
          `).join("")}
        </div>
      `):s+=`<p>${e.description}</p>`;const n=["schedule-item"];return e.type&&n.push(e.type),`
      <div class="${n.join(" ")}">
        <span class="time">${e.time}</span>
        <div class="content">
          ${s}
        </div>
        ${t}
      </div>
    `}).join(""))}function m(){const a=document.getElementById("organizers-grid");a&&(a.innerHTML=d.map(e=>`
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
  `).join(""))}document.addEventListener("DOMContentLoaded",()=>{g(),p(),m()});window.addEventListener("scroll",()=>{const a=document.querySelector(".navbar"),e=window.scrollY;e>50?a.classList.add("scrolled"):a.classList.remove("scrolled"),e>150?a.classList.add("show-tag"):a.classList.remove("show-tag")});
