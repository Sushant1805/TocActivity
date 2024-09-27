document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.container');
    const submitButton = form.querySelector('button[type="submit"]');
    const alertModal = document.getElementById('alert-modal');
    const closeAlertButton = document.getElementById('close-alert');

    submitButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default form submission for validation

        const firstName = document.getElementById('first-name').value.trim();
        const lastName = document.getElementById('last-name').value.trim();
        const email = document.getElementById('email').value.trim();
        const mobileNumber = document.getElementById('mobile-number').value.trim();
        const country = document.getElementById('country').value.trim();
        const streetAddress = document.getElementById('street-address').value.trim();
        const city = document.getElementById('city').value.trim();
        const region = document.getElementById('region').value.trim();
        const postalCode = document.getElementById('postal-code').value.trim();

        let isValid = true;

        resetErrors(); // Clear any previous error messages

        // Validation logic
        if (firstName === '' || firstName.length < 2 || firstName.length > 50) {
            showError('first-name', 'First name is required and should be between 2 and 50 characters.');
            isValid = false;
        }

        if (lastName === '' || lastName.length < 2 || lastName.length > 50) {
            showError('last-name', 'Last name is required and should be between 2 and 50 characters.');
            isValid = false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '' || !emailPattern.test(email)) {
            showError('email', 'Please enter a valid email address.');
            isValid = false;
        }

        const mobilePattern = /^[0-9]{10}$/;
        if (mobileNumber === '' || !mobilePattern.test(mobileNumber)) {
            showError('mobile-number', 'Mobile number is required and should be 10 digits.');
            isValid = false;
        }

        if (country === '') {
            showError('country', 'Please select your country.');
            isValid = false;
        }

        if (streetAddress === '') {
            showError('street-address', 'Street address is required.');
            isValid = false;
        }

        if (city === '' || city.length < 2) {
            showError('city', 'City is required and should be at least 2 characters.');
            isValid = false;
        }

        if (region === '') {
            showError('region', 'State/Province is required.');
            isValid = false;
        }

        const postalPattern = /^[0-9]{5,6}$/;
        if (postalCode === '' || !postalPattern.test(postalCode)) {
            showError('postal-code', 'Please enter a valid postal code.');
            isValid = false;
        }

        if (isValid) {
            alertModal.classList.remove('hidden'); // Show custom alert modal
        }
    });

    // Close the alert modal when the close button is clicked
    closeAlertButton.addEventListener('click', () => {
        alertModal.classList.add('hidden'); // Hide the alert modal
    });

    // Helper functions
    function showError(fieldId, message) {
        const inputField = document.getElementById(fieldId);
        const errorMessage = document.createElement('p');
        errorMessage.classList.add('error-message');
        errorMessage.textContent = message;
        inputField.parentElement.appendChild(errorMessage);
        inputField.classList.add('error');
    }

    function resetErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(message => message.remove());
        const errorFields = document.querySelectorAll('.error');
        errorFields.forEach(field => field.classList.remove('error'));
    }
});
