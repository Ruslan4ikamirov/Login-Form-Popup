const password = document.getElementById('password');
const message = document.getElementById('message');
const strength = document.getElementById('strength');

password.addEventListener('input', () => {
    if (password.value.length > 0) {
        message.style.display = 'block';
        if (password.value.length <= 4) {
            strength.innerHTML = 'weak';
            password.style.borderColor = '#ff5925';
            message.style.color = '#ff5925';
        }
        else if (password.value.length <= 8) {
            strength.innerHTML = 'medium';
            password.style.borderColor = 'yellow';
            message.style.color = 'yellow';
        }
        else if (password.value.length >= 12) {
            strength.innerHTML = 'strong';
            password.style.borderColor = '#26d730';
            message.style.color = '#26d730';
        }
    }
    if (password.value.length === 0) {
        message.style.display = 'none';
        password.style.borderColor = '#ccc';
        message.style.color = '#fff';
    }
});

const eyeIcon = document.querySelector('.eye i');
const submit = document.querySelector('.button-field button');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const popup = document.querySelector('.popup');

eyeIcon.addEventListener('click', function() {
    if (password.type === 'password') {
        password.type = 'text';
        eyeIcon.classList.toggle('fa-eye');
    } else {
        password.type = 'password';
        eyeIcon.classList.toggle('fa-eye');
    }
});

const nameRequired = document.querySelector('.name-field span');
const surnameRequired = document.querySelector('.surname-field span');
const passwordRequired = document.querySelector('.required');
const inputBox = document.querySelector('.input-box');
const okButton = document.querySelector('.popup button');
const container = document.querySelector('.container');

name.addEventListener('input', () => {
    if (name.value.length > 0) {
        nameRequired.style.display = 'none';
    }
});

surname.addEventListener('input', () => {
    if (surname.value.length > 0) {
        surnameRequired.style.display = 'none';
    }
});

password.addEventListener('input', () => {
    if (password.value.length > 0) {
        passwordRequired.style.display = 'none';
    }
});

submit.addEventListener('click', () => {
    if (name.value.length === 0) {
        nameRequired.style.display = 'inline';
    }
    if (surname.value.length === 0) {
        surnameRequired.style.display = 'inline';
    }
    if (password.value.length === 0) {
        passwordRequired.style.display = 'inline';
    }
    if (name.value.length > 0 && surname.value.length > 0 && password.value.length > 0) {
        inputBox.style.display = 'none';
        popup.classList.add('open-popup');
    }
});

okButton.addEventListener('click', () => {
    popup.classList.remove('open-popup');
});






