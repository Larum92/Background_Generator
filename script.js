let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let css = document.querySelector("h3");
let body = document.getElementById("gradient");
let randButton = document.getElementById("random");
let defButton = document.getElementById("default");
let setGradient = () => {body.style.background = "linear-gradient(to right, "+ color1.value 
	+", "+ color2.value +")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

let initialGradient = () => {
	css.textContent = body.style.background + ";";
}

initialGradient();

let randomize = () => {
	color1.value = "#" + Math.floor(Math.random()*16777215).toString(16);
	color2.value = "#" + Math.floor(Math.random()*16777215).toString(16);
	setGradient();
}

randButton.addEventListener("click", randomize);

let toDefault = () => {
	color1.value = "#ff0000";
	color2.value = "#ffff00";
	setGradient();
}

defButton.addEventListener("click", toDefault);


