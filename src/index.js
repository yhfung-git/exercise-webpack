import _ from "lodash";
import "./style.css";
import Forest from "./forest.png";

const component = () => {
  const element = document.createElement("div");

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.classList.add("hello");

  const myPhoto = new Image();
  myPhoto.src = Forest;
  element.appendChild(myPhoto);

  return element;
};

document.body.appendChild(component());
