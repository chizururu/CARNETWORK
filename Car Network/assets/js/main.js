document.addEventListener('DOMContentLoaded', function () {
    const mobileCollapse = document.querySelector('.mobile-collapse');
    const navbar = document.querySelector('#header .navbar');

    mobileCollapse.addEventListener('click', function () {
       navbar.classList.toggle('show-mobile-menu');
    });

    // Close the mobile menu card when clicking outside the card
    document.addEventListener('click', function (event) {
        if (!navbar.contains(event.target) && !event.target.classList.contains('mobile-collapse') && !event.target.classList.contains('search-button')) {
            navbar.classList.remove('show-mobile-menu');
        }
    });


    var header = document.getElementById('header');

    function handleScroll() {
        if (window.scrollY > 0) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }
    }

    // Tambahkan event listener ke event scroll
    window.addEventListener('scroll', handleScroll);

    $(document).ready(function() {
        $('.select-form').select2();
    });

});