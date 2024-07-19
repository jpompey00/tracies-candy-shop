"use strict";

window.onload = function () {
    const form = document.querySelector('form');
    form.onsubmit = handleUserRegistration;

    // Real-time validation
    //when those events occured call their respective functions
    document.getElementById('exampleInputUsername').oninput = validateUsername;
    document.getElementById('exampleInputEmail1').oninput = validateEmail;
    document.getElementById('exampleInputPassword1').oninput = validatePassword;

    // Fetch and display a random quote when the page loads
    fetchQuote();
};

function handleUserRegistration(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data from input fields
    const username = document.getElementById('exampleInputUsername').value;
    const email = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;
    const passwordConfirm = document.getElementById('passwordconfirm').value;
    const termsAccepted = document.getElementById('terms').checked;
    const howDidYouHear = document.getElementById('howDidYouHear').value;
    const otherSource = document.getElementById('otherSource').value;

    // Reset form feedback
    resetFormFeedback();

    // Basic form validation
    let valid = true;
    if (!username || !email) {
        document.getElementById('formFeedback').textContent = 'Username and Email are required!';
        valid = false;
    }

    // Validate that the passwords match
    if (password !== passwordConfirm) {
        document.getElementById('passwordConfirmFeedback').textContent = 'Passwords do not match!';
        valid = false;
    }

    // Check if terms and conditions are accepted
    if (!termsAccepted) {
        document.getElementById('termsFeedback').textContent = 'You must accept the terms and conditions!';
        valid = false;
    }

    // Validate how did you hear about us
    if (howDidYouHear === "Other" && !otherSource) {
        document.getElementById('otherSourceFeedback').textContent = 'Please specify how you heard about us!';
        valid = false;
    }

    // Simulate email availability check
    if (!checkEmailAvailability(email)) {
        document.getElementById('formFeedback').textContent = 'Email is already registered!';
        valid = false;
    }

    if (!valid) {
        return;
    }

    // Create a user object with the form data
    const user = {
        username,
        email,
        password,
        howDidYouHear: howDidYouHear === "Other" ? otherSource : howDidYouHear
    };

    // Save the user object to local storage as a JSON string
    localStorage.setItem('user', JSON.stringify(user));

    // Display a success modal
    displaySuccessModal();

    // console.log('Registration successful! You can now log in.'); // Log a success message
    event.target.reset(); // Reset the form fields
    document.getElementById('otherSourceContainer').style.display = 'none'; // Hide other source input field
}

// Function to simulate checking email availability
function checkEmailAvailability(email) {
    // Simulate email availability: emails ending with 'example.com' are unavailable
    return !email.endsWith('example.org');
}

// Function to fetch a random quote from an API
function fetchQuote() {
    const quoteContainer = document.querySelector('.quote-container');
    quoteContainer.textContent = '<div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div>'; // Show loading spinner

    fetch('https://api.quotable.io/random') // Fetch a random quote
        .then(response => response.json()) // Parse the response as JSON
        .then(data => displayQuote(data.content, data.author)) // Display the quote and author
        .catch(error => {
            console.error('Error fetching quote:', error); // Log any errors
            quoteContainer.textContent = 'Failed to load quote'; // Display error message
        });
}

// Function to display the fetched quote on the page
function displayQuote(quote, author) {
    const quoteContainer = document.querySelector('.quote-container');
    quoteContainer.textContent = ''; // Clear the container

    // Create a paragraph element for the quote text
    const quoteText = document.createElement('p');
    quoteText.style.cssText = 'font-style: italic; color: #ff6f61;';
    quoteText.textContent = `"${quote}"`; // Set the text content to the quote

    // Create a paragraph element for the quote author
    const quoteAuthor = document.createElement('p');
    quoteAuthor.style.cssText = 'font-weight: bold; color: #ff4c3b;';
    quoteAuthor.textContent = `- ${author}`; // Set the text content to the author

    // Append the quote text and author to the quote container
    quoteContainer.appendChild(quoteText);
    quoteContainer.appendChild(quoteAuthor);

    // Add animation
    quoteContainer.classList.add('animate__animated', 'animate__fadeIn');
}

// Function to display a success modal after registration
function displaySuccessModal() {
    const modalHtml = `
        <div class="modal fade" id="successModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Registration Successful</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                Your registration was successful! You can now log in.
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
    `;

    // Append the modal HTML to the body
    document.body.insertAdjacentHTML('beforeend', modalHtml);

    // Show the modal
    const successModal = new bootstrap.Modal(document.getElementById('successModal'));
    successModal.show();
}

// Real-time validation functions
function validateUsername() {
    const username = document.getElementById('exampleInputUsername').value;
    const usernameFeedback = document.getElementById('usernameFeedback');

    if (!username) {
        usernameFeedback.innerHTML = 'Username is required.';
        usernameFeedback.style.color = 'red';
    } else {
        usernameFeedback.inner = '';
    }
}

function validateEmail() {
    const email = document.getElementById('exampleInputEmail1').value;
    const emailFeedback = document.getElementById('emailFeedback');

    if (!email) {
        emailFeedback.textContent = 'Email is required.';
        emailFeedback.style.color = 'red';
    } else {
        emailFeedback.textContent = '';
    }
}

function validatePassword() {
    const password = document.getElementById('exampleInputPassword1').value;
    const passwordStrength = document.getElementById('passwordStrength');

    // Check password strength
    if (password.length < 6) {
        passwordStrength.textContent = 'Weak';
        passwordStrength.style.color = 'red';
    } else if (password.length < 10) {
        passwordStrength.textContent = 'Moderate';
        passwordStrength.style.color = 'orange';
    } else {
        passwordStrength.textContent = 'Strong';
        passwordStrength.style.color = 'green';
    }
}

// Function to handle the change in the "How did you hear about us?" 
function handleSourceChange() {
    const howDidYouHear = document.getElementById('howDidYouHear').value;
    const otherSourceContainer = document.getElementById('otherSourceContainer');

    if (howDidYouHear === "Other") {
        otherSourceContainer.style.display = 'block';
    } else {
        otherSourceContainer.style.display = 'none';
    }
}

// Function to reset form feedback
function resetFormFeedback() {
    document.getElementById('formFeedback').innerHTML = '';
    document.getElementById('usernameFeedback').innerHTML = '';
    document.getElementById('emailFeedback').innerHTML = '';
    document.getElementById('passwordConfirmFeedback').innerHTML = '';
    document.getElementById('termsFeedback').innerHTML = '';
    document.getElementById('otherSourceFeedback').innerHTML = '';
}
