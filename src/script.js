document.addEventListener('DOMContentLoaded', () => {
    const passwordToggle = document.querySelector('.password-toggle');
    const passwordInput = document.getElementById('password');

    if (passwordToggle && passwordInput) {
        passwordToggle.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            passwordToggle.innerHTML = type === 'password' ? '👁️' : '🙈';
            passwordToggle.setAttribute('aria-label', type === 'password' ? 'Toggle password visibility' : 'Hide password');
        });
    }
});

