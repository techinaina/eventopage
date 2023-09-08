function openRegistrationForm(eventId) {
    const registrationForm = document.getElementById(eventId + '-registration');
    if (registrationForm.style.display === 'none' || registrationForm.style.display === '') {
        registrationForm.style.display = 'block';
    } else {
        registrationForm.style.display = 'none';
    }
}
