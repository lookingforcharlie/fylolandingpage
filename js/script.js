const themeBtn = document.querySelector('#theme-toggle');
const sun = document.querySelector('#theme-toggle-light-icon');
const moon = document.querySelector('#theme-toggle-dark-icon');

// Check the system theme upon page load, switch to dark/light theme accordingly
// by adding or removing class in highest html tag
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

themeBtn.addEventListener('click', themeToggle);
// Toggle the theme upon highest html class
function themeToggle() {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    sun.classList.toggle('hidden');
    moon.classList.toggle('hidden');
  } else {
    document.documentElement.classList.add('dark');
    sun.classList.toggle('hidden');
    moon.classList.toggle('hidden');
  }
}
