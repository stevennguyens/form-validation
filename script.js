const form = document.getElementById('form');

const email = document.getElementById('email');
const emailError = document.querySelector('#email + span.error');

const country = document.getElementById('country');
const countryError = document.querySelector('#country + span.error');

const zipcode = document.getElementById('zipcode');
const zipcodeError = document.querySelector('#zipcode + span.error');

const password = document.getElementById('password');
const passwordError = document.querySelector('#password + span.error');

const passwordCon = document.getElementById('password-con');


form.addEventListener('submit', (e) => {
    if (!email.validity.valid) {
        showError(email, emailError);
        e.preventDefault();
    } else {
        emailError.textContent = '';
    }

    if (!country.validity.valid) {
        showError(country, countryError);
        e.preventDefault();
    } else {
        countryError.textContent = '';
    }

    if (!zipcode.validity.valid) {
        showError(zipcode, zipcodeError);
        e.preventDefault();
    } else {
        zipcodeError.textContent = '';
    }

    if (!password.validity.valid) {
        showError(password, passwordError);
        e.preventDefault();
    } else if (!(passwordCon.validity.valid) || (password.value !== passwordCon.value)) {
        passwordError.textContent = `Passwords do not match`
        e.preventDefault();
    } else {
        passwordError.textContent = '';
    }
})

function showError(e, err) {
    if (e.validity.valueMissing) {
        err.textContent = `Enter ${e.id}`;
    } else if (e.validity.typeMismatch) {
        err.textContent = `This is not a(n) ${e.id}`
    } else if (e.validity.tooShort || e.validity.tooLong) {
        if (e.validity.tooShort && e.validity.tooLong) {
            err.textContent = `Your ${e.id} should be ${e.minLength} characters long`
        } else {
            err.textContent = `Your ${e.id} should be between ${e.minLength} and ${e.maxLength} characters long`
        }
    }
    err.className = 'error'
}

