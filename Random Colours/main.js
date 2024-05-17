

function genRandomColour(){
   const l ='0123456789ABCDEF'
   let col ='#'
   for(let i = 0; i < 6; i++){
       col += l[Math.floor(Math.random() * 16)]
   }
   return col;
}

// Function to toggle between light and dark mode
function toggleDarkMode() {
    // Get the container element with the class 'theme'
    const container = document.querySelector('.theme');

    // Toggle the 'dark-mode' class on the container element
    container.classList.toggle('dark-mode');

    // Check if dark mode is enabled
    const isDarkMode = container.classList.contains('dark-mode');

    // If dark mode is enabled, set CSS variables for dark mode
    if (isDarkMode) {
        container.style.setProperty('--background-color', '#333'); // Set background color to dark
        container.style.setProperty('--text-color', '#fff');      // Set text color to light
    } else {
        // If dark mode is disabled, remove CSS variables for dark mode
        container.style.removeProperty('--background-color'); // Remove background color property
        container.style.removeProperty('--text-color');      // Remove text color property
    }

    // You can add more CSS variables or properties to adjust other styles as needed
}

// Example: Add event listener to a button to toggle dark mode when clicked
const toggleButton = document.getElementById('dark-mode-toggle');
toggleButton.addEventListener('click', toggleDarkMode);
