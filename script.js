document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggle-theme");
    const body = document.body;

    const sunIcon = "🌞";   
    const moonIcon = "🌙";

    const updateThemeIcon = () => {
        if (body.classList.contains("dark-theme")) {
            toggleBtn.innerHTML = sunIcon;
        } else {
            toggleBtn.innerHTML = moonIcon;
        }
        toggleBtn.style.transition = "transform 0.5s ease";
        toggleBtn.style.transform = "rotate(360deg)";
        setTimeout(() => {
            toggleBtn.style.transform = "";
        }, 500);
    };

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-theme");
    }

    updateThemeIcon();

    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-theme");

        const isDark = body.classList.contains("dark-theme");
        localStorage.setItem("theme", isDark ? "dark" : "light");

        updateThemeIcon();
    });
});
const recImg = document.getElementById('rec-img');
const modal = document.getElementById('rec-modal');
const modalImg = document.getElementById('modal-img');
const modalClose = document.getElementsByClassName('modal-close')[0];

recImg.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
}

modalClose.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

const photoTrack = document.querySelector('.photo-track');
const photoSlides = document.querySelectorAll('.photo-slide');
const photoPrev = document.querySelector('.photo-prev');
const photoNext = document.querySelector('.photo-next');
const photoDotsContainer = document.querySelector('.photo-dots');

let photoIndex = 0;

photoSlides.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToPhoto(i));
    photoDotsContainer.appendChild(dot);
});

const photoDots = document.querySelectorAll('.photo-dots .dot');

function updatePhotoSlider() {
    photoTrack.style.transform = `translateX(-${photoIndex * 100}%)`;
    photoDots.forEach((dot, i) => dot.classList.toggle('active', i === photoIndex));
}

function nextPhoto() {
    photoIndex = (photoIndex + 1) % photoSlides.length;
    updatePhotoSlider();
}

function prevPhoto() {
    photoIndex = (photoIndex - 1 + photoSlides.length) % photoSlides.length;
    updatePhotoSlider();
}

function goToPhoto(n) {
    photoIndex = n;
    updatePhotoSlider();
}

photoNext.addEventListener('click', nextPhoto);
photoPrev.addEventListener('click', prevPhoto);

setInterval(nextPhoto, 6000);