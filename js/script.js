// Interatividade via JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formColaboracao');

    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Obrigado pela colaboração! Sua proposta de doação digital foi enviada.');
            form.reset();
        });
    }
});