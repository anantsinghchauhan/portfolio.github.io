function shery() {
  Shery.mouseFollower({
    // skew: true,
    duration: 1,
  });
  
  Shery.makeMagnet(".magnet", {
    ease: "(t) => 1 - (1 - t) * (1 - t)",
    duration: 1,
  });
}
shery()

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

function heroAnim() {
  let tl = gsap.timeline();

  tl.from(".hero-txt", 1, {
    stagger: 0.2,
    ease: "power4.inout",
    duration: 2,
    y: 250,
    skewY: 10,
  })
    .from(
      ".sub-txt",
      1,
      {
        ease: "power4.inout",
        y: 250,
        skewY: 10,
      },
      "-=0.7"
    )
    .from(
      ".hero-video",
      1,
      {
        transform: "scale(0)",
        opacity: 0,
        ease: "Power4.out"
      },
      "-=0.3"
    );
}
heroAnim();

function aboutAnim() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".about",
      scroller: ".main",
      start: "top 100%",
      end: "bottom bottom",
    },
    ease: "Expo.ease",
  });
  tl.from(".about-txt1", 1, {
    y: 120,
    stagger: 0.08,
  })
    .from(".a-txt", 1, {
      y: 220,
      stagger: 0.08,
    },'-=0.6')
    .from(
      ".gif",
      1,
      {
        transform: "scale(0)",
      },
      "-=0.8"
    );
}
aboutAnim();

ScrollTrigger.addEventListener("refresh", () => scroller.update());
ScrollTrigger.refresh();

// function projectHorizontalScroll() {
//   let horizontalSection = document.querySelector(".project-container");
//   gsap.to(".project-container", {
//     x: () => horizontalSection.scrollWidth * -1,
//     xPercent: 100,
//     scrollTrigger: {
//       trigger: ".projects",
//       start: "center center",
//       end: "+=2000px",
//       pin: ".projects",
//       scrub: true,
//       invalidateOnRefresh: true,
//     },
//   });
// }
// projectHorizontalScroll();

function lenisScroll() {
  const update = (time, deltaTime, frame) => {
    lenis.raf(time * 800);
  };

  const resize = (e) => {
    ScrollTrigger.refresh();
  };

  const lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
    easing: (t) => 1 - (1 - t) * (1 - t),
    infinite: false,
  });

  lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
    ScrollTrigger.update();
  });

  gsap.ticker.add(update);

  ScrollTrigger.scrollerProxy(document.body, {
    scrollTop(value) {
      if (arguments.length) {
        lenis.scroll = value;
      }
      return lenis.scroll;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
  });

  ScrollTrigger.defaults({ scroller: document.body });

  window.addEventListener("resize", resize);
}
lenisScroll();

function linksColor() {
  const target_1 = document.querySelector(".links .l");

  var position_target_1 = getElementPosition(target_1, true);

  ScrollTrigger.addEventListener("refreshInit", function () {
    position_target_1 = getElementPosition(target_1, true);
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".links .l", {
    scrollTrigger: {
      trigger: ".page1",
      start: () => "top " + position_target_1,
      end: () => "+=" + target_1.outerHeight() + " " + position_target_1,
      scrub: 1,
    },
    color: "#121414",
    immediateRender: false,
  });

  gsap.to(".links .l", {
    scrollTrigger: {
      trigger: ".projects",
      start: () => "bottom " + position_target_1,
      end: () => "+=" + target_1.outerHeight() + " +=" + position_target_1,
      scrub: 1,
    },
    color: "#121414",
    immediateRender: false,
  });

  function getElementPosition(element, bottom = false) {
    let position = element.offset().top - $(window).scrollTop();
    return !bottom ? position : position + element.outerHeight();
  }
}
linksColor();
