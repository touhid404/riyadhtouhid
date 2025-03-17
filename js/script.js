

const colors = [
  { bg: "#2B303B", text: "#F4F7FF" }, // Dark Dim
  { bg: "#EAE3CD", text: "#7A5500" }, // Retro
  { bg: "#FBF2F7", text: "#E75480" }, // Valentine
  { bg: "#F4F7FF", text: "#374151" }, // Default
];

let index = localStorage.getItem("themeIndex") 
  ? parseInt(localStorage.getItem("themeIndex")) 
  : 0;
let rotation = localStorage.getItem("rotation") 
  ? parseInt(localStorage.getItem("rotation")) 
  : 0;

function applyTheme() {
  const body = document.getElementById("main-body");
  if (body) {
    body.style.backgroundColor = colors[index].bg;
    body.style.color = colors[index].text;
  }
}

function changeBackground(imgId) {
  const body = document.getElementById("main-body");

  
  index = (index + 1) % colors.length; 


  body.style.backgroundColor = colors[index].bg;
  body.style.color = colors[index].text;

  // Rotate the image
  rotation += 60;
  document.getElementById(imgId).style.transform = `rotate(${rotation}deg)`;

  // Store the theme and rotation in localStorage
  localStorage.setItem("themeIndex", index);
  localStorage.setItem("rotation", rotation);
}

// Apply theme when the page loads
document.addEventListener("DOMContentLoaded", () => {
  applyTheme();
});

// Event listeners for buttons
document.getElementById("bg-change-btn").addEventListener("click", function () {
  changeBackground("rotateImg");
});


document.getElementById("bg-change-btn-mobile").addEventListener("click", function () {
  changeBackground("rotateImg-mobile");
});
