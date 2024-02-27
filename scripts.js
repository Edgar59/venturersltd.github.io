document.addEventListener("DOMContentLoaded", function() {
    // Hide all sections except the first one
    var sections = document.querySelectorAll('.section');
    for (var i = 1; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    // Add event listeners to navigation links
    var navLinks = document.querySelectorAll('.navigation a');
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            var targetSectionId = this.getAttribute('href').substring(1);
            showSection(targetSectionId);
        });
    }
});

function showSection(sectionId) {
    var sections = document.querySelectorAll('.section');
    for (var i = 0; i < sections.length; i++) {
        if (sections[i].id === sectionId) {
            sections[i].style.display = 'block'; // Show the target section
        } else {
            sections[i].style.display = 'none'; // Hide other sections
        }
    }
}
    document.getElementById('logoutButton').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor action
        logout();
    });

    function logout() {
        if (confirm("Are you sure you want to logout?")) {
            alert("Logged out successfully!");
            window.location.href = "index.html"; // Redirects to the home page or login page
        }
    }
    
       // Communication Script
       const messageForm = document.getElementById('messageForm');
       const adminResponseContainer = document.getElementById('admin-response');

       messageForm.addEventListener('submit', function(e) {
           e.preventDefault();
           const message = document.getElementById('comment').value;
           
           // Placeholder for sending the message - In a real scenario, you'd likely make an AJAX request here
           console.log(`Message sent: ${message}`);

           // Simulate an admin response
           setTimeout(() => {
               const response = document.createElement('p');
               response.textContent = `Admin response to "${message}"`;
               adminResponseContainer.appendChild(response);
           }, 2000); // Simulated delay
       });

       
