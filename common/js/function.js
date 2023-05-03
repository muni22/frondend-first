
// Nav-left sp handler
const navLeft = document.getElementById('nav-left');
const navModalLeft = document.querySelector('.modal-left');

const navLeftSmartPhone = document.querySelector('.nav-left-sp');
navLeftSmartPhone.addEventListener("click", () => {
  navModalLeft.classList.remove("none");
  navLeft.style.transform = "translateX(0)";
  navLeft.style.transition = "all 0.6s ease";
});

navModalLeft.addEventListener("click", () => {
  navModalLeft.classList.add("none");
  navLeft.style.transform = "translateX(-18rem)";
  navLeft.style.transition = "all 0.6s ease";
});

// Nav-right sp handler
const navRight = document.getElementById('nav-right');
const navFooter = document.getElementById('nav-footer');
const navModalRight = document.querySelector('.modal-right');


const navRightSmartPhone = document.querySelector('.nav-right-sp .button');
navRightSmartPhone.addEventListener("click", () => {
  navModalRight.classList.remove("none");
  navFooter.style.transform = "translateX(0)";
  navFooter.style.transition = "all 0.6s ease";
  navRight.style.transform = "translateX(0)";
  navRight.style.transition = "all 0.6s ease";
});
navModalRight.addEventListener("click", () => {
  navModalRight.classList.add("none");
  navFooter.style.transform = "translateX(18rem)";
  navFooter.style.transition = "all 0.6s ease";
  navRight.style.transform = "translateX(18rem)";
  navRight.style.transition = "all 0.6s ease";
});

// Button click handler
const bar = document.getElementById("bar");
const barButtons = bar.querySelectorAll("a");
for ( let barButton of barButtons) {
  barButton.addEventListener("click", () => {
    const activeButton = bar.querySelector(".active");
    barButton.classList.add("active");
    activeButton.classList.remove("active");
  })
}

const statusBox = document.getElementById("status");
const statusButtons = statusBox.querySelectorAll("button");
for ( let statusButton of statusButtons) {
  statusButton.addEventListener("click", () => {
    const activeButton = statusBox.querySelector(".active");
    statusButton.classList.add("active");
    activeButton.classList.remove("active");
  })
}

// Background handler
particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 600,
        "density": {
          "enable": true,
          "value_area": 5000
        }
      },
      "color": {
        "value": "#03dac6"
      },
      "shape": {
        "type": "star",
        "stroke": {
          "width": 0,
          "color": "#ff0266"
        },
        "polygon": {
          "nb_sides": 5
        },
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 30,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#03dac6",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
    //   "events": {
    //     "onhover": {
    //       "enable": true,
    //       "mode": "repulse"
    //     },
    //     "onclick": {
    //       "enable": true,
    //       "mode": "push"
    //     },
    //     "resize": true
    //   },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 0.4,
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
  }
);