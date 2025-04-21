document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('screenshotsCarousel');
    const slides = carousel.querySelector('.flex');
    const prevButton = document.getElementById('prevSlide');
    const nextButton = document.getElementById('nextSlide');
    const indicators = document.querySelectorAll('.flex.justify-center.mt-4.gap-2 button');
    
    let currentSlide = 0;
    const totalSlides = 3; // Número fijo de slides que tenemos | Fixed number of slides we have

    // Variables for dragging with the mouse
    // Variables para el arrastre con el ratón
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;

    function updateCarousel() {
        // Update carousel position
        // Actualizar la posición del carrusel
        slides.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        // Update indicators
        // Actualizar los indicadores
        document.querySelectorAll('.flex.justify-center.mt-4.gap-2 button').forEach((indicator, index) => {
            if (index === currentSlide) {
                indicator.classList.remove('bg-gray-600');
                indicator.classList.add('bg-accent');
            } else {
                indicator.classList.remove('bg-accent');
                indicator.classList.add('bg-gray-600');
            }
        });
    }

    // Event listeners for buttons
    // Event listeners para los botones
    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    });

    // Event listeners for indicators
    // Event listeners para los indicadores
    document.querySelectorAll('.flex.justify-center.mt-4.gap-2 button').forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentSlide = index;
            updateCarousel();
        });
    });

    // Mouse dragging functionality
    // Funcionalidad de arrastre con el ratón
    slides.addEventListener('mousedown', (e) => {
        isDragging = true;
        startPos = e.clientX;
        currentTranslate = -currentSlide * 100;
        slides.style.cursor = 'grabbing';
        slides.style.transition = 'none';
    });

    slides.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        
        const currentPosition = e.clientX;
        const diff = ((currentPosition - startPos) / carousel.offsetWidth) * 100;
        const newTranslate = currentTranslate + diff;
        
        // Limit dragging to valid range
        // Limitar el arrastre al rango válido
        if (newTranslate <= 0 && newTranslate >= -((totalSlides - 1) * 100)) {
            slides.style.transform = `translateX(${newTranslate}%)`;
        }
    });

    function handleDragEnd(e) {
        if (!isDragging) return;
        
        isDragging = false;
        slides.style.cursor = 'grab';
        slides.style.transition = 'transform 0.3s ease-out';

        const currentPosition = e.clientX;
        const diff = currentPosition - startPos;
        
        // Determine if the dragging was sufficient to change slide
        // Determinar si el arrastre fue suficiente para cambiar de slide
        if (Math.abs(diff) > carousel.offsetWidth / 4) {
            if (diff > 0 && currentSlide > 0) {
                currentSlide--;
            } else if (diff < 0 && currentSlide < totalSlides - 1) {
                currentSlide++;
            }
        }
        
        updateCarousel();
    }

    slides.addEventListener('mouseup', handleDragEnd);
    slides.addEventListener('mouseleave', handleDragEnd);

    // Prevent default image dragging behavior
    // Prevenir el comportamiento predeterminado de arrastre de imágenes
    slides.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });

    // Auto-play (opcional)
    const autoPlayInterval = setInterval(() => {
        if (!isDragging) {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }
    }, 5000);

    // Stop auto-play when the user interacts with the carousel
    // Detener el auto-play cuando el usuario interactúa con el carrusel
    carousel.addEventListener('mouseenter', () => {
        clearInterval(autoPlayInterval);
    });
}); 
