// Get elements
const form = document.getElementById('login-form');
const usernameField = document.getElementById('username');
const passwordField = document.getElementById('password');
const messageBox = document.getElementById('message');
const hintLink = document.getElementById('hint-link');
const hintSection = document.getElementById('hint-section');
const loginButton = document.getElementById('login-button');

let attempts = 0;

// Function to show the hint (image) in full-screen mode
function showHint() {
    hintSection.style.display = 'flex';  // Set to flex to show the hint section
}

// Function to close the hint (image) when "X" is clicked
function closeHint() {
    hintSection.style.display = 'none';  // Hide the hint section
}

// Form submit event listener
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Predefined username and password
    const correctUsername = "puppy";
    const correctPassword = "lokasamrakshana";
    const enteredUsername = usernameField.value;
    const enteredPassword = passwordField.value;

    if (enteredUsername === correctUsername && enteredPassword === correctPassword) {
        // Successful login
        messageBox.style.color = "green";
        messageBox.innerText = "Login Successful! Welcome, Buji Konda Luu ❤️";
        window.location.href = 'celebration.html';  // Redirect to the celebration page
    } else {
        // Failed attempt
        attempts++;

        if (attempts === 1) {
            messageBox.style.color = "red";
            messageBox.innerText = "Buji Buji Buji inko sari try chei bangram";
        } else if (attempts === 2) {
            messageBox.style.color = "orange";
            messageBox.innerHTML = `Babbbeeee ki hint kavali aa? <br> 
                                    Username: <b>${correctUsername}</b> <br>
                                    Password: <b>${correctPassword}</b>`;
            hintLink.classList.remove('hidden');
        }
    }
});

// Hint Link Click Event
hintLink.addEventListener('click', (e) => {
    e.preventDefault();
    showHint();  // Show the hint image section
    hintLink.classList.add('hidden');  // Hide the hint link
});

// Ensure the hint section is hidden when the page is refreshed
window.addEventListener('load', () => {
    hintSection.style.display = 'none';  // Ensure the hint section is hidden on page load
});
