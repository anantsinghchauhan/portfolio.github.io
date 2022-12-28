const scroller = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  getDirection: true,
  inertia: 0.8,
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

function heroAnim() {
  var tl = gsap.timeline();

  tl.from(".h-t", 0.8, {
    stagger: 0.1,
    ease: "Expo.ease",
    y: 250,
    skewY: 10,
  })
    .from(
      ".smiley img",
      0.8,
      {
        ease: "bounce.out",
        scale: 0,
      },
      "-=0.5"
    )
    .from(
      ".ln",
      0.8,
      {
        scaleY: 0,
        stagger: 0.1,
        ease: "Expo.ease",
        transformOrigin: "top",
      },
      "-=0.7"
    )
    .from(
      ".three-d",
      0.8,
      {
        height: "0",
        ease: "Expo.ease",
      },
      "-=0.5"
    )
    .from(
      ".skills",
      0.8,
      {
        height: "0",
        ease: "Expo.ease",
      },
      "-=0.5"
    )
    .from(
      ".skills ul li",
      0.8,
      {
        y: 50,
        stagger: 0.1,
        ease: "Expo.ease",
      },
      "-=0.5"
    );
}
heroAnim();

function projAnim() {
  let tl = gsap.timeline();
}
projAnim();

ScrollTrigger.addEventListener("refresh", () => scroller.update());
ScrollTrigger.refresh();

//IMAGE PARALLAX

// const els = document.querySelectorAll(".ukiyo");
// els.forEach((el) => {
//   const parallax = new Ukiyo(el);
// });

