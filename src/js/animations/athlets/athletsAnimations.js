import CSSRulePlugin from 'gsap/CSSRulePlugin';
import { TimelineMax, Power2, Back, Power3 } from 'gsap/TweenMax';

// ------------------------------------------
// eslint-disable-next-line no-unused-vars
const plugins = [CSSRulePlugin];

// ------------------------------------------

const athlets = document.querySelector('.athlets'),
  athletsBefore = CSSRulePlugin.getRule('.athlets::before'),
  athletsAfter = CSSRulePlugin.getRule('.athlets:after'),
  athletsImg = document.querySelector('.athlets__img'),
  athletsImgPluses = athletsImg.querySelectorAll('.accent__plus'),
  athletsImgLine = athletsImg.querySelector('.accent__line'),
  athletsHeading = document.querySelector('.athlets__heading h2'),
  atheltsFeatureHeadings = athlets.querySelectorAll('.feature-text__heading'),
  atheltsFeatureParagraphs = athlets.querySelectorAll(
    '.feature-text__paragraph'
  );

// ------------------------------------------

const athletsTL = () => {
  const tl = new TimelineMax();
  tl.add('start')
    .from(
      athletsImg,
      1.5,
      {
        x: -450,
        autoAlpha: 0,
        ease: Power2.easeOut,
        clearProps: 'all'
      },
      'start'
    )
    .staggerFrom(
      [athletsBefore, athletsAfter],
      1.3,
      { cssRule: { right: '-100%' }, ease: Power2.easeOut },
      0.2,
      'start'
    )
    .from(
      athletsImgLine,
      1.25,
      { scale: 0, autoAlpha: 0, ease: Back.easeInOut.config(1.1) },
      'start+=1.25'
    )
    .staggerFrom(
      athletsImgPluses,
      0.65,
      { scale: 0, autoAlpha: 0, ease: Back.easeInOut.config(1.4) },
      0.15,
      'start+=1.35'
    )
    .from(
      athletsHeading,
      0.8,
      { y: 50, autoAlpha: 0, ease: Power3.easeIn },
      'start+=1.45'
    )
    .staggerFrom(
      atheltsFeatureHeadings,
      0.6,
      { y: 20, autoAlpha: 0, ease: Power3.easeIn },
      0.4,
      'start+=1.55'
    )
    .staggerFrom(
      atheltsFeatureParagraphs,
      0.6,
      { y: 20, autoAlpha: 0, ease: Power3.easeIn },
      0.4,
      'start+=1.75'
    );

  return tl;
};

// ------------------------------------------

export default athletsTL;
