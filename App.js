;
const tl = gsap.timeline()

//document.addEventListener('DOMContentLoaded', removeLoader);

function removeLoader() {
  const loader = document.querySelector('.flex-loader');
  loader.classList.add('active');
}


gsap.registerPlugin(ScrollTrigger)
function basicAnimation() {
  tl.from('body', {
    duration: 2,
    opacity: 0,
    y: "100vh",
    ease: "bounce"
  });
  tl.from('nav', { duration: 2, x: '-100vw' });
  tl.from('.menu', { duration: 1, opacity: 0 })
  tl.from('.menu div', { duration: .5, y: 9, stagger: .5 });
  tl.from('.banner h3, .banner h4', {

    duration: .5,
    y: "5vh",
    opacity: 0
  })
  tl.from('.banner a', { duration: 1, y: 'random(-100, 100)', opacity: 0, ease: "bounce" });
}
basicAnimation();

function slickAnimations() {
  let tl = gsap.timeline({
    scrollTrigger: {
      scrub: true,

    }
  });
  tl.from('.section1',
  {
    scrollTrigger: {
      trigger: 'h4',
      toggleActions: 'reverse pause resume pause',
      scrub: true,
      start: "-50px center",
    },
    duration: 2,
    y: '56px',
    skewY: '-10px',
    opacity: 0,
  })
  tl.from('.section2 .content', {
    scrollTrigger: {
      trigger: '.content',
      toggleActions: 'reverse pause resume pause',

      scrub: true,
      start: '400px center',
      end: '+=300px'
    },
    duration: 10,
    ease: 'power0',
    x: "50vw",
    opacity: 0,

  })
  gsap.from('.flex', {
    scrollTrigger:
    {
      trigger: '.section2',

    },
    duration: .5,
    opacity: 0,
    stagger: .5

  })
  tl.from('.sec3', {
    scrollTrigger: {
      trigger: '.sec3',
      toggleActions: 'reverse pause resume pause',

      scrub: true,
      start: '-400px bottom',

    },
    duration: 1,
    y: '20vh',
    opacity: 0,

  })
  tl.from('.section4', {
    scrollTrigger: {
      trigger: '.sec3',
      toggleActions: 'reverse pause resume pause',

      scrub: 5,
      start: '-20% bottom'

    },
    duration: 1,
    scale: 1.1,
    opacity: 0
  })
}
slickAnimations();