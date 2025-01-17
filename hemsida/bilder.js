const slides = document.querySelectorAll(".slide");
let slideIndex = 0;
const slideSound = document.getElementById("slideSound");

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){

    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
    }

}

function playSound() {
    slideSound.currentTime = 0; // Reset sound to the beginning
    slideSound.play(); // Play the sound
}

function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }  
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
    playSound();
}
function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

document.querySelector(".prev").addEventListener("click", prevSlide);
document.querySelector(".next").addEventListener("click", nextSlide);