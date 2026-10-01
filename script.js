const CATEGORIES = [["Music", "♫", "Soundtracks, beats and background music"], ["Motion Graphics", "✧", "Overlays, transitions and visual effects"], ["Video Templates", "▧", "Templates for video and social content"], ["Sound Effects", "◖))", "Whooshes, impacts and UI sounds"], ["Stock Footage", "▶", "Video clips and cinematic shots"], ["Fonts", "Aa", "Typography for your next project"], ["Icons", "✳", "UI, social and website icon sets"], ["HDRIs", "◉", "Lighting maps for 3D creator workflows"], ["AI Creator Tools", "✦", "Tools for video, image and audio creation"]];
const ASSETS = [
  {
    "slug": "epic-cinematic-music",
    "title": "Epic Cinematic Music",
    "category": "Music",
    "type": "Free",
    "license": "Check official license",
    "description": "Cinematic soundtracks for trailers, storytelling and high-impact edits.",
    "official_url": "https://pixabay.com/music/",
    "icon": "♫",
    "accent": "purple"
  },
  {
    "slug": "lofi-background-music",
    "title": "Lo-Fi Background Music",
    "category": "Music",
    "type": "Free",
    "license": "Check official license",
    "description": "Laid-back music for study videos, lifestyle content and chill edits.",
    "official_url": "https://pixabay.com/music/",
    "icon": "♫",
    "accent": "blue"
  },
  {
    "slug": "cinematic-whoosh-sfx",
    "title": "Cinematic Whoosh SFX",
    "category": "Sound Effects",
    "type": "Free",
    "license": "Check official license",
    "description": "Whoosh and transition sounds to give edits a clean sense of movement.",
    "official_url": "https://pixabay.com/sound-effects/",
    "icon": "◖))",
    "accent": "orange"
  },
  {
    "slug": "free-stock-video",
    "title": "Free Stock Video Library",
    "category": "Stock Footage",
    "type": "Free",
    "license": "Check official license",
    "description": "Find footage for YouTube videos, reels, presentations and promos.",
    "official_url": "https://www.pexels.com/videos/",
    "icon": "▶",
    "accent": "green"
  },
  {
    "slug": "creator-font-library",
    "title": "Creator Font Library",
    "category": "Fonts",
    "type": "Free",
    "license": "Check each font license",
    "description": "Typography for thumbnails, titles, brand identities and social posts.",
    "official_url": "https://fonts.google.com/",
    "icon": "Aa",
    "accent": "pink"
  },
  {
    "slug": "social-media-icons",
    "title": "Social Media Icon Resources",
    "category": "Icons",
    "type": "Free",
    "license": "Check official license",
    "description": "Discover icons for websites, creator dashboards and social content.",
    "official_url": "https://www.flaticon.com/",
    "icon": "✳",
    "accent": "blue"
  },
  {
    "slug": "motion-graphics-resources",
    "title": "Motion Graphics Resources",
    "category": "Motion Graphics",
    "type": "Free",
    "license": "Check official license",
    "description": "Visual elements and editing resources for motion-driven content.",
    "official_url": "https://mixkit.co/",
    "icon": "✧",
    "accent": "purple"
  },
  {
    "slug": "youtube-video-templates",
    "title": "Video Template Library",
    "category": "Video Templates",
    "type": "Free",
    "license": "Check official license",
    "description": "Explore template resources for creator videos and social promos.",
    "official_url": "https://mixkit.co/",
    "icon": "▧",
    "accent": "orange"
  },
  {
    "slug": "creator-ai-video-tools",
    "title": "AI Video Creator Tools",
    "category": "AI Creator Tools",
    "type": "Free",
    "license": "Check provider terms",
    "description": "Explore tools that can support video creation and editing workflows.",
    "official_url": "https://www.canva.com/",
    "icon": "✦",
    "accent": "green"
  },
  {
    "slug": "blender-hdri-resources",
    "title": "Blender HDRI Resources",
    "category": "HDRIs",
    "type": "Free",
    "license": "Check individual license",
    "description": "HDRI resources for rendering, product visualization and 3D motion design.",
    "official_url": "https://polyhaven.com/hdris",
    "icon": "◉",
    "accent": "pink"
  },
  {
    "slug": "minimal-video-transitions",
    "title": "Minimal Video Transitions",
    "category": "Motion Graphics",
    "type": "Premium",
    "license": "Commercial license varies",
    "description": "Clean transitions and visual elements for polished video edits.",
    "official_url": "https://elements.envato.com/video-templates",
    "icon": "✧",
    "accent": "purple"
  },
  {
    "slug": "impact-hit-sound-effects",
    "title": "Impact & Hit Sound Effects",
    "category": "Sound Effects",
    "type": "Free",
    "license": "Check official license",
    "description": "Impact sounds for trailers, gaming edits and short-form videos.",
    "official_url": "https://pixabay.com/sound-effects/",
    "icon": "◖))",
    "accent": "orange"
  }
];

const ICONS = {"Music":"♫","Motion Graphics":"✧","Video Templates":"▧","Sound Effects":"◖))","Stock Footage":"▶","Fonts":"Aa","Icons":"✳","HDRIs":"◉","AI Creator Tools":"✦"};
function esc(s){return String(s??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}
function card(a){return `<article class="asset-card"><a class="asset-art art-${esc(a.accent)}" href="asset.html?slug=${encodeURIComponent(a.slug)}"><span class="art-grid"></span><span class="art-icon">${esc(a.icon||ICONS[a.category]||"✦")}</span><span class="art-label">${esc(a.category)}</span></a><div class="asset-info"><div class="chips"><span class="chip">${esc(a.category)}</span><span class="chip ${a.type==="Free"?"chip-free":"chip-premium"}">${esc(a.type)}</span></div><h3><a href="asset.html?slug=${encodeURIComponent(a.slug)}">${esc(a.title)}</a></h3><p>${esc(a.description)}</p><a class="text-link" href="asset.html?slug=${encodeURIComponent(a.slug)}">Explore resource <span>↗</span></a></div></article>`;}
function loadHome(){
 const catEl=document.getElementById("categoryGrid");
 if(catEl) catEl.innerHTML=CATEGORIES.map(c=>`<a class="category-card" href="search.html?category=${encodeURIComponent(c[0])}"><span class="category-icon">${c[1]}</span><span class="category-copy"><b>${esc(c[0])}</b><small>${esc(c[2])}</small></span><span class="category-arrow">↗</span></a>`).join("");
 const featured=document.getElementById("featuredGrid");
 if(featured) featured.innerHTML=ASSETS.slice(0,6).map(card).join("");
 const count=document.getElementById("resourceCount"); if(count) count.textContent=ASSETS.length+"+";
}
function loadAsset(){
 const slug=new URLSearchParams(location.search).get("slug");
 const a=ASSETS.find(x=>x.slug===slug), root=document.getElementById("assetPage");
 if(!a){root.innerHTML=`<div class="empty-state"><h1>Resource not found</h1><p>Try searching the catalog instead.</p><a class="btn btn-primary" href="search.html">Browse resources</a></div>`;return;}
 document.title=`${a.title} — CreatorVault`;
 root.innerHTML=`<a class="back-link" href="search.html">← Back to discovery</a><article class="detail-layout"><div class="detail-art art-${esc(a.accent)}"><span class="art-grid"></span><span class="art-icon">${esc(a.icon||ICONS[a.category]||"✦")}</span><span class="art-label">${esc(a.category)}</span></div><div class="detail-copy"><div class="chips"><span class="chip">${esc(a.category)}</span><span class="chip ${a.type==="Free"?"chip-free":"chip-premium"}">${esc(a.type)}</span></div><div class="eyebrow">CREATOR RESOURCE</div><h1>${esc(a.title)}</h1><p class="detail-description">${esc(a.description)}</p><div class="license-box"><span>LICENSE CHECK</span><b>${esc(a.license)}</b><small>Always verify the current terms on the provider's official page.</small></div><a class="btn btn-primary source-btn" href="${esc(a.official_url)}" target="_blank" rel="noopener noreferrer">Open official source <span>↗</span></a><p class="fine-print">CreatorVault is a discovery catalog. Third-party assets remain the property of their respective owners; we do not host these files.</p></div></article><section class="section compact"><div class="section-heading"><div><div class="eyebrow">KEEP EXPLORING</div><h2>Related resources</h2></div><a class="text-link" href="search.html">View all ↗</a></div><div class="asset-grid">${ASSETS.filter(x=>x.category===a.category&&x.slug!==a.slug).slice(0,3).map(card).join("")||ASSETS.filter(x=>x.slug!==a.slug).slice(0,3).map(card).join("")}</div></section>`;
}
let activeCategory=new URLSearchParams(location.search).get("category")||"";
function initSearch(){
 const q=new URLSearchParams(location.search).get("q")||"";
 const input=document.getElementById("searchInput");input.value=q;
 const filters=document.getElementById("filters");
 filters.innerHTML=`<button class="filter ${!activeCategory?"active":""}" data-cat="">All resources</button>`+CATEGORIES.map(c=>`<button class="filter ${activeCategory===c[0]?"active":""}" data-cat="${esc(c[0])}">${esc(c[0])}</button>`).join("");
 filters.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>{activeCategory=b.dataset.cat;filters.querySelectorAll("button").forEach(x=>x.classList.toggle("active",x===b));runSearch();}));
 input.addEventListener("input",runSearch);document.getElementById("searchForm").addEventListener("submit",e=>{e.preventDefault();runSearch();});
 runSearch();
}
function runSearch(){
 const q=(document.getElementById("searchInput")?.value||"").trim().toLowerCase();
 const result=ASSETS.filter(a=>(!activeCategory||a.category===activeCategory)&&(!q||`${a.title} ${a.category} ${a.description} ${a.license} ${a.type}`.toLowerCase().includes(q)));
 const grid=document.getElementById("resultsGrid");if(!grid)return;
 document.getElementById("resultCount").textContent=`${result.length} resource${result.length===1?"":"s"} found`;
 grid.innerHTML=result.length?result.map(card).join(""):`<div class="empty-state"><h3>No matching resources</h3><p>Try a different keyword or choose another category.</p><button class="btn btn-secondary" onclick="clearFilters()">Clear filters</button></div>`;
}
function clearFilters(){activeCategory="";document.getElementById("searchInput").value="";document.querySelectorAll(".filter").forEach(b=>b.classList.toggle("active",b.dataset.cat===""));runSearch();}
