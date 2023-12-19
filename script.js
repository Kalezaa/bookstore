//Fade In Left
function fadeElementsOnScroll() {
  var elements = document.querySelectorAll('.reveal-left');

  elements.forEach(function (element) {
    var positionFromTop = element.getBoundingClientRect().top;

    var threshold = window.innerHeight * 0.55;

    if (positionFromTop < threshold) {
      element.style.opacity = 1;
    } else {
      element.style.opacity = 0;
    }

    if (positionFromTop < threshold) {
      element.style.opacity = 1;
      element.style.transform = 'translateX(0rem)';
    } else {
      element.style.opacity = 0;
      element.style.transform = 'translateX(-2rem)';
    }
  });
  
}

    window.addEventListener('scroll', fadeElementsOnScroll);
    fadeElementsOnScroll();

//Fade In Right

function fadeInRight() {
  var elements = document.querySelectorAll('.reveal-right');

  elements.forEach(function (element) {
    var positionFromTop = element.getBoundingClientRect().top;

    var threshold = window.innerHeight * 0.55;

    if (positionFromTop < threshold) {
      element.style.opacity = 1;
    } else {
      element.style.opacity = 0;
    }

    if (positionFromTop < threshold) {
      element.style.opacity = 1;
      element.style.transform = 'translateX(0rem)';
    } else {
      element.style.opacity = 0;
      element.style.transform = 'translateX(2rem)';
    }
  });
}

  window.addEventListener('scroll', fadeInRight);
  fadeInRight();

function fadeInRight() {
  var elements = document.querySelectorAll('.reveal-right');

  elements.forEach(function (element) {
    var positionFromTop = element.getBoundingClientRect().top;

    var threshold = window.innerHeight * 0.55;

    if (positionFromTop < threshold) {
      element.style.opacity = 1;
    } else {
      element.style.opacity = 0;
    }

    if (positionFromTop < threshold) {
      element.style.opacity = 1;
      element.style.transform = 'translateX(0rem)';
    } else {
      element.style.opacity = 0;
      element.style.transform = 'translateX(2rem)';
    }
  });
}

  window.addEventListener('scroll', fadeInRight);
  fadeInRight();

  //Fade In Up
  
  function fadeInUp() {
    var elements = document.querySelectorAll('.reveal-top');
  
    elements.forEach(function (element) {
      var positionFromTop = element.getBoundingClientRect().top;
  
      var threshold = window.innerHeight * 0.75;
  
      if (positionFromTop < threshold) {
        element.style.opacity = 1;
      } else {
        element.style.opacity = 0;
      }
  
      if (positionFromTop < threshold) {
        element.style.opacity = 1;
        element.style.transform = 'translateY(0rem)';
      } else {
        element.style.opacity = 0;
        element.style.transform = 'translateY(2rem)';
      }
    });
  }
  
    window.addEventListener('scroll', fadeInUp);
    fadeInUp();