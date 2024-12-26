// if(window.navigator.online){
//     (function ($) { 
//         $("#loader").removeClass("show");
//     })(jQuery);
// }else{
//     (function ($) { 
//     var loader = function () {
//         setTimeout(function () {
//             if ($('#loader').length > 0) {
//                 $('#loader').addClass('show');
//             }
//         }, 2000);
//     };
//     loader(); 
// })(jQuery);
// }

(function ($) { 
    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show');
            }
        }, 2000);
    };
    loader(); 
})(jQuery);

window.onload = function(){
    scroll({
        left:0,
        top:0,
        behavior:'smooth'
    })
}

document.querySelector(".IconMenu").onclick = function(){
    (function ($) { 
        $("body").addClass("overflow-hidden");
        $("div#menu").removeClass("menu");
        $("div#menu").addClass("active");
        $("ul.navbar").removeClass("navbar");
        $(".unlockscreen").addClass("lockscreen");
    })(jQuery);
};
document.querySelector(".Menu_Close").onclick = function(){
    (function ($) { 
        $("body").removeClass("overflow-hidden");
        $("div#menu").addClass("menu");
        $("div#menu").removeClass("active");
        $("ul#navbar").addClass("navbar");
        $(".unlockscreen").removeClass("lockscreen");
    })(jQuery);
};
window.onscroll = function(){
    if(scrollY >= 10){
        (function ($) { 
            $(".header").addClass("active");
            $(".btnup").removeClass("d-none").addClass("d-block");
        })(jQuery);
    }else{
        $(".header").removeClass("active");
        $(".btnup").addClass("d-none").removeClass("d-block");
    }
}
document.querySelector(".btnup").onclick = function(){
    scroll({
        left:0,
        top:0,
        behavior:'smooth'
    });
}

document.querySelector(".IconMenu").onclick = function(){
    (function ($) { 
        $("body").addClass("overflow-hidden");
        $("div#menu").removeClass("menu");
        $("div#menu").addClass("active");
        $("ul.navbar").removeClass("navbar");
        $(".unlockscreen").addClass("lockscreen");
    })(jQuery);
};