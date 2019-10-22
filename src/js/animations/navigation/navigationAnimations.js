/* eslint-disable no-unused-vars */
import { TimelineMax, Power0, Power3, Power4 } from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import athletsTL from '../athlets/athletsAnimations';
import playersTL from '../players/playersAnimations';
import featuresTL from '../features/featuresAnimations';
import downloadTL from '../download/downloadAnimations';

// ------------------------------------------

const plugins = [ScrollToPlugin];

// ------------------------------------------

const nav = document.querySelector('.nav'),
  navLinks = document.querySelectorAll('.nav__link'),
  navLinkText = document.querySelectorAll('.nav__text'),
  navLinkTextRev = Array.from(navLinkText).reverse(),
  homeLink = document.querySelector('#home-link'),
  athletsLink = document.querySelector('#athlets-link'),
  playersLink = document.querySelector('#players-link'),
  featuresLink = document.querySelector('#features-link'),
  downloadLink = document.querySelector('#download-link');

// ------------------------------------------

const navInTL = () => {
  const tl = new TimelineMax();
  tl.fromTo(
    nav,
    1.5,
    { right: -100 },
    { right: 0, ease: Power3.easeOut }
  ).staggerFromTo(
    navLinkText,
    0.35,
    { autoAlpha: 0 },
    { autoAlpha: 1, ease: Power0.easeOut },
    0.3,
    '-=0.3'
  );

  return tl;
};

// ------------------------------------------

const navOutTL = () => {
  const tl = new TimelineMax();
  tl.staggerFromTo(
    navLinkTextRev,
    0.35,
    { autoAlpha: 1 },
    { autoAlpha: 0, ease: Power3.easeIn },
    0.3
  ).fromTo(nav, 1, { right: 0 }, { right: -100, ease: Power0.easeIn }, '-=0.3');

  return tl;
};

// ------------------------------------------

for (const link of navLinks) {
  link.addEventListener('click', e => {
    e.preventDefault();
  });
}

const scrollTo = target => {
  const tl = new TimelineMax(),
    href = target.getAttribute('href');

  tl.to(window, 1.5, {
    scrollTo: href,
    ease: Power4.easeOut
  });

  return tl;
};

// ------------------------------------------

homeLink.addEventListener('click', e => {
  const home = document.getElementById('home'),
    homeTo = new TimelineMax();

  let homePos = home.getBoundingClientRect().y;

  if (homePos < 0) {
    homeTo
      .add('ath-start')
      .add(navOutTL())
      .add(scrollTo(e.target.parentElement), 'ath-start+=1.75')
      .add(navInTL(), 'ath-start+=3');
  }

  return false;
});

// ------------------------------------------

let athletsVisited = false;

athletsLink.addEventListener('click', e => {
  const athletsTo = new TimelineMax();

  if (athletsVisited) {
    athletsTo
      .add('ath-start')
      .add(navOutTL())
      .add(scrollTo(e.target.parentElement), 'ath-start+=1.75')
      .add(navInTL(), 'ath-start+=3');
  } else {
    athletsTo
      .add('ath-start')
      .add(navOutTL())
      .add(scrollTo(e.target.parentElement), 'ath-start+=1.75')
      .add(athletsTL(), 'ath-start+=3.25')
      .add(navInTL(), 'ath-start+=4.7');
    athletsVisited = true;
  }

  return false;
});

// ------------------------------------------

let playersVisited = false;

playersLink.addEventListener('click', e => {
  const playersTo = new TimelineMax();

  if (playersVisited) {
    playersTo
      .add('ath-start')
      .add(navOutTL())
      .add(scrollTo(e.target.parentElement), 'ath-start+=1.75')
      .add(navInTL(), 'ath-start+=3');
  } else {
    playersTo
      .add('ath-start')
      .add(navOutTL())
      .add(scrollTo(e.target.parentElement), 'ath-start+=1.75')
      .add(playersTL(), 'ath-start+=3.25')
      .add(navInTL(), 'ath-start+=4.7');
    playersVisited = true;
  }

  return false;
});

// ------------------------------------------

let featuresVisited = false;

featuresLink.addEventListener('click', e => {
  const featuresTo = new TimelineMax();

  if (featuresVisited) {
    featuresTo
      .add('ath-start')
      .add(navOutTL())
      .add(scrollTo(e.target.parentElement), 'ath-start+=1.75')
      .add(navInTL(), 'ath-start+=3');
  } else {
    featuresTo
      .add('ath-start')
      .add(navOutTL())
      .add(scrollTo(e.target.parentElement), 'ath-start+=1.75')
      .add(featuresTL(), 'ath-start+=3.25')
      .add(navInTL(), 'ath-start+=4.7');
    featuresVisited = true;
  }

  return false;
});

// ------------------------------------------

let downloadVisited = false;

downloadLink.addEventListener('click', e => {
  const downloadTo = new TimelineMax();

  if (downloadVisited) {
    downloadTo
      .add('ath-start')
      .add(navOutTL())
      .add(scrollTo(e.target.parentElement), 'ath-start+=1.75')
      .add(navInTL(), 'ath-start+=3');
  } else {
    downloadTo
      .add('ath-start')
      .add(navOutTL())
      .add(scrollTo(e.target.parentElement), 'ath-start+=1.75')
      .add(downloadTL(), 'ath-start+=3.25')
      .add(navInTL(), 'ath-start+=4.7');
    downloadVisited = true;
  }

  return false;
});

// ------------------------------------------

export { navInTL, navOutTL };
