const solidColors = document.querySelectorAll(".solid-colors");
const gradientColor = document.querySelectorAll(".gradient-color");
const customColor = document.querySelector("#colorpicker");
const showHexCode = document.querySelector("#hexcode");
const btnApply = document.querySelector("#btn-apply");
let userColor = null;

solidColors.forEach((clr) => {
  clr.addEventListener("click", (e) => {
    solidColors.forEach((color) => {
      gradientColor.forEach((color) => {
        color.classList.remove("selected");
      });
      color.classList.remove("selected");
    });

    clr.classList.add("selected");

    if (e.target.classList[1] === "sc1") {
      userColor = "#18181b";
    } else if (e.target.classList[1] === "sc2") {
      userColor = "#f43f5e";
    } else if (e.target.classList[1] === "sc3") {
      userColor = "#10b981";
    } else if (e.target.classList[1] === "sc4") {
      userColor = "#3b82f6";
    } else {
      userColor = "#8b5cf6";
    }
  });
});

gradientColor.forEach((clr) => {
  clr.addEventListener("click", (e) => {
    gradientColor.forEach((color) => {
      solidColors.forEach((color) => {
        color.classList.remove("selected");
      });
      color.classList.remove("selected");
    });
    clr.classList.add("selected");

    if (e.target.classList[1] === "gc1") {
      userColor =
        "linear-gradient(45deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)";
    } else if (e.target.classList[1] === "gc2") {
      userColor = "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
    } else if (e.target.classList[1] === "gc3") {
      userColor = "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)";
    } else {
      userColor = "linear-gradient(to top, #09203f 0%, #537895 100%)";
    }
  });
});

customColor.addEventListener("input", (e) => {
  solidColors.forEach((clr) => {
    clr.classList.remove("selected");
  });

  gradientColor.forEach((clr) => {
    clr.classList.remove("selected");
  });
  userColor = e.target.value;
  showHexCode.textContent = e.target.value.toUpperCase();
});

btnApply.addEventListener("click", () => {
  document.body.style.background = userColor;
});
