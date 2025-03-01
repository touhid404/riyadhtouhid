const colors = [
    { bg: "#FAEBD7", text: "#000000" }, // AntiqueWhite with black text
    { bg: "#001F3F", text: "#FFFFFF" }, // Dark blue with white text
    { bg: "#000000", text: "#FFFFFF" }, // Black with white text
    { bg: "#F4F7FF", text: "#000000" }, // Light bluish with black text
    { bg: "lightgreen", text: "#000000" }, // Light green with black text
    { bg: "lightblue", text: "#000000" }, // Light blue with black text
    { bg: "lightcoral", text: "#000000" }, // Light coral with black text
    { bg: "#E84393", text: "#FFFFFF" }, // Valentine pink with white text
    { bg: "#FBBF24", text: "#000000" }, // Retro yellow (DaisyUI-like)
    { bg: "#F87171", text: "#000000" }, // Retro red
    { bg: "#A78BFA", text: "#FFFFFF" }, // Retro purple
    { bg: "#34D399", text: "#000000" } // Retro green
  ];
  
  let index = 0;
  let lastIndex = -1; 
  let rotation = 0;
  
  function changeBackground(buttonId, imgId) {
    const body = document.getElementById("main-body");
  

    do {
      index = Math.floor(Math.random() * colors.length);
    } while (index === lastIndex);
  
    lastIndex = index; // Store the last used index
  

    body.style.backgroundColor = colors[index].bg;
    body.style.color = colors[index].text;
  
 
    rotation += 60;
    document.getElementById(imgId).style.transform = `rotate(${rotation}deg)`;
  }
  

  document.getElementById("bg-change-btn").addEventListener("click", function () {
    changeBackground("bg-change-btn", "rotateImg");
  });
  
  document.getElementById("bg-change-btn-mobile").addEventListener("click", function () {
    changeBackground("bg-change-btn-mobile", "rotateImg-mobile");
  });
  