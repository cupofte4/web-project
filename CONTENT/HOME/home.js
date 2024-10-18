$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $("header").addClass('sticky');
        } else {
            $("header").removeClass('sticky');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const wishlists = document.querySelectorAll('.wishlist');
    wishlists.forEach(wishlist => {
        wishlist.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    });
});