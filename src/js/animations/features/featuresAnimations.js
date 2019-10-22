import hoverEffect from 'hover-effect';
import { TimelineMax, TweenLite, Power2, Power3, Back, Power0 } from 'gsap';
import TextPlugin from 'gsap/TextPlugin';

// ------------------------------------------

// eslint-disable-next-line no-unused-vars
const plugins = [TextPlugin];

// ------------------------------------------

const featureDesktop = document.querySelector('.feature--desktop'),
  featureDesktopCover = featureDesktop.querySelector('.cover'),
  featureDesktopImg1 = featureDesktop.querySelector('.feature__img--1'),
  featureDesktopImg2 = featureDesktop.querySelector('.feature__img--2'),
  featureDesktopImg3 = featureDesktop.querySelector('.feature__img--3'),
  featureDesktopImg = document.querySelector('.feature--desktop__img'),
  featureDesktopHeading = document.querySelector('.feature--desktop__heading'),
  featureDesktopHeadingHeader = featureDesktopHeading.querySelector('h3'),
  featureDesktopCounter = document.querySelector('.feature--desktop__counter'),
  featureDesktopCounterText = featureDesktopCounter.querySelector('span'),
  featureDesktopParagraph = document.querySelector(
    '.feature--desktop__paragraph'
  ),
  featureDesktopLine = document.querySelector('.feature--desktop__line');

// ------------------------------------------

const commonSteps = (label, imgFrom, imgTo, fdcText, fdhhText, fdpText) => {
  const tl = new TimelineMax();

  tl.to(
    featureDesktopCover,
    2.2,
    {
      left: '220%',
      ease: Power3.easeInOut,
      onComplete: function() {
        TweenLite.set(this.target, { left: '-220%' });
      }
    },
    label
  )
    .to(imgFrom, 1, { opacity: 0, ease: Power3.easeIn }, label)
    .to(imgTo, 1, { opacity: 1, ease: Power3.easeOut }, `${label}+=1`)
    .to(
      featureDesktopCounterText,
      1,
      {
        autoAlpha: 0,
        ease: Power3.easeIn,
        onComplete: function() {
          TweenLite.set(this.target, { text: fdcText });
        }
      },
      label
    )
    .to(
      featureDesktopCounterText,
      1,
      { autoAlpha: 1, ease: Power3.easeOut },
      `${label}+=1.2`
    )
    .to(
      featureDesktopHeadingHeader,
      0.8,
      {
        y: -30,
        autoAlpha: 0,
        ease: Power3.easeIn,
        onComplete: function() {
          TweenLite.set(this.target, { text: fdhhText, y: 30 });
        }
      },
      label
    )
    .to(
      featureDesktopHeadingHeader,
      0.8,
      { y: 0, autoAlpha: 1, ease: Power3.easeOut },
      `${label}+=1`
    )
    .to(
      featureDesktopParagraph,
      0.8,
      {
        y: -30,
        autoAlpha: 0,
        ease: Power3.easeIn,
        onComplete: function() {
          TweenLite.set(this.target, {
            text: fdpText,
            y: 30
          });
        }
      },
      `${label}+=0.1`
    )
    .to(
      featureDesktopParagraph,
      0.8,
      { y: 0, autoAlpha: 1, ease: Power3.easeOut },
      `${label}+=1.1`
    )
    .to(
      featureDesktopLine,
      0.8,
      {
        y: -30,
        autoAlpha: 0,
        ease: Power3.easeIn,
        onComplete: function() {
          TweenLite.set(this.target, { width: '90%', y: 30 });
        }
      },
      `${label}+=0.2`
    )
    .to(
      featureDesktopLine,
      0.8,
      { y: 0, autoAlpha: 1, ease: Power3.easeOut },
      `${label}+=1.2`
    );

  return tl;
};

// ------------------------------------------

const imageChangeTL = () => {
  const tl = new TimelineMax({ repeat: -1 });
  tl.to(featureDesktopLine, 5, { width: 22, ease: Power0.easeNone })
    .add('img1')
    .add(
      commonSteps(
        'img1',
        featureDesktopImg1,
        featureDesktopImg2,
        '02',
        'Find contact',
        'Contact others to find right coach or athlete you are looking for.'
      )
    )
    .to(featureDesktopLine, 5, { width: 22, ease: Power0.easeNone })
    .add('img2')
    .add(
      commonSteps(
        'img2',
        featureDesktopImg2,
        featureDesktopImg3,
        '03',
        'Work it',
        'Enjoy being a student athlete, we want to make this a enjoyable experience.'
      )
    )
    .to(featureDesktopLine, 5, { width: 22, ease: Power0.easeNone })
    .add('img3')
    .add(
      commonSteps(
        'img3',
        featureDesktopImg3,
        featureDesktopImg1,
        '01',
        'Be active',
        'Post videos with your skills, Like and follow others to be more popular.'
      )
    );

  return tl;
};

// ------------------------------------------

const featuresTL = () => {
  const tl = new TimelineMax();

  tl.add('start')
    .from(
      featureDesktopImg,
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
      [featureDesktopHeading, featureDesktopParagraph, featureDesktopLine],
      1.5,
      { x: 450, autoAlpha: 0, ease: Power2.easeOut, clearProps: 'all' },
      0.45,
      'start'
    )
    .from(
      featureDesktopCounter,
      1,
      { scale: 0, autoAlpha: 0, ease: Back.easeInOut.config(1.1) },
      'start+=1'
    )
    .add(imageChangeTL(), 3);

  return tl;
};

// ------------------------------------------

export default featuresTL;
