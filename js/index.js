const form = document.getElementById('reservationForm');
const prenom = document.getElementById('prenom');
const nom = document.getElementById('nom');
const telephone = document.getElementById('telephone');
const nombresDePersonnes = document.getElementById('nombre-personnes');
const date = document.getElementById('date');
const heure = document.getElementById('heure');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    if (errorDisplay) {
        errorDisplay.innerText = message;
    }
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    if (errorDisplay) {
        errorDisplay.innerText = ''; // Corrected property
    }
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateInputs = () => {
    const prenomValue = prenom.value.trim();
    const nomValue = nom.value.trim();
    const telephoneValue = telephone.value.trim();
    const nombreDePersonnesValue = nombresDePersonnes.value.trim();
    const dateValue = date.value.trim();
    const heureValue = heure.value.trim();

    // Validations
    if (prenomValue === '') {
        setError(prenom, 'Entrez votre prénom');
    } else {
        setSuccess(prenom);
    }

    if (nomValue === '') {
        setError(nom, 'Entrez votre nom');
    } else {
        setSuccess(nom);
    }

    if (telephoneValue === '') {
        setError(telephone, 'Entrez votre numéro de téléphone');
    } else {
        setSuccess(telephone);
    }

    if (nombreDePersonnesValue === '') {
        setError(nombresDePersonnes, 'Indiquez le nombre de personnes');
    } else {
        setSuccess(nombresDePersonnes);
    }

    if (dateValue === '') {
        setError(date, 'Choisissez une date');
    } else {
        setSuccess(date);
    }

    if (heureValue === '') {
        setError(heure, 'Choisissez une heure');
    } else {
        setSuccess(heure);
    }
};