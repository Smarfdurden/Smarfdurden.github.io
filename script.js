// JavaScript to toggle menu visibility
const toggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a');

// Toggle menu visibility on hamburger click
toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Close menu when a link is clicked
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

// Dark mode toggle
const toggleButton = document.getElementById('toggle-dark-mode');
const icon = document.getElementById('icon');

// Function to update dark mode UI
function updateDarkModeUI(isDarkMode) {
  document.body.classList.toggle('dark-mode', isDarkMode); // Add/remove dark-mode
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled'); // Save preference
  icon.classList.replace(isDarkMode ? 'fa-sun' : 'fa-moon', isDarkMode ? 'fa-moon' : 'fa-sun'); // Update icon
}

// Load dark mode preference on page load
document.addEventListener('DOMContentLoaded', () => {
  const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
  updateDarkModeUI(isDarkMode);
});

// Toggle dark mode on button click
toggleButton.addEventListener('click', () => {
  const isDarkMode = !document.body.classList.contains('dark-mode');
  updateDarkModeUI(isDarkMode);
});

// Select the button
const scrollToTopButton = document.getElementById("scrollToTop");

// Add an event listener for scrolling
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) { // Show button after scrolling down 300px
    scrollToTopButton.classList.add("show");
  } else {
    scrollToTopButton.classList.remove("show");
  }
});

// Scroll to top when the button is clicked
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth" // Smooth scrolling
  });
});

