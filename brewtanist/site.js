'use strict';
// All business content is rendered by Jekyll; JavaScript only enhances navigation/layout.
const menu = document.querySelector('.mobile-nav');
if (menu) {
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.open = false; }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.open) { menu.open = false; menu.querySelector('summary').focus(); }
  });
}
// Optional desktop image-side control. Mobile always keeps the headline first.
const leftHero = document.querySelector('.hero-grid.image-left .hero-visual');
if (leftHero) {
  const desktop = window.matchMedia('(min-width: 801px)');
  const placeHero = () => { leftHero.style.order = desktop.matches ? '-1' : ''; };
  placeHero();
  if (desktop.addEventListener) desktop.addEventListener('change', placeHero);
  else desktop.addListener(placeHero);
}
