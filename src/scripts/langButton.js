const langButton = document.getElementById('languageButton');
const langDropdown = document.getElementById('languageDropdown');
const currentLang = document.getElementById('currentLanguage');

langButton.addEventListener('click', () => {
    langDropdown.classList.toggle('hidden');
});

langDropdown.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', (e) => {
        currentLang.textContent = e.target.textContent;
        changeLanguage(e.target.value);
        langDropdown.classList.add('hidden');
    });
});

// Close dropdown when clicking outside
// Cerrar el desplegable al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!langButton.contains(e.target) && !langDropdown.contains(e.target)) {
        langDropdown.classList.add('hidden');
    }
});
