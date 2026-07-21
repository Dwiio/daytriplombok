const WA='6281947816355';
const P='assets/photos/';
const photos={
  gili:P+'gili-meno-beach.jpg',
  gili2:P+'gili-islands-rinjani.jpg',
  pink:P+'pink-beach.jpg',
  sasak:P+'sasak-village.jpg',
  waterfall:P+'senaru-waterfall.jpg',
  rinjani:P+'rinjani-caldera.jpg',
  rinjani2:P+'rinjani-segara-anak.jpg',
  south:P+'mawun-beach.jpg',
  bay:P+'kuta-mawun-banner.jpg',
  air:P+'rinjani-from-gili-air.jpg'
};
const img=(key)=>photos[key]||photos.gili;
let currentLang='id';
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);

const text={
  id:{
    pageTitle:'DayTripLombok — Semeton Tour & Travel', loading:'Loading Lombok Experience...',
    navHome:'Home',navTours:'Tours',navRinjani:'Rinjani',navExp:'Experiences',navTransport:'Transport',navDest:'Destinations',navGallery:'Gallery',navBlog:'Blog',navContact:'Contact',
    heroEyebrow:'Lombok Private Tour • Daily Trip • Rinjani Trekking',
    heroTitle:'Explore Lombok with a modern local travel partner.',
    heroLead:'Paket wisata Lombok, Gili, Pink Beach, Rinjani, waterfall, dan transport dengan booking cepat melalui WhatsApp.',
    viewPackages:'Lihat Paket', bookingWa:'Booking WhatsApp', searchPlaceholder:'Cari: Gili, Pink Beach, Rinjani...', searchBtn:'Search', trusted:'Trusted Lombok tour experience',
    statPackages:'Tour Packages', statGuests:'Happy Guests', statDest:'Top Destinations', statSupport:'Days Support',
    dailyTours:'Daily Tours', popularTitle:'Paket wisata paling populer', popularDesc:'Filter paket, buka detail itinerary, lalu booking langsung ke WhatsApp.',
    filterAll:'All', filterBeach:'Beach', filterCulture:'Culture', filterAdventure:'Adventure', filterFamily:'Family',
    rinjaniEyebrow:'Rinjani Trekking', rinjaniTitle:'Mount Rinjani trekking package', rinjaniDesc:'Program 2D1N, 3D2N, dan private trekking dengan itinerary, porter, guide, camping equipment, dan pickup area tertentu.', askRinjani:'Ask Rinjani Package',
    expEyebrow:'Experiences', expTitle:'Pengalaman Lombok yang bisa dijual', expCardDesc:'Fitur siap digunakan untuk mempromosikan aktivitas Lombok.',
    transportEyebrow:'Transport', transportTitle:'Transport & private driver', transportDesc:'Fitur transport berfungsi untuk request airport transfer, full day car, dan custom route via WhatsApp.',
    carTitle:'Private Car + Driver', carDesc:'Airport pickup, hotel transfer, full day Lombok trip, atau multi-day transport.', carPrice:'Mulai Rp550.000 / day', bookTransport:'Book Transport',
    destEyebrow:'Destinations', destTitle:'Destinasi unggulan Lombok', destOpened:'Destinasi dibuka. Bisa dibuat halaman detail.',
    galleryEyebrow:'Gallery', galleryTitle:'Visual Lombok', galleryDesc:'Klik foto untuk membuka lightbox.', galleryLightbox:'Gallery lightbox berfungsi dan foto tersimpan lokal di folder website.',
    blogEyebrow:'Travel Blog', blogTitle:'Artikel wisata untuk SEO', readArticle:'Read Article', blogModalDesc:'Artikel ini bisa dikembangkan untuk SEO dengan keyword Lombok tour, Gili tour, Rinjani trekking, dan travel Lombok.', consultWa:'Konsultasi via WhatsApp',
    contactEyebrow:'Contact', contactTitle:'Plan your Lombok trip today', contactDesc:'Isi form ini, tombol submit akan membuka WhatsApp dengan pesan otomatis.', namePlaceholder:'Nama', messagePlaceholder:'Tulis kebutuhan tour kamu', sendWa:'Send to WhatsApp',
    footerText:'© 2026 DayTripLombok — Semeton Tour & Travel. Modern website prototype.',
    detailBtn:'Detail Itinerary', duration:'Durasi', price:'Harga', itinerary:'Itinerary', stop:'Day/Stop', bookViaWa:'Booking via WhatsApp',
    searchEmpty:'Masukkan kata kunci dulu', searchNotFound:'Paket tidak ditemukan, coba Gili/Pink/Rinjani', englishActive:'English mode active', indonesiaActive:'Mode Indonesia aktif',
    wa:{heroConsult:'Halo DayTripLombok, saya ingin konsultasi paket wisata Lombok.', rinjaniAsk:'Halo, saya ingin tanya paket Rinjani Trekking DayTripLombok.', transportBook:'Halo DayTripLombok, saya ingin booking transport private car Lombok.'}
  },
  en:{
    pageTitle:'DayTripLombok — Semeton Tour & Travel', loading:'Loading Lombok Experience...',
    navHome:'Home',navTours:'Tours',navRinjani:'Rinjani',navExp:'Experiences',navTransport:'Transport',navDest:'Destinations',navGallery:'Gallery',navBlog:'Blog',navContact:'Contact',
    heroEyebrow:'Lombok Private Tour • Daily Trip • Rinjani Trekking',
    heroTitle:'Discover Lombok with DayTripLombok.',
    heroLead:'Private daily tours, Gili Islands, Pink Beach, Mount Rinjani, waterfalls, and transport with fast WhatsApp booking.',
    viewPackages:'View Packages', bookingWa:'WhatsApp Booking', searchPlaceholder:'Search: Gili, Pink Beach, Rinjani...', searchBtn:'Search', trusted:'Trusted Lombok tour experience',
    statPackages:'Tour Packages', statGuests:'Happy Guests', statDest:'Top Destinations', statSupport:'Days Support',
    dailyTours:'Daily Tours', popularTitle:'Most popular tour packages', popularDesc:'Filter packages, open the itinerary details, then book directly via WhatsApp.',
    filterAll:'All', filterBeach:'Beach', filterCulture:'Culture', filterAdventure:'Adventure', filterFamily:'Family',
    rinjaniEyebrow:'Rinjani Trekking', rinjaniTitle:'Mount Rinjani trekking package', rinjaniDesc:'2D1N, 3D2N, and private trekking programs with itinerary, porter, guide, camping equipment, and selected area pickup.', askRinjani:'Ask Rinjani Package',
    expEyebrow:'Experiences', expTitle:'Sellable Lombok experiences', expCardDesc:'Ready-to-use feature to promote Lombok activities.',
    transportEyebrow:'Transport', transportTitle:'Transport & private driver', transportDesc:'Transport feature for airport transfer, full-day car rental, and custom routes via WhatsApp.',
    carTitle:'Private Car + Driver', carDesc:'Airport pickup, hotel transfer, full-day Lombok trip, or multi-day transport.', carPrice:'From IDR 550,000 / day', bookTransport:'Book Transport',
    destEyebrow:'Destinations', destTitle:'Top Lombok destinations', destOpened:'Destination opened. A detail page can be created for this item.',
    galleryEyebrow:'Gallery', galleryTitle:'Lombok Visuals', galleryDesc:'Click a photo to open the lightbox.', galleryLightbox:'The gallery lightbox works and photos are stored locally in the website folder.',
    blogEyebrow:'Travel Blog', blogTitle:'SEO travel articles', readArticle:'Read Article', blogModalDesc:'This article can be expanded for SEO keywords such as Lombok tour, Gili tour, Rinjani trekking, and Lombok travel.', consultWa:'Consult via WhatsApp',
    contactEyebrow:'Contact', contactTitle:'Plan your Lombok trip today', contactDesc:'Fill in this form. Submit will open WhatsApp with an automatic message.', namePlaceholder:'Name', messagePlaceholder:'Write your tour request', sendWa:'Send to WhatsApp',
    footerText:'© 2026 DayTripLombok — Semeton Tour & Travel. Modern website prototype.',
    detailBtn:'Itinerary Details', duration:'Duration', price:'Price', itinerary:'Itinerary', stop:'Day/Stop', bookViaWa:'Book via WhatsApp',
    searchEmpty:'Please enter a keyword first', searchNotFound:'Package not found. Try Gili/Pink/Rinjani', englishActive:'English mode active', indonesiaActive:'Indonesian mode active',
    wa:{heroConsult:'Hello DayTripLombok, I would like to consult about a Lombok tour package.', rinjaniAsk:'Hello, I would like to ask about the DayTripLombok Rinjani Trekking package.', transportBook:'Hello DayTripLombok, I would like to book private car transport in Lombok.'}
  }
};

const tours={
  id:[
   {id:1,cat:'beach',title:'Gili Trawangan Snorkeling',dur:'Full Day',price:'Rp750.000',photo:img('gili'),desc:'Explore Gili Trawangan, Meno, Air, snorkeling point, turtle point, dan sunset beach.',it:['Pickup hotel / airport','Private boat & snorkeling','Lunch break di Gili Trawangan','Sunset photo stop','Drop hotel']},
   {id:2,cat:'beach',title:'Pink Beach Lombok Trip',dur:'Full Day',price:'Rp850.000',photo:img('pink'),desc:'Trip ke Pink Beach, Tanjung Ringgit, sand island, dan spot foto pantai timur Lombok.',it:['Pickup pagi','Boat trip area Pink Beach','Snorkeling & beach time','Explore Tanjung Ringgit','Return hotel']},
   {id:3,cat:'culture',title:'Sasak Culture Tour',dur:'8 Hours',price:'Rp550.000',photo:img('sasak'),desc:'Desa Sade, Sukarara weaving, Banyumulek pottery, dan Kuta Mandalika.',it:['Desa Sade','Tenun Sukarara','Gerabah Banyumulek','Pantai Kuta Mandalika','Drop hotel']},
   {id:4,cat:'adventure',title:'Sendang Gile Waterfall',dur:'Full Day',price:'Rp650.000',photo:img('waterfall'),desc:'Waterfall tour ke Sendang Gile dan Tiu Kelep dengan trekking ringan di Lombok Utara.',it:['Pickup hotel','Trekking waterfall','Swim & photo session','Lunch local restaurant','Back to hotel']},
   {id:5,cat:'adventure',title:'Rinjani 2D1N Crater Rim',dur:'2D1N',price:'Rp2.450.000',photo:img('rinjani2'),desc:'Trekking Rinjani private/shared dengan guide, porter, meal, tent, dan transport tertentu.',it:['Registration & briefing','Trekking to crater rim','Camping night','Sunrise view','Return Senaru/Sembalun']},
   {id:6,cat:'family',title:'South Lombok Beach Hopping',dur:'Full Day',price:'Rp600.000',photo:img('south'),desc:'Pantai Selong Belanak, Mawun, Tanjung Aan, Bukit Merese, dan Mandalika.',it:['Selong Belanak','Mawun Beach','Tanjung Aan','Bukit Merese sunset','Drop hotel']},
   {id:7,cat:'beach',title:'Secret Gili Nanggu Trip',dur:'Full Day',price:'Rp800.000',photo:img('gili2'),desc:'Private island hopping ke Gili Nanggu, Sudak, Kedis, snorkeling dan relaxing beach.',it:['Pickup hotel','Boat to Gili Nanggu','Snorkeling','Visit Gili Kedis','Return hotel']},
   {id:8,cat:'family',title:'Custom Lombok Private Tour',dur:'Flexible',price:'Request',photo:img('air'),desc:'Rancang perjalanan sesuai kebutuhan: keluarga, honeymoon, group, atau corporate trip.',it:['Consult route','Pickup flexible','Private car & driver','Custom stops','WhatsApp support']}
  ],
  en:[
   {id:1,cat:'beach',title:'Gili Trawangan Snorkeling',dur:'Full Day',price:'IDR 750,000',photo:img('gili'),desc:'Explore Gili Trawangan, Gili Meno, Gili Air, snorkeling points, turtle point, and sunset beach.',it:['Hotel / airport pickup','Private boat and snorkeling','Lunch break in Gili Trawangan','Sunset photo stop','Hotel drop-off']},
   {id:2,cat:'beach',title:'Pink Beach Lombok Trip',dur:'Full Day',price:'IDR 850,000',photo:img('pink'),desc:'Visit Pink Beach, Tanjung Ringgit, sand island, and beautiful photo spots in East Lombok.',it:['Morning pickup','Boat trip around Pink Beach','Snorkeling and beach time','Explore Tanjung Ringgit','Return to hotel']},
   {id:3,cat:'culture',title:'Sasak Culture Tour',dur:'8 Hours',price:'IDR 550,000',photo:img('sasak'),desc:'Visit Sade Village, Sukarara weaving village, Banyumulek pottery, and Kuta Mandalika.',it:['Sade Village','Sukarara weaving village','Banyumulek pottery village','Kuta Mandalika Beach','Hotel drop-off']},
   {id:4,cat:'adventure',title:'Sendang Gile Waterfall',dur:'Full Day',price:'IDR 650,000',photo:img('waterfall'),desc:'Waterfall tour to Sendang Gile and Tiu Kelep with light trekking in North Lombok.',it:['Hotel pickup','Waterfall trekking','Swim and photo session','Lunch at a local restaurant','Back to hotel']},
   {id:5,cat:'adventure',title:'Rinjani 2D1N Crater Rim',dur:'2D1N',price:'IDR 2,450,000',photo:img('rinjani2'),desc:'Private/shared Rinjani trekking with guide, porter, meals, tent, and selected transport.',it:['Registration and briefing','Trek to the crater rim','Camping night','Sunrise view','Return to Senaru/Sembalun']},
   {id:6,cat:'family',title:'South Lombok Beach Hopping',dur:'Full Day',price:'IDR 600,000',photo:img('south'),desc:'Visit Selong Belanak, Mawun, Tanjung Aan, Merese Hill, and Mandalika.',it:['Selong Belanak','Mawun Beach','Tanjung Aan','Merese Hill sunset','Hotel drop-off']},
   {id:7,cat:'beach',title:'Secret Gili Nanggu Trip',dur:'Full Day',price:'IDR 800,000',photo:img('gili2'),desc:'Private island hopping to Gili Nanggu, Sudak, and Kedis for snorkeling and beach relaxation.',it:['Hotel pickup','Boat to Gili Nanggu','Snorkeling','Visit Gili Kedis','Return to hotel']},
   {id:8,cat:'family',title:'Custom Lombok Private Tour',dur:'Flexible',price:'Request',photo:img('air'),desc:'Design your own trip for family, honeymoon, group travel, or corporate needs.',it:['Consult the route','Flexible pickup','Private car and driver','Custom stops','WhatsApp support']}
  ]
};
const destinations={id:[['Gili Islands','gili'],['Mount Rinjani','rinjani'],['Pink Beach','pink'],['South Lombok','south'],['Sasak Village','sasak'],['Senaru Waterfall','waterfall']],en:[['Gili Islands','gili'],['Mount Rinjani','rinjani'],['Pink Beach','pink'],['South Lombok','south'],['Sasak Village','sasak'],['Senaru Waterfall','waterfall']]};
const exps={id:[['Snorkeling & Island Hopping','gili2'],['Culture & Local Village','sasak'],['Sunset & Photography','air']],en:[['Snorkeling & Island Hopping','gili2'],['Culture & Local Village','sasak'],['Sunset & Photography','air']]};
const blogs={
 id:[['Panduan Liburan 3 Hari di Lombok','Itinerary singkat untuk Gili, Mandalika, dan waterfall.','gili2'],['Tips Memilih Paket Gili Trawangan','Apa saja yang perlu diperhatikan sebelum booking tour Gili.','gili'],['Rinjani Trekking untuk Pemula','Persiapan fisik, perlengkapan, dan itinerary populer.','rinjani'],['Destinasi Honeymoon di Lombok','Pantai, sunset, private trip, dan spot romantis.','south']],
 en:[['3-Day Lombok Travel Guide','A short itinerary for Gili, Mandalika, and waterfalls.','gili2'],['Tips for Choosing a Gili Trawangan Package','What to check before booking a Gili tour.','gili'],['Rinjani Trekking for Beginners','Fitness preparation, equipment, and popular itineraries.','rinjani'],['Honeymoon Destinations in Lombok','Beaches, sunsets, private trips, and romantic spots.','south']]
};
const gallery=['gili2','gili','pink','rinjani','rinjani2','waterfall','south','sasak','air','bay','gili2','south'];

window.addEventListener('load',()=>setTimeout(()=>$('#loader').classList.add('hide'),700));
window.addEventListener('scroll',()=>$('#header').classList.toggle('scrolled',scrollY>30));
$('#menuBtn').onclick=()=>$('#nav').classList.toggle('open');
$$('#nav a').forEach(a=>a.onclick=()=>{$('#nav').classList.remove('open');$$('#nav a').forEach(x=>x.classList.remove('active'));a.classList.add('active')});
function wa(text){ window.open(`https://wa.me/${WA}?text=${encodeURIComponent(text)}`,'_blank'); }
document.addEventListener('click',e=>{const el=e.target.closest('[data-wa]'); if(el) wa(el.dataset.wa);});

function applyLanguage(){
  const t=text[currentLang];
  document.documentElement.lang=currentLang;
  document.title=t.pageTitle;
  $$('[data-i18n]').forEach(el=>{const key=el.dataset.i18n; if(t[key]) el.textContent=t[key];});
  $$('[data-i18n-placeholder]').forEach(el=>{const key=el.dataset.i18nPlaceholder; if(t[key]) el.placeholder=t[key];});
  $$('[data-wa-id]').forEach(el=>{const key=el.dataset.waId; if(t.wa[key]) el.dataset.wa=t.wa[key];});
  $('[data-id="heroTitle"]').textContent=t.heroTitle;
  $('[data-id="heroLead"]').textContent=t.heroLead;
  $('#langBtn').textContent=currentLang==='id'?'EN':'ID';
  renderTours(getActiveFilter()); renderExperiences(); renderDestinations(); renderGallery(); renderBlogs();
}
function getActiveFilter(){const active=$('#filters button.active'); return active?active.dataset.filter:'all'}
function currentTours(){return tours[currentLang]}
function renderTours(filter='all'){
  const t=text[currentLang];
  $('#tourGrid').innerHTML=currentTours().filter(x=>filter==='all'||x.cat===filter).map(x=>`<article class="card"><div class="pic" style="background-image:url('${x.photo}')"><span class="badge">${x.cat}</span></div><div class="card-body"><h3>${x.title}</h3><p>${x.desc}</p><div class="meta"><span>${x.dur}</span><span>${x.price}</span></div><button class="btn primary" onclick="openTour(${x.id})">${t.detailBtn}</button></div></article>`).join('');
}
$('#filters').onclick=e=>{if(e.target.tagName==='BUTTON'){$$('#filters button').forEach(b=>b.classList.remove('active'));e.target.classList.add('active');renderTours(e.target.dataset.filter);}};
window.openTour=id=>{
  const t=text[currentLang], x=currentTours().find(y=>y.id===id);
  $('#modalContent').innerHTML=`<div class="modal-hero" style="background-image:url('${x.photo}')"></div><div class="modal-content"><p class="eyebrow">${x.cat} • ${x.dur}</p><h2>${x.title}</h2><p>${x.desc}</p><div class="meta"><span>${t.duration}: ${x.dur}</span><span>${t.price}: ${x.price}</span></div><h3>${t.itinerary}</h3><div class="itinerary">${x.it.map((it,i)=>`<div><b>${t.stop} ${i+1}</b><br>${it}</div>`).join('')}</div><button class="btn primary" onclick="wa('${currentLang==='id'?'Halo DayTripLombok, saya tertarik dengan paket':'Hello DayTripLombok, I am interested in the'} ${x.title}. ${currentLang==='id'?'Mohon info lengkapnya.':'Please send me more details.'}')">${t.bookViaWa}</button></div>`;
  $('#modal').classList.add('show');
};
$('#modalClose').onclick=()=>$('#modal').classList.remove('show');
$('#modal').onclick=e=>{if(e.target.id==='modal') $('#modal').classList.remove('show')};
function renderExperiences(){const t=text[currentLang]; $('#experienceRow').innerHTML=exps[currentLang].map((e,i)=>`<div class="exp" style="background-image:url('${img(e[1])}')"><div><p class="eyebrow">Experience ${i+1}</p><h3>${e[0]}</h3><p>${t.expCardDesc}</p></div></div>`).join('');}
function renderDestinations(){const t=text[currentLang]; $('#destinationGrid').innerHTML=destinations[currentLang].map(d=>`<div class="dest" onclick="showToast('${d[0]}: ${t.destOpened}')" style="background-image:url('${img(d[1])}')"><h3>${d[0]}</h3></div>`).join('');}
function renderGallery(){const t=text[currentLang]; $('#galleryGrid').innerHTML=gallery.map((g)=>`<img src="${img(g)}" alt="${g}" onclick="openImage(this.src,'${g}')">`).join('');}
window.openImage=(src,title)=>{const t=text[currentLang]; $('#modalContent').innerHTML=`<div class="modal-content"><img src="${src}" alt="${title}" style="border-radius:24px;width:100%"><h2>${title}</h2><p>${t.galleryLightbox}</p></div>`;$('#modal').classList.add('show')};
function renderBlogs(){const t=text[currentLang]; $('#blogGrid').innerHTML=blogs[currentLang].map((b,i)=>`<article class="card"><div class="pic" style="background-image:url('${img(b[2])}')"><span class="badge">Blog</span></div><div class="card-body"><h3>${b[0]}</h3><p>${b[1]}</p><button class="btn primary" onclick="openBlog(${i})">${t.readArticle}</button></div></article>`).join('');}
window.openBlog=i=>{const t=text[currentLang], b=blogs[currentLang][i];$('#modalContent').innerHTML=`<div class="modal-hero" style="background-image:url('${img(b[2])}')"></div><div class="modal-content"><p class="eyebrow">DayTripLombok Blog</p><h2>${b[0]}</h2><p>${b[1]}</p><p>${t.blogModalDesc}</p><button class="btn primary" onclick="wa('${currentLang==='id'?'Halo, saya membaca artikel':'Hello, I read the article'} ${b[0]} ${currentLang==='id'?'dan ingin konsultasi trip Lombok.':'and would like to consult about a Lombok trip.'}')">${t.consultWa}</button></div>`;$('#modal').classList.add('show')};
$('#contactForm').onsubmit=e=>{e.preventDefault();const f=new FormData(e.target);wa(currentLang==='id'?`Halo DayTripLombok, saya ${f.get('name')}. Minat: ${f.get('interest')}. Pesan: ${f.get('message')}`:`Hello DayTripLombok, my name is ${f.get('name')}. Interest: ${f.get('interest')}. Message: ${f.get('message')}`)};
$('#searchBtn').onclick=()=>{const t=text[currentLang]; const q=$('#quickSearch').value.toLowerCase().trim(); if(!q)return showToast(t.searchEmpty); location.hash='tours'; const found=currentTours().find(x=>(x.title+x.desc+x.cat).toLowerCase().includes(q)); found?openTour(found.id):showToast(t.searchNotFound)};
function showToast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2600)}
const io=new IntersectionObserver(entries=>entries.forEach(en=>{if(en.isIntersecting)en.target.classList.add('show')}),{threshold:.12});$$('.reveal').forEach(el=>io.observe(el));
const countIO=new IntersectionObserver(entries=>entries.forEach(en=>{if(en.isIntersecting){const b=en.target;let end=+b.dataset.count,cur=0,step=Math.max(1,Math.ceil(end/70));let tm=setInterval(()=>{cur+=step;if(cur>=end){cur=end;clearInterval(tm)}b.textContent=cur+(end>100?'+':'')},18);countIO.unobserve(b)}}));$$('[data-count]').forEach(b=>countIO.observe(b));
$('#langBtn').onclick=()=>{currentLang=currentLang==='id'?'en':'id'; applyLanguage(); showToast(currentLang==='en'?text.en.englishActive:text.id.indonesiaActive);};
applyLanguage();
