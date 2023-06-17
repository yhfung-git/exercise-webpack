import "./styles/main.scss";
import laughing from "./assets/laughing.svg";
import generateJoke from "./generateJoke";

const laughImg = document.getElementById("laughImg");
laughImg.src = laughing;
laughImg.alt = "laughing";

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click", generateJoke);

generateJoke();

// const getComponent = async () => {
//   const element = document.createElement("div");
//   const { default: _ } = await import("lodash");

//   element.innerHTML = _.join(["Hello", "webpack"], " ");

//   return element;
// };

// getComponent().then((component) => {
//   document.body.appendChild(component);
// });
