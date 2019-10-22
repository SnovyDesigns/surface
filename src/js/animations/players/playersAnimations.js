import { TimelineMax, Power2, Back, Power3 } from 'gsap/TweenMax';
import { navInTL } from '../navigation/navigationAnimations';

// ------------------------------------------
// eslint-disable-next-line no-unused-vars
const plugins = [CSSRulePlugin];

// ------------------------------------------

const players = document.querySelector('.players'),
  playersBefore = CSSRulePlugin.getRule('.players::before'),
  playersAfter = CSSRulePlugin.getRule('.players:after'),
  playersImg = document.querySelector('.players__img'),
  playersImgPluses = playersImg.querySelectorAll('.accent__plus'),
  playersImgLine = playersImg.querySelector('.accent__line'),
  playersHeading = document.querySelector('.players__heading h2'),
  playersFeatureHeadings = players.querySelectorAll('.feature-text__heading'),
  playersFeatureParagraphs = players.querySelectorAll(
    '.feature-text__paragraph'
  );

// ------------------------------------------

const playersTL = () => {
  const tl = new TimelineMax();
  tl.add('start')
    .from(
      playersImg,
      1.5,
      {
        x: 450,
        autoAlpha: 0,
        ease: Power2.easeOut,
        clearProps: 'all'
      },
      'start'
    )
    .staggerFrom(
      [playersBefore, playersAfter],
      1.3,
      { cssRule: { left: '-100%' }, ease: Power2.easeOut },
      0.2,
      'start'
    )
    .from(
      playersImgLine,
      1.25,
      { scale: 0, autoAlpha: 0, ease: Back.easeInOut.config(1.1) },
      'start+=1.25'
    )
    .staggerFrom(
      playersImgPluses,
      0.65,
      { scale: 0, autoAlpha: 0, ease: Back.easeInOut.config(1.4) },
      0.15,
      'start+=1.35'
    )
    .from(
      playersHeading,
      0.8,
      { y: 50, autoAlpha: 0, ease: Power3.easeIn },
      'start+=1.45'
    )
    .staggerFrom(
      playersFeatureHeadings,
      0.6,
      { y: 20, autoAlpha: 0, ease: Power3.easeIn },
      0.4,
      'start+=1.55'
    )
    .staggerFrom(
      playersFeatureParagraphs,
      0.6,
      { y: 20, autoAlpha: 0, ease: Power3.easeIn },
      0.4,
      'start+=1.75'
    )
    .add(navInTL(), 'start+=1.45');

  return tl;
};

// ------------------------------------------

export default playersTL;
