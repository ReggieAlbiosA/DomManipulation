let count = 0;
const getToChangeTheme = document.getElementsByClassName('Modifying-CSS-Styles');
const themeSwitcher = document.querySelector('#themeSwitcher');

themeSwitcher.addEventListener('click', changeTheTheme);
  

function changeTheTheme() {
    // Loop through all elements with the class 'Modifying-CSS-Styles'
    for (let div of getToChangeTheme) {
        if (count === 0) {
            // Apply dark theme to the div
            div.style.color = 'white';
            div.style.backgroundColor = 'black';

            // Change the text content of the button or element (if applicable)
            if (themeSwitcher.textContent === 'Click to become a dark theme') {
                themeSwitcher.textContent = 'Click to become a light theme';
            }

            // Apply dark theme to child elements

            for (let child of div.children) {
                child.style.transition = 'color 0.3s, background-color 0.3s border-color 0.3s';
                child.style.color = 'white'; // Child text color to white
                child.style.backgroundColor = 'transparent'; // Child background to transparent
                child.style.borderColor = 'white';
            }

            // Switch count to 1 to toggle the theme next time
            count = 1;
        } else {
            // Apply light theme to the div
            
            div.style.color = 'black';
            div.style.backgroundColor = 'white';

            // Change the text content of the button or element (if applicable)
            if (themeSwitcher.textContent === 'Click to become a light theme') {
                themeSwitcher.textContent = 'Click to become a dark theme';
            }

            // Apply light theme to child elements
            for (let child of div.children) {
                child.style.transition = 'color 0.3s, background-color 0.3s border-color 0.3s';
                child.style.color = 'black'; // Child text color to black
                child.style.backgroundColor = 'transparent'; // Child background to white
                child.style.borderColor = 'black';
            }

            // Switch count to 0 to toggle the theme next time
            count = 0;
        }
    }
}


// Font size adjustment functionality
const fontSizeSlider = document.getElementById("fontSizeSlider");
const resizableText = document.getElementById("resizableText");

fontSizeSlider.addEventListener("input", function() {
    const fontSize = this.value;
    resizableText.style.fontSize = fontSize + "px";
});
