gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline({ paused: true });

//////////////////////Menu intro///////////////////////
const animateOpenNav = () => {
  tl.to(".nav-container", 0.2, {
    autoAlpha: 1,
    delay: 0.1,
  });

  tl.to(
    ".site-logo",
    0.2,
    {
      color: "#fff",
    },
    "-=0.1"
  );
};
const openNav = () => {
  animateOpenNav();
  const navBtn = document.getElementById("menu-toggle-btn");
  navBtn.onclick = function (e) {
    navBtn.classList.toggle("active");
    tl.reversed(!tl.reversed());
  };
  const navPageBtn = document.querySelector(".portfolio");
  navPageBtn.addEventListener("click", () => {
    navBtn.classList.remove("active");
    tl.reverse();
  });
  const navPageBtn1 = document.querySelector(".about");
  navPageBtn1.addEventListener("click", () => {
    navBtn.classList.remove("active");
    tl.reverse();
  });
  const navPageBtn2 = document.querySelector(".exp");
  navPageBtn2.addEventListener("click", () => {
    navBtn.classList.remove("active");
    tl.reverse();
  });
  const navPageBtn3 = document.querySelector(".edu");
  navPageBtn3.addEventListener("click", () => {
    navBtn.classList.remove("active");
    tl.reverse();
  });
  const navPageBtn4 = document.querySelector(".cont");
  navPageBtn4.addEventListener("click", () => {
    navBtn.classList.remove("active");
    tl.reverse();
  });
};

openNav();

tl.from(".flex > div", 0.4, {
  opacity: 0,
  y: 10,
  stagger: {
    amount: 0.04,
  },
});
tl.from(
  ".nav-link",
  0.3,
  {
    opacity: 0,
    y: 10,
    ease: "power2.inOut",
    stagger: {
      amount: 0.3,
    },
  },
  "-=0.4"
);
tl.from(
  ".nav-footer",
  0.3,
  {
    opacity: 0,
  },
  "-=0.5"
).reverse();
///////////Intro///////////////////
const timelineintro = gsap.timeline({ default: { duration: 1 } });
timelineintro
  .to(".barre_noir", {
    y: "-100%",
    ease: "power4.Out",
    duration: 0.5,
    delay: 0.5,
  })
  .to(".barre_noir", { y: "-200%", ease: "power1.Out", duration: 1.3 })
  .from(
    ".header",
    { y: "50%", opacity: 0, ease: "power2.inOut", stagger: 0.5 },
    "<.5"
  )
  .from(".site-logo", { opacity: 0 }, 0.5)
  .from(".meu-toggle", { opacity: 0 })
  .from(
    ".souris",
    {
      y: "50%",
      opacity: 0,
      ease: "power2.inOut",
      duration: 0.5,
    },
    2.5
  )
  .from(".lettreScroll", {
    y: "50%",
    opacity: 0,
    ease: "power2.inOut",
    stagger: 0.05,
  })
  .from(".fleche", {
    y: "50%",
    opacity: 0,
    ease: "power2.inOut",
    duration: 0.5,
  });
////////////////Suite//////////////////

//titres
const titres = gsap.utils.toArray(".titreAnime");
titres.forEach((titre) => {
  gsap.from(titre, {
    scrollTrigger: {
      trigger: titre,
      toggleActions: "play pause resume none",
    },
    y: "50%",
    opacity: 0,
    ease: "power2.inOut",
    duration: 1,
  });
});
//projets
const boiteprojet = gsap.utils.toArray(".boite-projet");
boiteprojet.forEach((projet) => {
  gsap.from(projet, {
    scrollTrigger: {
      trigger: projet,
      toggleActions: "play pause resume none",
    },
    y: "50%",
    opacity: 0,
    ease: "power2.inOut",
    duration: 1,
  });
});
//photo moi
gsap.from(".largeur-image", {
  scrollTrigger: {
    trigger: ".largeur-image",
    start: "top bottom",
    end: "top center",
    scrub: 1,
  },
  scale: 0,
});
//icone skills
gsap.from(".icone-popup", {
  scrollTrigger: {
    trigger: ".icone-popup",
    toggleActions: "play pause resume none",
  },
  scale: 0,
  ease: "bounce",
  stagger: 0.3,
});
//bloques exp
const infoexps = gsap.utils.toArray(".infos_exp");
infoexps.forEach((infosexp) => {
  gsap.from(infosexp, {
    scrollTrigger: {
      trigger: infosexp,
      toggleActions: "play pause resume none",
    },
    x: "50%",
    opacity: 0,
    scale: 0,
    ease: "slow",
    duration: 1,
  });
});
//icone exp
const iconeexps = gsap.utils.toArray(".icone-exp");
iconeexps.forEach((iconeexp) => {
  gsap.from(iconeexp, {
    scrollTrigger: {
      trigger: iconeexp,
      toggleActions: "play pause resume none",
    },
    scale: 0,
    ease: "bounce",
    duration: 1,
  });
});
//contacts
gsap.from(".contacts", {
  scrollTrigger: {
    trigger: ".contacts",
    toggleActions: "play pause resume none",
  },
  opacity: 0,
  y: 10,
  stagger: 0.2,
});
