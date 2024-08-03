const tl1 = gsap.timeline(
    {defaults:{duration:0.75, ease:"Power3.easeOut"}}
);

tl1.fromTo(
    ".nav-items, .logo, .hamburger, .nav-decor, .hero-imgs, .hero-content h1, .down-arrow, .decor",
    {
        opacity:0,
        y:300
    },
    {
        opacity:1,
        y:0,
        duration:2,
        stagger : 0.3
    }
);

tl1.fromTo(
    ".down-arrow",
    {
        y:0,
    },
    {
        y: -10,
        duration: 1,
        yoyo: true,
        repeat:-1
    }
);

const tl2 = gsap.timeline(
    {defaults:{duration:0.75, ease:"Power3.easeOut"}}
);

tl2.fromTo(
    "#welcome",
    {
        x:-100,
        opacity: 0
    },
    {
        x:0,
        opacity:1,
        duration: 1.5
    }
);

ScrollTrigger.create({
    trigger: "#banner",
    start: 'top',
    animation: tl2
});

const tl3 = gsap.timeline(
    {defaults:{duration:0.75, ease:"Power3.easeOut"}}
);

tl3.fromTo(
    ".a, .d, .c",
    {
        opacity: 0,
        x: -100
    },
    {
        opacity:1,
        x:0,
        stagger: 0.2
    }
);

tl3.fromTo(
    ".b, .e, .f",
    {
        opacity: 0,
        y: -100
    },
    {
        opacity:1,
        y:0,
        stagger: 0.2
    }
);

ScrollTrigger.create({
    trigger: "#youtube",
    start: 'bottom 30%',
    animation: tl3
});



    












// Navigation
document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('menu').style.right = '0px';
});

document.getElementById('close').addEventListener('click', function() {
    document.getElementById('menu').style.right = '-300px';
});























// const tl1 = gsap.timeline(
//     {defaults:{duration:0.75, ease:"Power3.easeOut"}}
// );

// tl1.fromTo(
//     ".nav-items, .logo, .hamburger-menu, .nav-decor, .hero-imgs",
//     {
//         opacity:0,
//         y:300
//     },
//     {
//         opacity:1,
//         y:0,
//         duration:2,
//         stagger : 0.3
//     }
// );

// tl1.fromTo(
//     ".hero-caption button",
//     {
//         opacity:0,
//         y:-100
//     },
//     {
//         opacity:1,
//         y:0,
//         ease: "elastic(1.5,1)"
//     }
// )





// const tl3 = gsap.timeline(
//     {defaults:{duration:0.75, ease:"Power3.easeOut"}}
// );

// tl3.fromTo(
//     ".contact-left",
//     {
//         opacity: 0,
//         x:-200
//     },
//     {
//         opacity:1,
//         x:0,
//         duration:2
//     }
// );

// const tl4 = gsap.timeline(
//     {defaults:{duration:0.75, ease:"Power3.easeOut"}}
// );

// tl4.fromTo(
//     ".contact-right",
//     {
//         opacity: 0,
//         x:200
//     },
//     {
//         opacity:1,
//         x:0,
//         duration:2
//     }
// );

// ScrollTrigger.create( {
//     trigger: "#youtube",
//     start: 'center 50%',
//     animation:tl3,
//     scrub: true,
// });

// ScrollTrigger.create( {
//     trigger: "#youtube",
//     start: 'center 50%',
//     animation:tl4,
//     scrub: true,
// })