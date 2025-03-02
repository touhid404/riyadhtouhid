const colors = [
  { bg: "#2B303B", text: "#F4F7FF" }, // Dark Dim
  { bg: "#EAE3CD", text: "#7A5500" }, // Retro
  { bg: "#FBF2F7", text: "#E75480" }, // Valentine
  { bg: "#F4F7FF", text: "#374151" }, // Default (unchanged)
];




let index = 0; // Start from the first color
let rotation = 0;

function changeBackground(imgId) {
  const body = document.getElementById("main-body");

  // Set new background and text color
  body.style.backgroundColor = colors[index].bg;
  body.style.color = colors[index].text;

  // Rotate the image
  rotation += 60;
  document.getElementById(imgId).style.transform = `rotate(${rotation}deg)`;

  // Move to the next color in sequence
  index = (index + 1) % colors.length; // Loop back to the first when reaching the end
}


  document.getElementById("bg-change-btn").addEventListener("click", function () {
    changeBackground("rotateImg");
  });
  
  document.getElementById("bg-change-btn-mobile").addEventListener("click", function () {
    changeBackground("rotateImg-mobile");
  });
  