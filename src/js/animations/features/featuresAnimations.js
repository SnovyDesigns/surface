import hoverEffect from 'hover-effect';

let image1to2 = new hoverEffect({
  hover: false,
  parent: document.querySelector('.feature--desktop__img'),
  intensity: 0.6,
  image1: require('../../../img/feature-1.jpg'),
  image2: require('../../../img/feature-2.jpg'),
  displacementImage: require('../../../img/displacement.jpg')
});

let heading = document.querySelector('.feature--desktop__heading');

heading.addEventListener('click', () => {
  image1to2.next();
});
