document.addEventListener("DOMContentLoaded", () => {
    const controller = new ScrollMagic.Controller(); 

    const timeline1 = new TimelineMax();

    timeline1
        .from(".section_1_01", 4, {
            y: -100,
            x: -150,
            ease: Power3.easeInOut
        })
        .from(".section_1_02", 4, {
            y: -150,
            x: -250,
            ease: Power3.easeInOut
        }, "-=4")
        .from(".section_1_03", 4, {
            y: -80,
            x: -100,
            ease: Power3.easeInOut
        }, "-=4")
        .from(".section_1_04", 4, {
            y: -100,
            x: -150,
            ease: Power3.easeInOut
        }, "-=4")
        .from(".section_1_05", 4, {
            y: -80,
            x: -200,
            ease: Power3.easeInOut
        }, "-=4")
        .from(".section_1_06", 4, {
            y: -100,
            x: -350,
            ease: Power3.easeInOut
        }, "-=4")
        .from(".section_1_07", 4, {
            y: -50,
            x: -150,
            ease: Power3.easeInOut
        }, "-=4")
        .from(".section_1_08", 4, {
            y: -50,
            x: -450,
            ease: Power3.easeInOut
        }, "-=4")
        .from(".section_1_09", 4, {
            y: -100,
            x: -200,
            ease: Power3.easeInOut
        }, "-=4");

    const scene1 = new ScrollMagic.Scene({
        triggerElement: '.first-section',
        duration: '100%',
        triggerHook: 0,
        offset: '300'
    })
    .setTween(timeline1)
    .setPin(".first-section")
    .addTo(controller);


// ************************************** //
    const timeline2 = new TimelineMax();

    timeline2.to(".top .image-container", 4, {
        height: 0
    });

    const scene2 = new ScrollMagic.Scene({
        triggerElement: '.second-section',
        duration: '100%',
        triggerHook: 0,
        offset: '100'
    })
    .setTween(timeline2)
    .setPin(".second-section")
    .addTo(controller);
    


// ************************************** //
    const timeline3 = new TimelineMax();

    timeline3
        .to(".section_3_01", 4, {
            y: "-250",
            ease: Power3.easeInOut
        }, "-=4").to(".section_3_02", 4, {
            y: "-200",
            ease: Power3.easeInOut
        }, "-=4").to(".section_3_03", 4, {
            y: "-150",
            ease: Power3.easeInOut
        }, "-=4").to(".section_3_04", 4, {
            y: "0",
            ease: Power3.easeInOut
        }, "-=4").to(".section_3_05", 4, {
            y: "150",
            ease: Power3.easeInOut
        }, "-=4").to(".section_3_06", 4, {
            y: "250",
            ease: Power3.easeInOut
        }, "-=4");


    const scene3 = new ScrollMagic.Scene({
        triggerElement: '.third-section',
        duration: '100%',
        triggerHook: 0,
        offset: '100'
    })
    .setTween(timeline3)
    .setPin(".third-section")
    .addTo(controller);



// ************************************** //

    const timeline4 = new TimelineMax();

    timeline4
        .to(".section_4_01", 4, {
            autoAlpha: 0
        })
        .from(".section_4_02", 4, {
            autoAlpha: 0
        }, "-=4")
        .from(".section_4_03", 4, {
            autoAlpha: 0
        })
        .from(".section_4_04", 4, {
            autoAlpha: 0
        });


    const scene4 = new ScrollMagic.Scene({
        triggerElement: '.fourth-section',
        duration: '100%',
        triggerHook: 0,
        offset: '200'
    })
    .setTween(timeline4)
    .setPin(".fourth-section")
    .addTo(controller);
})