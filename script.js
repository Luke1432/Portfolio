// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal functionality for project details
const modal = document.getElementById('projectModal');
const modalTrigger = document.querySelector('.modal-trigger');
const closeModal = document.querySelector('.close');

modalTrigger.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside of the modal content
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Optional: If you want to add more interactivity, like clicking to flip.
const flashcards = document.querySelectorAll('.flashcard');

flashcards.forEach(flashcard => {
    flashcard.addEventListener('click', () => {
        flashcard.classList.toggle('flipped');
    });
});
