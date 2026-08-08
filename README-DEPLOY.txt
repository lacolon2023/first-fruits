FIRST FRUITS — connected website (static site)

WHAT'S HERE
- index.html ............ homepage / store (hero, collections, products, plans, mission, method, FAQ, partners)
- product-*.html ........ 11 individual product pages (linked from the store's product cards)
- what-we-believe.html .. statement of faith page (linked in header + footer)
- site.css / site.js .... shared styles + cart (cart persists across every page)
- first-fruits-assets/ ... all images

EVERYTHING IS LINKED: header nav, product cards, "pairs well with", footer, and a
shared cart that carries across pages.

DEPLOY TO NETLIFY (easiest)
1. Go to app.netlify.com  ->  "Add new site"  ->  "Deploy manually".
2. Drag this ENTIRE folder onto the drop zone.
3. Netlify gives you a live URL in ~20 seconds. Add your custom domain in Site settings -> Domain.

(You can also drag the folder to netlify.com/drop for an instant preview deploy.)

NOTE: this is a front-end site. Checkout/payments, digital delivery, subscriptions,
and print-on-demand still need to be connected (Stripe/Snipcart, or rebuild on Shopify).
Use this as your live brand site and/or the design+content blueprint.
