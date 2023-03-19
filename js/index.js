const scroller = new LocomotiveScroll({
  el: document.querySelector(".scroll-container"),
  smooth: true,
  getDirection: true,
  inertia: 0.5,
  getSpeed: true,
  tablet: { smooth: true },
  smartphone: { smooth: true },
});

gsap.registerPlugin(ScrollTrigger);

scroller.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".scroll-container", {
  scrollTop(value) {
    return arguments.length
      ? scroller.scrollTo(value, 0, 0)
      : scroller.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      left: 0,
      top: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
});

gsap.to("body", {
  "--color": "black",
  immediateRender: false,
  scrollTrigger: {
    trigger: ".projects",
    scroller: ".scroll-container",
    scrub: 1,
    start: "top bottom",
    end: "+=80%",
  },
});

function heroAnim() {
  var tl = gsap.timeline();

  tl.from(".h-t", 0.8, {
    stagger: 0.1,
    ease: "Expo.ease",
    y: 250,
    skewY: 10,
  }).from(
    ".smiley img",
    0.8,
    {
      ease: "bounce.out",
      scale: 0,
    },
    "-=0.2"
  )
  .from('.outline h1', 0.8,{
    y: 300,
    ease: "Expo.ease",
    skewY: 10
  },'-=0.8')
  .from('.fill h1', 0.8,{
    y: 300,
    ease: "Expo.ease",
    skewY: 10
  },'-=0.8')
  .from('.rect', 0.8,{
    y: 800,
    opacity: 0,
    ease: "Expo.ease",
  },'-=0.8')
}
heroAnim();

function about() {
  let tl = gsap.timeline();

  tl.from('.ava-txt h3', 0.8, {
    y: 100,
    ease: "Expo.ease",
  })
  .from('.ava-txt h1', 0.8, {
    y: 100,
    ease: "Expo.ease",
  },'-=0.7')
  .from('.row-one', 0.8,{
    y: 300,
    ease: "Expo.ease",
    skewY: 10,
    opacity:0
  },'-=0.5')
}
about();

ScrollTrigger.addEventListener("refresh", () => scroller.update());
ScrollTrigger.refresh();
