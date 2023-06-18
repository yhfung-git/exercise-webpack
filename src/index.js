// Exercise 3
import run from "./app/app";
import AlertService from "./app/alert.service";
import ComponentService from "./app/component.service";
import "./main.scss";
import webpackImg from "./assets/webpack.svg";

const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService);

const image = document.getElementById("webpackImg");
image.src = webpackImg;
image.alt = "webpack image";

// " Exercise 2 "

// import "./styles/joke.scss";
// import laughing from "./assets/laughing.svg";
// import generateJoke from "./generateJoke";

// const laughImg = document.getElementById("laughImg");
// laughImg.src = laughing;
// laughImg.alt = "laughing";

// const jokeBtn = document.getElementById("jokeBtn");
// jokeBtn.addEventListener("click", generateJoke);

// generateJoke();

// " Exercise 1 "

// const getComponent = async () => {
//   const element = document.createElement("div");
//   const { default: _ } = await import("lodash");

//   element.innerHTML = _.join(["Hello", "webpack"], " ");

//   return element;
// };

// getComponent().then((component) => {
//   document.body.appendChild(component);
// });
