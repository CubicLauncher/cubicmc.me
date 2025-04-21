// Function to change the language
// Función para cambiar el idioma
function changeLanguage(lang) {
    // Save language preference
    // Guardar preferencia de idioma
    localStorage.setItem('preferredLanguage', lang);
    
    // Update HTML lang attribute
    // Actualizar atributo lang del HTML
    document.documentElement.lang = lang;
    
    // Update all translatable elements
    // Actualizar todos los elementos traducibles
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Function to initialize the language
// Función para inicializar el idioma
function initializeLanguage() {
    // Get the user's preferred language or use Spanish by default
    // Obtener el idioma preferido del usuario o usar español por defecto
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'es';
    
    // Configure the language selector
    // Configurar el selector de idioma
    const languageSelector = document.getElementById('languageSelector');
    if (languageSelector) {
        languageSelector.value = preferredLanguage;
        languageSelector.addEventListener('change', (e) => {
            changeLanguage(e.target.value);
        });
    }
    
    // Apply the initial language
    // Aplicar el idioma inicial
    changeLanguage(preferredLanguage);
}

// Initialize when DOM is loaded
// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', initializeLanguage);
