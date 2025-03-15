// APP - 1
document.addEventListener("DOMContentLoaded", function () {
    var carousel = document.querySelector("#carouselExample");
    var nextButton = carousel.querySelector(".carousel-control-next");
    var prevButton = carousel.querySelector(".carousel-control-prev");
    var carouselItems = carousel.querySelectorAll(".carousel-item");
  
    carousel.addEventListener("slid.bs.carousel", function () {
      var activeItem = carousel.querySelector(".carousel-item.active");
      var activeIndex = Array.from(carouselItems).indexOf(activeItem);
  
      if (activeIndex === 0) {
        prevButton.style.display = "none"; // Hide the prev button on first image
      } else {
        prevButton.style.display = "block"; // Show prev button otherwise
      }
  
      if (activeIndex === 2) { // Third image (Index 2 in zero-based index)
        nextButton.style.display = "none"; // Hide next button
        var bsCarousel = bootstrap.Carousel.getInstance(carousel);
        bsCarousel.pause(); // Stop carousel auto-slide
      } else {
        nextButton.style.display = "block"; // Show next button otherwise
      }
    });
  
    // Initially hide prev button on first image load
    prevButton.style.display = "none";
  });
  
  // PRODUCT - 1
  document.addEventListener("DOMContentLoaded", function () {
    var carousel = document.querySelector("#carouselExample2");
    var nextButton = carousel.querySelector(".carousel-control-next");
    var prevButton = carousel.querySelector(".carousel-control-prev");
    var carouselItems = carousel.querySelectorAll(".carousel-item");
  
    carousel.addEventListener("slid.bs.carousel", function () {
      var activeItem = carousel.querySelector(".carousel-item.active");
      var activeIndex = Array.from(carouselItems).indexOf(activeItem);
  
      if (activeIndex === 0) {
        prevButton.style.display = "none"; // Hide the prev button on first image
      } else {
        prevButton.style.display = "block"; // Show prev button otherwise
      }
  
      if (activeIndex === 2) { // Third image (Index 2 in zero-based index)
        nextButton.style.display = "none"; // Hide next button
        var bsCarousel = bootstrap.Carousel.getInstance(carousel);
        bsCarousel.pause(); // Stop carousel auto-slide
      } else {
        nextButton.style.display = "block"; // Show next button otherwise
      }
    });
  
    // Initially hide prev button on first image load
    prevButton.style.display = "none";
  });
  
  // BRANDING - 1
  document.addEventListener("DOMContentLoaded", function () {
    var carousel = document.querySelector("#carouselExample3");
    var nextButton = carousel.querySelector(".carousel-control-next");
    var prevButton = carousel.querySelector(".carousel-control-prev");
    var carouselItems = carousel.querySelectorAll(".carousel-item");
  
    carousel.addEventListener("slid.bs.carousel", function () {
      var activeItem = carousel.querySelector(".carousel-item.active");
      var activeIndex = Array.from(carouselItems).indexOf(activeItem);
  
      if (activeIndex === 0) {
        prevButton.style.display = "none"; // Hide the prev button on first image
      } else {
        prevButton.style.display = "block"; // Show prev button otherwise
      }
  
      if (activeIndex === 2) { // Third image (Index 2 in zero-based index)
        nextButton.style.display = "none"; // Hide next button
        var bsCarousel = bootstrap.Carousel.getInstance(carousel);
        bsCarousel.pause(); // Stop carousel auto-slide
      } else {
        nextButton.style.display = "block"; // Show next button otherwise
      }
    });
  
    // Initially hide prev button on first image load
    prevButton.style.display = "none";
  });
  
  // BOOK-1
  document.addEventListener("DOMContentLoaded", function () {
    var carousel = document.querySelector("#carouselExample4");
    var nextButton = carousel.querySelector(".carousel-control-next");
    var prevButton = carousel.querySelector(".carousel-control-prev");
    var carouselItems = carousel.querySelectorAll(".carousel-item");
  
    carousel.addEventListener("slid.bs.carousel", function () {
      var activeItem = carousel.querySelector(".carousel-item.active");
      var activeIndex = Array.from(carouselItems).indexOf(activeItem);
  
      if (activeIndex === 0) {
        prevButton.style.display = "none"; // Hide the prev button on first image
      } else {
        prevButton.style.display = "block"; // Show prev button otherwise
      }
  
      if (activeIndex === 2) { // Third image (Index 2 in zero-based index)
        nextButton.style.display = "none"; // Hide next button
        var bsCarousel = bootstrap.Carousel.getInstance(carousel);
        bsCarousel.pause(); // Stop carousel auto-slide
      } else {
        nextButton.style.display = "block"; // Show next button otherwise
      }
    });
  
    // Initially hide prev button on first image load
    prevButton.style.display = "none";
  });
  
  // APP - 2
  document.addEventListener("DOMContentLoaded", function () {
    var carousel = document.querySelector("#carouselExample5");
    var nextButton = carousel.querySelector(".carousel-control-next");
    var prevButton = carousel.querySelector(".carousel-control-prev");
    var carouselItems = carousel.querySelectorAll(".carousel-item");
  
    carousel.addEventListener("slid.bs.carousel", function () {
      var activeItem = carousel.querySelector(".carousel-item.active");
      var activeIndex = Array.from(carouselItems).indexOf(activeItem);
  
      if (activeIndex === 0) {
        prevButton.style.display = "none"; // Hide the prev button on first image
      } else {
        prevButton.style.display = "block"; // Show prev button otherwise
      }
  
      if (activeIndex === 2) { // Third image (Index 2 in zero-based index)
        nextButton.style.display = "none"; // Hide next button
        var bsCarousel = bootstrap.Carousel.getInstance(carousel);
        bsCarousel.pause(); // Stop carousel auto-slide
      } else {
        nextButton.style.display = "block"; // Show next button otherwise
      }
    });
  
    // Initially hide prev button on first image load
    prevButton.style.display = "none";
  });
  
  // PRODUCT - 2
  document.addEventListener("DOMContentLoaded", function () {
    var carousel = document.querySelector("#carouselExample6");
    var nextButton = carousel.querySelector(".carousel-control-next");
    var prevButton = carousel.querySelector(".carousel-control-prev");
    var carouselItems = carousel.querySelectorAll(".carousel-item");
  
    carousel.addEventListener("slid.bs.carousel", function () {
      var activeItem = carousel.querySelector(".carousel-item.active");
      var activeIndex = Array.from(carouselItems).indexOf(activeItem);
  
      if (activeIndex === 0) {
        prevButton.style.display = "none"; // Hide the prev button on first image
      } else {
        prevButton.style.display = "block"; // Show prev button otherwise
      }
  
      if (activeIndex === 2) { // Third image (Index 2 in zero-based index)
        nextButton.style.display = "none"; // Hide next button
        var bsCarousel = bootstrap.Carousel.getInstance(carousel);
        bsCarousel.pause(); // Stop carousel auto-slide
      } else {
        nextButton.style.display = "block"; // Show next button otherwise
      }
    });
  
    // Initially hide prev button on first image load
    prevButton.style.display = "none";
  });
  
  // BRANDING - 2
  document.addEventListener("DOMContentLoaded", function () {
    var carousel = document.querySelector("#carouselExample7");
    var nextButton = carousel.querySelector(".carousel-control-next");
    var prevButton = carousel.querySelector(".carousel-control-prev");
    var carouselItems = carousel.querySelectorAll(".carousel-item");
  
    carousel.addEventListener("slid.bs.carousel", function () {
      var activeItem = carousel.querySelector(".carousel-item.active");
      var activeIndex = Array.from(carouselItems).indexOf(activeItem);
  
      if (activeIndex === 0) {
        prevButton.style.display = "none"; // Hide the prev button on first image
      } else {
        prevButton.style.display = "block"; // Show prev button otherwise
      }
  
      if (activeIndex === 2) { // Third image (Index 2 in zero-based index)
        nextButton.style.display = "none"; // Hide next button
        var bsCarousel = bootstrap.Carousel.getInstance(carousel);
        bsCarousel.pause(); // Stop carousel auto-slide
      } else {
        nextButton.style.display = "block"; // Show next button otherwise
      }
    });
  
    // Initially hide prev button on first image load
    prevButton.style.display = "none";
  });
  
  // BOOK - 2
  document.addEventListener("DOMContentLoaded", function () {
    var carousel = document.querySelector("#carouselExample8");
    var nextButton = carousel.querySelector(".carousel-control-next");
    var prevButton = carousel.querySelector(".carousel-control-prev");
    var carouselItems = carousel.querySelectorAll(".carousel-item");
  
    carousel.addEventListener("slid.bs.carousel", function () {
      var activeItem = carousel.querySelector(".carousel-item.active");
      var activeIndex = Array.from(carouselItems).indexOf(activeItem);
  
      if (activeIndex === 0) {
        prevButton.style.display = "none"; // Hide the prev button on first image
      } else {
        prevButton.style.display = "block"; // Show prev button otherwise
      }
  
      if (activeIndex === 2) { // Third image (Index 2 in zero-based index)
        nextButton.style.display = "none"; // Hide next button
        var bsCarousel = bootstrap.Carousel.getInstance(carousel);
        bsCarousel.pause(); // Stop carousel auto-slide
      } else {
        nextButton.style.display = "block"; // Show next button otherwise
      }
    });
  
    // Initially hide prev button on first image load
    prevButton.style.display = "none";
  });
  
  // APP - 3
  document.addEventListener("DOMContentLoaded", function () {
    var carousel = document.querySelector("#carouselExample9");
    var nextButton = carousel.querySelector(".carousel-control-next");
    var prevButton = carousel.querySelector(".carousel-control-prev");
    var carouselItems = carousel.querySelectorAll(".carousel-item");
  
    carousel.addEventListener("slid.bs.carousel", function () {
      var activeItem = carousel.querySelector(".carousel-item.active");
      var activeIndex = Array.from(carouselItems).indexOf(activeItem);
  
      if (activeIndex === 0) {
        prevButton.style.display = "none"; // Hide the prev button on first image
      } else {
        prevButton.style.display = "block"; // Show prev button otherwise
      }
  
      if (activeIndex === 2) { // Third image (Index 2 in zero-based index)
        nextButton.style.display = "none"; // Hide next button
        var bsCarousel = bootstrap.Carousel.getInstance(carousel);
        bsCarousel.pause(); // Stop carousel auto-slide
      } else {
        nextButton.style.display = "block"; // Show next button otherwise
      }
    });
  
    // Initially hide prev button on first image load
    prevButton.style.display = "none";
  });
  
  // PRODUCT - 3
  document.addEventListener("DOMContentLoaded", function () {
    var carousel = document.querySelector("#carouselExample10");
    var nextButton = carousel.querySelector(".carousel-control-next");
    var prevButton = carousel.querySelector(".carousel-control-prev");
    var carouselItems = carousel.querySelectorAll(".carousel-item");
  
    carousel.addEventListener("slid.bs.carousel", function () {
      var activeItem = carousel.querySelector(".carousel-item.active");
      var activeIndex = Array.from(carouselItems).indexOf(activeItem);
  
      if (activeIndex === 0) {
        prevButton.style.display = "none"; // Hide the prev button on first image
      } else {
        prevButton.style.display = "block"; // Show prev button otherwise
      }
  
      if (activeIndex === 2) { // Third image (Index 2 in zero-based index)
        nextButton.style.display = "none"; // Hide next button
        var bsCarousel = bootstrap.Carousel.getInstance(carousel);
        bsCarousel.pause(); // Stop carousel auto-slide
      } else {
        nextButton.style.display = "block"; // Show next button otherwise
      }
    });
  
    // Initially hide prev button on first image load
    prevButton.style.display = "none";
  });
  
  // BRANDING - 3
  document.addEventListener("DOMContentLoaded", function () {
    var carousel = document.querySelector("#carouselExample11");
    var nextButton = carousel.querySelector(".carousel-control-next");
    var prevButton = carousel.querySelector(".carousel-control-prev");
    var carouselItems = carousel.querySelectorAll(".carousel-item");
  
    carousel.addEventListener("slid.bs.carousel", function () {
      var activeItem = carousel.querySelector(".carousel-item.active");
      var activeIndex = Array.from(carouselItems).indexOf(activeItem);
  
      if (activeIndex === 0) {
        prevButton.style.display = "none"; // Hide the prev button on first image
      } else {
        prevButton.style.display = "block"; // Show prev button otherwise
      }
  
      if (activeIndex === 2) { // Third image (Index 2 in zero-based index)
        nextButton.style.display = "none"; // Hide next button
        var bsCarousel = bootstrap.Carousel.getInstance(carousel);
        bsCarousel.pause(); // Stop carousel auto-slide
      } else {
        nextButton.style.display = "block"; // Show next button otherwise
      }
    });
  
    // Initially hide prev button on first image load
    prevButton.style.display = "none";
  });
  
  // BOOK - 3
  document.addEventListener("DOMContentLoaded", function () {
    var carousel = document.querySelector("#carouselExample12");
    var nextButton = carousel.querySelector(".carousel-control-next");
    var prevButton = carousel.querySelector(".carousel-control-prev");
    var carouselItems = carousel.querySelectorAll(".carousel-item");
  
    carousel.addEventListener("slid.bs.carousel", function () {
      var activeItem = carousel.querySelector(".carousel-item.active");
      var activeIndex = Array.from(carouselItems).indexOf(activeItem);
  
      if (activeIndex === 0) {
        prevButton.style.display = "none"; // Hide the prev button on first image
      } else {
        prevButton.style.display = "block"; // Show prev button otherwise
      }
  
      if (activeIndex === 2) { // Third image (Index 2 in zero-based index)
        nextButton.style.display = "none"; // Hide next button
        var bsCarousel = bootstrap.Carousel.getInstance(carousel);
        bsCarousel.pause(); // Stop carousel auto-slide
      } else {
        nextButton.style.display = "block"; // Show next button otherwise
      }
    });
  
    // Initially hide prev button on first image load
    prevButton.style.display = "none";
  });