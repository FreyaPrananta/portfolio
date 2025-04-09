console.log(window.innerWidth);
function openModal() {
    document.getElementById("myModal").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("myModal").style.display = "none";
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
  }

  var digital = document.getElementById("digital");
  var traditional = document.getElementById("traditional");
  var pixel = document.getElementById("pixel");
  var video = document.getElementById("video");
  var threeD = document.getElementById("threeD");
  var website = document.getElementById("website");
  var game = document.getElementById("game");

  function changeDigital() {
    digital.style.display = "block";
    traditional.style.display = "none";
    pixel.style.display = "none";
    video.style.display = "none";
    threeD.style.display = "none";
    website.style.display = "none";
    game.style.display = "none";
  }

  function changeTraditional() {
    digital.style.display = "none";
    traditional.style.display = "block";
    pixel.style.display = "none";
    video.style.display = "none";
    threeD.style.display = "none";
    website.style.display = "none";
    game.style.display = "none";
  }

  function changePixel() {
    digital.style.display = "none";
    traditional.style.display = "none";
    pixel.style.display = "block";
    video.style.display = "none";
    threeD.style.display = "none";
    website.style.display = "none";
    game.style.display = "none";
  }

  function changeVideo() {
    digital.style.display = "none";
    traditional.style.display = "none";
    pixel.style.display = "none";
    video.style.display = "block";
    threeD.style.display = "none";
    website.style.display = "none";
    game.style.display = "none";
  }

  function changeThreeD() {
    digital.style.display = "threeD";
    traditional.style.display = "none";
    pixel.style.display = "none";
    video.style.display = "none";
    threeD.style.display = "block";
    website.style.display = "none";
    game.style.display = "none";
  }

  function changeWebsite() {
    digital.style.display = "none";
    traditional.style.display = "none";
    pixel.style.display = "none";
    video.style.display = "none";
    threeD.style.display = "none";
    website.style.display = "block";
    game.style.display = "none";
  }

  function changeGames() {
    digital.style.display = "none";
    traditional.style.display = "none";
    pixel.style.display = "none";
    video.style.display = "none";
    threeD.style.display = "none";
    website.style.display = "none";
    game.style.display = "block";
  }