(function() {
    'use strict';

    var hamburger = document.getElementById('hamburger');
    var navigation = document.getElementById('navigation');
    var responsiveStep = 870;
    var change = window.innerWidth > responsiveStep ? false : true;

    window.addEventListener('resize', function() {
        if(window.innerWidth > responsiveStep) {
            navigation.style.display = "flex";
            change = false;
        }
        else {
            navigation.style.display = "none";
            change = true;
        }
    });

    var changeVisible = function() {
        change ? (navigation.style.display = "flex") : (navigation.style.display = "none");
        change = !change;
    };

    hamburger.addEventListener('click', changeVisible);
})();
