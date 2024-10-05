document.addEventListener('DOMContentLoaded', function() {
    const productElements = document.querySelectorAll('.product-info p');

    productElements.forEach(product => {
        let clickCount = 0;

        product.addEventListener('click', function() {
            clickCount++;

            const productContainer = this.parentElement;
            const productDiv = productContainer.parentElement;
            const productName = productDiv.getAttribute('data-product');
            const productPrice = productDiv.getAttribute('data-price');

            if (clickCount === 1) {
                this.innerHTML = `<strong>${productName}</strong>`;

                // Add price span
                const price = document.createElement('span');
                price.classList.add('price');
                price.textContent = productPrice;
                productContainer.appendChild(price);

                // Add description with inline styles
                const description = document.createElement('p');
                description.style.all = "initial";
                description.style = "all: initial; font-size: 1rem; color: #a3a6a9; font-weight: 400; text-align: center; padding-inline: 7%; font-family: Arial, Helvetica, sans-serif;";
                description.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit.";
                productContainer.appendChild(description);
            } else {
                this.textContent = `Product ${[...productElements].indexOf(this) + 1}`;
                clickCount = 0;

                // Remove price and description
                productContainer.removeChild(this.nextElementSibling);
                productContainer.removeChild(this.nextElementSibling);
            }
        });
    });
});


function updateImage() {
    const imageUrl = document.getElementById('imageUrl').value;
    const imageElement = document.getElementById('displayImage');
    if (imageUrl) {
        imageElement.src = imageUrl;
    } else {
        alert('Please enter a valid URL.');
    }
}

document.getElementById('removeAltBtn').addEventListener('click', function() {
    const imageElement = document.getElementById('displayImage');
    imageElement.removeAttribute('alt');
});

        document.getElementById("fontSizeSlider").addEventListener("input", function() {
const fontSize = this.value + "px";
document.getElementById("resizableText").style.fontSize = fontSize;
});

document.getElementById("themeSwitcher").addEventListener("click", function() {
            const elements = document.getElementsByClassName("Modifying-CSS-Styles");
for (let i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("dark-theme");
}


if (this.textContent === "Click to become a dark theme") {
    this.textContent = "Click to become a light theme";
} else {
    this.textContent = "Click to become a dark theme";
}
});


/* Modifying Classes script */

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

/* Modifying Classes script */ 

/* Modifying Element Properties script */
const images = ['images.png', 'aplicando-estilos-css-1521410533.png', 'JavaScript-logo.png'];
let index = 0;

const imgElement = document.getElementById('sliderImage');


imgElement.style.transition = 'opacity 0.5s';
setInterval(() => {
    imgElement.style.opacity = '0';
    setTimeout(() => {
        index = (index + 1) % images.length;
        imgElement.src = images[index];
        imgElement.style.opacity = '1';
    }, 300);
}, 3000);

document.getElementById('nextButton').addEventListener('click', () => {
    imgElement.style.transition = 'opacity 0.5s';
    imgElement.style.opacity = '0';
    setTimeout(() => {
        index = (index + 1) % images.length;
        imgElement.src = images[index];
        setTimeout(() => {
            imgElement.style.opacity = '1';
        }, 200);
    }, 300);
});


const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');

textInput.addEventListener('input', () => {
    charCount.textContent = `Characters: ${textInput.value.length}`;
});

const colorPicker = document.getElementById('colorPicker');

const colorBox = document.getElementById('colorBox');
      colorBox.style.backgroundColor = 'black'

colorPicker.addEventListener('input', () => {
    colorBox.style.backgroundColor = colorPicker.value;
});

const todos = document.querySelectorAll('#todoList li i');
let isMouseDown2 = false; 

todos.forEach(todo => {
    // Toggle completed class on click
    todo.addEventListener('click', () => {
        todo.classList.toggle('completed');
    });

    // Add event listeners to handle mouse down and mouse up
    todo.addEventListener('mousedown', () => {
        isMouseDown2 = true; // Set the flag

        // Toggle completed class on mouse down
        // todo.classList.toggle('completed');
        todo.style.backgroundColor = 'rgb(0, 41, 123)';

    });
    document.addEventListener('mouseup', () => {
        isMouseDown2 = false; // Reset the flag
        todo.style.backgroundColor = 'transparent';
    });

    todo.addEventListener('mouseleave', () => {
        if (isMouseDown2) {
            todo.style.backgroundColor = 'rgb(0, 41, 123)';
            style.textContent = '.completed {  color: white !important; background-color: rgb(0, 41, 123) !important;}';

        }
        else {
            todo.style.backgroundColor = 'transparent';
        }
    });
});

// 

const style = document.createElement('style');
style.textContent = '.completed {  color: white !important; background-color: rgb(0, 41, 123) !important;}';
document.head.append(style);


const spinner2 = document.getElementById('spinner');
const fetchDataButton = document.getElementById('fetchData');

fetchDataButton.addEventListener('click', () => {
    spinner2.style.display = 'block'; // Show spinner

    // Simulate data fetching
    setTimeout(() => {
        spinner2.style.display = 'none'; // Hide spinner
        alert('Data fetched successfully!');
    }, 2000);
});

const textElement2 = document.getElementById('textTo');
let fontSize = 16;

document.getElementById('increaseFont').addEventListener('click', () => {
    fontSize += 2;
    textElement2.style.fontSize = `${fontSize}px`; // No !important
    if (fontSize > 30) {
        textElement2.style.fontSize = '30px';
        fontSize = 30;
    }
});

document.getElementById('decreaseFont').addEventListener('click', () => {
    fontSize -= 2;
    textElement2.style.fontSize = `${fontSize}px`; // No !important
    if (fontSize < 2) {
        textElement2.style.fontSize = '2px';
        fontSize = 2;
    }

});
/* Modifying Element Properties script */
