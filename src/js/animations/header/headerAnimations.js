import { TimelineMax, Back, Power3, Power0, TweenLite } from 'gsap';
import { navInTL } from '../navigation/navigationAnimations';

// eslint-disable-next-line no-unused-vars
import CSSRulePlugin from 'gsap/CSSRulePlugin';

// ------------------------------------------

const cover = document.querySelector('.cover'),
  headerLogoSVG = document.querySelector('.header__logo-svg'),
  headerLogoBrand = document.querySelector('.header__logo-brand'),
  headerSocialItems = document.querySelectorAll('.header__social-item'),
  headerMainHeadings = document.querySelectorAll('.header__main-heading'),
  headerSubHeading = document.querySelector('.header__sub-heading'),
  headerPhoto = document.querySelector('.header__photo__img'),
  headerPhotoBg = document.querySelector('.header__photo__bg'),
  headerItems = document.querySelectorAll('.header__item');

// ------------------------------------------

const headerInTL = () => {
  const tl = new TimelineMax();
  if (window.innerWidth > 767) {
    tl.to(cover, 1.5, {
      left: '110%',
      ease: Power3.easeInOut,
      onComplete: function() {
        TweenLite.set(this.target, { display: 'none' });
      }
    })
      .add('start')
      .staggerFrom(
        [headerLogoSVG, headerLogoBrand],
        1,
        {
          cycle: { x: [-20, 20] },
          autoAlpha: 0,
          ease: Power3.easeIn
        },
        0,
        'start'
      )
      .staggerFrom(
        headerSocialItems,
        0.75,
        { y: 20, autoAlpha: 0, ease: Power0.easeIn },
        0.25,
        'start+=0.45'
      )
      .from(
        headerPhotoBg,
        1.2,
        { scale: 0, autoAlpha: 0, ease: Back.easeInOut.config(1.1) },
        'start+=0.25'
      )
      .from(
        headerMainHeadings,
        0.8,
        { x: 100, autoAlpha: 0, ease: Power0.easeIn },
        'start+=1.15'
      )
      .from(
        headerPhoto,
        0.8,
        { x: -150, autoAlpha: 0, ease: Power0.easeIn },
        'start+=1.65'
      )
      .from(
        headerSubHeading,
        0.8,
        {
          y: -20,
          autoAlpha: 0,
          ease: Power3.easeIn
        },
        'start+=2.2'
      )
      .staggerFrom(
        headerItems,
        0.4,
        { y: 20, autoAlpha: 0, ease: Power3.easeIn },
        0.2,
        'start+=2.2'
      )
      .add(navInTL(), 'start+=2.4');
  } else {
    tl.stop();
  }

  return tl;
};

// ------------------------------------------

const headerOutTL = () => {
  const tl = new TimelineMax();

  return tl;
};

// ------------------------------------------

export { headerInTL, headerOutTL };