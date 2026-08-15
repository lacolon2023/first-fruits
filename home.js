/* ---------------- Product data ---------------- */
const PRODUCTS = [
  {
    "id": "identity",
    "cats": "unit digital",
    "name": "Who I Am in Christ",
    "fmt": "Digital Thematic Unit",
    "price": 14.99,
    "pill": {
      "t": "Launch Unit",
      "c": ""
    },
    "image": "identity.jpg",
    "desc": "A multi-week K–2 identity unit integrating Scripture declarations, reading, social-emotional learning, and purposeful behavior."
  },
  {
    "id": "god-made-me",
    "cats": "unit digital",
    "name": "God Made Me",
    "fmt": "Science + Faith Unit",
    "price": 14.99,
    "pill": {
      "t": "New",
      "c": "gold"
    },
    "image": "god-made-me.jpg",
    "desc": "Explore the body, senses, creation, health, and gratitude through developmentally appropriate science and biblical truth."
  },
  {
    "id": "love-like-jesus",
    "cats": "unit digital",
    "name": "Love Like Jesus",
    "fmt": "Character + Relationships Unit",
    "price": 14.99,
    "pill": {
      "t": "Character",
      "c": "teal"
    },
    "image": "love-like-jesus.jpg",
    "desc": "Teach kindness, forgiveness, service, empathy, and healthy relationships through stories, role play, and Scripture."
  },
  {
    "id": "seasonal",
    "cats": "unit digital",
    "name": "Seasonal Unit",
    "fmt": "Digital Thematic Unit",
    "price": 14.99,
    "pill": {
      "t": "Seasonal",
      "c": "teal"
    },
    "image": "seasonal.jpg",
    "desc": "Christ-centered lessons and activities for Christmas, Easter, gratitude, creation, and other seasonal themes — differentiated K–2."
  },
  {
    "id": "flashcards",
    "cats": "card digital",
    "name": "Memory Verse Cards",
    "fmt": "Printable Card Set",
    "price": 4.99,
    "pill": {
      "t": "Card Set",
      "c": "gold"
    },
    "image": "flashcards.jpg",
    "desc": "A full year of beautifully designed memory verse cards for morning baskets, review games, and family discipleship."
  },
  {
    "id": "letter-cards",
    "cats": "card digital",
    "name": "Letter Cards",
    "fmt": "Printable Card Set",
    "price": 4.99,
    "pill": {
      "t": "Card Set",
      "c": "teal"
    },
    "image": "flashcards.jpg",
    "desc": "Uppercase and lowercase letter cards with picture cues, built on the Science of Reading for letter–sound practice."
  },
  {
    "id": "sight-word-cards",
    "cats": "card digital",
    "name": "Sight Word Cards",
    "fmt": "Printable Card Set",
    "price": 4.99,
    "pill": {
      "t": "Card Set",
      "c": "teal"
    },
    "image": "flashcards.jpg",
    "desc": "High-frequency sight words sequenced for K–2 readers, for word walls, flash review, and fluency games."
  }
];

/* ---------------- SVG product art ---------------- */
function art(kind){
  const base='<rect width="400" height="300" fill="#eef7ef"/>';
  const shapes={
    copywork:`${base}<rect x="70" y="40" width="260" height="220" rx="10" fill="#fff" stroke="#e7ded0"/>
      <rect x="95" y="66" width="120" height="12" rx="6" fill="#14663f"/>
      <line x1="95" y1="108" x2="305" y2="108" stroke="#d8ecdc" stroke-width="2"/>
      <line x1="95" y1="140" x2="305" y2="140" stroke="#d8ecdc" stroke-width="2"/>
      <line x1="95" y1="172" x2="305" y2="172" stroke="#d8ecdc" stroke-width="2"/>
      <line x1="95" y1="204" x2="305" y2="204" stroke="#d8ecdc" stroke-width="2"/>
      <text x="95" y="102" font-family="Fraunces,serif" font-size="20" fill="#1fa5b8" font-style="italic">Give thanks</text>
      <text x="95" y="134" font-family="Fraunces,serif" font-size="20" fill="#c9d8ce" font-style="italic">Give thanks</text>
      <g transform="translate(280,210)"><svg width="34" height="34" viewBox="0 0 48 48"><use href="#sprout"/></svg></g>`,
    verse:`${base}<rect x="80" y="50" width="240" height="200" rx="12" fill="#fff" stroke="#e7ded0"/>
      <g transform="translate(184,74)"><svg width="34" height="34" viewBox="0 0 48 48"><use href="#sprout"/></svg></g>
      <text x="200" y="150" text-anchor="middle" font-family="Fraunces,serif" font-size="17" font-style="italic" fill="#14663f">"Be kind to</text>
      <text x="200" y="176" text-anchor="middle" font-family="Fraunces,serif" font-size="17" font-style="italic" fill="#14663f">one another"</text>
      <text x="200" y="212" text-anchor="middle" font-family="Nunito,sans-serif" font-size="12" font-weight="700" fill="#1fa5b8">EPHESIANS 4:32</text>`,
    phonics:`${base}<rect x="60" y="50" width="280" height="200" rx="10" fill="#fff" stroke="#e7ded0"/>
      <circle cx="110" cy="100" r="26" fill="#fdeecb"/><text x="110" y="108" text-anchor="middle" font-family="Nunito" font-size="26" font-weight="900" fill="#f0a922">Aa</text>
      <circle cx="180" cy="100" r="26" fill="#d5f0f4"/><text x="180" y="108" text-anchor="middle" font-family="Nunito" font-size="26" font-weight="900" fill="#1fa5b8">Bb</text>
      <circle cx="250" cy="100" r="26" fill="#fbe0d9"/><text x="250" y="108" text-anchor="middle" font-family="Nunito" font-size="26" font-weight="900" fill="#ef6a52">Cc</text>
      <line x1="85" y1="165" x2="315" y2="165" stroke="#d8ecdc" stroke-width="2" stroke-dasharray="6 6"/>
      <line x1="85" y1="200" x2="315" y2="200" stroke="#d8ecdc" stroke-width="2" stroke-dasharray="6 6"/>`,
    character:`${base}
      <circle cx="140" cy="120" r="42" fill="#fbe0d9"/><path d="M140 100c0-8-14-8-14 0s14 20 14 20 14-12 14-20-14-8-14 0z" fill="#ef6a52"/>
      <circle cx="255" cy="120" r="42" fill="#fdeecb"/><path d="M255 100l4 8 9 1-6 6 2 9-9-5-9 5 2-9-6-6 9-1z" fill="#f6b53c"/>
      <rect x="90" y="185" width="220" height="14" rx="7" fill="#d8ecdc"/>
      <rect x="120" y="212" width="160" height="12" rx="6" fill="#eef1ec"/>
      <text x="200" y="262" text-anchor="middle" font-family="Nunito" font-size="14" font-weight="800" fill="#14663f">Love · Joy · Peace · Patience</text>`,
    tracker:`${base}<rect x="70" y="45" width="260" height="210" rx="10" fill="#fff" stroke="#e7ded0"/>
      <rect x="70" y="45" width="260" height="34" rx="10" fill="#14663f"/>
      <text x="200" y="68" text-anchor="middle" font-family="Nunito" font-size="15" font-weight="800" fill="#fff">This Month</text>
      ${gridCells()}`,
    bundle:`${base}
      <rect x="55" y="80" width="150" height="170" rx="10" fill="#1fa5b8" transform="rotate(-6 130 165)"/>
      <rect x="120" y="60" width="150" height="180" rx="10" fill="#f6b53c" transform="rotate(3 195 150)"/>
      <rect x="180" y="80" width="150" height="170" rx="10" fill="#14663f" transform="rotate(8 255 165)"/>
      <g transform="translate(178,120)"><svg width="44" height="44" viewBox="0 0 48 48"><use href="#sprout"/></svg></g>
      <text x="200" y="185" text-anchor="middle" font-family="Fraunces,serif" font-size="16" fill="#fff" font-weight="600">All-in-One</text>`,
    identity:`${base}
      <circle cx="200" cy="120" r="52" fill="#fff" stroke="#e7ded0"/>
      <g transform="translate(176,86)"><svg width="48" height="48" viewBox="0 0 48 48"><use href="#sprout"/></svg></g>
      <text x="200" y="150" text-anchor="middle" font-family="Fraunces,serif" font-size="15" font-style="italic" fill="#14663f">I am loved</text>
      <rect x="60" y="200" width="90" height="22" rx="11" fill="#fbe0d9"/><text x="105" y="216" text-anchor="middle" font-family="Nunito" font-size="11" font-weight="800" fill="#ef6a52">Chosen</text>
      <rect x="158" y="200" width="84" height="22" rx="11" fill="#d5f0f4"/><text x="200" y="216" text-anchor="middle" font-family="Nunito" font-size="11" font-weight="800" fill="#1fa5b8">Created</text>
      <rect x="250" y="200" width="90" height="22" rx="11" fill="#fdeecb"/><text x="295" y="216" text-anchor="middle" font-family="Nunito" font-size="11" font-weight="800" fill="#c98a12">Called</text>
      <text x="200" y="252" text-anchor="middle" font-family="Nunito" font-size="12" font-weight="800" fill="#4d6156">PSALM 139:14</text>`,
    materials:`${base}
      <path d="M120 130h160v96H120z" fill="#c98a12"/>
      <path d="M120 130l80 34 80-34" fill="none" stroke="#8a5f0c" stroke-width="3"/>
      <path d="M110 108h180l-10 22H120z" fill="#f6b53c"/>
      <rect x="150" y="150" width="26" height="26" rx="5" fill="#ef6a52"/>
      <circle cx="215" cy="170" r="15" fill="#1fa5b8"/>
      <path d="M245 150l20 0 0 20 -20 0z" fill="#1f8a54" transform="rotate(12 255 160)"/>
      <rect x="150" y="188" width="120" height="8" rx="4" fill="#fff" opacity=".5"/>
      <text x="200" y="252" text-anchor="middle" font-family="Nunito" font-size="13" font-weight="800" fill="#14663f">Everything you need — digital</text>`,
  };
  return `<svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">${shapes[kind]||base}</svg>`;
}
function gridCells(){
  let s='';const cols=7,rows=4,x0=84,y0=95,w=32,h=32;
  const fills=['#eef7ef','#d8ecdc','#fdeecb','#d5f0f4','#fbe0d9'];
  for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){
    const fx=x0+c*w, fy=y0+r*h, f=fills[(r*cols+c)%fills.length];
    s+=`<rect x="${fx}" y="${fy}" width="28" height="28" rx="6" fill="${f}"/>`;
  }
  return s;
}

/* ---------------- Render products ---------------- */
const grid=document.getElementById('prodGrid');
let activeFilter='all';
function renderProducts(){
  const visible=PRODUCTS.filter(p=>activeFilter==='all'||p.cats.split(' ').includes(activeFilter));
  grid.innerHTML=visible.map(p=>`
    <article class="card" data-category="${p.cats}">
      <div class="thumb">
        ${p.pill?`<span class="pill ${p.pill.c}">${p.pill.t}</span>`:''}
        <a href="product-${p.id}.html"><img class="product-photo" src="first-fruits-assets/${p.image}" alt="${p.name}"></a>
      </div>
      <div class="body">
        <div class="fmt">${p.fmt}</div>
        <h3><a href="product-${p.id}.html" style="color:inherit">${p.name}</a></h3>
        <p class="desc">${p.desc}</p>
        <div class="buy">
          <div class="price">$${p.price.toFixed(2)}<small> USD</small></div>
          <button class="btn btn-forest btn-sm" type="button" onclick="addToCart('${p.id}')">Add to Cart</button>
        </div>
      </div>
    </article>`).join('');
}
document.querySelectorAll('.filter-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    activeFilter=btn.dataset.filter;
    document.querySelectorAll('.filter-btn').forEach(b=>b.classList.toggle('active',b===btn));
    renderProducts();
  });
});
if(grid) renderProducts();

/* Launch spotlight art */
const spot=document.getElementById('spotArt');
if(spot) spot.innerHTML='<img class="product-photo" src="first-fruits-assets/identity.jpg" alt="Who I Am in Christ unit">';

/* ---------------- Cart logic ---------------- */
function loadCart(){try{return JSON.parse(localStorage.getItem('firstFruitsCart')||'{}')||{};}catch(e){return {};}}
let cart=loadCart(); // id -> qty
Object.keys(cart).forEach(id=>{ if(!PRODUCTS.find(p=>p.id===id)) delete cart[id]; }); // drop stale ids
function saveCart(){try{localStorage.setItem('firstFruitsCart',JSON.stringify(cart));}catch(e){/* storage unavailable — stay in-memory */}}
function addToCart(id){
  cart[id]=(cart[id]||0)+1;saveCart();
  renderCart();showToast(PRODUCTS.find(p=>p.id===id).name+' added to cart');
  bump();
}
function changeQty(id,delta){
  cart[id]=(cart[id]||0)+delta;
  if(cart[id]<=0) delete cart[id];
  saveCart();renderCart();
}
function removeItem(id){delete cart[id];saveCart();renderCart();}
function cartTotals(){
  let count=0,sum=0;
  for(const id in cart){const p=PRODUCTS.find(x=>x.id===id);if(!p)continue;count+=cart[id];sum+=p.price*cart[id];}
  return {count,sum};
}
function renderCart(){
  const body=document.getElementById('cartBody');
  const ids=Object.keys(cart).filter(id=>PRODUCTS.find(x=>x.id===id));
  if(!ids.length){
    body.innerHTML='<div class="cart-empty"><div class="big-emoji">🌱</div><p>Your cart is empty.<br>Start with a unit — or join the membership!</p></div>';
  }else{
    body.innerHTML=ids.map(id=>{
      const p=PRODUCTS.find(x=>x.id===id);
      return `<div class="cart-item">
        <div class="ci-thumb"><img class="product-photo" src="first-fruits-assets/${p.image}" alt=""></div>
        <div class="ci-info">
          <b>${p.name}</b>
          <div class="ci-price">$${p.price} each</div>
          <div class="qty">
            <button onclick="changeQty('${id}',-1)" aria-label="Decrease">−</button>
            <span>${cart[id]}</span>
            <button onclick="changeQty('${id}',1)" aria-label="Increase">+</button>
          </div>
          <button class="ci-remove" onclick="removeItem('${id}')">Remove</button>
        </div>
      </div>`;
    }).join('');
  }
  const {count,sum}=cartTotals();
  document.getElementById('subtotal').textContent='$'+sum.toFixed(2);
  // Round-up giving
  const roundupPotential = sum>0 ? +(Math.ceil(sum+0.001)-sum).toFixed(2) : 0;
  const checked = document.getElementById('roundup').checked;
  const donation = checked ? roundupPotential : 0;
  document.getElementById('roundupAmt').textContent = '+$'+roundupPotential.toFixed(2);
  const giveLine=document.getElementById('giveLine');
  giveLine.style.display = donation>0 ? 'flex' : 'none';
  document.getElementById('giveAmt').textContent = '+$'+donation.toFixed(2);
  document.getElementById('cartTotal').textContent = '$'+(sum+donation).toFixed(2);
  const badge=document.getElementById('cartCount');
  badge.textContent=count;badge.style.display=count?'flex':'none';
  const note=document.getElementById('shipNote');
  const progress=document.getElementById('shipProgress');
  progress.style.width=Math.min(100,(sum/75)*100)+'%';
  if(sum>=75) note.innerHTML='🎉 You’ve unlocked <b>free shipping!</b>';
  else if(sum>0) note.textContent='Add $'+(75-sum).toFixed(2)+' more to unlock free shipping.';
  else note.textContent='Free shipping on orders $75+';
}
function bump(){
  const b=document.getElementById('cartCount');
  b.animate([{transform:'scale(1)'},{transform:'scale(1.4)'},{transform:'scale(1)'}],{duration:300});
}
function openCart(){document.getElementById('drawer').classList.add('open');document.getElementById('overlay').classList.add('open');}
function closeCart(){document.getElementById('drawer').classList.remove('open');document.getElementById('overlay').classList.remove('open');}
function checkout(){
  const {count}=cartTotals();
  if(!count){showToast('Your cart is empty');return;}
  showToast('This is a preview store — thanks for exploring First Fruits! 🌱');
}
let toastTimer;
function showToast(msg){
  const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2600);
}
function submitEmail(e){
  e.preventDefault();
  const input=document.getElementById('emailInput');
  const status=document.getElementById('formStatus');
  const v=input.value.trim();
  if(!v){status.textContent='Enter a valid email address.';return false;}
  status.textContent='Thank you! Your free 5-day sample is on its way to your inbox.';
  input.value='';
  showToast('Thanks! Check your inbox for your sample. 🌱');
  return false;
}
function toggleMenu(){
  const links=document.getElementById('primaryNav');
  const btn=document.getElementById('menuToggle');
  const open=links.classList.toggle('mobile-open');
  btn.setAttribute('aria-expanded',String(open));
  btn.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu');
}

/* ---------------- Enhanced interactions ---------------- */
document.getElementById('menuToggle').addEventListener('click',toggleMenu);
document.querySelectorAll('#primaryNav a').forEach(a=>a.addEventListener('click',()=>{
  document.getElementById('primaryNav').classList.remove('mobile-open');
  document.getElementById('menuToggle').setAttribute('aria-expanded','false');
}));

const searchPanel=document.getElementById('searchPanel');
const searchInput=document.getElementById('siteSearch');
const searchResults=document.getElementById('searchResults');
function openSearch(){
  searchPanel.classList.add('open');document.body.classList.add('no-scroll');
  setTimeout(()=>searchInput.focus(),20);runSearch('');
}
function closeSearch(){
  searchPanel.classList.remove('open');document.body.classList.remove('no-scroll');
  document.getElementById('searchOpen').focus();
}
function runSearch(query){
  const q=query.toLowerCase().trim();
  const matches=PRODUCTS.filter(p=>!q||[p.name,p.fmt,p.desc,p.cats].join(' ').toLowerCase().includes(q)).slice(0,6);
  searchResults.innerHTML=matches.length?matches.map(p=>`
    <div class="search-result">
      <div><b>${p.name}</b><div style="color:var(--ink-soft);font-size:.86rem">${p.fmt} · $${p.price.toFixed(2)}</div></div>
      <button class="btn btn-forest btn-sm" type="button" data-search-add="${p.id}">Add</button>
    </div>`).join(''):'<p style="color:var(--ink-soft)">No matching resources found.</p>';
  searchResults.querySelectorAll('[data-search-add]').forEach(btn=>btn.addEventListener('click',()=>addToCart(btn.dataset.searchAdd)));
}
document.getElementById('searchOpen').addEventListener('click',openSearch);
document.getElementById('searchClose').addEventListener('click',closeSearch);
searchPanel.addEventListener('click',e=>{if(e.target===searchPanel)closeSearch();});
searchInput.addEventListener('input',e=>runSearch(e.target.value));

document.querySelectorAll('.faq-q').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const item=btn.closest('.faq-item');
    const open=item.classList.toggle('open');
    btn.setAttribute('aria-expanded',String(open));
  });
});

document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    if(searchPanel.classList.contains('open')) closeSearch();
    closeCart();
    document.getElementById('primaryNav').classList.remove('mobile-open');
    document.getElementById('menuToggle').setAttribute('aria-expanded','false');
  }
});

renderCart();
