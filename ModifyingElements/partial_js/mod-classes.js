document.querySelector('.Modifying-Classes button').addEventListener('click', function() {
    const emailInput = document.querySelector('.Modifying-Classes input');
    if (!emailInput.value.includes('@')) {
        emailInput.classList.add('invalid');
    } else {
        emailInput.classList.remove('invalid');
    }
});

let emailInput = document.querySelector('.Modifying-Classes input');

emailInput.addEventListener('blur', () => {
    emailInput.classList.remove('invalid');

});



const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function() {
    navLinks.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
  });
});

const thumbnails = document.querySelectorAll('.thumbnail');
thumbnails.forEach(thumbnail => {
  thumbnail.addEventListener('click', function() {
    thumbnails.forEach(img => img.classList.remove('active'));
    this.classList.add('active');
  });
});

const button = document.getElementById('submitButton');
const div = document.querySelector('.loading-button'); // Change this line
const spinner = document.querySelector('.spinner');

spinner.style.display = 'none';

let isMouseDown = false;

div.addEventListener('click', function() {
    // Show the spinner and hide the button
    button.style.opacity = '0';
    button.style.transition = 'opacity 0.2s';
    spinner.style.display = 'block';
    

    // Simulate a loading process
    setTimeout(() => {
        // Hide the spinner and show the button again after 3 seconds
        
        spinner.style.display = 'none';
        button.style.opacity = '1'; // or 'block' depending on your layout
        
    }, 3000);
});

// Change background color on mouse down
div.addEventListener('mousedown', function() {
    isMouseDown = true; // Set the flag
    div.style.backgroundColor = 'rgb(0, 41, 123)'; // Darker shade
});

document.addEventListener('mouseup', function() {
    if (isMouseDown) {
        isMouseDown = false; // Reset the flag
        div.style.backgroundColor = ''; // Reset to original color
    }
});

// Handle mouse leave
div.addEventListener('mouseleave', function() {
    if (isMouseDown) {
        div.style.backgroundColor = 'rgb(0, 41, 123)'; // Keep it dark
    }
});


const menuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
  menuToggle.style.display = 'block';
});

const header = document.getElementById('mainHeader');
const parent = document.querySelector('.Modifying-Classes');
window.addEventListener('scroll', () => {
    // Get the scroll position of the parent element
    const parentScrollTop = parent.getBoundingClientRect().top;

    // Check if the parent has been scrolled down
    if (parentScrollTop < -200) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

const showhidebutton = document.getElementById('toggleText');
  const text = document.getElementById('text');

  showhidebutton.addEventListener('click', () => {
    text.classList.toggle('hidden');

    if (showhidebutton.textContent === 'Hide Text') {
        showhidebutton.textContent = 'Show Text';
    } else {
        showhidebutton.textContent = 'Hide Text';

    }

  });
