document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLangButton = document.getElementById('mobileLangButton');
    const mobileLangDropdown = document.getElementById('mobileLangDropdown');
    const mobileCurrentLanguage = document.getElementById('mobileCurrentLanguage');

    // Toggle mobile menu
    //Alternar menú móvil
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Toggle mobile language dropdown
    // Activar el menú desplegable de idiomas para móviles
    mobileLangButton.addEventListener('click', () => {
        mobileLangDropdown.classList.toggle('hidden');
    });

    // Handle mobile language selection
    // Selección del idioma del móvil
    mobileLangDropdown.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            mobileCurrentLanguage.textContent = e.target.textContent;
            currentLanguage.textContent = e.target.textContent; // Update desktop version too | // Actualizar también la versión de escritorio
            changeLanguage(e.target.value);
            mobileLangDropdown.classList.add('hidden');
            mobileMenu.classList.add('hidden');
        });
    });

    // Close mobile menu when clicking outside
    // Cerrar el menú móvil al hacer clic fuera
    document.addEventListener('click', (e) => {
        if (!mobileMenuButton.contains(e.target) && 
            !mobileMenu.contains(e.target)) {
            mobileMenu.classList.add('hidden');
        }
    });

    // Close mobile language dropdown when clicking outside
    // Cerrar el desplegable de idioma del móvil al pulsar fuera
    document.addEventListener('click', (e) => {
        if (!mobileLangButton.contains(e.target) && 
            !mobileLangDropdown.contains(e.target)) {
            mobileLangDropdown.classList.add('hidden');
        }
    });
}); 
