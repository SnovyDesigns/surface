import { TimelineMax, Power0, Power3 } from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';

// ------------------------------------------

const nav = document.querySelector('.nav'),
  navListAfter = CSSRulePlugin.getRule('.nav__list:after'),
  navLink = document.querySelectorAll('.nav__link'),
  navLinkAfter = CSSRulePlugin.getRule('.nav__link:after'),
  navLinkText = document.querySelectorAll('.nav__text'),
  navLinkTextRev = Array.from(navLinkText).reverse();

// ------------------------------------------

const navInTL = () => {
  const tl = new TimelineMax();
  tl.add('n-start')
    .from(nav, 1.5, { width: 0, ease: Power3.easeOut })
    .staggerFrom(
      navLink,
      0.5,
      { y: '100%', ease: Power3.easeOut },
      0.3,
      'n-start+=0.2'
    )
    .staggerFrom(
      navLinkText,
      0.75,
      { autoAlpha: 0, ease: Power0.easeOut },
      0.3,
      'n-start+=0.2'
    );
  return tl;
};

// ------------------------------------------

const navOutTL = () => {
  const tl = new TimelineMax();
  tl.staggerTo(navLinkTextRev, 0.5, { autoAlpha: 0, ease: Power3.easeIn }, 0.3)
    .set(navListAfter, { display: 'block' })
    .set([navLinkText, navLinkAfter], { display: 'none' })
    .to(navLink, 0.5, { height: 10, ease: Power0.easeIn })
    .to([nav], 0.75, { width: 0, ease: Power3.easeIn });
  return tl;
};

for (const link of navLink) {
  link.addEventListener('click', () => {
    // navOutTL();
  });
}

// ------------------------------------------

export { navInTL, navOutTL };
