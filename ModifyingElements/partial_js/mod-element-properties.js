const images = ['./images/images.png', './images/aplicando-estilos-css-1521410533.png', './images/JavaScript-logo.png'];
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

const filterInput = document.getElementById('filterInput');
const items = document.querySelectorAll('#itemList li');

filterInput.addEventListener('input', () => {
    const filterValue = filterInput.value.toLowerCase();
    items.forEach(item => {
        item.style.display = item.textContent.toLowerCase().includes(filterValue) ? '' : 'none';
    });
});

let progressBar = document.getElementById('progressBar');
let progress = 0;

  // Event listener for increasing progress
  document.getElementById('progressButton-increase').addEventListener('click', () => {
    if (progress < 100) {
        progress += 10;
        progressBar.style.width = `${progress}%`;
    }
});

// Event listener for decreasing progress
document.getElementById('progressButton-decrease').addEventListener('click', () => {
    if (progress > 0) {  // Ensure we don't go below 0%
        progress -= 10;
        progressBar.style.width = `${progress}%`;
    }
});


let list100 = document.querySelector('.todo-list #todoList');
let newTask = document.getElementById('todoInput');
let submitTask = document.querySelector('.todo-list button');

    submitTask.addEventListener('click', () => {
        let lis = document.createElement('li');
        if (newTask.value === '') {
            alert('Please enter a task');
            return;
        }
        else {
            lis.textContent = newTask.value;
        }
        // Create button element
        let button = document.createElement('button');
        button.style.marginLeft = '5px';
        button.style.color = 'red';
        button.style.backgroundColor = 'transparent';
        button.style.border = 'white 1px solid';

        button.textContent = 'X'; // Button text
      
            // Append button to li without replacing the text
        lis.appendChild(button);

        list100.appendChild(lis);
        newTask.value = '';
        
          // Optional: Add functionality to delete the list item when button is clicked
        button.addEventListener('click', () => {
        lis.remove(); // Remove the li element when the button is clicked
    });
    })