const colors = [
  { bg: "#1E40AF", text: "#FFFFFF" }, // Dark Navy Blue
  { bg: "#93C5FD", text: "#000000" }, // Light Navy Blue
  { bg: "#FEF3C7", text: "#000000" }, // Even Lighter Retro Yellow
  { bg: "#FECACA", text: "#000000" }, // Even Lighter Retro Red
  { bg: "#DDD6FE", text: "#000000" }, // Even Lighter Retro Purple
  { bg: "#F4F7FF", text: "#374151" }, // Default (unchanged)
];

// const colors = [
//   { bg: "#FEF3C7", text: "#000000" }, // Even Lighter Retro Yellow
//   { bg: "#FECACA", text: "#000000" }, // Even Lighter Retro Red
//   { bg: "#DDD6FE", text: "#000000" }, // Even Lighter Retro Purple
//   { bg: "#F4F7FF", text: "#374151" }, // Default (unchanged)
// ];


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
  