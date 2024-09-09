// Function to scroll to the About Us section
function toAboutUs() {
  //document.getElementById("about-us").scrollIntoView({ behavior: "smooth" });
  const aboutBtn = document.getElementById("about-btn");
  const backBtn = document.getElementById("back-btn");

  aboutBtn.classList = "";
  aboutBtn.innerHTML = "";
  aboutBtn.style.borderRadius = "50%";
  aboutBtn.style.width = "180vw";
  aboutBtn.style.height = "360vh";
  aboutBtn.style.bottom = "-60vh";
  aboutBtn.style.right = "-40vw";
  aboutBtn.style.pointerEvents = "none";

  setTimeout(() => {
    aboutBtn.style.transition = "none";
    backBtn.style.borderRadius = "0px 14px 14px 0px";
    backBtn.style.width = "7vw";
    backBtn.style.height = "4.5vh";
    backBtn.style.top = "3vh";
    backBtn.style.left = "0vw";
    backBtn.style.display = "flex";
    backBtn.style.opacity = "100%";
    backBtn.classList = "small";
    backBtn.innerHTML = "Back";

    document.getElementById("about-us").style.display = "flex";
  }, 1000);

  setTimeout(() => {
    backBtn.style.pointerEvents = "auto";
    backBtn.style.transition = "background-color 0.3s, width 1s ease-in-out, height 1s ease-in-out, border-radius 0.2s ease-in-out, top 1s linear, left 1s linear, opacity 1s ease-in-out";
  }, 1600);
}

function backHome() {
  const aboutBtn = document.getElementById("about-btn");
  const backBtn = document.getElementById("back-btn");

  backBtn.classList = "";
  backBtn.innerHTML = "";
  backBtn.style.borderRadius = "50%";
  backBtn.style.width = "180vw";
  backBtn.style.height = "360vh";
  backBtn.style.top = "-60vh";
  backBtn.style.left = "-40vw";
  backBtn.style.pointerEvents = "none";

  setTimeout(() => {
    document.getElementById("about-us").style.display = "none";
    backBtn.style.transition = "opacity 0.6s ease-in-out";
    backBtn.style.opacity = "0%";
    aboutBtn.style.borderRadius = "14px 0px 0px 14px";
    aboutBtn.style.width = "11vw";
    aboutBtn.style.height = "4.5vh";
    aboutBtn.style.bottom = "3vh";
    aboutBtn.style.right = "0vw";
    aboutBtn.style.display = "flex";
    aboutBtn.classList = "small";
    aboutBtn.innerHTML = "About Us";
  }, 1000);

  setTimeout(() => {
    aboutBtn.style.pointerEvents = "auto";
    aboutBtn.style.transition = "background-color 0.3s, width 1s ease-in-out, height 1s ease-in-out, border-radius 0.2s ease-in-out, bottom 1s linear, right 1s linear";
  }, 1600);
}

// Number of bubbles
const totalBubbles = 8;

// Counter for popped bubbles
let numPoppedBubbles = 0;

// Random number generator helper function
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const bubbleTexts = [
  "Earth is flat",
  "Earth is hollow",
  "Bigfoot is real",
  "Elvis is still alive",
  "Tupac is still alive",
  "The pyramids are made by aliens",
  "Area 51 hides aliens",
  "Jet fuel can't melt steel beams",
  "Birds are government drones",
  "Art is privilege",
  "Tortoises like plastic",
  "5G towers control minds",
  "The Moon is made of cheese",
  "It's healthy to eat avocado",
  "Don't eat avocado!",
  "Recycle plastic bottles!",
  "Recycling creates microplastic"
];

// Loop to create bubbles dynamically
for (let i = 0; i < totalBubbles; i++) {
  createBubble(i);
}

const numPoppedElem = document.getElementById("num-popped");

function createBubble(i) {
  const bubbleWrapper = document.createElement("div");
  bubbleWrapper.classList.add("bubble-wrapper");
  // Create bubble element
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  // Random properties
  const size = random(140, 200) + "px";
  const leftPosition = (100 / totalBubbles) * i + "%";
  const animationDuration = random(12, 32) + "s";

  // Apply styles dynamically
  bubbleWrapper.style.left = leftPosition;
  bubbleWrapper.style.animationDelay = random(-16, 16) + "s";
  bubbleWrapper.style.animationDuration = animationDuration;

  // Apply bubble size
  bubble.style.width = size;
  bubble.style.height = size;
  bubble.innerHTML = bubbleTexts[random(0, bubbleTexts.length - 1)];

  let speechBubble = null
  if (i != 0 && random(0, 2) == 2) {
    speechBubble = document.createElement("div");
    speechBubble.classList.add("speech-bubble");
    speechBubble.innerHTML = "Break me!";
    bubbleWrapper.appendChild(speechBubble);
  }

  // Event listener for popping the bubble
  bubble.addEventListener("click", function () {
    // Apply the pop animation
    bubble.style.animation = "pop 400ms forwards";
    if (speechBubble != null) {
      speechBubble.style.animation = "pop 400ms forwards";
    }

    // Disable pointer events after popping to prevent double-clicking
    bubble.style.pointerEvents = "none";

    // Increment the popped bubble counter
    numPoppedBubbles++;
    numPoppedElem.innerHTML = numPoppedBubbles;
    if (numPoppedBubbles == 3) {
      initializeTypewriter();
    }

    setTimeout(() => {
      bubbleWrapper.style.animation = "none";
      bubbleWrapper.style.bottom = "-220px";
      bubble.style.animation = "none";
      bubble.style.pointerEvents = "initial";

      // Random properties
      const newSize = random(140, 200) + "px";

      // Apply bubble size
      bubble.style.width = newSize;
      bubble.style.height = newSize;
      bubble.innerHTML = bubbleTexts[random(0, bubbleTexts.length - 1)];

      setTimeout(() => {
        bubbleWrapper.style.animation = "floatUp 25s infinite linear";
      }, 400);
    }, 800);
  });

  bubbleWrapper.appendChild(bubble);
  document.querySelector(".gameboard").appendChild(bubbleWrapper);
}

let numBackBubbles = 80;
// Loop to create bubbles dynamically
for (let i = 0; i < numBackBubbles; i++) {
  createBackBubble(i);
}

function createBackBubble(i) {
  const bubbleWrapper = document.createElement("div");
  bubbleWrapper.classList.add("bubble-wrapper");
  bubbleWrapper.classList.add("background");
  // Create bubble element
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  // Random properties
  const size = random(10, 80) + "px";
  const leftPosition = (100 / numBackBubbles) * i + "%";
  const animationDuration = random(12, 32) + "s";

  // Apply styles dynamically
  bubbleWrapper.style.left = leftPosition;
  bubbleWrapper.style.animationDelay = random(-24, 12) + "s";
  bubbleWrapper.style.animationDuration = animationDuration;

  // Apply bubble size
  bubble.style.width = size;
  bubble.style.height = size;

  bubbleWrapper.appendChild(bubble);
  document.querySelector(".gameboard").appendChild(bubbleWrapper);
}

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;  // The array of phrases to type
  this.el = el;              // The HTML element where the text will appear
  this.loopNum = 0;          // Keeps track of which phrase to display
  this.period = parseInt(period, 10) || 2000; // How long to pause between phrases
  this.txt = el.querySelector('.wrap').textContent || '';  // Start with the initial text already present
  this.isDeleting = true;    // Flag to know if we are currently deleting text, first we delete the title
  this.tick();               // Start typing
};

let stopTypewriter = false;

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;  // Find the current phrase in the array
  var fullTxt = this.toRotate[i];  // Get the full phrase

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);  // Delete characters
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);  // Add characters
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';  // Update the displayed text

  var that = this;
  var delta = 80;

  if (this.isDeleting) { delta = 40; }  // Faster when deleting

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;  // Pause after fully typing a phrase
    this.isDeleting = true;  // Start deleting
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;  // Start typing the next phrase
    this.loopNum++;  // Move to the next phrase
    delta = 500;  // Short pause before starting again
  }

  if (i == 0 && this.txt === '') {
    document.getElementById("title").style.fontSize = "4rem";
  }

  if (!(i == this.toRotate.length - 1 && this.isDeleting == true)) {
    setTimeout(function () {
      that.tick();
    }, delta);  // Recursively call `tick` to keep typing
  }
};

function initializeTypewriter() {
  var elements = document.getElementsByClassName('typewrite');  // Find all elements with class "typewrite"
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');  // Get the phrases
    var period = elements[i].getAttribute('data-period');  // Get the typing period
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);  // Create a new TxtType for each element
    }
  }
};
