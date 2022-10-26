const radioButton = document.querySelectorAll(`input[name="direction"]`);
const colorButton1 = document.querySelector("#color1");
const colorButton2 = document.querySelector("#color2");
const gradient = document.querySelector("section");

let direction = " to bottom";
let color1 = "purple";
let color2 = "white";

// const cssText = document.querySelector("#cssText");

changeColor = () => {
    if (color1 != "undefined") {
        color1 = colorButton1.value;
    }
    if (color2 != "undefined"){
        color2 = colorButton2.value;
    }  
    changeGradient();
}

// on change switch colors direction
radioButton.forEach((button) => {
    button.addEventListener("change", function() {
        if (button.id != "center") {
            direction = `to ${button.id}`;
            changeGradient();
        }     
      });
});

//switching liner gradient 
changeGradient = () => {
    gradient.style.backgroundImage = `linear-gradient(${direction},${color1},${color2})`;
    changeCSSText();
}

//changing css
changeCSSText = () => {
    cssText.textContent = `CSS: linear-gradient(${direction}, ${color2}, ${color1})`;
}

colorButton1.addEventListener("change", changeColor);
colorButton2.addEventListener("change", changeColor);