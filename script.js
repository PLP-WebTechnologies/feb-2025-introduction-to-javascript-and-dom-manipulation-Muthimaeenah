// 1. Change text content dynamically
const changeTextButton = document.getElementById('change-text-button');
const textContent = document.getElementById('text-content');

changeTextButton.addEventListener('click', () => {
    textContent.textContent = "The text has been changed!";
});

// 2. Modify CSS styles via JavaScript
const toggleColorButton = document.getElementById('toggle-color-button');
const body = document.body;

toggleColorButton.addEventListener('click', () => {
    body.style.backgroundColor = (body.style.backgroundColor === 'lightblue') ? '#f0f0f0' : 'lightblue';
});

// 3. Add a new element when a button is clicked
const addElementButton = document.getElementById('add-element-button');
const dynamicContent = document.getElementById('dynamic-content');

addElementButton.addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.textContent = "This is a new dynamically added paragraph!";
    dynamicContent.appendChild(newElement);
});
