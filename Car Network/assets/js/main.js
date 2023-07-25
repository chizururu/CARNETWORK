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
        $('select').selectpicker();
    });

    /* Paganation using Carousel */

    /* Array Devices */
    const devices = {
        phone : 1,
        tablet : 2,
        laptop : 3,
        pc : 4,
    }
    function sizeLayout() {
        const devicewidith = window.innerWidth;
        console.log(devicewidith);


        /* Cards */
        const cards = document.querySelectorAll('.card');
        let currentPage = 0;
        const cardsPerPage = 0;
        console.log(cards);

        if (devicewidith <= 600) {
            console.log('cards', devices.phone)

        } else if (devicewidith <= 768) {
            console.log('tablet', devices.tablet)
        } else if (devicewidith <= 992) {
            console.log('laptop', devices.laptop)
        } else {
            console.log('desktop', devices.pc)
        }

    }
    sizeLayout();
    window.addEventListener("resize", sizeLayout);
});