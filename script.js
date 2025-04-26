function plusSlides(n,containerId) {
    const container = document.getElementById(containerId)
    const slides = container.getElementsByClassName("cars-slide");
    let currentSlide = Array.from(slides).findIndex(slide =>
        slide.classList.contains("active"));

        slides[currentSlide].classList.remove("active");

        let newSlide = currentSlide + n;
        if (newSlide >= slides.length) newslide = 0;
        if (newSlide < 0) newSlide = slides.length - 1;

        slides[newSlide].classList.add("active");
}