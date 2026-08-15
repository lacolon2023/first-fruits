const PRODUCTS={"identity": {"name": "Who I Am in Christ", "price": 14.99, "image": "identity.jpg"}, "god-made-me": {"name": "God Made Me", "price": 14.99, "image": "god-made-me.jpg"}, "love-like-jesus": {"name": "Love Like Jesus", "price": 14.99, "image": "love-like-jesus.jpg"}, "seasonal": {"name": "Seasonal Units", "price": 14.99, "image": "seasonal.jpg"}, "flashcards": {"name": "Memory Verse Cards", "price": 4.99, "image": "flashcards.jpg"}, "letter-cards": {"name": "Letter Cards", "price": 4.99, "image": "flashcards.jpg"}, "sight-word-cards": {"name": "Sight Word Cards", "price": 4.99, "image": "flashcards.jpg"}, "bundle": {"name": "Teacher Resource Bundle", "price": 59.99, "image": "teacher.jpg"}};
function loadCart(){try{return JSON.parse(localStorage.getItem('firstFruitsCart')||'{}')||{}}catch(e){return {}}}
let cart=loadCart();
Object.keys(cart).forEach(id=>{if(!PRODUCTS[id])delete cart[id]});
function saveCart(){try{localStorage.setItem('firstFruitsCart',JSON.stringify(cart))}catch(e){}}
function totals(){let c=0,s=0;for(const id in cart){const p=PRODUCTS[id];if(!p)continue;c+=cart[id];s+=p.price*cart[id]}return{c,s}}
function addToCart(id){cart[id]=(cart[id]||0)+1;saveCart();renderCart();openCart();toast((PRODUCTS[id]?PRODUCTS[id].name:'Item')+' added to cart')}
function chg(id,d){cart[id]=(cart[id]||0)+d;if(cart[id]<=0)delete cart[id];saveCart();renderCart()}
function rm(id){delete cart[id];saveCart();renderCart()}
function openCart(){document.getElementById('drawer').classList.add('open');document.getElementById('overlay').classList.add('open')}
function closeCart(){document.getElementById('drawer').classList.remove('open');document.getElementById('overlay').classList.remove('open')}
function renderCart(){
  const body=document.getElementById('cartBody');const ids=Object.keys(cart).filter(id=>PRODUCTS[id]);
  if(!ids.length){body.innerHTML='<div class="cart-empty">🌱<p>Your cart is empty.</p></div>'}
  else{body.innerHTML=ids.map(id=>{const p=PRODUCTS[id];return `<div class="cart-item"><img src="first-fruits-assets/${p.image}" alt=""><div style="flex:1"><b>${p.name}</b><div class="p">$${p.price.toFixed(2)} each</div><div class="cq"><button onclick="chg('${id}',-1)">−</button><span>${cart[id]}</span><button onclick="chg('${id}',1)">+</button></div><button class="rm" onclick="rm('${id}')">Remove</button></div></div>`}).join('')}
  const{c,s}=totals();const badge=document.getElementById('cartCount');badge.textContent=c;badge.style.display=c?'flex':'none';
  document.getElementById('subtotal').textContent='$'+s.toFixed(2);
  const note=document.getElementById('shipNote');
  if(s>=75)note.innerHTML='🎉 You’ve unlocked <b>free shipping!</b>';else if(s>0)note.textContent='Add $'+(75-s).toFixed(2)+' more for free shipping.';else note.textContent='Free shipping on orders $75+';
}
let tt;function toast(m){const t=document.getElementById('toast');t.textContent=m;t.classList.add('show');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('show'),2400)}
function checkout(){if(!totals().c){toast('Your cart is empty');return}toast('This is a preview store — thanks for exploring First Fruits! 🌱')}
function toggleMenu(){document.getElementById('primaryNav').classList.toggle('open')}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeCart()});
renderCart();
