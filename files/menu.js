document.addEventListener('DOMContentLoaded', function() {
    var hamburger = document.querySelector('.sg-menu-wrapper');
    var menu = document.querySelector('.sg-menu');
    
    (function nav_prop(){
        hamburger.addEventListener('click', function(event) {
            menu.classList.toggle('show');
            menu.classList.toggle('hide');
            hamburger.classList.toggle('sg-menu-wrapper-hover');
        }, false);
        event.preventDefault();
    })();
}, false);
