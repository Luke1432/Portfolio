const slides = document.querySelectorAll(".slider .slide");
const battleshipLink=document.querySelector('.battleship-link');
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[index].classList.add("displaySlide");
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function pauseSlider() {
    clearInterval(intervalId);
}

function resumeSlider() {
    intervalId = setInterval(nextSlide, 5000);
}

battleshipLink.addEventListener("click", () => {
    window.location.href = "./BattleShipWebpage/battleship.html";
});

homePageButton.addEventListener("click", () => {
    window.location.href = "../index.html";
});

document.querySelector('.prev').addEventListener('click', pauseSlider);
document.querySelector('.next').addEventListener('click', pauseSlider);
document.querySelector('.prev').addEventListener('click', resumeSlider);
document.querySelector('.next').addEventListener('click', resumeSlider);

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
}

window.onload = () => showSection('about');