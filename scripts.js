// Mobile Menu function

function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu.classList.contains('max-h-0')) {
    menu.classList.remove('max-h-0');
    menu.classList.add('max-h-96');
  } else {
    menu.classList.remove('max-h-96');
    menu.classList.add('max-h-0');
  }
}

// dark mode function

const html = document.documentElement;
const desktopBtn = document.getElementById('toggleBtn');
const mobileBtn = document.getElementById('toggleBtnMobile');
const circleDesktop = document.getElementById('circlepc');
const circleMobile = document.getElementById('circlemobile');

function toggleDarkMode() {
  html.classList.toggle('dark');

  if (html.classList.contains('dark')) {
    circleDesktop.classList.add('translate-x-8');
    circleMobile.classList.add('translate-x-8');
  } else {
    circleDesktop.classList.remove('translate-x-8');
    circleMobile.classList.remove('translate-x-8');
  }
}

desktopBtn.addEventListener('click', toggleDarkMode);
mobileBtn.addEventListener('click', toggleDarkMode);

// On load: set initial circle position
if (html.classList.contains('dark')) {
  circleDesktop.classList.add('translate-x-8');
  circleMobile.classList.add('translate-x-8');
}


// subscribing button
  function showThankYou() {
    document.getElementById("thanksMsg").classList.remove("hidden");
  }

