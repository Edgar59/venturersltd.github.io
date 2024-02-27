document.addEventListener('DOMContentLoaded', function() {
    // Get the elements
    var navLinks = document.getElementById("nav-links");
    var navbarToggle = document.querySelector(".navbar-toggle");

    // Function to toggle the navigation menu
    function toggleNav() {
        if (navLinks.style.display === "block") {
            navLinks.style.display = "none";
        } else {
            navLinks.style.display = "block";
        }
    }

    // Event listener for the navbar toggle
    navbarToggle.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent click from immediately propagating to document
        toggleNav();
    });

    // Event listener to hide the navigation menu if clicking outside of it
    document.addEventListener('click', function(e) {
        if (navLinks.style.display === "block" && !navLinks.contains(e.target) && !navbarToggle.contains(e.target)) {
            navLinks.style.display = "none";
        }
    });

    // Prevent clicks within the nav-links from closing it
    navLinks.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});
