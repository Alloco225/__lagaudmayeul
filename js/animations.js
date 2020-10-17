
    //$(".play").click(function(){    
// SVG_PLANET animation
$(document).ready(function () {
    
    var tl = new TimelineMax();
    var circle_kernel = "#circle_kernel";
    var circle_kernel_orbs = '.kernel_orbs';
    var circle_kernel_lines = 'line[stroke="white"]';
    var circle_1 = "#circle_1";
    var circle_1_orbs = 'circle[fill="#EEEEEE"]';
    var circle_1_lines = 'line[stroke="#EEEEEE"]';
    
    var circle_2 = "#circle_2";
    var circle_2_orbs = 'circle[fill="#CCCCCC"], circle[fill="#C4C4C4"]';
    var circle_2_lines = 'line[stroke="#CCCCCC"], line[stroke="#C4C4C4"]';
    var circle_3 = "#circle_3";
    var circle_3_orbs = 'circle[fill="#AAAAAA"]';
    var circle_3_lines = 'line[stroke="#AAAAAA"]';
    var circle_4 = "#circle_4";
    var circle_4_orbs = 'circle[fill="#999999"]';
    var circle_4_lines = 'line[stroke="#999999"]';
    var c1d = .3;
    var c2d = .3;
    var c3d = .4;
    var c4d = .5;
    var od = .2;
    tl
    .from(circle_kernel, .4, {
        scale: 0,
        transformOrigin: "center",
        ease: Power2.easeOut,
    })
    .from(circle_kernel_lines, .4, {
        scale: 0,
            transformOrigin: "bottom right",
            ease: Power2.easeOut,
        })
        .from(circle_kernel_orbs, .2, {
            scale: 0,
            transformOrigin: "bottom right",
            ease: Power2.easeOut,
        })
        // circle 1 
        .from(circle_1_lines, c1d, {
            scale: 0,
            transformOrigin: "bottom right",
            ease: Power2.easeOut,
        })
        .from(circle_1_orbs, .2, {
            scale: 0,
            transformOrigin: "center",
            ease: Power2.easeOut,
        })
        .from(circle_1, c1d, {
            scale: 0,
            transformOrigin: "bottom right",
            ease: Power2.easeOut,
        })
        // circle 2
        .from(circle_2, c2d, {
            scale: 0,
            transformOrigin: "bottom right",
            ease: Power2.easeOut,
        })
        .from(circle_2_lines, c2d, {
            scale: 0,
            transformOrigin: "bottom right",
            ease: Power2.easeOut,
        })
        .from(circle_2_orbs, .2, {
            scale: 0,
            transformOrigin: "center",
            ease: Power2.easeOut,
        })
        // circle 3
        .from(circle_3, c3d, {
            scale: 0,
            transformOrigin: "bottom right",
            ease: Power2.easeOut,
        })
        // circle 4
        .from(circle_4, c4d, {
            scale: 0,
            transformOrigin: "bottom right",
            ease: Power2.easeOut,
        })
        .from(circle_4_lines, .4, {
            scale: 0,
            transformOrigin: "bottom right",
            ease: Power2.easeOut,
        })
        .from(circle_4_orbs, .2, {
            scale: 0,
            transformOrigin: "center",
            ease: Power2.easeOut,
        })
        // circle 3
        .from(circle_3_lines, .4, {
            scale: 0,
            transformOrigin: "bottom right",
            ease: Power2.easeOut,
        })
        .from(circle_3_orbs, .2, {
            scale: 0,
            transformOrigin: "center",
            ease: Power2.easeOut,
        })
        .from('.header-img', .2, {
            y: 500,
            opacity: 0,
            
            ease: Power2.easeOut,
        })
    // circle 4
    
    ;
});