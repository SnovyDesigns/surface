import { headerDesktopTL, headerMobileTL } from './header/headerAnimations';

window.onload = () => {
  if (window.innerWidth >= 768) {
    headerDesktopTL();
  } else {
    headerMobileTL();
  }
};
