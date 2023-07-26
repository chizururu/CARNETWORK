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

    const cards = document.querySelectorAll('.card');
    let currentPage = 0;
    let cardsPerPage;

    function showCards() {
        const startIndex = currentPage * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;

        cards.forEach((card, index) => {
            if (index >= startIndex && index < endIndex) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    function previousCard() {
        if (currentPage > 0) {
            currentPage--;
            showCards();
            updatePaginationBtn();
        }
    }

    function nextCard() {
        const totalPages = Math.ceil(cards.length / cardsPerPage);

        if (currentPage < totalPages - 1) {
            currentPage++;
            showCards();
            updatePaginationBtn();
        }
    }

    function updatePaginationBtn() {
        const prevButton = document.getElementById('prev');
        const nextButton = document.getElementById('next');

        const totalPages = Math.ceil(cards.length / cardsPerPage);

        prevButton.disabled = currentPage === 0;
        nextButton.disabled = currentPage === totalPages - 1;
    }

    function updateCardsPerpage() {
        const devicewidth = window.innerWidth;

        if (devicewidth <= 600) {
            cardsPerPage = devices.phone;
        } else if (devicewidth <= 768) {
            cardsPerPage = devices.tablet;
        } else if (devicewidth <= 992) {
            cardsPerPage = devices.laptop;
        } else {
            cardsPerPage = devices.pc;
        }

        // Show the cards for the current page after updating cardsPerPage
        showCards();
        updatePaginationBtn();
    }

// Call the initial setup
    updateCardsPerpage();

// Add event listeners to the "Previous" and "Next" buttons
    document.getElementById('prev').addEventListener('click', previousCard);
    document.getElementById('next').addEventListener('click', nextCard);

// Add event listener to window resize to update cardsPerPage and re-render cards
    window.addEventListener('resize', updateCardsPerpage);
});
