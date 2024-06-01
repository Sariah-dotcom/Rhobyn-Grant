

// Hero animations
const tl1 = gsap.timeline(
    {defaults:{duration:0.75, ease:"Power3.easeOut"}}
);

tl1.fromTo(
    ".nav-items, .logo, .nav-decor, .hero-imgs",
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
    ".hero-caption button",
    {
        opacity:0,
        y:-100
    },
    {
        opacity:1,
        y:0,
        ease: "elastic(1.5,1)"
    }
)