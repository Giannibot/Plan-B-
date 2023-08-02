
// Function to handle the touchstart event
function handleTouchStart(event) {
    event.preventDefault(); // Add this line if the event handler needs to prevent the default behavior
    // Your touchstart event handling code here
  }
  
  // Function to handle the touchmove event
  function handleTouchMove(event) {
    event.preventDefault(); // Add this line if the event handler needs to prevent the default behavior
    // Your touchmove event handling code here
  }
  
  // Add the event listeners with the 'passive' option set to true
  document.addEventListener('touchstart', handleTouchStart, { passive: true });
  document.addEventListener('touchmove', handleTouchMove, { passive: true });
  

    function updateNavbarBackground() {
        const navbar = document.getElementById("navcol");
        const scrollY = window.scrollY;

        if (scrollY > 0) {
            navbar.classList.add("transparent-bg");
        } else {
            navbar.classList.remove("transparent-bg");
        }
    }

    // Listen for scroll events and update the navbar background
    window.addEventListener("scroll", updateNavbarBackground);

