gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".maincontainer"),
  smooth: true,
  smartphone: {
    smooth: false,
  },
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".maincontainer", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector(".maincontainer").style.transform
    ? "transform"
    : "fixed",
});

gsap.from(".logo h1 ", {
  opacity: 0,
  duration: 1,
  y: 100,
  ease: "Power6.easeInOut",
});

gsap.from(".navlinks a ", {
  opacity: 0,
  duration: 1,
  stagger: 0.1,
  y: 100,
  ease: "Power6.easeInOut",
});

gsap.from(".crc ", {
  opacity: 0,
  duration: 1,
  y: 100,
  ease: "Power6.easeInOut",
});

gsap.from(".herocnt h1 ", {
  opacity: 0,
  duration: 1,
  y: 100,
  ease: "Power6.easeInOut",
});

gsap.from(".herocnt span ", {
  y: 100,
  ease: "power4.out",
  stagger: {
    amount: 0.3,
  },
  duration: 1,
  opacity: 0,
});

gsap.from(".mouse ", {
  opacity: 0,
  duration: 1,
  y: 100,
  ease: "Power6.easeInOut",
});

gsap.from(".projectheading ", {
  scrollTrigger: {
    trigger: ".projectheading ",
    scroller: ".maincontainer",
    scrub: true,
    start: "top bottom",
    end: "top top",
    onUpdate: (self) => console.log(self.direction),
  },
  duration: 1,
  opacity: 0,
  y: 100,
  ease: "Power6.easeInOut",
});

gsap.from(".para p ", {
  scrollTrigger: {
    trigger: ".para p",
    scroller: ".maincontainer",
    scrub: true,
    start: "top bottom",
    end: "+=500",
    onUpdate: (self) => console.log(self.direction),
  },
  duration: 1,
  opacity: 0,
  y: 50,
  ease: "Power6.easeInOut",
});

gsap.from(".aboutheading ", {
  scrollTrigger: {
    trigger: ".aboutheading",
    scroller: ".maincontainer",
    scrub: true,
    start: "top bottom",
    end: "+=500",
    onUpdate: (self) => console.log(self.direction),
  },
  duration: 1,
  opacity: 0,
  y: 100,
  ease: "Power6.ease",
});

gsap.from(".aboutcontent h1 ", {
  scrollTrigger: {
    trigger: ".aboutcontent h1",
    scroller: ".maincontainer",
    scrub: true,
    start: "top bottom",
    end: "+=500",
    onUpdate: (self) => console.log(self.direction),
  },
  duration: 1,
  opacity: 0,
  y: 100,
  ease: "Power6.ease",
});


ScrollTrigger.create({
  trigger: '.pimg',
  scroller: '.maincontainer',
  start: 'top+=30% 50%',
  end: 'bottom-=40% 50%',
  animation: gsap.to('.pimg', {backgroundSize: '100%'}),
  scrub: 2,
  // markers: true
})

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();


document.querySelector('.openBtn').addEventListener('click', function(){
  document.querySelector('#slidingNavbar').style.left = '0';
});

document.querySelector('#closeBtn').addEventListener('click', function(){
  document.querySelector('#slidingNavbar').style.left = '-100%';
});

document.querySelector('.openBtn').addEventListener('click', function(){
  document.querySelector('.hero').style.opacity = '0.4';
});

document.querySelector('#closeBtn').addEventListener('click', function(){
  document.querySelector('.hero').style.opacity = '1';
});

document.querySelector('.openBtn').addEventListener('click', function(){
  document.querySelector('.nav').style.opacity = '0.4';
});

document.querySelector('#closeBtn').addEventListener('click', function(){
  document.querySelector('.nav').style.opacity = '1';
});

