import { TimelineMax, Back, Power3 } from 'gsap';

const downloadLogo = document.querySelector('.download__logo'),
  downloadMainHeading = document.querySelector('.download__main-heading'),
  downloadSubHeading = document.querySelector('.download__sub-heading'),
  downloadBtns = document.querySelectorAll('.download__btns .btn');

// ------------------------------------------

const downloadTL = () => {
  const tl = new TimelineMax();

  tl.add('df-start')
    .from(downloadLogo, 1.6, {
      scale: 0,
      autoAlpha: 0,
      ease: Back.easeInOut.config(1.1)
    })
    .from(
      downloadMainHeading,
      1,
      { y: 50, autoAlpha: 0, ease: Power3.easeIn },
      'df-start+=0.2'
    )
    .from(
      downloadSubHeading,
      0.6,
      { y: 20, autoAlpha: 0, ease: Power3.easeIn },
      'df-start+=0.8'
    )
    .staggerFrom(
      downloadBtns,
      0.6,
      { y: 40, autoAlpha: 0, ease: Power3.easeIn },
      0.25,
      'df-start+=1'
    );
  return tl;
};

// ------------------------------------------

export default downloadTL;
