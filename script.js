/* 100vh Scroll */

function viewport() {
    var e = window, a = 'inner';
    if (!('innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] };
}
var height = viewport().height;
$(document).on('wheel', function(e) {
  e.preventDefault();
  $('html, body').stop(true).animate({
    scrollTop: (e.originalEvent.deltaY > 0 ? '+=' : '-=') + $(window).height() + 'px'
  });
});


/* Animation activation */

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {};

const appearOnScroll = new IntersectionObserver
(function (
    entries, 
    appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        })
    }, 
    appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    })

// Hamburger show/hide

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        $('.hideme').css("opacity", 1+ $(window).scrollTop() / 700) 
    }) 
}) 


