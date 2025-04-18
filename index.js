window.onload=function(){
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.slide');
    let index = 0;
  
    function showNextSlide() {
      slides[index].style.display = "none"; // Hide the current slide
      index = (index + 1) % slides.length; // Move to the next slide (or loop back to the first)
      slides[index].style.display = "flex"; // Show the next slide
    }
  
    // Ensure only the first slide is visible initially
    slides.forEach((slide, i) => {
      slide.style.display = i === 0 ? "flex" : "none";
    });
  
    // Automatically change slides every 3 seconds
    setInterval(showNextSlide, 3000);
  });
  document.querySelector('.menu-item.dropdown').addEventListener('click', function (e) {
    const dropdownList = this.querySelector('.dropdown-list');
    dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
    e.preventDefault(); // Prevent link default behavior
  });
}