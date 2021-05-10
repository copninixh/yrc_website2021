$(document).ready(function() {
    TweenMax.to(".white-banner", 2, {
        x:1350,
        delay:1,
        ease: Power4.easeInOut
    })

    TweenMax.from(".center-logo", 0.5, {
        opacity:0,
        delay:2.5,
        ease: Power2.easeOut
    })

    TweenMax.from(".main-nav__logo-box", 0.5, {
        y:-53,
        delay:3,
        ease: Power2.easeOut
    })

    TweenMax.from(".item1", 0.5, {
        y:-53,
        delay:3,
        ease: Power2.easeOut
    })

    TweenMax.from(".item2", 0.5, {
        y:-53,
        delay:3.2,
        ease: Power2.easeOut
    })

    TweenMax.from(".item3", 0.5, {
        y:-53,
        delay:3.4,
        ease: Power2.easeOut
    })

    TweenMax.from(".item4", 0.5, {
        y:-53,
        delay:3.6,
        ease: Power2.easeOut
    })
    
    TweenMax.from(".main-nav__right", 0.5, {
        y:-53,
        delay:4.3,
        ease: Power2.easeOut
    })
    
});