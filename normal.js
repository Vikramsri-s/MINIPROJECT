<script>
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("openModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    // Function to show the Register form and hide the Login form
    function showRegister() {
      document.getElementById("loginForm").classList.remove("active");
      document.getElementById("registerForm").classList.add("active");
    }

    // Function to show the Login form and hide the Register form
    function showLogin() {
      document.getElementById("registerForm").classList.remove("active");
      document.getElementById("loginForm").classList.add("active");
    }

    // Mock login function
    function login() {
      var username = document.getElementById("loginUsername").value;
      var password = document.getElementById("loginPassword").value;

      // Perform login logic (for now just an alert)
      alert("Login successful for user: " + username);
    }

    // Mock register function
    function register() {
      var username = document.getElementById("registerUsername").value;
      var password = document.getElementById("registerPassword").value;
      var confirmPassword = document.getElementById("confirmPassword").value;

      if (password === confirmPassword) {
        // Perform register logic (for now just an alert)
        alert("Registration successful for user: " + username);
      } else {
        alert("Passwords do not match!");
      }
    }
  </script><script>
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("openModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function() {
      modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }

    // Function to show the Register form and hide the Login form
    function showRegister() {
      document.getElementById("loginForm").classList.remove("active");
      document.getElementById("registerForm").classList.add("active");
    }

    // Function to show the Login form and hide the Register form
    function showLogin() {
      document.getElementById("registerForm").classList.remove("active");
      document.getElementById("loginForm").classList.add("active");
    }

    // Mock login function
    function login() {
      var username = document.getElementById("loginUsername").value;
      var password = document.getElementById("loginPassword").value;

      // Perform login logic (for now just an alert)
      alert("Login successful for user: " + username);
    }

    // Mock register function
    function register() {
      var username = document.getElementById("registerUsername").value;
      var password = document.getElementById("registerPassword").value;
      var confirmPassword = document.getElementById("confirmPassword").value;

      if (password === confirmPassword) {
        // Perform register logic (for now just an alert)
        alert("Registration successful for user: " + username);
      } else {
        alert("Passwords do not match!");
      }
    }
  </script>