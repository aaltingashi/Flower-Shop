document.addEventListener("DOMContentLoaded", function() {
    const prevButton = document.querySelector(".prev-arrow");
    const nextButton = document.querySelector(".next-arrow");
    const slider = document.querySelector(".slider");
    const slides = Array.from(document.querySelectorAll(".slide"));
    let slideWidth = slides[0].offsetWidth / 6; // Adjust slide width here
    let currentIndex = 1; // Start with the first slide (index 0) at the beginning

    // Function to move to the next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    // Function to move to the previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    }

    // Function to update the slider
function updateSlider() {
    slides.forEach((slide, index) => {
        let offset = (index - currentIndex) * slideWidth;
        if (index < currentIndex) {
            offset -= slideWidth / 2; // Move the slide to the left
        } else if (index > currentIndex) {
            offset += slideWidth / 2; // Move the slide to the right
        }
        let scale = (index === currentIndex) ? 1 : 0.8; // Change scale here
        let opacity = (index === currentIndex) ? 1 : 0.6; // Change opacity here
        slide.style.transform = `translateX(${offset}px) scale(${scale})`;
        slide.style.opacity = opacity;
        slide.style.zIndex = `${slides.length - Math.abs(index - currentIndex)}`;
    });
}

    // Event listeners for navigation arrows
    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);

    // Initial update of the slider
    updateSlider();
});
