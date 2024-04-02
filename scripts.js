
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

       
